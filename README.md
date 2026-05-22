# DevCraft — Production-Level Coding Classes Website

A modern, premium marketing website for an online coding classes platform. Built with React Router v7, TypeScript, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **Framework:** React Router v7 (Remix successor) with SSR
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Fonts:** Inter + JetBrains Mono (Google Fonts)
- **Build:** Vite

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, stats, courses, sessions, testimonials, pricing, FAQ |
| `/courses` | All courses with level filter |
| `/courses/:slug` | Individual course detail with curriculum, instructor, related sessions |
| `/sessions` | Session archive with search and course filter |
| `/sessions/:slug` | Session detail with video player, topics, resources |
| `/pricing` | 3-tier pricing with comparison table |
| `/about` | Mission, instructors, timeline, stats |
| `/contact` | Contact form + info cards + map placeholder |
| `/faq` | Accordion FAQ with category filter |

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── CourseCard.tsx
│   ├── SessionCard.tsx
│   ├── PricingCard.tsx
│   ├── FAQAccordion.tsx
│   ├── TestimonialCard.tsx
│   ├── SectionHeading.tsx
│   └── CTASection.tsx
├── data/                # Mock data (replace with API calls)
│   ├── courses.ts
│   ├── sessions.ts
│   ├── testimonials.ts
│   ├── pricing.ts
│   ├── faqs.ts
│   └── instructors.ts
├── routes/              # Page components (one per URL)
│   ├── home.tsx
│   ├── courses.tsx
│   ├── course-detail.tsx
│   ├── sessions.tsx
│   ├── session-detail.tsx
│   ├── pricing.tsx
│   ├── about.tsx
│   ├── contact.tsx
│   └── faq.tsx
├── routes.ts            # Route config
├── root.tsx             # Root layout (html/head/body)
└── app.css              # Global styles + Tailwind
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
cd learningweb
npm install
```

### Development

```bash
npm run dev
```

App runs at [http://localhost:5173](http://localhost:5173)

### Production Build

```bash
npm run build
npm run start
```

### Type Check

```bash
npm run typecheck
```

## Environment Variables

No environment variables are required. The project uses mock data out of the box.

When integrating a real backend, create a `.env` file:

```env
# API base URL (when replacing mock data with real API)
API_BASE_URL=https://api.yourbackend.com

# Analytics (optional)
GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Replacing Mock Data with Real API

All mock data lives in `app/data/`. Each file exports a typed array. To connect a real backend:

1. Replace the direct imports with `loader` functions in each route file
2. Use `fetch` inside `loader` to call your API
3. Return the data and consume via `useLoaderData()`

Example:
```ts
// In a route file
export async function loader() {
  const res = await fetch(`${process.env.API_BASE_URL}/courses`);
  const courses = await res.json();
  return { courses };
}
```

## Docker

```bash
docker build -t devcraft .
docker run -p 3000:3000 devcraft
```

## Deployment

The build output is a standard Node.js SSR app:

```
build/
├── client/   # Static assets (deploy to CDN)
└── server/   # Node.js server
```

Deploy to any Node-capable platform: Railway, Fly.io, Render, AWS, GCP, Azure.

---

Built with React Router v7 + TypeScript + Tailwind CSS v4.
