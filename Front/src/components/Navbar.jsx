import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBitcoin, FaYoutube, FaSquareGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/donate"}>Donate</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={"/"}>
                <FaBitcoin />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <FaSquareGithub />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <BsInstagram />
              </Link>
            </li>
          </ul>
        </div>
        {/* <GiHamburgerMenu className="hamburger" onClick={()=>setShow(!show)}/> */}
        {show ? (
          <IoMdClose className="hamburger" onClick={() => setShow(!show)} />
        ) : (
          <GiHamburgerMenu
            className="hamburger"
            onClick={() => setShow(!show)}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
