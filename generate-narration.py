"""Build local Thai narration assets from the reviewed slide text.

Uses the installed edge-tts client to Microsoft's online Edge speech service.
No service call is made by a presentation viewer: final MP3s are served locally.
"""
import asyncio
import json
import pathlib
import subprocess
import sys

import edge_tts
from mutagen.mp3 import MP3

ROOT = pathlib.Path(__file__).resolve().parent
VOICE = "th-TH-NiwatNeural"

async def main():
    result = subprocess.run(
        ["node", "--input-type=module", "-e",
         "import {slides} from './content.js'; console.log(JSON.stringify(slides.map(s=>({id:s.id,text:s.notes.th,target:s.duration,path:s.audio.th}))))"],
        cwd=ROOT, capture_output=True, text=True, encoding="utf-8", check=True,
    )
    items = json.loads(result.stdout)
    only = sys.argv[1] if len(sys.argv)>1 else None
    old_path = ROOT / 'assets/audio/manifest.json'
    prior = {item['id']:item for item in json.loads(old_path.read_text(encoding='utf-8'))} if old_path.exists() else {}
    semaphore = asyncio.Semaphore(2)
    async def generate(item):
        if only and item['id'] != only:
            return prior[item['id']]
        async with semaphore:
            output = ROOT / item["path"]
            output.parent.mkdir(parents=True, exist_ok=True)
            await edge_tts.Communicate(item["text"], VOICE, rate="+0%").save(str(output))
            duration = MP3(output).info.length
            rate = 0
            # Keep a little breathing room. Never rush a long script aggressively.
            if duration > item["target"] - 1 or duration < item["target"] - 7:
                rate = max(-15, min(15, round((duration / (item["target"] - 2) - 1) * 100)))
                if rate:
                    await edge_tts.Communicate(item["text"], VOICE, rate=f"{rate:+d}%").save(str(output))
                    duration = MP3(output).info.length
            print(f'{item["id"]}: {duration:.2f}s / cue {item["target"]}s, rate {rate:+d}%', flush=True)
            return {"id": item["id"], "path": item["path"], "duration": round(duration, 3),
                    "cue": item["target"], "voice": VOICE, "rate": f"{rate:+d}%"}
    metadata = await asyncio.gather(*(generate(item) for item in items))
    (ROOT / "assets/audio/manifest.json").write_text(json.dumps(metadata, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f'Total spoken duration: {sum(item["duration"] for item in metadata):.2f}s', flush=True)

asyncio.run(main())
