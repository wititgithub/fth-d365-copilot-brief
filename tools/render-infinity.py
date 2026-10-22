"""Render a rotating parametric ribbon mesh as a standalone animated GIF."""
from PIL import Image,ImageDraw,ImageFilter
import numpy as np,math,pathlib
W,H=960,540
y,x=np.mgrid[0:H,0:W];glow=np.exp(-(((x-W*.52)/(W*.4))**2+((y-H*.5)/(H*.55))**2)*2)
bg=np.empty((H,W,3),dtype=np.uint8)
for c,(base,boost) in enumerate([(14,23),(25,7),(42,11)]): bg[:,:,c]=base+glow*boost
base=Image.fromarray(bg)
t=np.linspace(0,2*np.pi,261);u=np.linspace(-.28,.28,11)
center=np.stack([2.5*np.cos(t),1.12*np.sin(2*t),.61*np.sin(t)],1)
tangent=np.stack([-2.5*np.sin(t),2.24*np.cos(2*t),.61*np.cos(t)],1);tangent/=np.linalg.norm(tangent,axis=1)[:,None]
side=np.stack([tangent[:,1],-tangent[:,0],np.zeros(len(t))],1);side/=np.linalg.norm(side,axis=1)[:,None]
binormal=np.cross(tangent,side)
twist=.42*np.sin(t)+.18*np.cos(2*t)
direction=side*np.cos(twist)[:,None]+binormal*np.sin(twist)[:,None]
mesh=center[:,None,:]+direction[:,None,:]*u[None,:,None]
mesh[:,:,2]+= .07*(1-(u/.28)**2)[None,:]
light=np.array([-.35,-.6,1.]);light/=np.linalg.norm(light)
frames=[]
for f in range(60):
 angle=2*np.pi*f/60; yaw=.23*np.sin(angle);pitch=.1*np.cos(angle)
 RY=np.array([[np.cos(yaw),0,np.sin(yaw)],[0,1,0],[-np.sin(yaw),0,np.cos(yaw)]])
 RX=np.array([[1,0,0],[0,np.cos(pitch),-np.sin(pitch)],[0,np.sin(pitch),np.cos(pitch)]])
 p=mesh@(RY@RX).T
 flat=p.reshape(-1,3);scale=136*7/(7-flat[:,2]);xy=np.stack([W*.5+flat[:,0]*scale,H*.49-flat[:,1]*scale],1).reshape(p.shape[:2]+(2,))
 frame=base.copy();shadow=Image.new('RGBA',(W,H));sd=ImageDraw.Draw(shadow);sd.ellipse((145,425,815,478),fill=(0,0,0,150));frame=Image.alpha_composite(frame.convert('RGBA'),shadow.filter(ImageFilter.GaussianBlur(17))).convert('RGB')
 d=ImageDraw.Draw(frame);faces=[]
 for i in range(len(t)-1):
  for j in range(len(u)-1):
   verts=np.array([p[i,j],p[i+1,j],p[i+1,j+1],p[i,j+1]])
   n=np.cross(verts[1]-verts[0],verts[3]-verts[0]);n/=np.linalg.norm(n)
   diffuse=abs(n@light);spec=max(0,abs(n@np.array([-.2,-.3,.93])))**28
   edge=(j in [0,len(u)-2]);shade=.35+.65*diffuse
   color=tuple(int(np.clip(v*shade+spec*210+(18 if edge else 0),0,255)) for v in [221,15,42])
   faces.append((verts[:,2].mean(),[tuple(v) for v in [xy[i,j],xy[i+1,j],xy[i+1,j+1],xy[i,j+1]]],color))
 for _,points,color in sorted(faces,key=lambda v:v[0]):d.polygon(points,fill=color)
 for k in range(13):
  a=angle+k*.483;px=480+385*np.cos(a);py=270+175*np.sin(a);d.ellipse((px-1,py-1,px+1,py+1),fill=(100,125,150))
 frames.append(frame)
out=pathlib.Path(__file__).resolve().parent.parent/'assets/slide10_fujitsu_red_infinity_motion.gif'
frames[0].save(out,save_all=True,append_images=frames[1:],duration=85,loop=0,optimize=True)
frames[0].save(out.with_suffix('.png'))
print(out, out.stat().st_size)
