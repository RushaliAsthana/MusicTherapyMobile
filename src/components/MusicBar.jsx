import React,{useState,useRef} from "react";
import {Link} from "react-router-dom";
function MusicBar(props)
{
   const [timeduration,setDuration]=useState(0);
  const [currenttime,setCurrTime]=useState(0);
  const [isPlaying,musicPlayPause]=useState(true);
  const audio=useRef('audio_tag');
  function playPause()
  {
   if(audio.current.paused)
   {
   audio.current.play();
   }
   else
   audio.current.pause();

   musicPlayPause(!isPlaying);
  }
  const fmtMSS = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~(s) }
  const handleProgress = (e) => {
   let compute = (e.target.value * timeduration) / 100;
   setCurrTime(compute);
   audio.current.currentTime = compute
 }
     return <div className="footer fixed-bottom" id="player">
     <div className="slidecontainer">
   <audio autoPlay ref={audio} src={props.musicUrl} onLoadedData={()=>musicPlayPause(true)} onCanPlay={(e)=>{setDuration(e.target.duration) 
   }} preload="auto"    
   onTimeUpdate={(e)=> setCurrTime(e.target.currentTime) 
   }  preload="auto" type="audio/mp3">
   </audio>
   
  <input  onChange={handleProgress} value={timeduration ? (currenttime * 100) / timeduration : 0}  type="range"  min="0" step="0.2" className="slider" id="myRange"/>  
</div>
<div>
<Link to="/myplaylist"> 
<img id="bla" height="40px" src={props.imgurl}/>
   <span className=" theme-blue  ml-2" id="sname">{props.name}</span><br></br>
   <span className=" ml-2 theme-pink" id="aname">{props.artist}<span className="theme-gray"> | {fmtMSS(currenttime)}/{fmtMSS(timeduration)}</span></span>
   </Link>
   <i id="playicon" onClick={playPause}  data-toggle="tooltip" title="Play" className={isPlaying?'fas fa-pause-circle fa-2x pull-right mr-4 theme-pink ':'fa fa-play-circle fa-2x pull-right mr-4 theme-pink'}></i>
</div>
     </div>
}
export default MusicBar;