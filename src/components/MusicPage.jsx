import React, { useEffect } from "react";
import Navbar from "./NavigationBar";
import defaultImage from "./images/defaultimg.png";
import {Link} from "react-router-dom";
import Music from "./Music";
import Album from "./Albums";
import Display from "./MainPageDisplay";
function MusicPage()
{
   useEffect(()=>{
      document.body.style.backgroundColor="#fff1f4";
      
   })
   var musicarr=Music.slice(0,2); // these 2 lines are for breaking the array exactly at 2 and 3 objects
   var musicarr1=Album.slice(0,3);
   return <div id="mainpage">
    <Navbar></Navbar>
    <div className="container-fluid">
    <i className="fa fa-search pull-right theme-pink" id="searchicon"></i>
     <input className="form-control form-control-sm" type="text" placeholder="Search music/artist/album"></input>
     <div className="mt-3 mb-2 ml-2">
     <span className="theme-pink  heading">Recommended</span>
     <span className="pull-right theme-gray mt-2 viewmore"><Link to="list/1/1"  style={{ color: '#9d9da3' }}>View more > </Link> </span>
     </div>
     <div class="row">
      {
          musicarr.map((newItem)=>{
            return  <Display  imgUrl={newItem.musicImage} name={newItem.name}
              artist={newItem.artist} musicUrl={newItem.musicUrl}></Display>
          })
      }
     
     </div>
     <span className="heading theme-pink ml-2">Albums</span>
     <span className="pull-right  theme-gray mt-2 viewmore"><Link to="list/1/0" style={{ color: '#9d9da3' }}>View more > </Link> </span><br/>

     <div className="row mt-2">
     {
     musicarr1.map((newItem)=>{
            return  <div class="col text-center">
            <Link to={"list/2/"+newItem.id}>
          <img src={newItem.albumimg} className="img-responsive" height="100px" width="100%" ></img><br></br>
          <span className="ml-2 theme-darkblue  small">{newItem.albumname}</span><br></br>
          </Link></div>
          })
     }
     </div><br></br>
     
     <div className="row mt-2">
     {
     musicarr1.map((newItem)=>{
            return  <div class="col text-center">
            <Link to={"list/2/"+newItem.id}>
          <img src={newItem.albumimg} className="img-responsive" height="100px" width="100%" ></img><br></br>
          <span className="ml-2 theme-darkblue  small">{newItem.albumname}</span><br></br>
          </Link></div>
          })
     }
     </div><br/>    
    </div>
   </div>
}
export default MusicPage;