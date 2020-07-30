import React from "react";
function MainPageDisplay(props)
{
          return  <div class="col text-center">
          <img src={props.imgUrl} className="img-responsive" height="100px" width="100%" ></img><br></br>
          <span className="ml-2 theme-darkblue  small">{props.name}</span><br></br>
          <span className="ml-2 theme-gray xsmall">{props.artist}</span>
         </div>
}
export default MainPageDisplay