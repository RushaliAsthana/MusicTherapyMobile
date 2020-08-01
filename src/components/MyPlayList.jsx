import React,{useEffect} from "react";
import { useHistory } from "react-router-dom";
import Songs from "./Songs";
import musicbars from "../assets/images/musicbars.png";
import playmusicbars from "../assets/images/sound.gif";
function MyPlayList(props)
{
  let history = useHistory();
 useEffect(()=>{
  document.body.style.backgroundColor="#fff1f4";
  console.log(window.location.pathname)
})

var arr=props.musicarr.slice(props.musicarr.length-1,props.musicarr.length)
console.log(arr)
return <div>
<div className="container-fluid" id="topheader1"><br/>
 <span className=" theme-pink  heading1  ml-3">NOW PLAYING</span>
 <i className="fa fa-arrow-circle-left fa-2x pull-right mr-2 white" onClick={() => history.goBack()} aria-hidden="true"></i>
 <div className="row">
 <div className="col">
 {props.musicarr.length>0?<div><img src={arr.map((item)=>{return item.imgurl} )} height="60px" width="60px" className="  mt-2 mb-3 pull-left"></img>
 <div className="margin-top">  <span className="ml-3 theme-blue fontsong">{arr.map((item)=>{return item.songname} )}</span><br></br>
  <span className="ml-3 theme-gray fontsong">{arr.map((item)=>{return item.artistname} )}</span><br></br>
  <img src={props.imgtog?playmusicbars:musicbars} height={props.imgtog?"50px":"20px"} width="80px" className="ml-3  "></img>
  </div></div>:<h5 className="mt-1 mb-3">No Songs </h5>}
 </div>
 </div>
</div>
<span className="ml-4 heading theme-blue small mt-3 ">Queue <span className="theme-gray">({ props.musicarr.length})</span></span>
<span className="pull-right theme-gray mr-3 mt-2 small" onClick={props.clearAll}>Clear all</span><br/><br/>
<div className="container-fluid  overflow-auto" id="jukebox">
{
  
  props.musicarr.map((newItems,index)=>{
return <Songs index={index} len={props.musicarr.length} id={newItems.id} name={newItems.songname} image={newItems.imgurl} 
musicUrl={newItems.songurl} artist={newItems.artistname} addFun={props.addFun} delFun={props.delFun} ></Songs>
  }).reverse()
}
</div>


</div>
}
export default MyPlayList;