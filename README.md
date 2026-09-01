# SecretScan App Store Pages

Static pages for App Store Connect URLs:

- `privacy.html`: Privacy Policy URL.
- `support.html`: Support URL.
- `scan-api-keys-in-screenshots.html`: developer-intent acquisition page.
- `find-recovery-codes-in-photos.html`: account-recovery intent acquisition page.
- `iphone-sensitive-screenshot-checklist.html`: evergreen manual-audit guide.
- `mac-private-file-scan.html`: Mac demand-validation page.
- `robots.txt` and `sitemap.xml`: crawl discovery.

## Preview

```sh
cd app-store-pages
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173`.

## Publish

These files can be published on any static host, including GitHub Pages, Cloudflare Pages, Netlify, or a normal web server.

The published support contact is `liweba@gmail.com`.
