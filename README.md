# Vivek Surati — AI / Generative AI Engineer Portfolio

A responsive, dark editorial portfolio built with Next.js App Router, TypeScript, Tailwind CSS 4, Framer Motion and Lucide React. It uses a lightweight Canvas particle field and CSS-driven ambient visuals rather than a heavy WebGL scene.

## Requirements

- Node.js 20.9+ (Node 22 recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the framework preset as **Next.js** and the build command as `next build`.
4. Deploy. No environment variables are required.

## Update portfolio content

- `lib/data.ts` contains profile details, skills, projects, experience and education.
- `app/globals.css` contains the visual system, responsive layouts and motion styling.
- `components/ambient-canvas.tsx` controls the interactive particle background.
- `components/project-art.tsx` contains the abstract project illustrations.
- `public/Vivek-Surati-Resume.pdf` is the resume download asset.

Project-specific repository and live-demo URLs were not included in the supplied resume, so the project cards intentionally link to the verified GitHub profile rather than inventing individual URLs. The resume describes the first and fourth projects as live on Vercel and the second and third as live on Streamlit.

## Accessibility and performance notes

- Responsive desktop, tablet and mobile layouts.
- Keyboard-accessible native links and menu button.
- Reduced-motion preference disables the ambient canvas and minimizes transitions.
- Canvas is capped at 64 particles and device pixel ratio 1.5.
- No backend or environment variables are required; contact uses a real `mailto:` link.

## Verification

The project was authored with TypeScript and production configuration. A production build could not be run in the authoring environment because npm registry requests failed with a DNS resolution error (`EAI_AGAIN`). Run `npm install`, `npm run typecheck` and `npm run build` in an environment with package-registry access before deployment.
