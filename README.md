# shayra.com

The personal site of Shayra Antia, served as a static build on GitHub Pages.

## What this repository is

A pre-rendered export. The site is authored as a React application elsewhere; this
repository holds the built HTML, CSS, fonts and images that GitHub Pages serves.
There is no build step here and no JavaScript on the pages: every route is complete
HTML, so links are plain page loads and the site works with scripting disabled.

## Layout

| Path | What it is |
|---|---|
| `index.html`, `about/`, `ai/`, `build/`, `journal/`, `links/`, `the-room/` | The public site |
| `partners/` | The partner surface: the hub, the brand kit, the look book, the reach figures |
| `collateral/` | The two partnership briefs, as PDFs |
| `images/`, `downloads/` | Assets referenced by the pages |
| `_next/static/` | Compiled stylesheet and the four brand typefaces |
| `CNAME` | The custom domain |
| `.nojekyll` | Required. Without it Jekyll drops `_next/`, because it starts with an underscore |
| `service-worker.js` | Retires the previous site's service worker. Do not delete |

## Updating

Rebuild from the source project, re-export, and replace the files here. Keep
`CNAME`, `.nojekyll` and `service-worker.js` in place.

## Indexing

Every page carries `<meta name="robots" content="noindex, nofollow">`. The site is
live and reachable; it is deliberately not in search results yet. Remove that tag
from the source and re-export when it should be indexed.
