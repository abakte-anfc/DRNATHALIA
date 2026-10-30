import {useEffect,useRef} from 'react';
export default function Particles() {
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const el=ref.current; if(!el)return;
  if(!('IntersectionObserver' in window)){el.classList.add('paused');return}
  const observer=new IntersectionObserver(([entry])=>el.classList.toggle('paused',!entry.isIntersecting));observer.observe(el);
  const visibility=()=>el.classList.toggle('hidden-tab',document.hidden);document.addEventListener('visibilitychange',visibility);
  const move=(e:PointerEvent)=>{if(e.pointerType==='mouse'){el.style.setProperty('--px',`${(e.clientX/innerWidth-.5)*12}px`);el.style.setProperty('--py',`${(e.clientY/innerHeight-.5)*8}px`)}};
  window.addEventListener('pointermove',move,{passive:true});return()=>{observer.disconnect();document.removeEventListener('visibilitychange',visibility);window.removeEventListener('pointermove',move)};
 },[]);
 return <div className="particles" ref={ref} aria-hidden="true">{Array.from({length:70},(_,i)=><i key={i} style={{left:`${(i*37.17)%100}%`,top:`${(i*23.73)%100}%`,animationDelay:`-${i%17}s`,animationDuration:`${16+i%12}s`,width:i%4===0?4:2,height:i%4===0?4:2}}/>)}</div>
}
