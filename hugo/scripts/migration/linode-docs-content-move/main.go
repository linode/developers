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

type contentFixer func(path, s string) (string, error)

func (m *mover) relOldContentPath(s string) string {
	return s[strings.Index(s, "content_old")+17:]
}

func (m *mover) relNewContentPath(s string) string {
	return s[strings.Index(s, "content")+8:]
}

func (m *mover) fromToPath(from string) string {
	return strings.Replace(from, "content_old/docs", "content", 1)
}

func (m *mover) fixContent(path, s string) (string, error) {

	// TODO(bep) fix markdown titles: ##Configure Apache
	// TODO(bep) copy assets folder

	fixers := []contentFixer{
		// TODO(bep) for now we just remove the callout styling for
		// striped tables.
		tableFixer,

		// Handles the callouts file, shell and file-exerpt
		calloutFilesFixer,

		// Handles conversion of all the other callouts to shortcodes
		calloutsToShortCodes,

		keywordsToArray,

		fixDates,
	}

	for _, fix := range fixers {
		fixed, err := fix(path, s)
		if err != nil {
			fmt.Printf("%s\t%s\n", path, err)
		} else {
			s = fixed
		}
	}

	relPath := m.relOldContentPath(path)

	// Add front matter to get them listen on the front page tiles.
	if addon, ok := fundamentalPages[relPath]; ok {
		s = addToFrontpage(s, addon)
	}

	return s, nil

}

var (
	calloutFilesFixer = func(path, s string) (string, error) {
		// Handle file and file-excerpt shortcodes
		// Replace callouts with shortcodes
		calloutsFiles := regexp.MustCompile(`(?s)[\t ]*{:\s?\.(shell|file[\w|-]*)\s?}\n(.*?)\n.*?~~~\s?(\w*)\s*\n(.*?)~~~`)

		s = calloutsFiles.ReplaceAllStringFunc(s, func(s string) string {
			m := calloutsFiles.FindAllStringSubmatch(s, -1)
			if len(m) > 0 {

				first := m[0]

				shortcode := strings.TrimSpace(first[1])
				filename := strings.TrimSpace(first[2])
				style := strings.TrimSpace(first[3])
				code := strings.TrimRight(first[4], " \n\r")

				trimIdx := -1

				lines := strings.Split(code, "\n")
				if len(lines) > 0 {
					trimIdx = firstNonWhitespace(lines[0])
				}

				if trimIdx != -1 {
					newCode := ""
					for _, line := range lines {
						f := firstNonWhitespace(line)
						if f >= trimIdx {
							line = line[trimIdx:]
						}
						newCode += line + "\n"
					}

					code = newCode

				}

				if shortcode == "shell" {
					return fmt.Sprintf(`{{< shell %q>}}
%s
{{< /shell >}}`, filename, code)
				}

				// Misspelled
				if shortcode == "file-exceprt" || shortcode == "file-exerpt" {
					shortcode = "file-excerpt"
				}

				// TODO(bep)  fix code fenced styles

				// Correct to supported Pygments lexers
				// See http://pygments.org/docs/lexers/
				if style == "conf" || style == "config" || style == "apache2" || style == "cnf" || style == "httpd" {
					style = "aconf" // Apache conf
				} else if style == "pp" {
					style = "puppet"
				} else if style == "aspx" {
					style = "aspx-cs"
				} else if style == "yml" {
					style = "yaml"
				} else if style == "text" || style == "txt" || style == "log" {
					style = "resource"
				} else if strings.EqualFold(style, "vimrc") {
					style = "vim"
				} else if strings.EqualFold(style, "list") {
					style = "sourceslist"
				}

				if style != "" {
					style += " "
				}

				return fmt.Sprintf(`{{< %s %q %s>}}
%s
{{< /%s >}}
`, shortcode, filename, style, code, shortcode)
			}

			return s
		})

		return s, nil

	}

	calloutsToShortCodes = func(path, s string) (string, error) {

		// Apply these in order
		// (?s)\s*{:\s?\.([\w|-]*)\s?}(.*?)\s*\n\s*\n
		regexps := []string{`(?s)[\t ]*{:\s?\.([\w|-]*)\s?}(.*?)\s*\n\s*\n`, `(?s)[\t ]*{:\s?\.([\w|-]*)\s?}(.*?)\z`}

		for i, re := range regexps {
			calloutsRe := regexp.MustCompile(re)

			s = calloutsRe.ReplaceAllStringFunc(s, func(s string) string {
				m := calloutsRe.FindAllStringSubmatch(s, -1)
				if len(m) > 0 {
					first := m[0]
					name, content := first[1], first[2]
					name = strings.TrimSpace(name)
					content = strings.TrimSpace(content)

					// Block level markdown is superflous.
					lines := strings.Split(content, "\n")
					newContent := ""
					for _, line := range lines {
						l := strings.TrimSpace(line)
						if strings.HasPrefix(l, ">") {
							l = strings.TrimSpace(strings.TrimPrefix(l, ">"))
							line = l
						}

						newContent += line + "\n"
					}

					newContent = strings.TrimSpace(newContent)

					s = fmt.Sprintf(`{{< %s >}}
%s
{{< /%s >}}
`, name, newContent, name)

					if i == 0 {
						s += "\n"
					}

				}

				return s
			})

		}

		return s, nil
	}

	keywordsToArray = func(path, s string) (string, error) {
		keywordsRe := regexp.MustCompile(`keywords: '(.*)'\s*\n?`)

		s = keywordsRe.ReplaceAllStringFunc(s, func(s string) string {
			m := keywordsRe.FindAllStringSubmatch(s, -1)
			if len(m) > 0 {
				kw := m[0][1]
				kwStr := strings.Trim(kw, "'")
				kwSplit := strings.Split(kwStr, ",")
				r := fmt.Sprintf("keywords: %#v", kwSplit)
				r = strings.Replace(r, "]string{", "", 1)
				r = strings.Replace(r, "}", "]", 1)

				return r + "\n"
			}

			return s + "\n"
		})

		return s, nil
	}

	fixDates = func(path, s string) (string, error) {
		dateRe := regexp.MustCompile(`(published|modified): '?(.*)'?\s*\n`)

		// Make modified and published front matter date into proper dates.
		var err error
		s = dateRe.ReplaceAllStringFunc(s, func(s string) string {
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

			return fmt.Sprintf("%s: %s\n", key, tt.Format("2006-01-02"))
		})

		return s, err
	}

	tableFixer = func(path, s string) (string, error) {
		re := regexp.MustCompile(`{: \.table.*?}\s*\n`)
		return re.ReplaceAllString(s, ""), nil
	}
)

