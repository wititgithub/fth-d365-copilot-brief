"""Generate bilingual recorded narration for motion edition 03."""
import asyncio,json,pathlib,subprocess
import edge_tts
from mutagen.mp3 import MP3
ROOT=pathlib.Path(__file__).resolve().parent
VOICES={'th':'th-TH-NiwatNeural','en':'en-US-GuyNeural'}
async def main():
    slides=json.loads(subprocess.check_output(['node','--input-type=module','-e',"import {slides} from './content.js';console.log(JSON.stringify(slides))"],cwd=ROOT,text=True,encoding='utf-8'))
    sem=asyncio.Semaphore(3)
    async def one(i,s,lang):
        async with sem:
            path=ROOT/s['audio'][lang];path.parent.mkdir(parents=True,exist_ok=True)
            rate=0
            for attempt in range(3):
                await edge_tts.Communicate(s['notes'][lang],VOICES[lang],rate=f'{rate:+d}%').save(str(path))
                duration=MP3(path).info.length
                if duration <= s['duration']-1 and duration >= s['duration']-9: break
                proposed=max(-20,min(35,round(((1+rate/100)*duration/(s['duration']-3)-1)*100)))
                if proposed==rate: break
                rate=proposed
            print(f'{lang}-{i+1:02}: {duration:.2f}s / {s["duration"]}s, {rate:+d}%',flush=True)
            return dict(id=s['id'],lang=lang,path=s['audio'][lang],duration=round(duration,3),cue=s['duration'],voice=VOICES[lang],rate=f'{rate:+d}%')
    records=await asyncio.gather(*(one(i,s,lang) for lang in ['th','en'] for i,s in enumerate(slides)))
    for lang in ['th','en']:
        items=[x for x in records if x['lang']==lang]
        name='manifest.json' if lang=='th' else 'manifest-en.json'
        (ROOT/'assets/audio'/name).write_text(json.dumps(items,ensure_ascii=False,indent=2),encoding='utf-8')
        print(lang,'total:',round(sum(x['duration'] for x in items),2),flush=True)
asyncio.run(main())
