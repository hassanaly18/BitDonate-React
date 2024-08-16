import React from "react";
import { Link } from "react-router-dom";
import {
  FaSquareTwitter,
  FaSquareInstagram,
  FaSquareYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>New York, USA</li>
          <li>crypto@gmail.com</li>
          <li>0900-3983829</li>
        </ul>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/donate"}>Donate</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>
          <li>
            <Link to={"/"}>
            {" "}
              <span><FaSquareTwitter/></span>
              <span>Twitter/X</span>{" "}
            </Link>
          </li>
          <li>
            <Link to={"/"}>
            {" "}
              <span><FaSquareYoutube/></span>
              <span>Youtube</span>{" "}
            </Link>
          </li>
          <li>
            <Link to={"/"}>
            {" "}
              <span><FaSquareInstagram/></span>
              <span>Instagram</span>{" "}
            </Link>
          </li>
          <li>
            <Link to={"/"}>
            {" "}
              <span><FaLinkedin/></span>
              <span>LinkedIn</span>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;