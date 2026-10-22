# Customizing the Future · Fujitsu Thailand

Cinematic Keynote edition 03 (v0.3.0). Ten visual slides on **Building Enterprise Agents with D365 and Copilot Studio**. Exactly two proposed workflows: vendor-email rescheduling and tax-document review.

[Open the presentation](https://wititgithub.github.io/fth-d365-copilot-brief/)

## Presentation

English is the default on a fresh load. EN / TH switches text, script, evidence notes and recorded narration at any time. A language change restarts the current slide narration and cue. Both languages use included neural MP3 files (English: Microsoft Guy; Thai: Microsoft Niwat). No live AI call occurs while viewing. The 480-second cue schedule includes breathing room. Press Play to start; pause/resume preserves the audio position. Opening a panel pauses playback.

Arrow keys navigate, Space plays/pauses, N opens script, E evidence, F fullscreen and M pauses motion. The ending GIF switches to a still frame for reduced-motion settings or paused motion. The original supplied image remains on the final slide as a linked inset. No PPT has been generated.

## Local preview

Node.js 20+ is sufficient; there is no package-install step.

```powershell
npm start
```

Open http://127.0.0.1:4173. For checks use `npm test` and `npm run check`.

## Evidence and assets

- docs/research.md explains existing Microsoft capabilities, the conditional custom gap and claim boundaries.
- docs/narration.md contains both complete scripts and cues.
- docs/visual-assets-v3.md records the new artwork prompts and motion implementation.
- assets/audio/v3 contains both recorded tracks. Root manifests record measured duration, cue, voice and rate.
- Regenerate narration with `python generate-narration-v3.py` using optional edge-tts and mutagen packages. Viewing needs neither.

The 70% reduction is a pilot stretch target. Zero-error is a quality ambition. Tax specialists approve rules. Data geography and retention require review. This is a concept presentation with no customer data or ERP connection.

## Publication

[Source repository](https://github.com/wititgithub/fth-d365-copilot-brief). GitHub Pages serves the gh-pages branch. Run `node .deployment/stage-site.mjs` and publish that directory after review. Updating main alone does not deploy. The inactive Actions example is retained for reference. All runtime paths support repository subpaths. Images, audio and GIF are local; Google Fonts is the only remote presentation styling dependency.
