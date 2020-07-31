import React from "react";
import {Link} from "react-router-dom";
function AlbumsDisplay(props)
{
  return <Link to={"/list/"+props.id}><div  id="list" className="container-fluid">
  <img src={props.image} height="35px" width="40px" className="mt-2 pull-left "></img>
  <span className="ml-2 theme-pink" id="song">{props.name}</span><br/>
  <span id="artist" className="ml-2 theme-gray"> {props.artist} </span>
  <i className="fa fa-ellipsis-v fa-lg pull-right theme-blue" id="player-icons" aria-hidden="true"></i>
 </div></Link>
 
}
export default AlbumsDisplay;