# shayra.com

The personal site of Shayra Antia, served as a static build on GitHub Pages.

## Current state: under review

The root of the domain shows a holding page with her name and nothing else.
**The site itself lives at `/new-site/`** while Shayra reviews it. Crawlers are
blocked by `robots.txt`, every page carries `noindex, nofollow`, no sitemap is
published, and `404.html` is the holding page, so a wrong URL reveals nothing.

This is obscurity, not access control. Anyone who learns the path can read the
site. It keeps the work off search results and away from casual visitors; it is
not a substitute for permission.

## What this repository is

A pre-rendered export. The site is authored as a React application elsewhere;
this repository holds the built HTML, CSS, fonts and images that GitHub Pages
serves. There is no build step here and no JavaScript on the pages: every route
is complete HTML, so links are plain page loads and the site works with
scripting disabled.

## Layout

| Path | What it is |
|---|---|
| `index.html`, `404.html` | The holding page |
| `new-site/` | The site: home, her story, the journal, AI and business, the room, the partner surface |
| `new-site/collateral/` | The two partnership briefs, as PDFs |
| `new-site/_next/static/` | Compiled stylesheet and the four brand typefaces |
| `CNAME` | The custom domain |
| `robots.txt` | Blocks everything while under review |
| `.nojekyll` | Required. Without it Jekyll drops `_next/`, because it starts with an underscore |
| `service-worker.js` | Retires the previous site's service worker. Do not delete |

## Updating

In the source project:

```bash
BASE_PATH=/new-site ./export-static.sh out
```

Copy the result into `new-site/`, keeping `CNAME`, `.nojekyll` and `robots.txt`
at the repository root.

## Going live

Three steps, in the source project and here:

1. Remove `robots:{index:false,follow:false}` from `app/layout.tsx`.
2. Run `./export-static.sh out` with **no** `BASE_PATH`. That publishes at the
   root, restores the permissive `robots.txt` and writes a fresh `sitemap.xml`.
3. Copy the result over this repository's root, delete `new-site/`, and keep
   `service-worker.js`.

The holding page is then replaced by the real home page.