var (
	skipFiles = map[string]bool{
		// Handle these by manual copy.
		"assets":    true,
		".DS_Store": true,
	}

	try = false
)

type mover struct {
	fromDir string
	toDir   string
}

func main() {
	pwd, err := os.Getwd()
	if err != nil {
		log.Fatal(err)
	}

	root := filepath.Join(pwd, "../../..")
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

	// Need to walk it twice to map out the symlinks.

	err := filepath.Walk(m.fromDir, func(path string, fi os.FileInfo, err error) error {

		if skipFiles[fi.Name()] {
			fmt.Println("Skip", fi.Name())
			if fi.IsDir() {
				return filepath.SkipDir
			}
			return nil
		}

		if fi.Mode().IsRegular() {
			counter++
			if try && counter > 5 {
				return filepath.SkipDir
			}
			return m.handleFile(path, fi)

		}

		return nil
	})

	if err != nil {
		return err
	}

	return filepath.Walk(m.fromDir, func(path string, fi os.FileInfo, err error) error {

		// Create symbolic link and add the orignal path to front matter.
		if fi.Mode()&os.ModeSymlink != 0 {
			return m.createSymlink(path, fi)
		}

		return nil
	})

}

func (m *mover) targetFilename(sourceFilename string) string {
	// sourceFilename: /path/docs/some-path/file.md"

	// Rules:
	// * We remove the "/docs" prefix
	// * Rename index.md to _index.md
	filename := strings.TrimPrefix(sourceFilename, m.fromDir)
	if !strings.HasPrefix(filename, m.toDir) {
		filename = filepath.Join(m.toDir, filename)
	}
	filename = strings.Replace(filename, "index.md", "_index.md", 1)

	return filename
}

