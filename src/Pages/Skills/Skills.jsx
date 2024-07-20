import React from "react";
import "../Skills/Skills.css";
import HTML from "../../assets/HTML IMG.png";
import CSS from "../../assets/CSS IMG.png";
import JS from "../../assets/JS IMG.png";
import Reactjs from "../../assets/React IMG.png";
import Redux from "../../assets/REDUX IMG.png";
import Git from "../../assets/GIT IMG.png";
import Java from "../../assets/JAVA IMG.png";
import mysql from "../../assets/mysql.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const skill = [
    {
      id: 1,
      name: "HTML5",
      src: HTML,
      percentage: 95,
    },
    {
      id: 2,
      name: "CSS",
      src: CSS,
      percentage: 90,
    },
    {
      id: 3,
      name: "JavaScript",
      src: JS,
      percentage: 85,
    },
    {
      id: 4,
      name: "React",
      src: Reactjs,
      percentage: 90,
    },
    {
      id: 5,
      name: "Redux",
      src: Redux,
      percentage: 90,
    },
    {
      id: 6,
      name: "Github",
      src: Git,
      percentage: 85,
    },
    {
      id: 7,
      name: "Java",
      src: Java,
      percentage: 65,
    },
    {
      id: 8,
      name: "MySQL",
      src: mysql,
      percentage: 60,
    },
  ];
  return (
    <>
      <div className="Skills-container" ref={ref} id="skills">
        <div className="circle"></div>
        <div className="Skill-heading">Skills</div>
      </div>
      <div className="Img-container">
        {skill.map((items, index) => (
          <div className="Image-container" key={index}>
            <img src={items?.src} className="Skills-image" />
            <div className="Skills-label">
              {items.name}{" "}
              <span className="Percentage-span">
                {inView ? (
                  <CountUp start={0} end={items.percentage} duration={2.75} />
                ) : (
                  "0"
                )}
                %
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Skills;
