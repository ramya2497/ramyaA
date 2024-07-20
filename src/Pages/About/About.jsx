import React from "react";
import "../About/About.css";

function About() {
  return (
    <>
      <div className="About-container" id="about">
        <div className="About-section">
          <div className="circle"></div>
          <div className="About-heading">About Me</div>
        </div>
        <div className="About-head1">
          Creative Front-End Developer specializing in dynamic, user-friendly
          web interfaces.
        </div>
        <div className="Lorem-one">
          Hello! I'm Ramya, a passionate front-end developer dedicated to
          creating visually appealing and user-friendly web designs. My journey
          into web development began with curiosity, evolving into a deep
          passion for HTML, CSS, JavaScript, and modern frameworks.
        </div>
        <div className="Lorem-one">
          I specialize in responsive design, animation, interactivity, and
          performance optimization. My approach is user-centric, focusing on
          seamless and enjoyable experiences. Let's connect and bring your
          vision to life!
        </div>
        <a href="">
          <button className="DownloadCv-button">Download My CV</button>
        </a>
        <div className="animation">
          <div className="square layer1"></div>
          <div className="square layer2"></div>
          <div className="square layer3"></div>
        </div>
      </div>
    </>
  );
}

export default About;
