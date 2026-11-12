# nuyumiii — personal site

The website for my YouTube channel [@nuyumiii](https://youtube.com/@nuyumiii).

Built by hand with plain HTML, CSS and JavaScript. No frameworks, no build step.

## Files

- `index.html` — the content (text, videos, links)
- `style.css` — the design (colours, layout, spacing)
- `script.js` — small behaviours (footer year, mobile menu)

## Running it

Double-click `index.html`, or serve it locally:

```
python -m http.server 8000
```

Then open http://localhost:8000

## Editing

- Colours and spacing: the `:root` block at the top of `style.css`
- Stats that go stale over time: the `.stats` block in `index.html`
- To add a video: copy one `<article class="card">` block and change the ID

## Notes

Channel numbers (81.8K subscribers, 354 videos, 607M views) were accurate as of
12 Nov 2026 and are updated by hand.

Some footage used on the channel is third-party material used for commentary
and education. All rights belong to their respective owners.
