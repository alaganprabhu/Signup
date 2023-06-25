import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return <div>
<div className='footer'>
    <div className='foot'>

  <div id='interno'>
    <img src='./img/Logo.png'/>
    <h5>It is a long established fact that a reader will be distracted lookings.</h5>
    <div id='icon'>
      <a href='#'><img src='./img/fb.png' id='fb' /></a>
      <a href='#'><img src='./img/twitter.png' id='twt' /></a>
      <a href='#'><img src='./img/linked.png' id='ln' /></a>
      <a href='#'><img src='./img/insta.png' id='ins' /></a>
    </div>
  </div>

  <div className='pages'>
    <h2>Pages</h2>    

    <h5><a href='/about'>About</a></h5>

    {/* <Link to='/about'>About Us</Link> */}
    
    <h5>Our Projects</h5>
    <h5>Our Team</h5>
    <h5>Contact US</h5>
    <h5>Services</h5>
  </div>

  <div className='service'>
    <h2>Services</h2>
    <h5>Kitchen</h5>
    <h5>Living Area</h5>
    <h5>Bathroom</h5>
    <h5>Dinning Hall</h5>
    <h5>Bedroom</h5>
  </div>

  <div className='foot_cont'>
    <h2>Contact</h2>
    <h5>55 East Birchwood Ave. Brooklyn, New York 11201</h5>
    <h5>contact@interno.com</h5>
    <h5>(123) 456 - 7890</h5>
  </div>
  
</div>

<h1 id='copy'>Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</h1>

</div>
    </div>
}