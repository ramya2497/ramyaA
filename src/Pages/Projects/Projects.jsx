import React from "react";
import "../../Pages/Projects/Projects.css";
import Slide1 from "../../assets/SLIDE1.png";
import Slide2 from "../../assets/SLIDE2.png";

const ProjectPage = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor veritatis nihil enim. Dicta itaque.",
      link: "https://ramya2497.github.io/Ecommerce/",
      image: Slide1,
    },
    {
      title: "Web Agency Website",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor veritatis nihil enim. Dicta itaque.",
      link: "https://webagencywebsite.netlify.app",
      image: Slide2,
    },
    {
      title: "Movie-Deck",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor veritatis nihil enim. Dicta itaque.",
      link: "",
      image: Slide1,
    },
    {
      title: "Social Book",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor veritatis nihil enim. Dicta itaque.",
      link: "",
      image: Slide1,
    },
  ];
  return (
    <>
      <div className="project-page" id="projects">
        <div className="circle-container">
          <div className="circle"></div>
          <h1>My Projects</h1>
        </div>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