func (m *mover) createSymlink(path string, info os.FileInfo) error {

	fi, err := os.Stat(path)
	if err != nil {
		fmt.Printf("%s\t%s:%s\n", path, "Failed to read symlink:", err)
	}

	if fi.IsDir() {
		fmt.Println(path, "is a dir, skip")
		return nil
	}

	link, err := filepath.EvalSymlinks(path)
	if err != nil {
		fmt.Printf("%s\t%s:%s\n", path, "Failed to read symlink:", err)
		return nil
	}

	// Recreate the symlink in new folder
	old := m.fromToPath(link)
	new := m.fromToPath(path)

	err = os.Symlink(old, new)
	if err != nil && !os.IsExist(err) {
		fmt.Printf("%s\t%s:%s\n", path, "Failed to create symlink:", err)
		return nil
	}

	// Add path to front matter
	out, err := m.openTargetFile(old, info)
	if err != nil {
		fmt.Printf("%s\t%s:%s\n", path, "Failed set front matter for symlink:", err)
		return nil
	}
	if out != nil {
		defer out.Close()
		in, err := os.Open(old)
		if err != nil {
			fmt.Printf("%s\t%s:%s\n", path, "Failed set front matter for symlink:", err)
			return nil
		}
		defer in.Close()
		relTarget := m.relNewContentPath(new)
		replacer := func(path string, content string) (string, error) {
			return appendToFrontMatter(content, fmt.Sprintf(`# This file has symlinks pointing to it.
path: %q`, relTarget)), nil
		}

		return m.replaceInContent(link, in, out, replacer)

	}

	return nil
}

func (m *mover) openTargetFile(sourceFilename string, info os.FileInfo) (io.ReadWriteCloser, error) {
	targetFilename := m.targetFilename(sourceFilename)

	fi, err := os.Stat(targetFilename)
	if err != nil {
		return nil, err
	}

	if fi.IsDir() {
		fmt.Println(sourceFilename, "is a dir, skip")
		return nil, nil
	}

	return os.OpenFile(targetFilename, os.O_RDWR, fi.Mode())
}

func (m *mover) openOrCreateTargetFile(sourceFilename string, info os.FileInfo) (io.ReadWriteCloser, error) {
	targetFilename := m.targetFilename(sourceFilename)
	targetDir := filepath.Dir(targetFilename)

	err := os.MkdirAll(targetDir, os.FileMode(0755))
	if err != nil {
		return nil, err
	}

	return os.OpenFile(targetFilename, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, info.Mode())
}

func (m *mover) handleFile(path string, info os.FileInfo) error {
	sourceFilename := path
	out, err := m.openOrCreateTargetFile(sourceFilename, info)
	if err != nil {
		return err
	}
	defer out.Close()

	in, err := os.Open(sourceFilename)
	if err != nil {
		return err
	}
	defer in.Close()

	return m.replaceInContent(path, in, out, m.fixContent)
}

func (m *mover) replaceInContent(path string, in io.Reader, out io.Writer, replacer func(path string, content string) (string, error)) error {
	var buff bytes.Buffer
	if _, err := io.Copy(&buff, in); err != nil {
		return err
	}

	var r io.Reader

	fixed, err := replacer(path, buff.String())
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

	// (?s){{< (file-?\w*) >}}\n(.*?)\n.*?~~~\s?(\w*)\n(.*?)~~~.*?{< /file-excerpt >}}

	//	fileExcerpt = regexp.MustCompile(`(?s){{< (file-?\w*) >}}(.*):\s*~~~.*\n(.*)\n~~~.*?({{< /file-?\w* >}})?`)
	//fileExcerpt = regexp.MustCompile(`(?s){{< (file-?\w*) >}}\n(.*?)\n.*?~~~\s?(\w*)\n(.*?)~~~.*?{< /file-?\w* >}}`)

	ndRe     = regexp.MustCompile(`(\d+)(th|nd|st|rd)`)
	commaRe1 = regexp.MustCompile(`([0-9])\s([0-9])`)
	commaRe2 = regexp.MustCompile(`([a-zA-Z])\s([a-zA-Z])`)

	frontmatterRe = regexp.MustCompile(`(?s)---
(.*)
---(\n?)`)

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

	return appendToFrontMatter(src, addition)
}

func appendToFrontMatter(src, addition string) string {
	return frontmatterRe.ReplaceAllString(src, fmt.Sprintf(`---
$1
%s
---$2`, addition))

}

func firstNonWhitespace(s string) int {
	return strings.IndexFunc(s, func(r rune) bool {
		return r != ' ' && r != '\t'
	})
}
func dateCleaner(s string) string {
	cleaned := ndRe.ReplaceAllString(s, "$1")
	cleaned = strings.Trim(cleaned, "' ")
	cleaned = commaRe1.ReplaceAllString(cleaned, "$1, $2")
	cleaned = commaRe2.ReplaceAllString(cleaned, "$1, $2")

	return cleaned
}
