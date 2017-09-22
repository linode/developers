## Instructions for Bjorn:

Clone this repo. Create a folder `/source/` and inside the `/source/` clone our documentation into the source folder:

`https://github.com/linode/docs.git` 

In the Docsmith folder:

`sudo gem install thor`
`sudo gem install bundler`

Now you should be able to run: 

`thor update` followed by `thor server` to boot into the local server development environment.








docsmith
========

A [Middleman](http://middlemanapp.com) static site generator for generating
[Linode's documentation site](https://www.linode.com/docs).

# Installing on a VM with Vagrant

This uses Vagrant and VirtualBox to install docsmith on a virtual machine.

*Note: LiveReload doesn't work with the Vagrant option. You can run docsmith
locally if you want your changes to appear automatically without refreshing
the page.*

## Prerequisites

Install git, VirtualBox, and Vagrant. Example for Debian/Ubuntu:

```bash
apt-get install git virtualbox vagrant
```

For macOS:

```bash
brew cask install virtualbox
brew cask install vagrant
```

## Download

Clone the docsmith repository with git:

```bash
git clone https://github.com/Linode/docsmith.git
cd docsmith
```

## Building the VM

```bash
vagrant up
```

This may take awhile. It will need to download Debian, create a new virtual
machine, start it up, configure it with various software packages, and
finally bring up docsmith.

After it's finished (maybe 5+ minutes), visit <http://localhost:4567/> and you
should see your very own local copy of the Linode docs site
<https://www.linode.com/docs/>. You can now edit the guides in the `source`
folder and as you make changes, docsmith will detect those changes and reload.

## Running manually

For working on layout or docsmith internals, kill the automatically run
process and run it yourself so you can restart it as needed:

```bash
vagrant ssh
sudo killall ruby2.1
cd /vagrant
thor server
```

# Local installation

## Prerequisites

This was most recently tested on macOS 10.11.6. Older versions may not work.
Use the Vagrant option if you're running an older operating system or if you
have problems with this.

If you're using a Debian-based Linux distribution, you will need
build-essential and ruby-dev. Install them with:

```bash
sudo apt-get install git build-essential ruby ruby-all-dev
```

All operating systems will need the following:

* Ruby - 1.9.3 or higher definitely works
* Thor - You can install it with:

```bash
sudo gem install thor
```

* Bundler. You can check if you have bundler by running `bundle -v`. If the
  command bombs out, you don't have it. You can install bundler with

```bash
sudo gem install bundler
```

* An SSH key on GitHub. Check out [this page](https://github.com/settings/keys)
  to add a key/get help doing so.

## Installation

Run the following commands to clone this repo and install docsmith's
dependencies:

```bash
cd /path/where/you/want/it/
git clone git@github.com:Linode/docsmith.git
cd docsmith/
thor init
```

Note: the last command might take a few minutes to run, be patient.

## Updating docsmith

As we make changes to docsmith, you'll want to make sure you're running the
latest version. To do so, run the following command in the `docsmith`
directory:

```bash
thor upgrade
```

This will pull down the latest version of docsmith and any new dependencies it
requires.

## Running a development server

To edit/preview the Guides & Tutorials' content, you'll want to run a docsmith
development server. In the `docsmith` directory, run:

```bash
thor server
```

This will start a Middleman development server on your local machine. Give
Middleman a second to start up, then navigate to `http://0.0.0.0:4567/docs/`
(your local dev server) in your browser. Now, you can make changes to the
Markdown files in the `source` directory and navigate to the corresponding page
on your development server, and any changes you have made will be reflected. If
you make more changes and refresh the page, the page will be automatically
rebuilt, so your changes will be reflected immediately.

Notes:

* To access a guide, you don't need to specify `.md` in the URL.

# Editing the guides

The guides live in the `source` folder. The articles are written in a superset
of Markdown named kramdown. Please refer to [this
guide](http://kramdown.gettalong.org/quickref.html) for an overview of its
syntax.

`source` is a git repo. Once we go live, you'll want remotes for Github. [This
site](http://rogerdudler.github.io/git-guide/) is a great resource for
understanding git workflows.

## Metadata

Every Markdown file in the guides contains metadata in a YAML section at the
top of the file (surrounded by `---`). See [the YAML
spec](http://www.yaml.org/spec/1.2/spec.html) to learn more about writing YAML,
or better yet, just take a look at an article for examples.

## The front page

`source/index.md` is the front page of the guides. In the `tiles` attribute of
the page's metadata, you can specify an arbitrary number of tiles with a
`title`, `description`, and `url` (see the file for examples).

## Category pages

Any other file named `index.md` is a category page; each category directory
should contain one of these. These pages are mostly automatically generated but
accept a few keys in the metadata:

* `title` - title of the category
* `description` (optional) - text to display in a larger, centered paragraph
  immediately after the page title. (note: any text outside of the metadata
  will be displayed at normal size, non-centered, after this section)
* `featured` (optional) - an ordered list of articles (file names) to display
  in the featured section (the uncategorized articles immediately after the
  page descripton). The files must exist in the same directory as the category
  page you are working with. If this is not provided, all non-deprecated
  articles in the current directory will be added to the featured list
  alphabetically.
* `categories` (optional) - an ordered list of sub-categories (directory names)
  to display in the sub-categories section of the page. If this is not
  provided, all directories within the current directory will be added to the
  categories list alphabetically.

### Example

```yaml
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
```

### Sub-categories

Sub-categories are directories within a category directory. They should also
have an `index.md` file, with a `title` metadata attribute.

## Articles

### Metadata

Example 1:

```yaml
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
image: https://www.linode.com/docs/assets/some-image.png
contributor:
    name: Brian O'Beefe
    link: https://twitter.com/bokstuff # optional
---
```

Example 2:

```yaml
---
author:
  name: your name
  email: your-email@linode.com
description: 'A short description for the article. May appear on categories page'
keywords: 'comma,separated,keywords'
license: '[CC BY-ND 3.0](http://creativecommons.org/licenses/by-nd/3.0/us/)'
modified: Friday, April 4th, 2014
modified_by:
  name: your name
published: 'Wednesday, March 26th, 2014'
title: 'article title'
twitter:
  card: summary_large_image
image:
  file: https://www.linode.com/docs/assets/some-image.png
  width: 280px
  height: 150px
---
```

Notes:

* The `deprecated` key will prevent the guide from appearing on category pages,
  and it will add a banner to the guide itself that tells the reader that the
  guide is unmaintained. Instead of a boolean, you can also specify a link like
  this: `'[newer guide's title](https://linode.com/guides/some/newer/guide)'`,
  and the banner will also direct the reader to the newer version of the guide.
* `external_resources` should be a list of Markdown links. If this is
  specified, a 'More Information' section will be added to the bottom of the
  article, and the links will be listed there.
* `alias` should be a list of paths that should redirect to this article. For
  example, if I specify `example/redirect.html`, then
  https://linode.com/guides/example/redirect will redirect to this page.
* `image` can be used to set the preferred thumbnail/social media image for an
  article. It is optional, and defaults to the Linode logo if another image is
  not provided. **It must be a full URL** and should point to something under
  the Linode domain.
* `contributor` is optional. If provided, it needs `name` and optionally
  `link`, and will appear right below the title. If `link` is a link to a
  Twitter or Github account, an icon will be displayed as well.

Twitter & Other Social Notes:

* Twitters cards are either summary (default) or summary_large_image.
* Images can be handled like Example 1 or Example 2.  If you are going to nest
  tags into image, like Example 2, all 3 are required.  This is for social
  media websites like Twitter and Facebook.  Images **must be a full URL**.

### Callout sections

You can create various types of callouts within an article like so:

```
{:.note}
> This is a note. Nothing too
> dangerous, just wanted to let you know.

{:.caution}
> This is a scary warning! Tread lightly for there be dragons here!

{:.output}
~~~
Here's the output from
some cool command that I ran.
~~~

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

Please note that a .file-excerpt directly following a .file will just show
up as a .file (and vice-versa). There needs to be something in between to
avoid this.

{:.file-excerpt}
some-file.txt
:   ~~~
    Here's an excerpt from a file.
    ~~~

This is a `file name`{:.file-name} and this is a `variable`{:.variable} and
this is `just standard inline monospace text for code or whatever you need`
```

### Media

Assets (such as images) can be added to `source/assets` and referenced like:
`assets/my-sweet-image.png`

## Overview Pages

Essentially an Article page without the sidebar.

To use this layout, you must include a new metadata tag:

### Metadata

Example 1:

	---
	layout: overview_layout
	---

The rest of the metadata is the same as an Article page.


## Generating RSS

You can invoke the RSS generator like so from the `docsmith` directory:

```bash
thor rss:show  # Show the current RSS file contents
thor rss:add source/guide.md source/another/guide.md  # Add new guides to the RSS feed
```

`thor rss:add` will pull the latest RSS file from GitHub and then add the
specified guides to the RSS feed located in `pages/docs/rss/index.xml`. You can
specify as many guides as you'd like. The script will also remove old entries
from the file so that there are no more than 20 items total. When you're
satisfied, you can re-run the command with --confirm to write the file and push
it to GitHub.

After the file has been pushed to GitHub, it will go live the next time you run
`thor publish`.

## Aliasing articles

* If you want a URL to **redirect** to an article, you'll want to add an alias
  in the target article's [metadata](#metadata).
* If you want the same article to appear in multiple locations, use relative
  symlinks.

## Building the docs

To publish changes, run:

```bash
thor publish
```

This will SSH into every docs box, pull the latest repo from git, and build the
site. You'll need SSH access and a config file for this to work (Linode
employees only).

If you want to build locally for testing purposes, you can do so like this:

```bash
bundle exec middleman build
```

This optionally takes a --verbose flag as well. Piping the output of this
command into `grep error` is a good way to spot broken files.

## Old article checker

Run the following command to get a list of articles that haven't been edited in
a while:

```bash
thor search:old -m 6
```

This will show all articles that haven't been modified in over 6 months. It
normally doesn't include deprecated articles, but you can add a `-d` if you
want it to.

# Development

These notes are for those who wish to develop against docsmith itself, *not*
for those who wish to edit the guides.

## On virtual environments

It's highly recommended that you use a Ruby virtual environment of some kind
rather than using system Ruby. The benefits of this are that:

* Things won't break if your system Ruby gets upgraded
* You can `gem install` without `sudo`
* You can easily switch between different versions of Ruby if needed

There are a few options for this, including [RVM](http://rvm.io) (we sponsor
them!) and [rbenv](https://github.com/sstephenson/rbenv). What you use is
totally up to personal preference. From my personal experience, I tend to
prefer using rbenv if I'm working directly on my Macbook.

## Writing code for docsmith

docsmith is a fairly straightforward Middleman app - you might want to take a
look at [their documentation](http://middlemanapp.com/basics/getting-started/)
if you're unfamiliar with what Middleman is capable of.

* `config.rb` - the configuration file for Middleman. Specifies global layouts,
  activates plugins, etc.
* `lib/layouts` - the layouts directory. `layout.erb` is applied to every page,
  others are applied to specific types of pages.
* Any file with a name that begins with `_` - a partial. Typically included by
  templates to abstract away or encapsulate certain page components. Sometimes
  they include logic, sometimes they don't.

If you have a dev server running, changes made to any of these files will be
picked up automatically when you refresh a page.

## Dependencies

You probably won't want your gems in the `vendor` directory, so if you've run
`thor init`, `thor upgrade`, or `bundle install --deployment` on your instance
of docsmith previously, you'll want to `rm -rf` the `.bundle` and `vendor`
directories. From there, you can `bundle install` to install gems from the
Gemfile system-wide.

To include a new gem, add the gem(s) to `Gemfile`, then `bundle install` to
update `Gemfile.lock` and install the gem(s) on your system.

## LESS

[LESS](http://lesscss.org) is a CSS preprocessor that we use to generate styles
for the docs. All LESS files are included in `lib/assets/stylesheets/` - make
your changes there. Try not to mess with anything in the `bootstrap` directory.

After making changes, you'll need to rebuild your stylesheet. Run the following
command:

```bash
thor less
```

This will compile all of your LESS into `lib/assets/stylesheets/home.css`,
which gets included in `layout.erb`. As a note, you'll need to have ran either
`bundle install` or `thor init` before this will work. Changes will get picked
up by Middleman automatically if you have a dev server running, so you can just
refresh a page and see your changes immediately.

Hint: if you're using Sublime Text, you can create a build system that runs
`thor less`. Convenient!
