import React, { useState } from "react";
import LandPage from "./components/LandPage";
import {  Route, Switch } from "react-router"; 
import { BrowserRouter as Router,Link } from 'react-router-dom';
import MusicPage from "./components/MusicPage";
import AlbumList from "./components/AlbumsList";
import AlbumSongs from "./components/AlbumSongs";
import "./styles.css";
import MyPlayList from "./components/MyPlayList";
import Player from "./components/MusicBar";
import Navbar from "./components/NavigationBar";
import Recommdations from "./components/Recommedations";

function App()
{
   
   const [music,setSongs]=useState([]);
   const [playsong,toggleSong]=useState(true);
  
   function nextSong()
   {
       var arr=music.slice(0,1);
            arr.map((newItem)=>{
           return addSong(newItem)  
       })
       
   }
   function prevSong()
   {
       var music1=music.slice(music.length-1,music.length);
       music1.map((newItem1)=>{    
           return addprevSong(newItem1)  
       })
       
   }
   function addprevSong(songs)
   { 
     deleteSong(songs.id)
     setSongs(prevSongs=>{
         return [songs,...prevSongs];
     }) 
   
   }
   
   
   function deleteSong(id)
    {
        setSongs(prevSongs=> {
            return prevSongs.filter((songItem) => {
              return songItem.id !== id;
            });
          });
    }
    function clearAll()
    {
    setSongs([])
    }
   function addSong(songs)
     { 
        deleteSong(songs.id)
       setSongs(prevSongs=>{
           return [...prevSongs,songs];
       }) 
       
     }
     console.log(window.location.pathname)
     var arr=music.slice(music.length-1,music.length);
   return  <div> 
   <Router>   
   <Navbar></Navbar>
      <Switch>
      <Route path="/" exact component={LandPage}></Route>
      <Route path="/home" exact component={()=><MusicPage addFun={addSong}></MusicPage>}></Route>
      <Route path="/list/:albumid" exact render={(props) => <AlbumSongs addFun={addSong} {...props} />}></Route>
      <Route path="/myplaylist" exact  component={()=><MyPlayList musicarr={music} clearAll={clearAll} delFun={deleteSong} addFun={addSong} imgtog={playsong} ></MyPlayList>}></Route>
      <Route path="/recommedations" exact  component={()=><Recommdations addFun={addSong}></Recommdations>}></Route>
      <Route path="/albumslist" exact component={AlbumList}></Route>
      
      </Switch>
   
   { 
     arr.map((musicItem)=>{
    return  <Player  id={musicItem.key} musicUrl={musicItem.songurl} imgurl={musicItem.imgurl} name={musicItem.songname} 
    artist={musicItem.artistname} next={nextSong} prev={prevSong} imgtog={toggleSong}></Player> 
     })
     }
   </Router>
   </div>
   
}
export default App;