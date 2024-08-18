import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
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
      <div className="banner">
        <img src="/hero.png" alt="hero" />
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
