//usr/bin/env go run "$0" "$@"; exit "$?"

package main

import (
	"bytes"
	"fmt"
	"io"
	"log"
	"os"
	"path/filepath"
	"regexp"
	"strings"
	"time"
)

var (
	skipFiles = map[string]bool{
		// Handle these by manual copy.
		"assets":    true,
		".DS_Store": true,
	}

	try = false
)

/* TODO(bep)

layouts in _index.md

Dates:

published: 'Wednesday, December 2nd, 2015'
modified: Wednesday, December 2nd, 2015


*/

type mover struct {
	fromDir string
	toDir   string
}

func main() {
	pwd, err := os.Getwd()
	if err != nil {
		log.Fatal(err)
	}

	root := filepath.Join(pwd, "../../..") // TODO(bep) this works as a script.
	fromDir := filepath.Join(root, "content_old", "docs")
	toDir := filepath.Join(root, "content")

	m := &mover{fromDir: fromDir, toDir: toDir}

	if err := m.move(); err != nil {
		log.Fatal(err)
	}

}

func (m *mover) move() error {
	fmt.Println("Move Content from", m.fromDir, "to", m.toDir)

	counter := 0

	return filepath.Walk(m.fromDir, func(path string, info os.FileInfo, err error) error {
		// TODO(bep) symbolic links

		if skipFiles[info.Name()] {
			fmt.Println("Skip", info.Name())
			if info.IsDir() {
				return filepath.SkipDir
			}
			return nil
		}

		if info.Mode().IsRegular() {
			counter++
			if try && counter > 5 {
				return filepath.SkipDir
			}
			return m.handleFile(path, info)

		}

		return nil
	})

}

func (m *mover) targetFilename(sourceFilename string) string {
	// sourceFilename: /path/docs/some-path/file.md"

	// Rules:
	// * We remove the "/docs" prefix
	// * Rename index.md to _index.md
	filename := filepath.Join(m.toDir, strings.TrimPrefix(sourceFilename, m.fromDir))
	filename = strings.Replace(filename, "index.md", "_index.md", 1)

	return filename
}

func (m *mover) handleFile(path string, info os.FileInfo) error {
	sourceFilename := path
	targetFilename := m.targetFilename(sourceFilename)
	targetDir := filepath.Dir(targetFilename)

	err := os.MkdirAll(targetDir, os.FileMode(0755))
	if err != nil {
		return err
	}

	in, err := os.Open(sourceFilename)
	if err != nil {
		return err
	}
	defer in.Close()

	out, err := os.OpenFile(targetFilename, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, info.Mode())
	if err != nil {
		return err
	}
	defer out.Close()

	var buff bytes.Buffer
	if _, err = io.Copy(&buff, in); err != nil {
		return err
	}

	var r io.Reader

	fixed, err := fixContent(path, buff.String())
	if err != nil {
		fmt.Printf("%s\t%s\n", path, err)
		r = &buff
	} else {
		r = strings.NewReader(fixed)
	}

	if _, err = io.Copy(out, r); err != nil {
		return err
	}

	return nil
}

type frontmatterAddon struct {
	weight      int
	icon        string
	short_title string
}

var (
	dateRe   = regexp.MustCompile("(published|modified): '?(.*)'?")
	ndRe     = regexp.MustCompile("(\\d+)(th|nd|st|rd)")
	commaRe1 = regexp.MustCompile(`([0-9])\s([0-9])`)
	commaRe2 = regexp.MustCompile(`([a-zA-Z])\s([a-zA-Z])`)

	frontmatterRe = regexp.MustCompile(`(?s)---
(.*)
---\n?(.*)\n?`)

	// We will add the "essential" category and some other metadata needed for the front page.
	fundamentalPages = map[string]frontmatterAddon{
		"getting-started.md":       frontmatterAddon{10, "book", "Getting Started"},
		"quick-answers/index.md":   frontmatterAddon{20, "bolt", "Quick Answers"},
		"platform/index.md":        frontmatterAddon{30, "cube", "Linode Platform"},
		"websites/index.md":        frontmatterAddon{40, "laptop", "Websites"},
		"web-servers/index.md":     frontmatterAddon{50, "globe", "Web Servers"},
		"networking/index.md":      frontmatterAddon{60, "sitemap", "IPs, Networking & Domains"},
		"security/index.md":        frontmatterAddon{70, "lock", "Security, Upgrades & Backups"},
		"email/index.md":           frontmatterAddon{80, "envelope", "Email"},
		"databases/index.md":       frontmatterAddon{90, "database", "Databases"},
		"uptime/index.md":          frontmatterAddon{100, "bar-chart-o", "Uptime & Analytics"},
		"applications/index.md":    frontmatterAddon{110, "cogs", "Applications"},
		"game-servers/index.md":    frontmatterAddon{120, "gamepad", "Game Servers"},
		"development/index.md":     frontmatterAddon{130, "code", "Development"},
		"troubleshooting/index.md": frontmatterAddon{140, "question-circle", "Troubleshooting"},
		"tools-reference/index.md": frontmatterAddon{150, "wrench", "Tools & Reference"},
	}
)

func addToFrontpage(src string, addon frontmatterAddon) string {
	addition := fmt.Sprintf(`show_on_frontpage: true
title_short: %q
weight: %d
icon: %q`, addon.short_title, addon.weight, addon.icon)

	replaced := frontmatterRe.ReplaceAllString(src, fmt.Sprintf(`---
$1
%s
---
$2
`, addition))

	return replaced
}

func fixContent(path, src string) (string, error) {

	// TODO(bep) Add some sanity checks to make sure we are only matching in front matter
	// TODO(bep) check aliases
	var err error
	s := dateRe.ReplaceAllStringFunc(src, func(s string) string {
		if err != nil {
			return ""
		}
		m := dateRe.FindAllStringSubmatch(s, -1)
		key, val := m[0][1], m[0][2]
		var tt time.Time
		cleaned := dateCleaner(val)
		if cleaned == "" {
			return ""
		}
		tt, err = time.Parse("Monday, January 2, 2006", cleaned)
		if err != nil {
			err = fmt.Errorf("%s: %s", key, err)
			return ""
		}

		return fmt.Sprintf("%s: %s", key, tt.Format("2006-01-02"))
	})

	if err != nil {
		return "", err
	}

	relPath := path[strings.Index(path, "content_old")+17:]

	if addon, ok := fundamentalPages[relPath]; ok {
		s = addToFrontpage(s, addon)
	}

	return s, nil

}

func dateCleaner(s string) string {
	cleaned := ndRe.ReplaceAllString(s, "$1")
	cleaned = strings.Trim(cleaned, "' ")
	cleaned = commaRe1.ReplaceAllString(cleaned, "$1, $2")
	cleaned = commaRe2.ReplaceAllString(cleaned, "$1, $2")

	return cleaned
}
