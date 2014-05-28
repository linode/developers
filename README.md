# Docsmith

A [Middleman](http://middlemanapp.com) static site generator for generating Linode's documentation site.

## Prerequisites

* Ruby - 1.9.3 or higher definitely works. If you're running this on a Mac, you should be fine

## Installation

`git clone` this repo, then `cd` into the `docsmith` directory. Then run:

	bundle install

This command will install the required dependencies from RubyGems. Next up:

	cd source
	git clone git@github.com/displague/library.git

This will pull down the latest Markdown version of the Library (NOTE: this is a temporary repo, we'll switch to a real one soon)

### Updating docsmith

`cd` into the `docsmith` directory and then run

	git pull origin master
	bundle install

This will pull down the latest code from `GitHub` and update your dependencies if needed.

## Getting a development server running

This is how you'll make and preview changes to library's content. `cd` into the `docsmith` directory and then run:

	bundle exec middleman server

Give Middleman a second to start up, then navigate to `http://0.0.0.0:4567` in your browser. Now, you can make changes to the Markdown files in the `source/library` directory and navigate to the corresponding page on your development server, and any changes you have made will be reflected. If you make more changes and refresh the page, the page will be automatically rebuilt, so your changes will be reflected immediately.
