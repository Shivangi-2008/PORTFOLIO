# My Portfolio Website

Simple portfolio site made with plain HTML, CSS and JavaScript (no frameworks).

## Files
- `index.html` – all the page content/sections
- `style.css` – all the styling, responsive for mobile/tablet/desktop
- `script.js` – project data, modal popup, mobile menu, form validation, back-to-top button
- `resume.pdf` – **you need to add your own resume file here** with this exact name, so the "Resume" button in the nav works

## Things I still need to do myself (can't be done with code alone)
1. **Custom domain** – buy a domain (like `shivangsingh.com`) from a site like Namecheap/GoDaddy and point it to my hosting.
2. **SSL / HTTPS** – most free hosts (GitHub Pages, Netlify, Vercel) give this automatically once the site is deployed.
3. **Google Analytics** – there's a commented-out script at the bottom of `index.html`. Just create a free GA account, get a Measurement ID (looks like `G-XXXXXXXXXX`), paste it in, and uncomment the script.
4. **Real project links** – each project card in `script.js` (the `projects` array) has a `demoLink` and `githubLink` field, both currently set to `"#"`. Replace those with the real live-demo URL and GitHub repo URL for each project. Also swap the `image` placeholder URLs (`picsum.photos`) for real screenshots.
5. **GitHub icon + social links** – the GitHub icon in the nav and the LinkedIn/GitHub links in the Contact section still point to `your-github` / `your-linkedin` placeholders in `index.html`. Update those with my real profile URLs.
6. **Contact form activation (important!)** – the form uses FormSubmit (formsubmit.co), a free service that emails form submissions straight to `singhshivangi222203@gmail.com` with no backend needed. The **first time** anyone submits the form, FormSubmit sends a one-time activation email — I need to open it and click "Confirm" (check spam folder just for this one email). After that, every submission lands in the inbox normally. If the email ever needs to change, update it in both the form's `action` attribute in `index.html` and the `fetch()` URL in `script.js`.

## Design
The site uses a dark theme: near-black background, serif "Playfair Display" headings, monospace "JetBrains Mono" for the small uppercase labels (like TOOLKIT, SELECTED WORK) and tags, and "Inter" for body text. The Skills section (`#skillsGrid`) and Projects section (`#projectsGrid`) are both built from JS arrays at the top of `script.js` — add or edit a skill/project there and the card is generated automatically. Project cards show a category tag, description, tech pills, and "Live demo ↗" / "GitHub ↗" links. The Education section (`#education`) uses the same timeline styling as Experience — copy a `.timeline-item` block in `index.html` to add a new degree or certification.

## Resume preview
The "Resume" nav link scrolls to a Resume section that shows `resume.pdf` in an embedded preview (`<iframe>`), with a separate "Download Resume" button below it. Just make sure `resume.pdf` is in the same folder as `index.html`.

## How to run it
Just open `index.html` in a browser — no build tools or installs needed.
To deploy for free, I can drag-and-drop this folder into Netlify, or push it to a GitHub repo and turn on GitHub Pages.
