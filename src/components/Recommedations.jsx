import React,{useEffect} from "react";
import Music from "./Music";
import Songs from "./Songs";
import { useHistory } from "react-router";
function Recommedations(props)
{
 let history = useHistory();
 useEffect(()=>{
  document.body.style.backgroundColor="#fff1f4";
  
})
 return <div>
 <div className="container-fluid" id="topheader"><br/>
  <span className=" theme-pink  heading1  ml-4">Recommedations For You</span>
  <i className="fa fa-arrow-circle-left fa-2x pull-right mr-2 white" onClick={() => history.goBack()} aria-hidden="true"></i>
  <br/>
  <span className=" ml-4 theme-blue ">{Music.length} Songs </span><br/>
   <i className="fa fa-search pull-right mt-2 theme-pink" id="searchicon1"></i>
  <input type="text" id="searchbar" className="form-control form-control-sm" placeholder="Search/artist.."></input><br/>
 </div>
 <div className="container-fluid mt-3 overflow-auto" id="jukebox">
 {
Music.map((musicItems)=>{
         return <Songs id={musicItems.key} image={musicItems.musicImage} artist={musicItems.artist}
         name={musicItems.name} musicUrl={musicItems.musicUrl} addFun={props.addFun}></Songs>
     })
}
 </div>
 </div>
}
export default Recommedations;