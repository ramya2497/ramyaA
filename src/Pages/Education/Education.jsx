import React from "react";
import "../Education/Education.css";

function Education() {
  return (
    <>
      <div className="Education-container" id="education">
        <div className="Edu-partition">
          <div className="Education-section">
            <div className="circle"></div>
            <h1>Education & Experience</h1>
          </div>
          <div className="Edu-container">
            <p className="First-line">Newton School</p>
            <p>FullStack Developer Course</p>
            <p className="Last-line">Mar 2023 - Current</p>
          </div>
          <div className="Edu-container">
            <p className="First-line">SKP Engineering College - India</p>
            <p>Bachelor Degree</p>
            <p>
              Electrical, Electronic and Communications Engineering Technology
            </p>
            <p className="Last-line">2015 - 2019</p>
          </div>
          <div className="Edu-container">
            <p className="First-line">
              GandhiNagar Matriculation Higher Secondary School
            </p>
            <p>Higher Secondary School</p>
            <p className="Last-line">2014 - 2015</p>
          </div>
        </div>
        <div className="Exp-partition">
          <div className="Exp-container">
            <p className="Firstexp-line">Switching My career</p>
            <p className="Timeline">2024 - Current</p>
            <p className="ExpSecond-line">
              Currently, I am dedicated to learning front-end development and
              upskilling in the IT industry. My journey into the tech world is
              fueled by a passion for creating engaging and user-friendly web
              experiences. With a focus on mastering technologies like HTML,
              CSS, JavaScript, and modern frameworks.
            </p>
          </div>
          <div className="Exp-container">
            <p className="Firstexp-line">Senior AR Analyst</p>
            <p>Global Healthcare - Chennai</p>
            <p className="Timeline">2023 - 2024</p>
            <p className="ExpSecond-line">
              I've had the privilege of training and mentoring juniors in my
              workplace. This experience not only sharpened my skills in
              imparting knowledge and guidance but also deepened my
              understanding of corporate discipline and the importance of
              teamwork.
            </p>
          </div>
          <div className="Exp-container">
            <p className="Firstexp-line">AR Analyst</p>
            <p>Omega Healthcare - Chennai</p>
            <p className="Timeline">2020 - 2022</p>
            <p className="ExpSecond-line">
              {" "}
              I have cultivated strong foundations in communication and
              teamwork. Throughout my two years of experience, I have
              consistently demonstrated my ability to collaborate effectively
              with diverse teams and Clients.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Education;
