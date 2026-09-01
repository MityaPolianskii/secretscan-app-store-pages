# SecretScan — private screenshot and photo security for iPhone

SecretScan helps you find passwords, recovery codes, API keys, payment details, IDs, and other sensitive text that was left behind in screenshots and photos.

- OCR and detection run on the iPhone or iPad.
- Photos and extracted text are not uploaded to SecretScan servers.
- Review likely findings behind device authentication.
- Save a redacted copy or delete the original after review.
- Start with a free screenshot scan; Lifetime Pro is a one-time purchase.

[Download SecretScan on the App Store](https://apps.apple.com/app/apple-store/id6763880476?pt=120611987&ct=github_repo_sep2&mt=8) · [Visit the website](https://mityapolianskii.github.io/secretscan-app-store-pages/) · [Read the privacy policy](https://mityapolianskii.github.io/secretscan-app-store-pages/privacy.html)

## Practical privacy guides

- [How to find and remove sensitive screenshots on iPhone](https://mityapolianskii.github.io/secretscan-app-store-pages/iphone-sensitive-screenshot-checklist.html)
- [Find API keys and tokens in iPhone screenshots](https://mityapolianskii.github.io/secretscan-app-store-pages/scan-api-keys-in-screenshots.html)
- [Find recovery codes and seed phrases in photos](https://mityapolianskii.github.io/secretscan-app-store-pages/find-recovery-codes-in-photos.html)

SecretScan is a focused photo-privacy audit, not a cloud vault, antivirus, password manager, or guarantee that every sensitive image will be found. If a credential may have been exposed, rotate or revoke it; deleting its screenshot does not invalidate it.

## Website source

Static pages for App Store Connect URLs:

- `privacy.html`: Privacy Policy URL.
- `support.html`: Support URL.
- `scan-api-keys-in-screenshots.html`: developer-intent acquisition page.
- `find-recovery-codes-in-photos.html`: account-recovery intent acquisition page.
- `iphone-sensitive-screenshot-checklist.html`: evergreen manual-audit guide.
- `mac-private-file-scan.html`: Mac demand-validation page.
- `robots.txt` and `sitemap.xml`: crawl discovery.
- `53e8f1b23307486a8c13ea79ed325d80.txt`: IndexNow ownership key for URLs under this GitHub Pages path.

## Preview

```sh
cd app-store-pages
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173`.

## Publish

These files can be published on any static host, including GitHub Pages, Cloudflare Pages, Netlify, or a normal web server.

The published support contact is `liweba@gmail.com`.
