# docsmith

A [Middleman](http://middlemanapp.com) static site generator for generating Linode's documentation site.

## Prerequisites

* Ruby - 1.9.3 or higher definitely works. If you're running this on a Mac, you should be fine
* Rake. If you have recent Ruby then you probably already have this. If `rake --version` fails, then you don't. You can install it with

```
sudo gem install rake
```
* Bundler. You can check if you have bundler by running `bundle -v`. If the command bombs out, you don't have it. You can install bundler with

```
sudo gem install bundler
```
* An SSH key on GitHub. Check out [this page](https://github.com/settings/ssh) to add a key/get help doing so.

## Installation

Run the following commands to clone this repo and install docsmith's dependencies:

	cd /path/where/you/want/it/
	git clone git@github.com:Linode/docsmith.git
	cd docsmith/
	rake install

Note: the last command might take a few minutes to run, be patient.

## Updating docsmith

As we make changes to docsmith, you'll want to make sure you're running the latest version. To do so, run the following command in the `docsmith` directory:

	rake update

This will pull down the latest version of docsmith and any new dependencies it requires.

## Running a development server

To edit/preview the Library's content, you'll want to run a docsmith development server. In the `docsmith` directory, run:

	rake server

This will start a Middleman development server on your local machine. Give Middleman a second to start up, then navigate to `http://0.0.0.0:4567` (your local dev server) in your browser. Now, you can make changes to the Markdown files in the `source` directory and navigate to the corresponding page on your development server, and any changes you have made will be reflected. If you make more changes and refresh the page, the page will be automatically rebuilt, so your changes will be reflected immediately.

Notes:

* To access a guide, you don't need to specify `.md` in the URL.

# Editing the library

The library itself lives in the `source` folder. The articles are written in a superset of Markdown named kramdown. Please refer to [this guide](http://kramdown.gettalong.org/quickref.html) for an overview of its syntax.

`source` is a git repo. Once we go live, you'll want remotes for both Github and GitHub. [This site](http://rogerdudler.github.io/git-guide/) is a great resource for understanding git workflows.

## Metadata

Every Markdown file in the library contains metadata in a YAML section at the top of the file (surrounded by `---`). See [the YAML spec](http://www.yaml.org/spec/1.2/spec.html) to learn more about writing YAML, or better yet, just take a look at a library article for examples.

## The front page

`source/index.md` is the front page of the library. In the `tiles` attribute of the page's metadata, you can specify an arbitrary number of tiles with a `title`, `description`, and `url` (see the file for examples).

## Category pages

Any other file named `index.md` is a category page; each category directory should contain one of these. These pages are mostly automatically generated but accept a few keys in the metadata:

* `title` - title of the category
* `description` (optional) - text to display in a larger, centered paragraph immediately after the page title. (note: any text outside of the metadata will be displayed at normal size, non-centered, after this section)
* `featured` (optional) - an ordered list of articles (file names) to display in the featured section (the uncategorized articles immediately after the page descripton). The files must exist in the same directory as the category page you are working with. If this is not provided, all non-deprecated articles in the current directory will be added to the featured list alphabetically.
* `categories` (optional) - an ordered list of sub-categories (directory names) to display in the sub-categories section of the page. If this is not provided, all directories within the current directory will be added to the categories list alphabetically.

### Example

	---
	title: Websites
	description: 'How to host a website on your Linode'
	featured:
	 - apache.md
	 - nginx.md
	categories:
	 - rails
	 - django
	 - mojo
	---

### Sub-categories

Sub-categories are directories within a category directory. They should also have an `index.md` file, with a `title` metadata attribute.

## Articles

### Metadata

Example:

	---
	author:
	  name: your name
	  email: your-email@linode.com
	description: 'A short description for the article. May appear on categories page'
	keywords: 'comma,separated,keywords'
	license: '[CC BY-ND 3.0](http://creativecommons.org/licenses/by-nd/3.0/us/)'
	alias: ['example/article.html', 'another/article/alias.html'] # optional
	modified: Friday, April 4th, 2014
	modified_by:
	  name: your name
	published: 'Wednesday, March 26th, 2014'
	title: 'article title'
	deprecated: true  # optional
	external_resources:  # optional
	 - '[some cool site](http://example.com/cool-site)'
	 - '[another site](http://another.example.com)'
	---

Notes:

* The `deprecated` key will prevent the guide from appearing on category pages, and it will add a banner to the guide itself that tells the reader that the guide is unmaintained. Instead of a boolean, you can also specify a link like this: `'[newer guide's title](https://linode.com/guides/some/newer/guide)'`, and the banner will also direct the reader to the newer version of the guide.
* `external_resources` should be a list of Markdown links. If this is specified, a 'More Information' section will be added to the bottom of the article, and the links will be listed there.
* `alias` should be a list of paths that should redirect to this article. For example, if I specify `example/redirect.html`, then https://linode.com/guides/example/redirect will redirect to this page.

### Callout sections

You can create various types of callouts within an article like so:

	{:.note}
	> This is a note. Nothing too
	> dangerous, just wanted to let you know.

	{:.caution}
	> This is a scary warning! Tread lightly for there be dragons here!

	{:.output}
	> Here's the output from
	> some cool command that I ran.

	{:.file}
	some-file.txt
	:   ~~~
	    Here are the contents of the file.
	    How great!
	    ~~~

	a-second-file.txt
	:   ~~~
	    Here are the contents of another file
	    ~~~

	Please note that a .file-excerpt directly following a .file will just show up as a .file (and
	vice-versa). There needs to be something in between to avoid this.

	{:.file-excerpt}
	some-file.txt
	:   ~~~
	    Here's an excerpt from a file.
	    ~~~

	This is a `file name`{:.file-name} and this is a `variable`{:.variable} and this is `just
	standard inline monospace text for code or whatever you need`

### Media

Assets (such as images) can be added to `source/assets` and referenced like: `assets/my-sweet-image.png`

## Generating RSS

You can invoke the RSS generator by running the following command from the `docsmith` directory:

	$ thor rss source/guide.md source/another/guide.md

This will add the specified guides to the RSS feed located in `source/rss.xml`. You can specify as many guides as you'd like. The script will also remove old entries from the file so that there are no more than 20 items total.

# Development

These notes are for those who wish to develop against docsmith itself, *not* for those who wish to edit the Library.

## On virtual environments

It's highly recommended that you use a Ruby virtual environment of some kind rather than using system Ruby. The benefits of this are that:

* Things won't break if your system Ruby gets upgraded
* You can `gem install` without `sudo`
* You can easily switch between different versions of Ruby if needed

There are a few options for this, including [RVM](http://rvm.io) (we sponsor them!) and [rbenv](https://github.com/sstephenson/rbenv). What you use is totally up to personal preference. From my personal experience, I tend to prefer using rbenv if I'm working directly on my Macbook.

## Writing code for docsmith

docsmith is a fairly straightforward Middleman app - you might want to take a look at [their documentation](http://middlemanapp.com/basics/getting-started/) if you're unfamiliar with what Middleman is capable of.

* `config.rb` - the configuration file for Middleman. Specifies global layouts, activates plugins, etc.
* `lib/layouts` - the layouts directory. `layout.erb` is applied to every page, others are applied to specific types of pages.
* Any file with a name that begins with `_` - a partial. Typically included by templates to abstract away or encapsulate certain page components. Sometimes they include logic, sometimes they don't.

If you have a dev server running (either with `rake server`), changes made to any of these files will be picked up automatically when you refresh a page.

## Dependencies

You probably won't want your gems in the `vendor` directory, so if you've run `rake install`, `rake update`, or `bundle install --deployment` on your instance of docsmith previously, you'll want to `rm -rf` the `.bundle` and `vendor` directories. From there, you can `bundle install` to install gems from the Gemfile system-wide.

To include a new gem, add the gem(s) to `Gemfile`, then `bundle install` to update `Gemfile.lock` and install the gem(s) on your system.

## LESS

[LESS](http://lesscss.org) is a CSS preprocessor that we use to generate styles for the Library. All LESS files are included in `lib/assets/stylesheets/` - make your changes there. Try not to mess with anything in the `bootstrap` directory.

After making changes, you'll need to rebuild your stylesheet. Run the following command:

	rake less

(or just `rake`). This will compile all of your LESS into `lib/assets/stylesheets/home.css`, which gets included in `layout.erb`. As a note, you'll need to have ran either `bundle install` or `rake install` before this will work. Changes will get picked up by Middleman automatically if you have a dev server running, so you can just refresh a page and see your changes immediately.

Hint: if you're using Sublime Text, you can create a build system that runs `rake`. Convenient!
