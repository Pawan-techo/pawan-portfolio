import React from "react";
import "./about.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Image Carousel */}
        <div className="about-image">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation={true}
            className="about-swiper"
          >
            <SwiperSlide>
              <img src="/profile/pic-1.png" alt="Profile 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/profile/pic-2.jpeg" alt="Profile 2" />
            </SwiperSlide>
             <SwiperSlide>
              <img src="/profile/pic-4.jpg" alt="Profile 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/profile/pic-3.jpeg" alt="Profile 3" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* About Me Content */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm <span className="highlight">Pawan Bhuyar</span>, a{" "}
            <strong>Full-Stack Developer</strong> recently completed my{" "}
            <strong>MCA</strong> in India. I specialize in creating{" "}
            scalable, modern, and user-friendly applications using the{" "}
            <strong>MERN stack</strong>, frontend technologies, and machine learning.
          </p>
          <p>
            I enjoy solving real-world problems with clean and efficient code,
            while constantly learning new technologies to stay ahead in the tech world.
          </p>

          {/* Quick Info */}
          <div className="quick-info">
            <p><strong>🎓 Education:</strong> Master of Computer Applications (MCA)</p>
            <p><strong>📍 Location:</strong> Pune, India</p>
            <p><strong>💻 Experience:</strong> Academic + personal projects (Full Stack,Web Apps)</p>
            <p><strong>⚡ Interests:</strong> Fitness, Gaming, and Building Scalable Apps</p>
          </div>

          {/* Tech Highlights */}
          <div className="tech-highlights">
            <span>⚙️ MERN Stack</span>
            <span>☁️ AWS & Azure</span>
            <span>🤖 Machine Learning</span>
            <span>🗄️ SQL & NoSQL</span>
          </div>

          <a href="#contact" className="btn-primary">Let’s Connect</a>
        </div>
      </div>
    </section>
  );
}
