import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Add image and gradient per project
const projects = [
  {
    id: 1,
    title: 'EDA Project - Analysis of AMCAT Data',
    description: 'This study focuses specifically on individuals with engineering backgrounds, analyzing employment outcomes of engineering graduates.',
    skills: 'Plotly, Python, Analytics',
    link: 'https://github.com/AryanilAD/Innomatics_Research_Labs_Projects/blob/main/eda_project_analysis_of_amcat_data.ipynb',
    image: 'assets/img/amcat.jpg',
    gradient: 'linear-gradient(rgba(33,55,87,0.68),rgba(34,40,77,0.7))'
  },
  {
    id: 2,
    title: 'Predictive Analysis on Cancer Dataset using Machine Learning',
    description: 'ML-based AML and ALL classification.',
    skills: 'Python, ML, Data Cleaning',
    link: 'https://github.com/AryanilAD/Blood_Cancer_Classification_Ml_model',
    image: 'assets/img/Blood.jpeg',
    gradient: 'linear-gradient(rgba(53,53,100,0.68),rgba(44,60,90,0.7))'
  },
  {
    id: 3,
    title: 'Electric Vehicle Data Analysis',
    description: 'Insights on EV adoption and brand trends.',
    skills: 'Data Mining, Analytics',
    link: 'https://github.com/AryanilAD/Innomatics_Research_Labs_Projects/blob/main/Data_Analysis_on_Electric__Vehicle.ipynb',
    image: 'assets/img/EV.jpeg',
    gradient: 'linear-gradient(rgba(33,60,80,0.64),rgba(42,53,83,0.71))'
  },
  {
    id: 4,
    title: 'Sector Wise Dividend Analysis (Multivariate techniques)',
    description: 'Applied multivariate techniques.',
    skills: 'SAS, Analytics, Modeling',
    link: 'https://github.com/AryanilAD/Statistics_Projects/tree/main/Sector%20Wise%20Dividend%20Analysis',
    image: 'assets/img/stocke.jpg',
    gradient: 'linear-gradient(rgba(38,61,91,0.68),rgba(41,50,70,0.77))'
  },
  {
    id: 5,
    title: 'Multifaceted Analysis on Social Media Paradigm using SAS Programming language',
    description: 'Sentiment & behavioral analysis.',
    skills: 'SAS, R',
    link: 'https://github.com/AryanilAD/Statistics_Projects/tree/main/SAS_Sentiment_Analysis',
    image: '/assets/img/SAS.jpeg',
    gradient: 'linear-gradient(rgba(54,80,107,0.75),rgba(18,20,30,0.66))'
  },
  {
    id: 6,
    title: 'Colon Cancer Model',
    description: 'ML model for colon cancer metrics.',
    skills: 'Python, ML',
    link: 'https://github.com/AryanilAD/Colon_Cancer_Prediction_Model',
    image: 'assets/img/Colon Cancer.jpg',
    gradient: 'linear-gradient(rgba(49,45,77,0.75),rgba(26,29,49,0.62))'
  },
  {
    id: 7,
    title: 'Flask & AWS Deployment',
    description: 'Built Regex/Email Validator App.',
    skills: 'Flask, AWS, Python',
    link: 'https://github.com/AryanilAD/Innomatics_Research_Labs_Projects/tree/main/Flask_app',
    image: 'assets/img/Flask.png',
    gradient: 'linear-gradient(rgba(60,50,80,0.68),rgba(32,41,50,0.65))'
  },
  {
    id: 8,
    title: 'PygenAI - Generative AI',
    description: 'AI app using Streamlit & GEMINI API.',
    skills: 'AI, Streamlit',
    link: 'https://github.com/AryanilAD/Innomatics_Research_Labs_Projects/tree/main/GEN_AI_app',
    image: 'assets/img/Pygen.jpeg',
    gradient: 'linear-gradient(rgba(54,65,107,0.63),rgba(38,42,77,0.7))'
  },
  {
    id: 9,
    title: 'Applying Data cleaning techniques on IPL discography dataset in R',
    description: 'Advanced research work.',
    skills: 'Data Science, ML',
    link: 'https://github.com/AryanilAD/Statistics_Projects/tree/main/Data_Cleaning_Activity',
    image: 'assets/img/DataCl.jpeg',
    gradient: 'linear-gradient(rgba(58,69,109,0.64),rgba(33,38,55,0.67))'
  }
];

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section id='projects' className='container py-5' data-aos='fade-up'>
      <h2 className='fw-bold mb-5'>Projects</h2>
      <div className='row g-4'>
        {projects.map(({ id, title, description, skills, link, image, gradient }) => (
          <div key={id} className='col-lg-4 col-md-6'>
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-decoration-none'
              style={{ display: 'block', height: '100%' }}
            >
              <div
                className='project-card shadow border-0 transition-hover'
                style={{
                  position: 'relative',
                  borderRadius: 16,
                  minHeight: 235,
                  color: '#fff',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  background: gradient,
                  boxShadow: "0 4px 30px 0 rgba(34,80,160,0.15)",
                  transition: 'transform 0.22s, box-shadow 0.18s'
                }}
              >
                {/* Faded Image */}
                <img
                  src={image}
                  alt={title}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.49,
                    filter: "blur(1.2px) brightness(0.68)",
                    zIndex: 0,
                  }}
                  loading="lazy"
                />
                {/* Overlay for absolute clarity */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: gradient,
                  zIndex: 1,
                  opacity: 0.86
                }}></div>
                {/* Card content */}
                <div style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "1.8rem 1.2rem 1.15rem 1.2rem",
                  minHeight: 185,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%"
                }}>
                  <div>
                    <h5 className='fw-bold mb-1' style={{ fontSize: "1.15rem" }}>
                      {title}
                    </h5>
                    <p className='mb-2' style={{ color: "#f5fafd" }}>{description}</p>
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <span style={{
                      fontStyle: 'italic',
                      fontWeight: 600,
                      letterSpacing: 0.3,
                      color: "#afeefa"
                    }}>
                      {skills}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <style>{`
        .transition-hover:hover, .transition-hover:focus {
          transform: translateY(-12px) scale(1.04);
          filter: brightness(1.09);
          box-shadow: 0 8px 28px 0 rgba(33,150,243,0.21);
          border-radius: 22px;
        }
      `}</style>
    </section>
  );
}

export default Projects;