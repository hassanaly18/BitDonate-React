import React from 'react'
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
        <h1>Volunteer</h1>
        <h3>Needed</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta aperiam molestias ea, exercitationem adipisci asperiores, quas amet blanditiis quaerat corporis ullam fuga incidunt illo aliquam.
        </p>
        <Link to={"/donate"} className='btn'>Donate Now</Link>
      </div>
      <div className="banner">
        <img src="/hero.png" alt="hero" />
      </div>
    </section>
    )
}

export default Hero