# Asset guide

## Production assets

| File                                   | Origin                                             | Use                                                     |
| -------------------------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| `public/images/horizon-home.webp`      | Built-in image generation, September 2026          | Home hero; fictional architectural concept              |
| `public/images/horizon-community.webp` | Supplied `horizon_eco_luxury_sunset_community.png` | Africa-first section; concept                           |
| `public/images/horizon-interior.webp`  | Supplied `horizon_smart_living_at_golden_hour.png` | Vision page; concept with illustrative interface values |
| `public/images/h1-study.webp`          | Locally rendered Blender model                     | Research poster and homepage study preview              |
| `public/video/h1-study.mp4`            | 120 locally rendered Blender frames                | Silent 8-second film, 960 × 600, H.264                  |
| `public/images/solo1.webp`             | User-supplied personal photograph                  | Founder page and founder note                           |
| `public/images/horizon-social.jpg`     | Code-authored branded typographic card             | Open Graph and social preview                           |
| `app/icon.svg`                         | Provisional parent-mark interpretation             | Favicon                                                 |

Original reference assets remain in the handoff directory. The original generated concept is preserved at `artifacts/generated/horizon-home-original.png`. All reference images were inspected before selection. The ZIP was ignored.

## Image-generation record

Tool: built-in `image_gen` (not a paid API integration in the website). One original image was generated for the project.

Final prompt:

> Use case: stylized-concept. Asset type: an original architectural concept visual for the Horizon intelligent-environments website. Create one cinematic landscape 16:9 architectural editorial image, at the highest practical landscape resolution. A contemporary, believable West African courtyard home and its small landscaped neighbourhood at late afternoon. A beautifully composed low-slung two-storey ivory lime-plaster and pale stone home with deep horizontal roof overhangs, bronze vertical screens, warm timber soffits, subtle flush solar roof panels, a shaded veranda and native tropical gardens. Human scale, tasteful restrained architecture. Three contemporary Black African residents naturally enjoying the shaded walkway, small in the scene. Building fills right two thirds, left has generous open warm sky and darker landscaped foreground suitable for white web text overlay. Atmospheric hazy golden sunlight from upper left, mature trees framing the view, precise architectural perspective, film-like realistic material textures, elegant ArchDaily magazine quality. Natural muted olive greens, warm ivory, soft gold and dark brown. No pools, fountains, glass towers, mountain skyline, neon, futuristic vehicles or excessive luxury props. No words, letters, signage, logos, watermarks, UI, diagrams or borders anywhere. This is a fictional design exploration, not a real completed development. Landscape composition.

## Replacing media

Keep filenames to replace an asset without changing imports, or update its route/component and metadata together. Use WebP/AVIF for photographs and reserve layout dimensions. The hero is preloaded; lower media is lazy-loaded. Avoid presenting future renders as completed developments.

To replace the film, update `src`, `poster`, `caption` and `transcript` in `app/research/page.tsx`. Match the actual duration in the caption. Meaningful narration needs captions in addition to a transcript; do not add autoplay audio.

## Portrait framing

The source photo is 2000 × 1333. `FounderPortrait` and `.portrait-crop` display the approximate rectangle x=575, y=330, width=900, height=800. The bottom event banner lies outside it. The compact portrait uses a tighter face crop. Responsive `sizes` account for the enlarged source, preserving sharpness. The original file is not edited or regenerated.

## Blender artifact

`artifacts/blender/horizon-h1-study.blend` is editable in Blender. The script creates named objects and materials for wings, overhangs, solar modules, glazing, screens, vegetation, equipment and an indicative energy route. These are visual placeholders, not specified products or validated engineering.

Regenerating the model overwrites the generated `.blend` and still. Save your own edited version under a different filename before rerunning the script. The script is opt-in; the website build never launches Blender.
