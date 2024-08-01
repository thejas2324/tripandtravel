import React from "react";
import "../ASSETS/Main_content/sticky_social_icons.css";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Sticky_social_icons = () => {
  return (
    <div className="sticky-icon">
    <a href="https://www.instagram.com/?hl=en" className="Instagram"><FaInstagram size={30}/>&nbsp;&nbsp;&nbsp;&nbsp;Instagram </a>
    <a href="https://www.facebook.com/" className="Facebook"><FaFacebook size={30}/> &nbsp;&nbsp;&nbsp;&nbsp;Facebook </a>
    <a href="https://aboutme.google.com/u/0/?referer=gplus" className="Google"><FaGoogle size={30}/>&nbsp;&nbsp;&nbsp;&nbsp;Google + </a>
    <a href="https://www.youtube.com/" className="Youtube"><FaYoutube size={30}/>&nbsp;&nbsp;&nbsp;&nbsp; Youtube </a>
    <a href="https://twitter.com/login" className="Twitter"><FaTwitter size={30}/>&nbsp;&nbsp;&nbsp;&nbsp;Twitter </a>   
 </div>
  );
};

export default Sticky_social_icons;
