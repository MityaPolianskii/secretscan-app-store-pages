"""Generate compatibility pages for previously published GitHub Pages URLs."""
from pathlib import Path
from html import escape
import json

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public'
BASE = 'https://secretscan-analytics.web.app/'
for source in PUBLIC.rglob('*.html'):
    relative = source.relative_to(PUBLIC)
    path = relative.as_posix()
    destination = BASE + (path[:-10] if path.endswith('index.html') else path)
    language = path.split('/')[0] if '/' in path else 'en'
    page = f'''<!doctype html>
<html lang="{language}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SecretScan has moved</title>
<link rel="canonical" href="{escape(destination, quote=True)}">
<script>window.location.replace({json.dumps(destination)} + window.location.search + window.location.hash);</script>
<meta http-equiv="refresh" content="0; url={escape(destination, quote=True)}">
</head>
<body><p>SecretScan is now hosted on Firebase. <a href="{escape(destination, quote=True)}">Continue to SecretScan</a>.</p></body>
</html>
'''
    target = ROOT / relative
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(page)
# Keep machine-readable legacy discovery endpoints pointing to the new origin.
for name in ['feed.xml', 'sitemap.xml', 'sitemap.txt', 'llms.txt', 'robots.txt']:
    (ROOT / name).write_bytes((PUBLIC / name).read_bytes())
(ROOT / '.nojekyll').touch()
print('Generated', len(list(PUBLIC.rglob('*.html'))), 'legacy redirects.')
