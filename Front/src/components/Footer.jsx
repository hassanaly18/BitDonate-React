import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";
// import {
//   FaSquareTwitter,
//   FaSquareInstagram,
//   FaSquareYoutube,
//   FaLinkedin,
// } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
       <div className="footer-col">
  	 			<h4>BitDonate</h4>
          <img src="./logo.png" alt="logo" id="logo"/>
  	 			{/* <ul>
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li>
  	 			</ul> */}
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Support</h4>
  	 			<ul>
  	 				<li>New York, USA.</li>
  	 				<li>Email: crypto@gmail.com</li>
  	 				<li>Phone: +44 1234 6626</li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Quick Links</h4>
  	 			<ul>
  	 				<li><Link to={"/"}>Home</Link></li>
  	 				<li><Link to={"/donate"}>Donate</Link></li>
  	 				<li><Link to={"/about"}>About</Link></li>
  	 				<li><Link to={"/contact"}>Contact</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

  );
};

export default Footer;