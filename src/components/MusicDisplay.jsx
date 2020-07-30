import React from "react";
import Songs from "./Songs";
function MusicDisplay(props)
{
 return <Songs id={props.id} image={props.image} artist={props.artist}
 name={props.name} musicUrl={props.musicUrl} addFun={props.addFun}></Songs> 
}
export default MusicDisplay;