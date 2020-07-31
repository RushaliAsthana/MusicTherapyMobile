import React, { useEffect } from "react";
import Album from "./Albums";
import Songs from "./Songs";
import { useHistory } from "react-router";
function AlbumSongs(props)
{
 useEffect(()=>{
  document.body.style.backgroundColor="#fff1f4"; 
})
 let history=useHistory()
 var aid=props.match.params.albumid;
  var arr= Album.filter((musicItem) => {
    return musicItem.id === parseInt(aid);
  }); 
return <div>
<div className="container-fluid" id="topheader"><br/>
 <span className=" theme-pink  heading1  ml-4">Album {aid}</span>
 <i className="fa fa-arrow-circle-left fa-2x pull-right mr-2 white" onClick={() => history.goBack()} aria-hidden="true"></i>
 <br/>
 <span className=" ml-4 theme-blue ">{arr[0].songs.length} Songs </span><br/>
  <i className="fa fa-search pull-right mt-2 theme-pink" id="searchicon"></i>
 <input type="text" id="searchbar" className="form-control form-control-sm" placeholder="Search/artist.."></input><br/>
</div>
<div className="container-fluid mt-3 overflow-auto" id="jukebox">

{
 arr.map((musicItems)=>{
             return musicItems.songs.map((arrItems)=>{
                   return <Songs id={arrItems.id} image={arrItems.musicImage} artist={arrItems.artist}
                   name={arrItems.name}
                   musicUrl={arrItems.musicUrl}
                   addFun={props.addFun}></Songs>
              })
         })
}
</div>
</div>
}
export default AlbumSongs;