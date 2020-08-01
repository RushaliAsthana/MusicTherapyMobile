import React from "react";
import Logo from "../assets/images/logo.png";
import UserIcon from "../assets/images/fa-user.png";
function NavigationBar()
{
   return <nav className="navbar  navbar-expand-md ">
   <a className="navbar-brand" href="#"><img height="30px" src={Logo}/></a>
   
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
     {/* <span className="navbar-toggler-icon"></span> */}
     <img src={UserIcon} className="img-responsive mr-3" height="25px"></img>
     <i className="fa fa-bars theme-pink" aria-hidden="true"></i>
   </button>
   <div className="collapse navbar-collapse" id="collapsibleNavbar">
     <ul className="navbar-nav ml-auto">
       <li className="nav-item">
         <a className="nav-link" href="#"></a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Link</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Link</a>
       </li>    
     </ul>
   </div>  
 </nav>
}
export default NavigationBar;