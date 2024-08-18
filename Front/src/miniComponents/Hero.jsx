import React from "react";
import {useEffect} from "react"
import { Link } from "react-router-dom";
import "./Hero.css";
import lottie from "lottie-web"

const Hero = () => {

  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById("lottie-animation"), // the container where the animation will be rendered
      renderer: "svg", // renders the animation as SVG
      loop: true, // set to true for looping the animation
      autoplay: true, // set to true for auto-playing the animation
      path: "/flag.json" // the path to the Lottie animation JSON file
    });
  }, []);

  return (
    <section className="hero">
      <div className="banner">
        <h1>
          Support <span id="pal">Palestine</span>
        </h1>
        <h3>Your Help is Needed</h3>
        <p>
          Join us in providing essential aid and support to the Palestinian
          people. Your donation can make a real difference in their lives.
        </p>
        <Link to={"/donate"} className="btn btn--border btn--primary btn--animated">
          Donate Now
        </Link>
      </div>
      <div className="banner" id="banner1">
        {/* <img src="/hero.png" alt="hero" /> */}
        <div id="lottie-animation" className="flag"></div>
      </div>
    </section>
  );
};

export default Hero;

// import React from 'react'
// import {Link} from "react-router-dom"

// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="banner">
//         <h1>Support Palestine</h1>
//         <h3>Your Help is Needed</h3>
//         <p>Join us in providing essential aid and support to the Palestinian people. Your donation can make a real difference in their lives.</p>
//         <Link to={"/donate"} className='btn'>Donate Now</Link>
//       </div>
//       <div className="banner">
//         <img src="/palestine-hero.jpg" alt="Palestine support" />
//       </div>
//     </section>
//   )
// }

// export default Hero
