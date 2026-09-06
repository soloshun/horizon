# Horizon

A personal, early-stage future-living initiative. A custom Next.js website for the vision, research and architectural studies behind Horizon.

The site is built in this directory. The original `horizon_website_handoff/` material is preserved; the ZIP was not opened or used.

## Run locally

Use Node.js 22.13 or newer and npm. `.nvmrc` selects the Node 22 LTS line.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. The current project uses Next.js 16.3.4, React 19.2.8 and Motion 13.2.0, with exact dependency versions and a lockfile. Fonts are self-hosted through `next/font/local`: Manrope and Cormorant Garamond, licensed under the SIL Open Font License by their Fontsource packages.

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

`npm run start` serves the production build. `npm run format` formats the authored source.

## Pages and editing

- `/`: the vision, integrated systems map, ecosystem, Africa-first perspective, H1 preview and founder note.
- `/vision`: the reasoning, design principles and long-term progression.
- `/research`: H1 architectural study, custom video player, output statuses and study note.
- `/about`: Solomon’s portrait and personal perspective.
- `/collaborate`: a local email-draft form addressed to `solomoneshun373@gmail.com`.

Edit shared content in `content/`, route copy in `app/`, and design tokens in `app/globals.css`. Light and dark themes use the same token system. The initial theme follows the device preference; an explicit choice is stored locally. No cookie banner or analytics integration is needed for the current implementation.

The contact form validates the draft locally, then lets the visitor open an email app or copy it into Gmail. The site never claims an enquiry was sent. There is no server collection, database, email provider or paid form service.

## Vercel

This is a standard Next.js App Router project, with all five content pages prerendered. No custom adapter, database, deployment plugin or paid API is required.

1. Add the project to your Git repository and import it into Vercel, or use the Vercel CLI after signing in.
2. Select the **Next.js** framework preset and this directory as the root. Keep the normal `npm run build` command.
3. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain. If it is omitted on Vercel, metadata falls back to `VERCEL_PROJECT_PRODUCTION_URL`.
4. Optionally set `NEXT_PUBLIC_CONTACT_EMAIL`; the approved Gmail is already the default.
5. Deploy a preview and verify its pages and media before promoting it to production.

No Vercel project or account has been linked or deployed from this workspace. `.vercelignore` excludes handoff documents, Blender working files, QA output and local environment files from CLI uploads. A custom domain is optional. Choose a hosting plan appropriate to the project’s actual use; the application itself has no paid runtime dependencies.

Official references: [Next.js installation](https://nextjs.org/docs/app/getting-started/installation), [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs).

## Images, video and Blender

See [the asset guide](docs/ASSETS.md) for provenance, the image-generation prompt, replacement instructions and portrait framing. Every architectural image is labelled as a concept. The interior artwork includes illustrative interface values, never claimed as measurements.

The actual editable Blender model is `artifacts/blender/horizon-h1-study.blend`. The reproducible authoring script is `scripts/build-h1-study.py`. This is an architectural massing concept, not a structural, climate or energy simulation.

```sh
/Applications/Blender.app/Contents/MacOS/Blender -b --python scripts/build-h1-study.py
HORIZON_RENDER_ANIMATION=1 /Applications/Blender.app/Contents/MacOS/Blender -b --python scripts/build-h1-study.py
ffmpeg -framerate 15 -i artifacts/blender/frames/%04d.png -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p -movflags +faststart public/video/h1-study.mp4
```

The current film is silent, runs for eight seconds and is approximately 237 KB. `HorizonVideo` supports play/pause, seeking, mute, fullscreen, poster fallback, keyboard controls and a visual description. Ambient mode is supported but not enabled for this study. Reduced-motion and mobile preferences prevent ambient autoplay.

ElevenLabs is optional and currently unused. No audio generation endpoint exists and no key is needed to run the site. Keep any future `ELEVENLABS_API_KEY` server-only in an ignored environment file; never use a `NEXT_PUBLIC_` prefix. No user key is included in public assets or client code.

## Verification

Browser checks live in `scripts/qa.mjs`. They inspect every content route at 360, 390, 768, 1024, 1440 and 1728 pixels, run axe checks in both themes, and exercise the systems map, keyboard navigation, ecosystem, theme persistence, contact draft, video and reduced-motion behavior. They never send email.

```sh
npx playwright install chromium
npm run test:browser
```

For a separately installed Chromium, set `HORIZON_BROWSER_PATH`. For a production preview on another port, set `HORIZON_QA_URL`. Results and screenshots are written to the ignored `artifacts/qa/` directory. Chromium automation is not a substitute for a final check on physical iOS and Android devices.

## Content boundaries

The ecosystem is a capability roadmap. No completed property, deployed infrastructure, investor, partner, client or performance metric is asserted. H1 has an architectural model and a concept systems diagram. Energy simulation, hardware, digital twin and resident-interface work remain planned.

Assumptions and launch details are recorded in [docs/DECISIONS.md](docs/DECISIONS.md).
