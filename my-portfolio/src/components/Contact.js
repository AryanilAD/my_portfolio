import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);
  return (
    <section id="contact" className="container py-5" data-aos="fade-up">
      <div className="contact-card" tabIndex={0}>
        <h2 className="fw-bold mb-4">Contact</h2>
        <ul className="list-unstyled">
          <li><b>Location:</b> Bengaluru, Karnataka, 560018</li>
          <li>
            <b>Email:</b>{" "}
            <a href="mailto:aryanilofficial26@gmail.com">
              aryanilofficial26@gmail.com
            </a>
          </li>
          <li><b>Phone:</b> 9832123556</li>
          <li>
            <b>Social:</b>
            <a
              href="https://www.linkedin.com/in/aryanildey"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/AryanilAD"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Contact;