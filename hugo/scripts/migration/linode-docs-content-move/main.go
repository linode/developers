//usr/bin/env go run "$0" "$@"; exit "$?"

package main

import (
	"fmt"
	"io"
	"log"
	"os"
	"path/filepath"
	"strings"
)

var skipFiles = map[string]bool{
	// Handle these by manual copy.
	"assets":    true,
	".DS_Store": true,
}

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
			// For now, just copy the file to destination.
			return m.copyFile(path, info)

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

func (m *mover) copyFile(path string, info os.FileInfo) error {
	sourceFilename := path
	targetFilename := m.targetFilename(sourceFilename)
	targetDir := filepath.Dir(targetFilename)
	perm := os.FileMode(0755)

	err := os.MkdirAll(targetDir, perm)
	if err != nil {
		return err
	}

	in, err := os.Open(sourceFilename)
	if err != nil {
		return err
	}
	defer in.Close()

	out, err := os.OpenFile(targetFilename, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, perm)
	if err != nil {
		return err
	}
	defer out.Close()

	_, err = io.Copy(out, in)
	return err
}
