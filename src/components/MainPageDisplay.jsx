import React, { useState } from "react";
function MainPageDisplay(props)
{
 const [songs,setSongs]=useState({
  id:props.id,
  songname:props.name,
  artistname:props.artist,
  songurl:props.musicUrl,
  imgurl:props.imgSrc
});
   function playSong()
   {
      setSongs({
           id:props.id,
           songname:props.name,
           artistname:props.artist,
           songurl:props.musicUrl,
           imgurl:props.imgSrc
      });
       props.addFun(songs);
   }
          return  <div onClick={playSong} class="col text-center">
          <img src={props.imgSrc} className="img-responsive" height="100vh" width="100%" ></img><br></br>
          <span className="ml-2 theme-darkblue  small">{props.name}</span><br></br>
          <span className="ml-2 theme-gray xsmall">{props.artist}</span>
         </div>
}
export default MainPageDisplay