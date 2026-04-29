# SecretScan App Store Pages

Static pages for App Store Connect URLs:

- `privacy.html`: Privacy Policy URL.
- `support.html`: Support URL.

## Preview

```sh
cd app-store-pages
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173`.

## Publish

These files can be published on any static host, including GitHub Pages, Cloudflare Pages, Netlify, or a normal web server.

Replace `support@secretscan.app` in `privacy.html` and `support.html` before publishing if the app uses a different support address.
