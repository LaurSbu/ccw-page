# Creative Complex Works SRL — Website (ccw-page)

This repository contains a simple static website for Creative Complex Works SRL suitable for publishing with GitHub Pages.

Contents
- `index.html` — landing page
- `assets/styles.css` — styles
- `assets/script.js` — small JS helpers

Quick local preview
1. Open `index.html` in a browser (double-click) to preview locally.
2. For a simple dev server:
   - Python 3: `python -m http.server 8000` (then open http://localhost:8000)
   - Node: `npx serve` or any static server

Publish with GitHub Pages (instructions)
1. Commit these files to your repository root (branch `main` or `gh-pages`).
2. In GitHub, go to the repository Settings → Pages.
3. Under "Source", choose:
   - Branch: `main` (or `gh-pages`) and folder: `/ (root)`
4. Save. GitHub Pages will publish the site to:
   - `https://<your-username>.github.io/<repository>/`
   - Or if your repo is named `ccw-page` and your username is `LaurSbu`: `https://LaurSbu.github.io/ccw-page/`

Optional: Use a custom domain
- Add a `CNAME` file with your domain (single line) and configure your DNS (A records or CNAME depending on domain provider).
- Enable HTTPS in Pages settings once DNS is set.

Optional: Use a hosted form service for contact
- The included form uses `mailto:` as a fallback.
- For a production contact form, use Formspree, Netlify Forms, or a small serverless endpoint.
  - Example: Formspree — sign up, get an endpoint, then replace form `action` with the Formspree endpoint and set method="POST".

Example git commands
```
git checkout -b publish-site
git add .
git commit -m "Add website for Creative Complex Works SRL"
git push origin publish-site
# Then open a PR or merge to main and enable Pages from main branch root or push to gh-pages branch.
```

Need help?
- I can push these files directly to your `LaurSbu/ccw-page` repo once the repository has a default branch (for example after you create a simple README via the GitHub UI). Tell me when that's done and I'll push them to `main`.
- I can also add a CNAME, improve copy, add translations, or wire a hosted contact form (Formspree/Netlify) if you prefer.

Repository owner: LaurSbu
Repository name: ccw-page
Branch: main
Commit message: Add website for Creative Complex Works SRL
