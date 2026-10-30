export default function Particles(){
 return <div className="particles" aria-hidden="true">{Array.from({length:12},(_,i)=><i key={i} style={{left:`${(i*37.17)%100}%`,top:`${(i*23.73)%100}%`,animationDelay:`-${i%9}s`,animationDuration:`${12+i%7}s`,width:i%3===0?7:4,height:i%3===0?7:4}}/>)}</div>
}
