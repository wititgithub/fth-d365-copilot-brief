# D365 + Copilot · Fujitsu Thailand

Motion edition 02 of a bilingual, animated ten-slide executive presentation. Scope: Dynamics 365 Finance and Supply Chain Management.

## Preview

Requires Node.js 20+; no package installation is needed.

```powershell
Set-Location 'C:\FTH\FTH-D365_Copilot_Codex'
npm start
```

Open `http://127.0.0.1:4173`. A static host can serve the same files; all asset paths are relative for GitHub Pages repository paths. The presentation is not connected to a D365 tenant.

## Controls

- TH / EN switches the complete slide and narration track.
- Left/right arrows or swipe navigate. Hashes `#1` through `#10` open individual slides.
- Play is an eight-minute silent timeline; Space plays/pauses when focus is on the presentation.
- Voice is on by default, but nothing plays until the user presses Play. Thai uses the included **Microsoft Niwat Neural MP3s**, generated with the installed `edge-tts` client to Microsoft's online Edge speech service. The site serves the finished files and makes no live synthesis request. English uses installed browser/system voices. Alternative browser voices remain selectable in the script panel.
- Thai narration has been rewritten for listening, with fewer embedded English words, pronounceable product names and complete paragraph pauses. Measured clip durations are in `assets/audio/manifest.json`; the clips leave breathing room within the 480-second schedule.
- With voice on, a slide waits for narration to finish if necessary. Thai MP3 pause/resume preserves the current audio position. A browser-synthesized voice restarts the slide's narration on resume. Opening a panel pauses playback. Returning from a background tab requires Play again. The script panel also offers an audio player for reviewing one Thai slide at a time.
- N opens script, E evidence, F fullscreen, M pauses/resumes motion. Overview provides direct slide navigation. Reduced-motion OS settings are respected.
- Closing slide keeps the supplied image intact and adds a floating/perspective and orbit treatment. It is **not** a generated 3D animation or animated internal ribbon.

The Google Fonts stylesheet is the only remote presentation dependency; system fonts are the fallback. Citations open external primary sources only when selected. No analytics, user accounts, runtime AI API calls or secrets are used. Images and Thai narration are included as local assets.

## Review material

- `docs/narration.md`: Thai and English scripts, planned per-slide cues totalling 8 minutes **per language**, subject to rehearsal.
- `docs/research.md`: evidence, standard-capability boundaries, applicability limitations and pilot design.
- Evidence buttons show sources for the current slide. No claim that an extension is universally absent from all current standard D365 configurations is made.

## Validation

```powershell
npm test
npm run check
```

Browser review is also needed for motion, text fit, controls and installed voices. The production bars are explicitly conceptual; no customer statistics or claimed ROI are used.

## GitHub publication

The approved motion edition 02 is published from the public repository [wititgithub/fth-d365-copilot-brief](https://github.com/wititgithub/fth-d365-copilot-brief). The share URL is [the GitHub Pages presentation](https://wititgithub.github.io/fth-d365-copilot-brief/).

GitHub Pages serves the `gh-pages` branch. Stage the reviewed static files with `node .deployment/stage-site.mjs`; publish that directory to `gh-pages` after validation. Updating `main` alone does not publish a new presentation. An optional manual Actions workflow is preserved as `.deployment/pages-workflow.example.yml`; it is not active. The site and repository are publicly accessible; no customer data or secrets belong here.

PowerPoint is deferred until the web version is approved, as requested. SVG/CSS motion will need a separate PowerPoint animation/video conversion decision.

## Assets

- `assets/closing-original.png`: exact user attachment, unchanged.
- `assets/fujitsu-red.png`: original Fujitsu symbol mark downloaded from `https://www.fujitsu.com/imgv5/common/symbolmark.png`, preserved proportions.
- `assets/fujitsu.svg`: original white symbol mark from `https://www.fmworld.net/fmv/img2019/common/symbolmark.svg`, retained as source asset.
- `assets/hero-3d-v2.png`, `ap-3d-v2.png`, `inventory-3d-v2.png`, `warehouse-3d-v2.png`, `production-3d-v2.png`: original conceptual images generated using the built-in `image_gen` tool; final prompts are in `docs/image-prompts-v2.json`. They are not Microsoft screenshots or actual customer systems.
- Motion combines camera drift, light particles, a verification sweep, residual-value pulses, warehouse target scanning and production evidence trails. Raster images receive layered motion; the robotics and rendered objects are not individually rigged 3D models.
- Other diagrams: code-native SVG/CSS presentation graphics. They are illustrations of proposed workflows, not screenshots of implemented products.
- `assets/audio/th-01.mp3` through `th-10.mp3`: generated Thai narration; `manifest.json` records voice, speed and measured duration. Regeneration uses optional Python packages `edge-tts` and `mutagen` with `python generate-narration.py` (or a slide id for one clip); running the site needs neither package.
