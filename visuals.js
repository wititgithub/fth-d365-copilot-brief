

const scenes={
 hero:['hero','A crimson sculptural ribbon surrounds an intelligence core connected to enterprise operations'],
 boundary:['workflow','Split-stage glass architecture with scattered evidence joined by a scanning laser bridge'],
 anatomy:['architecture','An AI gyroscope connected to four secured data vaults through a governed loop'],
 'vendor-email':['email-vendor','A crystal email envelope streams data into delivery-calendar tiles and an approval seal'],
 invoice:['ap','Glass invoice documents on a verification platform with laser inspection'],
 security:['warehouse','A digital warehouse protected by a layered identity and data-policy barrier'],
 autonomy:['production','An industrial control environment overlaid with three levels of human-governed agent authority'],
 sequence:['priorities','Four ascending glass and crimson implementation gates on an isometric runway'],
 pilot:['pilot','Four holographic timeline pillars with two mirrored prisms representing customer and Fujitsu value']
};
const shield='<svg class="trust-shield" viewBox="0 0 200 240" aria-hidden="true"><path d="M100 12 180 44v68c0 55-40 89-80 111-40-22-80-56-80-111V44Z"/><path d="m62 116 27 27 53-58" class="shield-check"/></svg>';
const gyroscope='<svg class="agent-gyro" viewBox="0 0 300 300" aria-hidden="true"><ellipse cx="150" cy="150" rx="127" ry="65"/><ellipse cx="150" cy="150" rx="127" ry="65" transform="rotate(60 150 150)"/><ellipse cx="150" cy="150" rx="127" ry="65" transform="rotate(120 150 150)"/></svg>';
const sparks=()=>Array.from({length:9},(_,i)=>'<i class="scene-spark" style="--x:'+(12+(i*17)%77)+'%;--y:'+(15+(i*23)%67)+'%;--delay:'+i*.63+'s"></i>').join('');
const flow=(labels,kind='')=>'<div class="brief-flow '+kind+'">'+labels.map((l,i)=>'<span><b>'+String(i+1).padStart(2,'0')+'</b>'+l+'</span>').join('')+'</div>';
export function visual(slide,lang){
 const l=slide.labels[lang];
 if(slide.visual==='closing')return '<div class="closing-art finale-art"><div class="closing-halo"></div><img class="infinity-film motion-gif" src="assets/slide10_fujitsu_red_infinity_motion.gif" alt="Animated three-dimensional red infinity ribbon gently rotating in a navy studio"><img class="infinity-film motion-still" src="assets/slide10_fujitsu_red_infinity_motion.png" alt="Still frame of the three-dimensional red infinity ribbon"><div class="finale-pair"><span>Dynamics 365</span><i>×</i><span>Copilot Studio</span></div><a class="original-reference" href="assets/closing-original.png" target="_blank" rel="noopener"><img src="assets/closing-original.png" alt="Original user-supplied red infinity artwork connecting Dynamics 365 and Copilot"><span>'+(lang==='th'?'ภาพต้นฉบับ ↗':'Original artwork ↗')+'</span></a><div class="qa-title">'+l[0]+'</div></div>';
 const [file,alt]=scenes[slide.visual];
 let overlay='',caption='';
 switch(slide.visual){
 case 'hero':overlay='<div class="core-orbit"><i></i><i></i></div><div class="hero-data-trail"></div>';caption='<div class="cinema-caption hero-caption"><span>Dynamics 365</span><i>+</i><span>Copilot Studio</span></div>';break;
 case 'boundary':overlay='<div class="laser-bridge"></div><div class="evidence-points"><span>'+l[0]+'</span><span>'+l[1]+'</span><span>'+l[2]+'</span></div>';caption=flow([l[3],l[4]]);break;
 case 'anatomy':overlay=gyroscope+'<div class="agent-nodes">'+l.slice(0,4).map((label,i)=>'<div><b>0'+(i+1)+'</b><span>'+label+'</span><small>'+l[i+4]+'</small></div>').join('')+'</div>';break;
 case 'vendor-email':overlay='<div class="mail-stream"><i></i><i></i><i></i></div><div class="approval-orbit"></div>';caption=flow(l);break;
 case 'invoice':overlay='<div class="verification-sweep"></div><div class="document-labels">'+l.slice(0,3).map(v=>'<span>'+v+'</span>').join('')+'</div>';caption='<div class="brief-verdict"><i></i>'+l[3]+'<small>PND 3 / PND 53</small></div>';break;
 case 'security':overlay='<div class="trust-grid"></div>'+shield+'<div class="trust-ring"></div>';caption=flow(l);break;
 case 'autonomy':overlay='<div class="production-radar"></div>';caption='<div class="autonomy-tiers">'+l.slice(0,3).map((v,i)=>'<div class="tier tier-'+i+'"><b>'+v+'</b><strong>'+l[i+3]+'</strong><small>'+l[i+6]+'</small></div>').join('')+'</div>';break;
 case 'sequence':overlay='<div class="production-radar"></div><div class="wave-one">'+l[4]+'</div>';caption=flow(l.slice(0,4));break;
 case 'pilot':overlay='<div class="timeline-beam"></div>';caption='<div class="pilot-cues">'+l.slice(0,4).map((v,i)=>'<span><b>W'+v+'</b>'+l[i+4]+'</span>').join('')+'</div><div class="dual-value"><span>'+l[8]+' <strong>'+(lang==='th'?'เวลา · คุณภาพ · ความเสี่ยง':'Time · Quality · Risk')+'</strong></span><span>'+l[9]+' <strong>'+(lang==='th'?'ความรู้ส่งมอบ · AI Partner':'Delivery knowledge · AI Partner')+'</strong></span></div>';break;
 }
 return '<div class="cinema-composition composition-'+slide.visual+'"><figure class="cinematic cinematic-'+slide.visual+'"><img class="cinema-image" src="assets/'+file+'-3d-v2.png" alt="'+alt+'" '+(slide.visual==='hero'?'fetchpriority="high"':'loading="eager"')+'><div class="cinema-atmosphere" aria-hidden="true">'+sparks()+'</div><div class="cinema-overlay">'+overlay+'</div><figcaption class="scene-credit">CONCEPT VISUAL · AI + MOTION DESIGN</figcaption></figure>'+caption+'</div>';
}
