# Dhong Yeon Cheong — academic website

A complete static website for GitHub Pages. No installation, build, account integration, or API keys are needed. The site works at both `https://USERNAME.github.io/` and `https://USERNAME.github.io/REPOSITORY/` because its file links use relative paths.

## Publish with GitHub's website

1. Sign in to GitHub and create a **public repository** named `USERNAME.github.io`, using your actual GitHub username. Add a README to initialize the repository.
2. Extract `academic-website-github-pages.zip` on your computer.
3. Open the repository and choose **Add file → Upload files**.
4. Upload the **contents** of the extracted folder: `index.html`, `publications.html`, the entire `assets` folder, and this README. Keep the folder structure. `index.html` must be at the repository root, not inside an `academic-website` subfolder. Include `.nojekyll` if your file picker shows it; this site also works without it.
5. Click **Commit changes**. GitHub may ask you to confirm replacing its initial README.
6. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/ (root)**, then **Save**.
7. Open `https://USERNAME.github.io/`. Deployment may take up to 10 minutes. If publication fails, inspect the repository's **Actions** tab.

GitHub's instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

For an existing personal-site repository, upload these files to that repository instead. A differently named repository normally publishes at `https://USERNAME.github.io/REPOSITORY/` with the same Pages settings.

## Preview locally

Double-click `index.html` to open it in your browser. Both pages, publication search, portrait, and CV work without a server.

Alternatively, open a terminal in this folder and run:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. Press Control-C in that terminal when finished.

## Files and editing

- `index.html`: introduction, research summaries, selected papers, academic background, honors, service, and contact information.
- `publications.html`: 19 publications from the supplied CV, with author lists, arXiv links, and journal links where listed in the CV. Search works in the browser.
- `assets/style.css`: shared design and responsive layouts. Colors and font choices are defined at the top.
- `assets/site.js`: mobile menu and publication search behavior. All academic content remains readable when JavaScript is disabled.
- `assets/portrait.jpg`: a web-optimized JPEG copy of the updated EFI portrait supplied by the user. Replace it with a square portrait to change the photograph.
- `assets/cv-dhong-yeon-cheong.pdf`: unchanged copy of `cv_cheong.pdf`. Replace this file with a newer CV using the same filename to preserve existing links.
- `assets/favicon.svg`: small browser-tab icon.
- `.nojekyll`: tells GitHub Pages to serve the files directly.

Edit the HTML files with a text editor or GitHub's pencil icon, and commit the changes to update the website. No rebuilding is necessary. To add a publication, copy a complete `<li class="paper">` entry in `publications.html`, give its `id` and heading `id` unique arXiv numbers, update `aria-labelledby`, and edit the title, authors, links. Add a year section if necessary. Update the initial count in `results-count`; JavaScript also calculates this count automatically. Update the homepage separately when changing selected papers.

## Content provenance

The source is the user-supplied `main-2.tex` and matching five-page `CV-2.pdf`, provided October 25, 2026. Biographical dates, institutional roles, awards, email, talks, service, and publication metadata are drawn from these files. Research descriptions summarize the stated interests and publications. The downloadable CV is a byte-for-byte copy of `CV-2.pdf`; the supplied source files and older CV files are unchanged.

- The website includes all 19 publication titles. The source assigns arXiv:2607.27313 to both **Continuous Measurement of Quantum Axion Dark Matter** and **Suppressed Quantum Effects of Weakly Coupled Waves**. The website corrects the former to **2610.30250**, verified directly at https://arxiv.org/abs/2610.30250 on October 25, 2026. The supplied PDF retains its original identifier.
- The three newest papers and their identifiers were checked against the arXiv records at https://arxiv.org/abs/2610.30250, https://arxiv.org/abs/2607.27313, and https://arxiv.org/abs/2603.22394. Journal references for the 2025 preprints are updated from the supplied CV.
- Papers are grouped by **preprint year**, not journal publication year. Missing journal entries do not imply that a paper is unpublished today.
- The affiliation now includes EFI, KICP, and the Leinweber Institute for Theoretical Physics, with profile links supplied in the CV. Academic positions and education are listed separately.
- The homepage includes the updated KICP seminar organizer role (October 2026–June 2027), the corrected Thunch/Funch term (October 2025–June 2026), and the three referee journals. No referee start date is inferred because the updated CV does not give one.
- Talks and presentations are omitted from the webpage at the user's request; the downloadable CV retains the full record.
- The portrait is the updated EFI photograph supplied by the user on October 25, 2026, converted from Display P3 to standard sRGB JPEG and resized for the web, with the photo content unchanged. The homepage image URL includes a version query so browsers refresh the previous photograph.
- No GitHub username, custom domain, ORCID, Google Scholar profile, or analytics service has been guessed or configured.

The configured production address is https://dhongyeon.github.io/. This repository uses `.github/workflows/publish.yaml` to deploy the static site on pushes to `main`. The workflow publishes only the prepared HTML and its assets; the previous Hugo source is retained in Git history and in the local backup.

## Presentation preferences

Publication subject categories and topic filters are removed. The homepage uses compact 18px section headings, without the large decorative headings. The talks section is removed, and the contact label remains `05 / Contact`.
