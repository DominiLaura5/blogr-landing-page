# Blogr Landing Page

A fully responsive landing page for **Blogr** — a modern publishing platform. Built as a Frontend Mentor challenge and submitted as a Web Design Cohort capstone project.

## Live Demo

> Add your live link here after deploying  
> Example: `https://blogr-landing-page.vercel.app`

## Preview

![Blogr Landing Page Preview](https://i.imgur.com/placeholder.png)

> Replace the image above with a screenshot of your deployed site.

---

## Features

- Responsive layout across mobile, tablet, and desktop
- Animated navigation with dropdown menus
- Mobile hamburger menu with smooth slide-down panel
- Scroll-triggered animations on all content sections
- Gradient hero section with decorative SVG background
- Inline SVG illustrations (no external image assets needed)
- Accessible semantic HTML (`nav`, `main`, `section`, `footer`)
- Smooth hover states on all interactive elements

---

## Built With

| Technology | Purpose |
|---|---|
| React | UI components |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| Lucide React | Icons |
| JavaScript (ES2022) | No TypeScript |

---

## Sections

1. **Navigation** — Logo, dropdown nav links, Login / Sign Up CTAs, mobile hamburger
2. **Hero** — Headline, subtext, and call-to-action buttons on a warm gradient background
3. **Designed for the future** — Three feature blocks with editor illustration
4. **State of the Art Infrastructure** — Dark gradient section with phone mockup
5. **Free, open, simple** — Two feature blocks with abstract illustration
6. **Footer** — Product, Company, and Connect link columns

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/blogr-landing-page.git

# Navigate into the project
cd blogr-landing-page

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open your browser at `http://localhost:5173` to view the project.

### Build for Production

```bash
pnpm build
```

---

## Project Structure

```
src/
├── components/
│   └── ui/          # Reusable UI components (Button, Card, etc.)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/
│   └── Home.jsx     # Main landing page component
├── App.jsx          # Root app with routing
├── main.jsx         # Entry point
└── index.css        # Global styles & Tailwind config
```

---

## Deployment

This project can be deployed to any static hosting platform:

- **Vercel** — Connect your GitHub repo at [vercel.com](https://vercel.com)
- **Netlify** — Drag and drop the `dist/` folder at [netlify.com](https://netlify.com)
- **GitHub Pages** — Use the `gh-pages` package to publish the `dist/` folder

---

## Acknowledgements

- Challenge by [Frontend Mentor](https://www.frontendmentor.io)
- Submitted as capstone project for the Web Design Cohort
