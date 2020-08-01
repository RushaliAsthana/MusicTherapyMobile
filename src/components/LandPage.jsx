import React from "react";
import Logo from "../assets/images/logo1.png";
import {Link} from "react-router-dom";
function LandPage()
{
  return <div className="container-fluid" id="land-bg">
    <div className="row">
      <div  className=" offset-sm-2 col-sm-8 offset-sm-2 text-center mt-4" >
       <span id="landing-header"  className="theme-pink">MAN KI BAAT PVT. LTD.</span><br></br>
        <span id="subhead" className="theme-blue">Music Therapy</span><br/><br/><br/>
        <img src={Logo} id="logo" className="img-responsive" /><br/><br/>
        <p><button className="btn landpage-btn"><Link to="home" style={{ color: 'white',textDecoration: 'none' }}>LETS GET STARTED</Link></button></p>
        <p>OR</p>
        <button className="btn landpage-btn ">DOWNLOAD THE APP</button>
      </div>
    </div>
  </div>

}
export default LandPage;