import React from "react";
import easetour from "../assets/projects/Easetour.png";
import weatherxpert from "../assets/projects/weatherxpert.png";
import insightblogs from "../assets/projects/InsightBlogs.png";
import stylewear from "../assets/projects/stylewear.png";
import "./Project.css";

export default function Projects() {
  const projects = [
    {
      title: "StyleWear – E-Commerce Web App",
      description:
        "A full-stack MERN e-commerce platform with authentication, product management, cart, order flow, and admin dashboard.",
      live: "https://stylewear.vercel.app",
      github: "https://github.com/Pawan-techo/StyleWear",
      image: stylewear,
      latest: true,
    },
    {
      title: "InsightBlogs",
      description:
        "A blogging web application built with React, Node.js, and MongoDB featuring CRUD operations and authentication.",
      live: "https://insight-blogs.vercel.app/",
      github: "#",
      image: insightblogs,
    },
    {
      title: "EaseTour – Tourism Management System",
      description:
        "Tourism system with package booking, admin panel, OTP verification, and MySQL database integration.",
      live: "#",
      github: "#",
      image: easetour,
    },

    {
      title: "WeatherXpert",
      description:
        "Real-time weather app using Node.js, Express, and Weather API with clean UI and live data rendering.",
      live: "https://weatherxpert.onrender.com",
      github: "https://github.com/yourusername/weatherxpert",
      image: weatherxpert,
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img-wrapper">
              {project.latest && <span className="latest-badge">LATEST & HOT</span>}
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
np
              <div className="project-buttons">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn live-btn"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn github-btn"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
