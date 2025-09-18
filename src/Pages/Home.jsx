import React from "react";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Contact from "../components/Contact.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx"
import Certifications from "../components/Certifications.jsx";
import Footer from "../components/Footer.jsx";
import "./home.css";

export default function Home() {
 

  return (
    <div>
      <section id="Navbar">
      <Navbar />
      </section>
      <section id="Hero">
      <Hero />
      </section>
      <section id="About">
      <About/>
      </section>
      <section id="Projects">
      <Projects/>
      </section>
      <section id="Skills">
      <Skills/>
      </section>
      <section id="Certifications">
      <Certifications/>
      </section>
      <section id="Contact">
      <Contact/>
      </section>
      <Footer/>
    </div>
  );
}
