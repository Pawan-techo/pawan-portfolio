import React from "react";
import "./Footer.css"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {new Date().getFullYear()} Pawan Bhuyar | All Rights Reserved</p>
        <div className="footer-icons">
          <a href="https://github.com/Pawan-techo" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/pawan-bhuyar" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pawanbhuyar222@gmail.com&su=Hello%20Pawan&body=Hi%20Pawan,"
         target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        </div>
      </div>
    </footer>
  );
}
