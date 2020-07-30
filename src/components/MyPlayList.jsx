import React,{useEffect} from "react";
import NavBar from "./NavigationBar";
import Songs from "./Songs";
import Player from "./MyPlaylistMusicbar";
import Player1 from "./MusicBar";
import image from "./images/musicicon.png";
import musicbars from "./images/musicbars.png";
function MyPlayList(props)
{
  console.log(props)
 useEffect(()=>{
  document.body.style.backgroundColor="#fff1f4";
})

return <div>
{/* <NavBar></NavBar>
<div className="container-fluid" id="topheader1"><br/>
 <span className=" theme-pink  heading1  ml-3">NOW PLAYING</span>
 <i class="fa fa-arrow-circle-left fa-2x pull-right mr-2 theme-darkblue" aria-hidden="true"></i>
 <div className="row">
 <div className="col">
 <img src={image} height="60px" className="  mt-2 mb-3 pull-left"></img>
 <div className="margin-top">  <span className="ml-3 theme-blue">SONG NAME</span><br></br>
  <span className="ml-3 theme-gray">Artist/Album</span><br></br>
  <img src={musicbars} height="20px" className="ml-3  "></img>
  </div>
 </div>
 </div>
</div>
<div className="container-fluid mt-3 overflow-auto" id="jukebox">
<span className="ml-3 heading theme-blue small  ">Queue <span className="theme-gray">(24)</span></span>
<span className="pull-right theme-gray small">Clear all</span><br/><br/>
<Songs></Songs>
</div>
<Player1></Player1> */}
<h1>helooo from my playlist</h1>
</div>
}
export default MyPlayList;