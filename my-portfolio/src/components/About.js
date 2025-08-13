import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="about" className="container py-5" data-aos="fade-up">
      <h2 className="fw-bold mb-4">About Me</h2>
      <div className="row align-items-center">
        {/* Text Column (LEFT) */}
        <div className="col-lg-7">
          <div style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            <p>
              <span role="img" aria-label="wave"></span> <strong>Hello, I'm Aryanil.</strong>
            </p>
            <p>Thank you for visiting my profile! If you're in a hurry, this section is for you.
            </p>
            <p>
              <span role="img" aria-label="rocket"></span> <strong>Professional Journey</strong>
            </p>
            <p>From enhancing machine learning models to optimize business operations to delivering detailed analysis, my work spans wide domains.<br />
              <span style={{ color: '#1976d2' }}>Currently, I am working as an AI/ML Engineer.</span>
            </p>
            <p>
              <span role="img" aria-label="laptop"></span> <strong>Toolbox &amp; Expertise</strong>
            </p>
            <ul>
              <li><b>Programming:</b> Python, R, SQL, SAS, Git, HTML</li>
              <li><b>Visualization:</b> PowerBI, Excel, Plotly, Pandas, Matplotlib</li>
              <li><b>ML Algorithms:</b> KNN, Random Forest, XGBoost, Linear & Logistic Regression, Gradient Boosting</li>
              <li><b>Framework/Cloud:</b> Flask, AWS EC2, Amazon SageMaker, AWS S3</li>
            </ul>
            <p>
              <span role="img" aria-label="handshake"></span> <strong>Let's Collaborate</strong>
            </p>
            <p>
              If you share a passion for data or want to collaborate, feel free to reach out!
            </p>
          </div>
        </div>
        {/* Image Column (RIGHT) */}
        <div className="col-lg-5 text-center mt-4 mt-lg-0">
          <img
            src="/assets/img/profile.jpg"
            alt="Aryanil profile"
            className="img-fluid"
            style={{
              maxWidth: 280,
              borderRadius: 28,     // Curved corners
              border: "5px solid #1976d2",
              boxShadow: "0 0 30px 8px rgba(33, 150, 243, 0.6)",
              transition: "box-shadow 0.4s cubic-bezier(0.4,1,0.7,0.8)",
              cursor: "pointer",
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 30px 16px rgba(33,150,243,0.85)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 30px 8px rgba(33,150,243,0.6)"}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
