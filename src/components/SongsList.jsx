import React, { useEffect, useState } from "react";
import NavBar from "./NavigationBar";
import Player from "./MusicBar";
import Songs from "./Songs";
import Album from "./Albums";
import {Link} from "react-router-dom";
import Music from "./Music";

function SongsList(props)
{
     const [music,setSongs]=useState([]); 
     const [playsong,toggleSong]=useState(false);
     function addSong(songs)
     { 
       setSongs(prevSongs=>{
           return [...prevSongs,songs];
       }) 
       toggleSong(true);
     }
 useEffect(()=>{
  document.body.style.backgroundColor="#fff1f4";
  
})

var musicarr=music.slice(music.length-1,music.length);
var cid=props.match.params.clickid;
var aid=props.match.params.albumid;
var arr;
if(cid==="1" && aid==="0")
{
     arr=Album;
}
else if((cid==="1" && aid==="1"))
{
     arr=Music;
}
else if(cid==="2")
{
     
      arr= Album.filter((musicItem) => {
          return musicItem.id === parseInt(aid);
        });   
}


     return <div><NavBar></NavBar>
     <div className="container-fluid" id="topheader"><br/>
      <span className=" theme-pink  heading1  ml-4">{(cid==="1"&&aid==="0")&&"Albums"}{(cid==="1"&&aid==="1")&&"Recommended For You"}{(cid==="2")&&"Songs"}</span>
      <i class="fa fa-arrow-circle-left fa-2x pull-right mr-2 white" aria-hidden="true"></i>
      <br/>
      <span className=" ml-4 theme-blue ">{arr.length} Songs </span><br/>
       <i class="fa fa-search pull-right mt-2 theme-pink" id="searchicon"></i>
      <input type="text" id="searchbar" className="form-control form-control-sm" placeholder="Search/artist.."></input><br/>
     </div>
     <div className="container-fluid mt-3 overflow-auto" id="jukebox">
     
    {cid==="2"?
            arr.map((musicItems)=>{
             return musicItems.songs.map((arrItems)=>{
                   return <Songs id={arrItems.id} image={arrItems.musicImage} artist={arrItems.artist}
                   name={arrItems.name}
                   musicUrl={arrItems.musicUrl}
                   addFun={addSong}></Songs>
              })
         }):null
        
    }
    {(cid==="1"&&aid==="0")?
    arr.map((musicItems)=>{
             return <Songs 
             id={musicItems.id} image={musicItems.albumimg}
             name={musicItems.albumname}
             artist="Annonymous" addFun={addSong} 
             ></Songs>
         }):null
    }
    {(cid==="1"&&aid==="1")?arr.map((musicItems)=>{
    
             return <Songs id={musicItems.key} image={musicItems.musicImage} artist={musicItems.artist}
             name={musicItems.name} musicUrl={musicItems.musicUrl} addFun={addSong}></Songs>
         }):null

    }
     </div>
     {console.log(musicarr)}
     {
         musicarr.map((musicItems)=>{
          return <Player  id={musicItems.id} imgurl={musicItems.imgurl} artist={musicItems.artistname}
             name={musicItems.songname} musicUrl={musicItems.songurl} ></Player>}
         )} 
     </div>
}
export default SongsList;