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

var skipFiles = map[string]bool{
	// Handle these by manual copy.
	"assets":    true,
	".DS_Store": true,
}

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

	fixed := fixContent(path, buff.String())

	if _, err = io.Copy(out, strings.NewReader(fixed)); err != nil {
		return err
	}

	return nil
}

var (
	dateRe = regexp.MustCompile("(published|modified): '?(.*)'?")
)

func fixContent(path, src string) string {
	return dateRe.ReplaceAllStringFunc(src, func(s string) string {
		m := dateRe.FindAllStringSubmatch(s, -1)
		key, val := m[0][1], m[0][2]
		tt, err := time.Parse("Monday, January 2, 2006", dateCleaner(val))
		if err != nil {
			log.Fatalf("%s: %s", path, err)
		}

		return fmt.Sprintf("%s: %s", key, tt.Format("2006-01-02"))
	})

}

func dateCleaner(s string) string {
	cleaned := strings.Trim(strings.NewReplacer("th", "", "nd", "", "st", "").Replace(s), "'")

	if strings.Count(cleaned, ",") == 1 {
		cleaned = strings.Replace(cleaned, " ", ", ", 1)
	}
	return cleaned
}
