import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBitcoin, FaYoutube, FaSquareGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Navbar = () => {
  const [show, setshow] = useState(false);

  return (
    <>
      <nav className={show ? "navbar navbar_show" : "navbar"}>
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
      </nav>
    </>
  );
};

export default Navbar;
