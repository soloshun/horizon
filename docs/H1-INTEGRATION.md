# Horizon H1 integration

The source project lives independently at `../horizon-h1`. The user chose this structure so the personal research can run and develop separately. Horizon hosts its compiled release at `/research/h1`.

## Website ownership

- `app/research/h1/page.tsx`: Next.js route and metadata.
- `app/research/h1/H1Client.tsx`: client-only dynamic import and asset base URL.
- `vendor/horizon-h1-0.1.0.tgz`: versioned compiled package, installed as `@horizon/h1`.
- `vendor/h1-release.json`: release integrity and provenance.
- `public/h1/`: deployable model, poster and data.

All research/source/model editing happens in the sibling project. The website does not depend on that sibling folder at build time. Do not replace the artifact dependency with `file:../horizon-h1` or a symlink. The full original handoff remains untouched in the website directory and is excluded from Vercel deployment.

## Updating H1

From the separate project:

```sh
npm run release:website -- ../horizon
```

Then from this website:

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

For browser checks, start the app and run `node scripts/qa-h1.mjs`. `HORIZON_QA_URL`, `HORIZON_BROWSER_PATH` and `H1_BROWSER` configure the target and browser. The supplied local Chromium path is only a development convenience; it is not used in deployment.

Commit the tarball, public assets and lockfile together when ready. Vercel uses the normal Next.js build and requires no Blender, Python, API key or sibling checkout. There is no separate H1 deployment required to serve the integrated page. The sibling can also build its own static preview with Vite.

## Public status

This release contains a 3D research concept and ten synthetic scenarios. Its tested balances do not establish equipment sizing, climate performance, potability, compliance or a built prototype. The original research page and silent architectural film remain, with a new link to the interactive study and updated output statuses.

The independent research findings are in `../horizon-h1/research/FINDINGS.md`. The public page includes component rationale and a source library. No paid external service, live-device control or ElevenLabs call is required or used.
