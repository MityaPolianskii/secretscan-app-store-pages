# SecretScan — private screenshot and photo security for iPhone

SecretScan helps you find passwords, recovery codes, API keys, payment details, IDs, and other sensitive text that was left behind in screenshots and photos.

- OCR and detection run on the iPhone or iPad.
- Photos and extracted text are not uploaded to SecretScan servers.
- Review likely findings behind device authentication.
- Save a redacted copy or delete the original after review.
- Start with a free screenshot scan; Lifetime Pro is a one-time purchase.

[Download SecretScan on the App Store](https://apps.apple.com/app/apple-store/id6763880476?pt=120611987&ct=github_repo_sep2&mt=8) · [Visit the website](https://mityapolianskii.github.io/secretscan-app-store-pages/) · [Follow the guide feed](https://mityapolianskii.github.io/secretscan-app-store-pages/feed.xml) · [Read the privacy policy](https://mityapolianskii.github.io/secretscan-app-store-pages/privacy.html)

## Practical privacy guides

- [All iPhone photo privacy guides](https://mityapolianskii.github.io/secretscan-app-store-pages/guides.html)
- [How to find and remove sensitive screenshots on iPhone](https://mityapolianskii.github.io/secretscan-app-store-pages/iphone-sensitive-screenshot-checklist.html)
- [How to search screenshots by text on iPhone](https://mityapolianskii.github.io/secretscan-app-store-pages/search-screenshots-by-text-iphone.html)
- [Find API keys and tokens in iPhone screenshots](https://mityapolianskii.github.io/secretscan-app-store-pages/scan-api-keys-in-screenshots.html)
- [Find recovery codes and seed phrases in photos](https://mityapolianskii.github.io/secretscan-app-store-pages/find-recovery-codes-in-photos.html)
- [Find password screenshots and photos on iPhone](https://mityapolianskii.github.io/secretscan-app-store-pages/find-passwords-in-iphone-photos.html)
- [Find passport and ID photos on iPhone](https://mityapolianskii.github.io/secretscan-app-store-pages/find-passport-id-photos-iphone.html)

SecretScan is a focused photo-privacy audit, not a cloud vault, antivirus, password manager, or guarantee that every sensitive image will be found. If a credential may have been exposed, rotate or revoke it; deleting its screenshot does not invalidate it.

## Website source

Static pages for App Store Connect URLs:

- `index.html`: English acquisition homepage.
- `es/index.html`, `de/index.html`, and `ru/index.html`: focused localized homepages with reciprocal `hreflang` and distinct App Store campaigns.
- `privacy.html`: Privacy Policy URL.
- `support.html`: Support URL.
- `scan-api-keys-in-screenshots.html`: developer-intent acquisition page.
- `find-recovery-codes-in-photos.html`: account-recovery intent acquisition page.
- `find-passwords-in-iphone-photos.html`: password-screenshot intent guide and cleanup path.
- `find-passport-id-photos-iphone.html`: passport and identity-document photo audit guide.
- `iphone-sensitive-screenshot-checklist.html`: evergreen manual-audit guide.
- `search-screenshots-by-text-iphone.html`: built-in Photos and Spotlight text-search guide.
- `redact-sensitive-information-iphone-screenshot.html`: built-in Markup redaction guide and reversible-edit caveat.
- `remove-location-from-iphone-photos.html`: built-in Photos location-metadata guide and product-boundary note.
- `screenshot-exposure-check.html` and `assets/exposure-check.js`: local-only screenshot exposure triage with no sensitive input, upload, persistence, analytics, or post-load network request.
- `mac-private-file-scan.html`: Mac demand-validation page.
- `guides.html`: crawlable guide hub with a nine-item structured index and a distinct App Store campaign.
- `robots.txt` and `sitemap.xml`: crawl discovery.
- `feed.xml`: Atom feed for guide and tool discovery without analytics or user tracking.
- `llms.txt`: concise product boundaries and canonical sources for AI-assisted discovery.
- `53e8f1b23307486a8c13ea79ed325d80.txt`: IndexNow ownership key for URLs under this GitHub Pages path.
- `assets/og-card-source.html` and `assets/og-card.png`: reproducible 1200×630 social preview.
- `assets/exposure-check-card-source.html` and `assets/exposure-check-card.png`: reproducible tool-specific 1200×630 social preview.

## Preview

```sh
cd app-store-pages
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173`.

## Publish

These files can be published on any static host, including GitHub Pages, Cloudflare Pages, Netlify, or a normal web server.

The published support contact is `liweba@gmail.com`.
