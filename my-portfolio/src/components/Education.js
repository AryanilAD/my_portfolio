import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Education() {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const cards = [
    {
      degree: "M.Sc. : Data Science and Analytics",
      institution: "JAIN University School of Sciences",
      years: "2022 – 2024",
      grade: "8.03 SGPA",
      achievements: "College Club Secretary; College Fest performer, Guitarist and lead singer",
      image: "assets/img/jain.png"
    },
    {
      degree: "B.Sc. : Biotechnology, Biochemistry and Genetics",
      institution: "Garden City University",
      years: "2019 – 2022",
      grade: "8.55 CGPA",
      achievements: "College Departmental Magazine Editor, College Fest Quiz Master",
      image: "assets/img/GCu.png"
    }
  ];

  return (
    <section id="education" className="container py-5" data-aos="fade-up">
      <h2 className="fw-bold mb-4">Education</h2>
      <div className="row gy-4">
        {cards.map(({ degree, institution, years, grade, achievements, image }, idx) => (
          <div key={idx} className="col-md-6">
            <div
              className="education-card"
              tabIndex={0}
              style={{
                background: "rgba(43, 74, 99, 0.30)", // Semi-transparent for glassmorphism effect
                backdropFilter: "blur(9px)",
                borderRadius: 22,
                color: "#fff",
                boxShadow: "0 4px 24px rgba(33,150,243,.13)",
                transition: "transform 0.19s, box-shadow 0.24s",
                padding: "2rem 2rem 1.5rem 2rem",
                minHeight: 220,
                position: "relative",
                overflow: "hidden",
                marginBottom: "25px"
              }}
            >
              {/* Faded image, even more transparent for a subtle effect */}
              <img
                src={image}
                alt={institution}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.19,
                  filter: "blur(0.6px) brightness(0.96)",
                  zIndex: 0,
                  pointerEvents: "none"
                }}
                loading="lazy"
              />
              {/* Content always stays crisp and on top */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <h5 className="fw-bold mb-2" style={{ fontSize: "1.18rem", color: "#f8fafd" }}>{degree}</h5>
                <div className="mb-2" style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#ffffff",
                }}>
                  {institution}
                </div>
                <div className="mb-2" style={{ fontSize: "1rem", fontWeight: 500 }}>{years}</div>
                <div className="mb-2" style={{ letterSpacing: "0.1em" }}><b>{grade}</b></div>
                <p className="mb-1" style={{ fontSize: "1rem" }}>
                  <span style={{ fontWeight: 600, color: "#edf7fa" }}>Highlights: </span>
                  {achievements}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .education-card:hover, .education-card:focus {
          background: rgba(34, 49, 75, 0.55);
          filter: brightness(1.09);
          transform: translateY(-8px) scale(1.04);
          box-shadow: 0 8px 32px 0 rgba(33,150,243,0.21);
          border-radius: 24px;
        }
      `}</style>
    </section>
  );
}

export default Education;