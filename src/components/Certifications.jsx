import React, { useState } from "react";
import "./certifications.css";
import Mern from "../assets/certs/Mern_cert.jpg";
import AZ900 from "../assets/certs/AZ900_cert.jpeg";
import Leader from "../assets/certs/Leader_cert.jpg";
import Tcsion from "../assets/certs/Tcsion_cert.jpeg";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: "Full Stack Web Development With Mern",
      issuer: "Udemy",
      year: "2025",
      image: Mern,
    },
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      year: "2024",
      image:AZ900,
    },
   
    {
      title: "Being a Leader and Effective Exercise",
      issuer: "IICMR Pune",
      year: "2024",
      image: Leader,
    }, 
    {
      title: "TCS iON Career Edge - Young Professional",
      issuer: "TCS iON",
      year: "2023",
      image: Tcsion,
    },
  ];

  return (
    <section className="certifications-section" id="certifications">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <img
              src={cert.image}
              alt={cert.title}
              className="cert-image"
              onClick={() => setSelectedCert(cert.image)}
            />
            <h3>{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-year">{cert.year}</p>
          </div>
        ))}
      </div>

      {/* Modal for preview */}
      {selectedCert && (
        <div className="modal" onClick={() => setSelectedCert(null)}>
          <div className="modal-content">
            <img src={selectedCert} alt="Certificate Preview" />
          </div>
        </div>
      )}
    </section>
  );
}
