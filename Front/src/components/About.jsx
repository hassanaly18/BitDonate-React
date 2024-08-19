import React from "react";
import "./About.css"

const About = () => {
  return (
    <section className="about">
      <div className="hero">
        <div className="banner">
          <h1><span id="our">Our</span> Story</h1>
          <p>
            Our organization is dedicated to providing crucial support and aid
            to the Palestinian people. Founded on the principles of compassion,
            justice, and human rights, we work tirelessly to improve the lives
            of those affected by ongoing humanitarian challenges in Palestine.
            Our efforts focus on delivering essential resources, medical aid,
            educational support, and community development projects. We believe
            in empowering local communities and fostering sustainable solutions
            that respect Palestinian culture and traditions. Through
            transparency, accountability, and collaborative partnerships, we
            strive to make a lasting positive impact and build a future of hope
            and dignity for all Palestinians. Your support enables us to
            continue this vital work and stand in solidarity with the people of
            Palestine.
          </p>
        </div>
        <div className="banner">
          <img src="/flagm.png" alt="aboutimg" />
        </div>
      </div>
    </section>
  );
};

export default About;
