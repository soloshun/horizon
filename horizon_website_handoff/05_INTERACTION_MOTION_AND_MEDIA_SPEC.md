# HORIZON — Interaction, Motion and Media Specification

## Principle

The site should feel alive without becoming noisy.

Motion is part of the Horizon narrative:

**a horizon appears → systems connect → intelligence scales → the environment comes alive.**

---

# 1. Global page motion

On initial load:

1. background appears;
2. thin Horizon line draws horizontally;
3. logo fades / resolves;
4. hero headline appears with subtle vertical mask;
5. supporting copy appears;
6. media begins;
7. navigation settles.

Do not block the visitor with a long intro animation.

Maximum intro before useful content:
~1.5 seconds on normal devices.

---

# 2. Scroll behavior

Use native browser scrolling.

Optional smooth interpolation may be used very lightly, but:
- do not hijack scroll;
- do not make trackpad movement feel delayed;
- do not compromise accessibility.

Section transitions:
- fade;
- y translation of ~20–40px;
- image clip reveal;
- slow parallax;
- thin-line expansion.

---

# 3. Horizon-line motif

The curved / horizontal Horizon line can become a recurring interaction motif.

Possible uses:

- section separators;
- timeline progress;
- loading state;
- hover underline;
- diagram connector;
- video progress line;
- cursor detail;
- page transition.

Do not overuse it.

The brand symbol should remain special.

---

# 4. Ecosystem interaction

Desktop:
Show the five Horizon divisions in one wide composition.

Interaction:
- hover/focus a division;
- corresponding symbol becomes slightly more prominent;
- short description appears;
- a thin connector animates back to the parent Horizon mark.

Mobile:
Vertical sequence with simple reveal.

No spinning 3D logo carousel.

---

# 5. Integrated systems diagram

Create an interactive diagram with:

Center:
`HORIZON ENVIRONMENT`

Nodes:
- Intelligence
- Energy
- Water
- Connectivity
- Buildings
- Mobility
- Environment
- Community

On hover/tap:
- one node highlights;
- the system relationship subtly animates;
- short description appears.

Potential implementation:
SVG + React + Motion.

Avoid Canvas/WebGL unless needed.

SVG gives:
- sharp visuals;
- accessibility;
- lightweight animation;
- easy responsiveness.

---

# 6. Hero video

Requirements:

- `muted`
- `playsInline`
- loop only if ambient
- optimized H.264 / WebM
- poster image
- lazy-load larger alternate formats
- do not force video on slow network/mobile if performance suffers
- use reduced-motion fallback image

Possible desktop:
15–25 second seamless loop.

Possible mobile:
static poster or very lightweight clip.

---

# 7. Blender integration

Future Blender hero can portray:

### Scene idea A — From system to place
Start with a thin glowing horizon line.

It becomes:
- a wireframe home;
- energy flows appear;
- sensors appear;
- greenery/materials resolve;
- camera pulls back;
- multiple homes emerge;
- final frame suggests community scale.

### Scene idea B — One intelligent home
Slow camera movement through:
- exterior;
- solar roof;
- energy storage;
- interior climate;
- wall/interface;
- invisible sensor overlays;
- evening lighting.

### Scene idea C — Scale
Single home → street → community → distant skyline.

Keep the visual believable.

No flying cars required.

---

# 8. Custom video component

Component:
`<HorizonVideo />`

Props can include:
- src
- poster
- ambient
- autoplay
- loop
- title
- caption
- transcript
- aspectRatio

Controls:
- play/pause
- mute/unmute
- timeline
- fullscreen
- optional captions

Keyboard:
- Space toggles play if focused
- M mute
- F fullscreen
- Escape exits fullscreen

Use visible focus states.

---

# 9. Page transitions

Optional.

If used:
- 300–600ms crossfade / wipe;
- horizon line can sweep across;
- preserve route speed.

Do not delay navigation merely to show animation.

---

# 10. Microinteractions

Links:
subtle tracking or underline transition.

Buttons:
minimal 1–2px movement or background transition.

Cards:
avoid dramatic lift shadows.

Cursor:
custom cursor is optional and should only exist on desktop if it genuinely improves the experience.

---

# 11. Performance constraints

Motion should degrade gracefully.

Targets:
- avoid blocking JS;
- lazy-load heavy 3D;
- use dynamic import for WebGL;
- use CSS where Motion is unnecessary;
- optimize LCP hero media;
- reserve aspect ratios to avoid layout shift;
- avoid large uncompressed PNGs in production.

Prefer AVIF/WebP for photographic media.

Use video rather than huge animated image sequences.

---

# 12. Accessibility

Mandatory:

- semantic headings;
- keyboard navigation;
- focus states;
- `prefers-reduced-motion`;
- alt text;
- captions/transcripts for meaningful video;
- sufficient contrast;
- avoid text embedded inside important images;
- touch targets ≥ ~44px;
- no interaction available only through hover.

The site can be luxurious and accessible at the same time.
