import React,{useState} from "react";

function Songs(props)
{
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
   return <div> <div onClick={playSong} id="list" className="container-fluid">
   <img src={props.image} height="35px" width="40px" className="mt-2 pull-left "></img>
   <span className="ml-2 theme-pink" id="song">{props.name}</span><br/>
   <span id="artist" className="ml-2 theme-gray"> {props.artist} </span>
   <i className="fa fa-ellipsis-v fa-lg pull-right theme-blue" id="player-icons" aria-hidden="true"></i>
  
  </div>
  </div>
}
export default Songs;