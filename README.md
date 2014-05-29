# Docsmith

A [Middleman](http://middlemanapp.com) static site generator for generating Linode's documentation site.

## Prerequisites

* Ruby - 1.9.3 or higher definitely works. If you're running this on a Mac, you should be fine
* Bundler. You can check if you have bundler by running

	bundle -v

If the command bombs out, you don't have it. You can install bundler with

	sudo gem install bundler

## Installation

Run the following commands to clone this repo and install docsmith's dependencies:

	cd /path/where/you/want/it/
	git clone git@github.com:Linode/docsmith.git
	cd docsmith/
	rake install

Note: the last command might take a few minutes to run, be patient.

### Updating docsmith

In the `docsmith` directory, run:

	rake update

This will pull down the latest version of docsmith and any new dependencies it requires.

## Running a development server

To edit/preview the Library's content, you'll want to run a docsmith development server. In the `docsmith` directory, run:

	rake server

This will start a Middleman development server on your local machine. Give Middleman a second to start up, then navigate to `http://0.0.0.0:4567` (your local dev server) in your browser. Now, you can make changes to the Markdown files in the `source/library` directory and navigate to the corresponding page on your development server, and any changes you have made will be reflected. If you make more changes and refresh the page, the page will be automatically rebuilt, so your changes will be reflected immediately.
