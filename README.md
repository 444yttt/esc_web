# NoteFlow public website

Japanese product, privacy, and support site for the NoteFlow iPhone app.

## Local development

```sh
PATH=/Users/ayato/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/ayato/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback:$PATH pnpm install
PATH=/Users/ayato/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/ayato/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback:$PATH pnpm dev
```

## Production build

```sh
PATH=/Users/ayato/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/ayato/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback:$PATH pnpm build
```

The generated `dist/` directory contains the product page, `privacy.html`, `support.html`, `robots.txt`, and `sitemap.xml`. The intended public path is `/noteflow/`; configure the host to serve the contents of `dist/` at that path and use the existing `www.eescc.jp` domain.

The site was tested at desktop 1440px and mobile 390px widths with no horizontal overflow. The app preview uses the iOS 27 Japanese capture screen and the bundled Elms Sans family.
