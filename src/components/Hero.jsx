import React, { useRef, useEffect, useState } from "react";
import "./Hero.css";
import profile from "../assets/profile.jpg"; 

const DEFAULT_AVATAR = `data:image/svg+xml;utf8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="100%" height="100%" fill="#0b1220"/><text x="50%" y="54%" font-size="160" text-anchor="middle" fill="#fff" font-family="Arial, Helvetica, sans-serif">PB</text></svg>'
)}`;

export default function Hero({ avatarSrc }) {
  const cardRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["MCA Graduate", "Full-Stack Developer", "Tech Enthusiast"];

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotY = (px - 0.5) * 16;
    const rotX = (0.5 - py) * 16;
    el.style.setProperty("--rx", `${rotX}deg`);
    el.style.setProperty("--ry", `${rotY}deg`);
    el.style.setProperty("--tx", `${(px - 0.5) * 8}px`);
    el.style.setProperty("--ty", `${(py - 0.5) * 8}px`);
  };

  const resetTilt = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--tx", "0px");
    el.style.setProperty("--ty", "0px");
  };

  const avatar = avatarSrc || profile || DEFAULT_AVATAR;

  return (
    <section id="hero" className="hero-section">
      <div className="bg-orbs" />
      <div className="bg-orbs bg-orbs--2" />

      <div
        ref={cardRef}
        className="hero-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
      >
        <img src={avatar} alt="Pawan Bhuyar — profile" className="avatar" />

        <h1 className="title">
          Hi, I'm <span className="gradient-text">Pawan Bhuyar</span>
        </h1>

        <p className="subtitle" aria-live="polite">
          {roles[roleIndex]}
        </p>

        <a href="#projects" className="cta">
          View My Work
        </a>

        <div className="float shape-1" />
        <div className="float shape-2" />
      </div>
    </section>
  );
}
