import React, { useState } from "react";
import "./certifications.css";
export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: "Full Stack Web Development With Mern",
      issuer: "Udemy",
      year: "2025",
      image: "/certs/Mern_cert.jpg",
    },
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      year: "2024",
      image: "/certs/AZ900_cert.jpeg",
    },
   
    {
      title: "Being a Leader and Effective Exercise",
      issuer: "IICMR Pune",
      year: "2024",
      image: "/certs/Leader_cert.jpg",
    }, 
    {
      title: "TCS iON Career Edge - Young Professional",
      issuer: "TCS iON",
      year: "2023",
      image: "/certs/Tcsion_cert.jpeg",
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
