import React, { useEffect } from "react";
import "../Home/Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ramya from "../../assets/ramya.png";
import Typewriter from "typewriter-effect";
import About from "../../Pages/About/About";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import ContactPage from "../Contact/Contact";
function Home() {
  return (
    <div>
      <Navbar />
      <div className="Home-container" id="home">
        <div className="Home-div">
          <p>I'M GLAD YOU'RE HERE.</p>
          <h1>Hi👋 I'm Ramya </h1>
          <div className="Typing-effect">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "WEB DEVELOPER",
                  "REACT DEVELOPER",
                  "FRONT-END DEVELOPER",
                ],
              }}
            />
          </div>
          <p className="Home-para">
            I'm a passionate front-end developer dedicated to crafting visually
            appealing web designs. Driven by a keen interest in exploring the
            depths of front-end development, I continuously seek new challenges
            and opportunities to enhance my skills.
          </p>
          <div className="Home-footer">
            <p>FIND WITH ME</p>
            <div className="social-icon">
              <a href="www.linkedin.com/in/ramyaarumugam24">
                <FaLinkedin className="First-icon" />
              </a>
              <a href="mailto:ramyaezhil6phase@gmail.com">
                <SiGmail className="Second-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="image-cont">
          <img src={ramya} alt="Ramya" className="ramya" />
        </div>
      </div>
      <About />
      <Education />
      <Skills />
      <Projects />
      <ContactPage />
    </div>
  );
}

export default Home;
