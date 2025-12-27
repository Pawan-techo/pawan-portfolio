import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">Pawan's Portfolio </Link>
        </div>

        {/* Hamburger */}
        <div className="nav-hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
      <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
      <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
      <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
      <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
      <li><a href="#certifications" onClick={() => setIsOpen(false)}>Certifications</a></li>
      <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
      </div>
    </nav>
  );
}
