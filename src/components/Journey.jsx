import React from "react";
import "./Journey.css";

export default function Journey() {
  return (
    <section id="journey" className="journey-section">
      <h2 className="journey-title">My Journey</h2>

      <div className="timeline">
        <div className="timeline-item left">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <span className="timeline-date">2020 – 2023</span>
            <h3>BSc (Computer Science) – 74 / 100</h3>
            <p className="timeline-org">
              Nabira Mahavidyalaya, Katol, Nagpur
            </p>
            <p className="timeline-desc">
              Built strong foundations in programming, data structures, and
              computer fundamentals.
            </p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <span className="timeline-date">2023 – 2025</span>
            <h3>MCA – 8.11 / 10</h3>
            <p className="timeline-org">
              Institute of Industrial and Computer Management and Research, Pune
            </p>
            <p className="timeline-desc">
              Specialized in software development, databases, and full-stack
              technologies.
            </p>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="timeline-dot highlight" />
          <div className="timeline-content">
            <span className="timeline-date">Aug 2025 – Oct 2025</span>
            <h3>Web Developer Intern (Remote)</h3>
            <p className="timeline-org">Foster Digital Services, Nagpur</p>

            <ul className="timeline-list">
              <li>Developed responsive web apps using HTML, CSS, JavaScript & React.js</li>
              <li>Built reusable React components for performance & scalability</li>
              <li>Created RESTful APIs using Node.js & Express.js</li>
              <li>Collaborated with team to convert requirements into solutions</li>
              <li>Used Git & GitHub for version control and collaboration</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item ongoing center">
          <div className="timeline-dot pulse" />
          <div className="timeline-content">
            <h3>Still Going 🚀</h3>
            <p className="timeline-desc">
              Continuously learning, building real-world projects, and improving
              as a Full-Stack Developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
