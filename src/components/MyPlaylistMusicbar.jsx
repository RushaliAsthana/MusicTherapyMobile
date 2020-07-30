import React from "react";
function MyPlaylistMusicbar(props)
{
  
     return <div className="footer fixed-bottom" id="player">
      <div className="slidecontainer">
   <audio    preload="auto" type="audio/mp3">
   </audio>
   
  <input  type="range"  min="0" step="0.5" className="slider" id="myRange"/>  
</div>
<div className="text-center mt-1 ">
  <span className="pull-left theme-gray ml-2">0.00</span>
  <span className="pull-right theme-gray mr-2">0.00</span>
<i className="fa fa-random theme-darkblue" aria-hidden="true"></i>
   <i className="fa fa-step-backward theme-darkblue "></i>
   <i  id="pause-play-icons" className="fa fa-pause-circle  theme-pink"></i>
   <i className="fa fa-step-forward  theme-darkblue"></i>
   <i className="fa fa-refresh theme-darkblue" aria-hidden="true"></i>
</div>
     </div>
}
export default MyPlaylistMusicbar;