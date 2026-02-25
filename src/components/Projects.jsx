import React from "react";
import easetour from "../assets/projects/Easetour.png";
import insightblogs from "../assets/projects/InsightBlogs.png";
import stylewear from "../assets/projects/stylewear.png";
import rentlordiq from "../assets/projects/rentlord.png";
import "./Project.css";

export default function Projects() {
  const projects = [
    {
      title: "RentLord.iQ – SaaS Rental Management System",
      description:
        "A SaaS-based rental management system built with the MERN stack, enabling property management, rent tracking, tenant onboarding, and maintenance automation.",
      live: "https://rentlordiq.vercel.app",
      github: "https://github.com/Pawan-techo/RentLord.IQ",
      image: rentlordiq,
      latest: true,
    },
    {
      title: "StyleWear – E-Commerce Web App",
      description:
        "A full-stack MERN e-commerce platform with authentication, product management, cart, order flow, and admin dashboard.",
      live: "https://stylewear.vercel.app",
      github: "https://github.com/Pawan-techo/StyleWear",
      image: stylewear,add
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
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img-wrapper">
              {project.latest && (
                <span className="latest-badge">LATEST & HOT</span>
              )}
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

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
