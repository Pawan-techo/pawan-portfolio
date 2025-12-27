import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import "./contact.css";
export default function Contact() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptcha = (value) => {
    if (value) {
      setCaptchaValid(true);
    } else {
      setCaptchaValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValid) {
      alert("⚠️ Please verify the captcha!");
      return;
    }

          emailjs
         .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          )

      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setSuccess(false), 3000);
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Have a question or want to collaborate? Drop a message below 🚀
      </p>

      <div className="contact-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />

          {/* reCAPTCHA */}
          <div className="captcha-container">
            <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={handleCaptcha}
          /></div>

          <button type="submit" className="btn-submit">
            Send Message
          </button>

          {success && <p className="success-msg">✅ Message sent successfully!</p>}
        </form>

        {/* Right: Google Map */}
        <div className="contact-map">
          <iframe
            title="My Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15046.0!2d73.76727!3d18.65533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1694261990000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );

}
