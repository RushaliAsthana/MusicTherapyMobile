import React, { useEffect, useState } from "react";
import Album from "./Albums";

import AlbumsDisplay from "./AlbumsDisplay";
import { useHistory } from "react-router";

function Albums()
{
     let history=useHistory();
 useEffect(()=>{
  document.body.style.backgroundColor="#fff1f4";
  
})


     return <div>
     <div className="container-fluid" id="topheader"><br/>
      <span className=" theme-pink  heading1  ml-4">Albums For You</span>
      <i className="fa fa-arrow-circle-left fa-2x pull-right mr-2 white" onClick={() => history.goBack()} aria-hidden="true"></i>
      <br/>
      <span className=" ml-4 theme-blue ">{Album.length} Albums </span><br/>
       <i className="fa fa-search pull-right mt-2 theme-pink" id="searchicon"></i>
      <input type="text" id="searchbar" className="form-control form-control-sm" placeholder="Search/artist.."></input><br/>
     </div>
     <div className="container-fluid mt-3 overflow-auto" id="jukebox">
     
    
    {
    Album.map((musicItems)=>{
             return <AlbumsDisplay
             id={musicItems.id} image={musicItems.albumimg}
             name={musicItems.albumname}
             artist="Annonymous" 
             ></AlbumsDisplay>
             
         })
    }
     </div>
     </div>
}
export default Albums;