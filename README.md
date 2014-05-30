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

This will start a Middleman development server on your local machine. Give Middleman a second to start up, then navigate to `http://0.0.0.0:4567` (your local dev server) in your browser. Now, you can make changes to the Markdown files in the `source/library` directory and navigate to the corresponding page on your development server, and any changes you have made will be reflected. If you make more changes and refresh the page, the page will be automatically rebuilt, so your changes will be reflected immediately.

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
* `source/layouts` - the layouts directory. `layout.erb` is applied to every page, others are applied to specific types of pages.
* Any file with a name that begins with `_` - a partial. Typically included by templates to abstract away or encapsulate certain page components. Sometimes they include logic, sometimes they don't.

If you have a dev server running (either with `rake server` or `bundle exec middleman server`), changes made to any of these files will be picked up automatically when you refresh a page.

## Dependencies

You probably won't want your gems in the `vendor` directory, so if you've run `rake install`, `rake update`, or `bundle install --deployment` on your instance of docsmith previously, you'll want to `rm -rf` the `.bundle` and `vendor` directories. From there, you can `bundle install` to install gems from the Gemfile system-wide.

To include a new gem, add the gem(s) to `Gemfile`, then `bundle install` to update `Gemfile.lock` and install the gem(s) on your system.

## LESS

[LESS](http://lesscss.org) is a CSS preprocessor that we use to generate styles for the Library. All LESS files are included in `source/stylesheets/` - make your changes there. Try not to mess with anything in the `bootstrap` directory.

After making changes, you'll need to rebuild your stylesheet. Run the following command:

	rake less

(or just `rake`). This will compile all of your LESS into `source/stylesheets/home.css`, which gets included in `layout.erb`. As a note, you'll need to have ran either `bundle install` or `rake install` before this will work. Changes will get picked up by Middleman automatically if you have a dev server running, so you can just refresh a page and see your changes immediately.

Hint: if you're using Sublime Text, you can create a build system that runs `rake`. Convenient!

