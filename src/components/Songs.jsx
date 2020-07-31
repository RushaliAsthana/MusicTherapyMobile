import React,{useState} from "react";
import { useLocation } from "react-router";

function Songs(props)
{
  var loc=useLocation()

  const [songs,setSongs]=useState({
    id:props.id,
    songname:props.name,
    artistname:props.artist,
    songurl:props.musicUrl,
    imgurl:props.image
  });
  function playSong()
   {
      setSongs({
           id:props.id,
           songname:props.name,
           artistname:props.artist,
           songurl:props.musicUrl,
           imgurl:props.image
      });
       props.addFun(songs);
   }
   function delSong()
         {
            setSongs({
                id:props.id,
                songname:props.songname,
                artistname:props.artist,
                songurl:props.musicurl,
                imgurl:props.musicImg
           });
             props.delFun(props.id);
         }
   return <div> <div onClick={playSong} id={(loc.pathname==="/myplaylist"&&props.index===props.len-1)?"topsong":"list"} className="container-fluid">
   <img src={props.image} height="35px" width="40px" className="mt-2 pull-left "></img>
   <span className="ml-2 theme-pink" id="song">{props.name}</span><br/>
   <span id="artist" className="ml-2 theme-gray"> {props.artist} </span>
  </div>
  <div className="dropdown">
    <button type="button" className="btn sideicon pull-right" data-toggle="dropdown">
        <i className="fa fa-ellipsis-v fa-lg theme-blue" data-toggle="dropdown" aria-hidden="true"></i>
    </button>
    <div className="dropdown-menu">
      {loc.pathname==="/myplaylist"?<a className="dropdown-item  theme-pink blue" href="#" onClick={delSong}>Delete</a>:null}
      <a className="dropdown-item theme-pink blue" href="#">Download</a>
      <a className="dropdown-item theme-pink blue" href="#">Share</a>
    </div>
  </div>
  </div>
}
export default Songs;