# V1 verification — 6 September 2026

Verified against the production build served locally.

- Next.js production build: passed; all five content routes are prerendered.
- TypeScript and ESLint: passed.
- Contact validation and draft encoding: three tests passed. No email sent.
- Chromium: all five routes returned 200, one H1 and their expected page titles. The custom missing-page route returned 404.
- Responsive: 30 checks across five routes at 360, 390, 768, 1024, 1440 and 1728 pixels; no horizontal overflow.
- Accessibility: axe WCAG A/AA checks across five routes in both light and dark themes; zero reported violations after improving the contrast of gold text.
- Interactions: system selection by click and arrow key, ecosystem disclosure, persistent theme, mobile modal/Escape, local email draft, video play/pause/seek and reduced-motion behavior passed.
- Firefox: all five routes, mobile navigation and H.264 playback passed without runtime errors.
- WebKit: all five routes rendered without overflow. A separate test of normal client navigation, mobile menu and video passed with no runtime errors or failed requests. Rapid forced navigations in the initial test cancelled speculative requests; normal click navigation was retested specifically.
- Visual review: desktop/mobile hero, systems, ecosystem, research preview, founder note and portrait crop were inspected. The IndabaX banner is outside both visible portrait crops.
- Media: 120 locally rendered Blender frames encoded into an 8-second H.264 film, approximately 237 KB. The editable `.blend` and authoring script are present.
- Environment values: no configured secret values were found in the generated public JavaScript, CSS, JSON or HTML checked. Environment files are ignored and no ElevenLabs requests were made.

QA reports and screenshots are in the ignored `artifacts/qa/` directory. Automated scans do not establish complete accessibility conformance. Physical iOS/Android devices, the eventual Vercel deployment, public domain and real email-client delivery have not been verified. The form creates a draft and does not send it.
