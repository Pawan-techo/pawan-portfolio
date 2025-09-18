import React from "react";
import profile from "../assets/profile.jpg"; 
import easetour from "../assets/projects/Easetour.png";
import weatherxpert from "../assets/projects/weatherxpert.png";
import cbp from "../assets/projects/cbp.png";
import todolist from "../assets/projects/todolist.png";
import "./Project.css";
export default function Projects() {
const projects = [
  {
    title: "EaseTour - Tourism System",
    description:
      "Tourism management system with booking, package, and place management built using PHP, HTML, CSS, and MySQL.",
    link: "#",
    image: easetour,
  },
  {
    title: "WeatherXpert",
    description:
      "Real-time weather application using Node.js, Express.js, HTML, and CSS with WeatherAPI integration.",
    link: "#",
    image: weatherxpert,
  },
  {
    title: "Calorie Burn Predictor",
    description:
      "AI/ML-based system built with Python and Flask to predict calories burned from user health and exercise data.",
    link: "#",
    image: cbp,
  },
  {
    title: "To-Do List",
    description:
      "Task management app developed with React.js, Node.js, HTML, and CSS to add, edit, and delete daily tasks.",
    link: "#",
    image: todolist,
  },
];



  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn-primary">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
