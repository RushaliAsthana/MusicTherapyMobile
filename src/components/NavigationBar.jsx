import React from "react";
import Logo from "./images/logo.png";
import UserIcon from "./images/fa-user.png";
function NavigationBar()
{
   return <nav class="navbar  navbar-expand-md ">
   <a class="navbar-brand" href="#"><img height="30px" src={Logo}/></a>
   
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
     {/* <span class="navbar-toggler-icon"></span> */}
     <img src={UserIcon} class="img-responsive mr-3" height="25px"></img>
     <i class="fa fa-bars theme-pink" aria-hidden="true"></i>
   </button>
   <div class="collapse navbar-collapse" id="collapsibleNavbar">
     <ul class="navbar-nav ml-auto">
       <li class="nav-item">
         <a class="nav-link" href="#"></a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#">Link</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#">Link</a>
       </li>    
     </ul>
   </div>  
 </nav>
}
export default NavigationBar;