import React,{useState,useRef} from "react";
import {Link, useLocation} from "react-router-dom";
function MusicBar(props)
{
   const [timeduration,setDuration]=useState(0);
  const [currenttime,setCurrTime]=useState(0);
  const [isPlaying,musicPlayPause]=useState(true);
  const [repeat,toggleRepeat]=useState(false);
  const audio=useRef('audio_tag');
  function repeatSong()
 {
   toggleRepeat(!repeat)
 }
  var loc=useLocation()
  
  function playPause()
  {
   if(audio.current.paused)
   {
   audio.current.play();
   props.imgtog(true)
   }
   else
   {
   audio.current.pause();
   props.imgtog(false)
   }
   musicPlayPause(!isPlaying);
  }
  function end()
  {
    musicPlayPause(!isPlaying)
  }  
  const customStyle ={
   color:'#ed257a'
 }
  const fmtMSS = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~(s) }
  const handleProgress = (e) => {
   let compute = (e.target.value * timeduration) / 100;
   setCurrTime(compute);
   audio.current.currentTime = compute
 }
     return <div className="footer fixed-bottom" id="player">
     <div className="slidecontainer">
   {repeat?<audio autoPlay loop ref={audio} src={props.musicUrl} onLoadedData={()=>musicPlayPause(true)} onCanPlay={(e)=>{setDuration(e.target.duration) 
   }} onEnded={()=>{
     end()
     props.next()
   }}   
   onTimeUpdate={(e)=> setCurrTime(e.target.currentTime) 
   }  preload="auto" type="audio/mp3">
   </audio>:<audio autoPlay ref={audio} src={props.musicUrl} onLoadedData={()=>musicPlayPause(true)} onCanPlay={(e)=>{setDuration(e.target.duration) 
   }} onEnded={()=>{
     end()
     props.next()
   }}   
   onTimeUpdate={(e)=> setCurrTime(e.target.currentTime) 
   }  preload="auto" type="audio/mp3">
   </audio> }
   
  <input  onChange={handleProgress} value={timeduration ? (currenttime * 100) / timeduration : 0}  type="range"  min="0" step="0.2" className="slider" id="myRange"/>  
</div>

{loc.pathname==="/myplaylist"?
<div className="text-center ">
  <span className="pull-left theme-gray ml-2">{fmtMSS(currenttime)}</span>
  <span className="pull-right theme-gray mr-2">{fmtMSS(timeduration)}</span>
<i className="fa fa-random theme-darkblue" aria-hidden="true"></i>
   <i className="fa fa-step-backward theme-darkblue " onClick={props.prev}></i>
   <i  onClick={playPause}  data-toggle="tooltip" title="Play" className={isPlaying?'fas fa-pause-circle fa-2x ml-2 mr-2 theme-pink ':'fa fa-play-circle fa-2x ml-2 mr-2 theme-pink'}></i>
   <i className="fa fa-step-forward  theme-darkblue" onClick={props.next}></i>
   <i className="fa fa-refresh theme-darkblue" onClick={repeatSong} style={repeat?customStyle:null} aria-hidden="true"></i>
</div>:
<div>
<Link to="/myplaylist" style={{ textDecoration: 'none' }}> 
<div >
<img id="bla" height="40px" src={props.imgurl}/>
   <span className=" theme-blue  ml-2" id="sname">{props.name}</span><br></br>
   <span className=" ml-2 theme-pink" id="aname">{props.artist}<span className="theme-gray"> | {fmtMSS(currenttime)}/{fmtMSS(timeduration)}</span></span>
   </div>
   </Link>
   <i id="playicon" onClick={playPause}  data-toggle="tooltip" title="Play" className={isPlaying?'fas fa-pause-circle fa-2x pull-right mr-4 theme-pink ':'fa fa-play-circle fa-2x pull-right mr-4 theme-pink'}></i>
</div>
}



     </div>
}
export default MusicBar;