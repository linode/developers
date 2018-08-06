# Linode Hugo Bade Theme

Base theme for Hugo. Using PostCSS, TailwindCSS and gulp as a task manager.
Lightweight, versatile and aimed to facilitate developmenmt by using utlility classes while remaining lean.

## Setup

Install Dependencies
`yarn`

Compile
`gulp`

Watch during development
`gulp watch`

## Tools

This theme uses <a href="https://tailwindcss.com/docs/what-is-tailwind/" target="_blank">TailwindCSS</a> as a utlility library.
Just add the classes provided by the library to tailor your application. 

add

```
[params.dev]
enable = true
```

to your `config.toml` (root dir) to enable the css helper. This will enable a small icon in the bottom right corner of your site. This helper shows you what's available in your css to use for your markup.
It is a combination of the tailwind styles and custom styles from your theme's CSS.

To avoid ending up with a very large bundle of unused css utility classes, the gulp setup uses CSSPurge to strip whatever is not used in the HUGO layouts.
This ensures a small css bundle for production use.

The gulp setup also includes a linter and the nanocss minifier.

## Architecture

In order to customize this theme, the proper way is to move/copy the enclosed CHILD-THEME under the `/themes` dir, rename it to your liking and add your modifications from within. 
This will ensure the maintainability of the linode-base-theme for future updates.

*Note*: You will need to make sure the theme inheritance is set up in your config.toml. (See <a href="https://gohugo.io/themes/theme-components/" target="_blank">Theme Components</a>).

for instance:

```
theme = ["my-new-theme(child-theme)", "linode-base-theme"]
```

The theme follows the concept of <a href="http://bradfrost.com/blog/post/atomic-web-design/" target="_blank">Atomic Design</a> to structure its templates and CSS. 
It is a rather arbitrary set of rules to keep a consistent design system when dealing with a large amount of templates and help with template inheritance.

You will probably want to keep a similar structure for template overriding: see the <a href="https://gohugo.io/templates/lookup-order/" target="_blank">lookup order</a> for more info.

## Default Content

The theme uses `config.toml` to populate some of its templates, so it will probably be empty upon installation.

ex: `layouts/partials/2_molecules/nav.html`
relies on such definition in `config.toml`

```
[menu]

[[menu.main]]
weight = 1
name = "Page 1"
url = "/"

[[menu.main]]
weight = 2
name = "Page 2"
url = "page2"

[[menu.main]]
weight = 3
name = "Page 3"
url = "page3"
```
