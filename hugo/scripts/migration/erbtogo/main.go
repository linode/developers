//usr/bin/env go run "$0" "$@"; exit "$?"

package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"regexp"
	"strings"
)

var (
	partial  = regexp.MustCompile(`<%= partial '(.*?)' %>`)
	partial2 = regexp.MustCompile(`#{ partial '(.*?)' }`)
	basic    = regexp.MustCompile(`<%=?\s*(.*?)\s*%>`)

	replacements = strings.NewReplacer(
		"current_page.data.", ".Params.",
		".data.", ".Params.",
	)
)

// This script is not perfect, but it removes much manual work.
func main() {
	if len(os.Args) != 2 {
		log.Fatal("usage: erbtogo <filename>")
	}

	filename := os.Args[1]

	f, err := os.Open(filename)
	if err != nil {
		log.Fatal(err)
	}
	defer f.Close()

	content, err := ioutil.ReadAll(f)
	if err != nil {
		log.Fatal(err)
	}

	converted, err := convert(string(content))
	if err != nil {
		log.Fatal(err)
	}

	fmt.Print(string(converted))
}

func convert(content string) (string, error) {
	conv := partial.ReplaceAllString(content, `{{ partial "$1" . }}`)
	conv = partial2.ReplaceAllString(content, `{{ partial "$1" . }}`)
	conv = basic.ReplaceAllString(conv, `{{ $1 }}`)
	conv = replacements.Replace(conv)
	return conv, nil
}
