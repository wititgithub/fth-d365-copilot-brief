# Cinematic Keynote · edition 03 visual record

The existing Fujitsu keynote theme, red/ivory/navy palette, typography and navigation frame are retained. New assets use the built-in ImageGen tool. They are concept illustrations, not product screenshots or customer environments.

## New raster artwork

All files were copied into the project. No generated-image cache path is required at runtime.

| Asset | Purpose | Motion overlay |
|---|---|---|
| [workflow-3d-v2.png](../assets/workflow-3d-v2.png) | Split-stage investigation architecture | Scanning laser bridge and evidence labels |
| [architecture-3d-v2.png](../assets/architecture-3d-v2.png) | Intelligence gyroscope and four data vaults | Rotating vector rings and four agent capabilities |
| [email-vendor-3d-v2.png](../assets/email-vendor-3d-v2.png) | Crystal email, delivery calendar and approval seal | Streaming data particles and approval pulse |
| [priorities-3d-v2.png](../assets/priorities-3d-v2.png) | Four ascending implementation gates | Radar sweep and Wave 1 annotation |
| [pilot-3d-v2.png](../assets/pilot-3d-v2.png) | Four timeline pillars and dual value prisms | Holographic beam and ten-week cue labels |

Final email prompt: “Create a premium cinematic 3D illustration for an executive Fujitsu Thailand Dynamics 365 presentation. Widescreen 16:9. Near-black navy studio background, polished deep red metallic accents, restrained cyan laser light, sophisticated realistic glass and brushed metal. Main subject on RIGHT two thirds: a floating crystal-glass email envelope unraveling into fine luminous data ribbons that connect to an elegant three dimensional delivery calendar with movable glass date tiles, a purchase order sheet, and a red circular approval seal. Suggest vendor email ingestion and rescheduling with human approval. Sculptural, architectural, extremely clean, photorealistic product rendering, high-end keynote art. Leave LEFT third mostly dark and empty for a large slide headline overlay. No readable text, no numbers, no logos, no watermark. No people, no busy UI panels. Vary depth and perspective, red satin infinity-inspired data loop in the middle distance. This is conceptual artwork, not a screenshot.”

Shared prefix for the other four prompts: “Premium cinematic keynote conceptual 3D art, Fujitsu-inspired polished deep red metal, clear architectural glass, cool cyan laser accents, navy and charcoal studio, precise physically based materials, photorealistic product rendering, restrained elegant composition, widescreen 16:9. Main objects occupy RIGHT TWO THIRDS. LEFT THIRD dark negative space for headline. No text, no letters, no logos, no UI, no watermark.”

Per-asset prompt suffixes:

- **Workflow:** An ERP exception investigation visual: two large separated isometric glass architectural stages, an orderly transaction conveyor on one side, scattered floating evidence glass sheets on the other. A precise cyan laser bridge scans across the gap and crimson illuminated data paths connect them. Communicate scattered evidence being brought together.
- **Architecture:** A beautiful central AI gyroscope of intertwined glass rings and a glowing red intelligence sphere, surrounded by four compact secure glass data vaults at cardinal directions. Thin red fiber optic connections complete a governed loop. A sculptural technical architecture, no brains, no human.
- **Priorities:** A long isometric red and smoked-glass runway made of exactly four ascending architectural steps. Two distinct luminous entry paths converge at the first step. Cyan radar plane sweeps over the middle steps. Convey sequential implementation gates and evidence before scale.
- **Pilot:** An elegant horizontal holographic timeline of exactly four transparent monolith pillars on a light warm-grey studio ground. Above the right end, two separate red translucent value prisms reflect each other, one customer side and one delivery partner side. Thin cyan connectors, strong sense of measured progress and dual perspectives. Use a LIGHT ivory background, left empty.

## Reused art and closing motion

Hero, AP, warehouse and production images are retained from edition 02, with revised annotations. Warehouse art now supports the security boundary, and production art supports the autonomy discussion. Neither scene is presented as another use case. See image-prompts-v2.json for those original prompts.

[slide10_fujitsu_red_infinity_motion.gif](../assets/slide10_fujitsu_red_infinity_motion.gif) is a standalone, 60-frame, looping parametric 3D ribbon render, generated with the repository's tools/render-infinity.py using NumPy and Pillow. It has gentle camera rotation, lighting and depth ordering. A PNG still is used for reduced-motion preferences and the motion-pause control. It is not an animation of the pixels in the supplied reference image.

The exact original [closing artwork](../assets/closing-original.png) remains unchanged, visible as a linked inset on the final slide. Original Fujitsu branding retains its proportions. The deck illustrates a proposed Fujitsu delivery approach with Microsoft technology; it does not announce a new formal partnership.

Raster scene motion combines camera drift with code-native light, particle, shield, radar and ring overlays. Raster objects are not individually rigged 3D models. The final GIF is an independently rendered mesh animation.
