# AGENTS.md

## Project overview
This workspace contains a static storefront website for NIMBOTICS, a smart umbrella brand. The site is built with plain HTML and CSS only. There is no framework, build pipeline, backend, or automated test suite in this repo.

## Key files
- `index.html`: primary landing page and storefront layout.
- `style.css`: all visual styling, layout rules, responsive behavior, and the product lineup design.
- `images/`: general site assets.
- `products/`: product art used in the collection section.

## Conventions for AI agents
- Keep changes within the existing static-site model: plain HTML and CSS only.
- Prefer small, targeted edits that preserve the existing branding and structure.
- Maintain the current dark-tech aesthetic: black/charcoal backgrounds, cyan highlights, clean sans-serif typography, and subtle glass-like panels.
- Follow the existing semantic structure in `index.html` when adding new sections or cards.
- Use relative asset paths from the project root, such as `images/...` and `products/...`.
- Do not assume the presence of a backend, database, or package manager unless the task explicitly adds them.

## Validation
There is no app build step. To validate visually:
1. Open `index.html` directly in a browser, or
2. Serve the folder locally with a simple static server, for example:
   `python -m http.server 8000`
3. Open `http://localhost:8000` and confirm the landing page renders correctly.

## Typical tasks
- Update content, copy, or product details in `index.html`.
- Adjust color, spacing, typography, or layout in `style.css`.
- Replace or add product imagery in `products/` while keeping the same file naming convention.
- Keep accessibility and responsiveness in mind when editing the storefront.
