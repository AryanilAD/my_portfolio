import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Devicon + Bootstrap/FontAwesome classes (use SVG fallback for R)
const skills = [
  { name: "Python", level: 65, iconClass: "devicon-python-plain", gradient: "linear-gradient(90deg, #3776ab 0%, #6dc7ef 100%)" },
  // Use img for R icon fallback below
  { name: "R", level: 70, iconClass: "devicon-r-original", gradient: "linear-gradient(90deg, #276dc3 0%, #6e9cea 100%)", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
  { name: "SQL", level: 75, iconClass: "bi bi-database-fill", gradient: "linear-gradient(90deg, #f29111 0%, #e8700c 100%)" },
  { name: "Machine Learning", level: 80, iconClass: "bi bi-robot", gradient: "linear-gradient(90deg, #55b5aa 0%, #3bba9c 100%)" },
  { name: "PowerBI", level: 68, iconClass: "bi bi-bar-chart-fill", gradient: "linear-gradient(90deg, #ffbb00 0%, #ffc83c 100%)" },
  { name: "SAS", level: 80, iconClass: "bi bi-bar-chart-line-fill", gradient: "linear-gradient(90deg, #178cbe 0%, #00adee 100%)" },
  { name: "AWS", level: 65, iconClass: "bi bi-cloud-fill", gradient: "linear-gradient(90deg, #ff9900 0%, #f9d871 100%)" },
  { name: "Git", level: 70, iconClass: "bi bi-git", gradient: "linear-gradient(90deg, #f14e32 0%, #e04119 100%)" }
];

function Skills() {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);
  return (
    <section id="skills" className="container py-5" data-aos="fade-right">
      <h2 className="fw-bold mb-4">Skills</h2>
      <div className="row">
        {skills.map(skill => (
          <div className="col-md-6 mb-4" key={skill.name}>
            <div className="d-flex align-items-center mb-1">
              {/* Skill logo/icon or image */}
              <span
                className="me-2"
                style={{
                  display: "inline-flex",
                  width: 34,
                  height: 34,
                  alignItems: "center",
                  justifyContent: "center",
                  background: skill.gradient,
                  borderRadius: 9,
                  boxShadow: "0 4px 15px 0 rgba(16,40,70,0.07)"
                }}>
                {skill.name === "R" && skill.imgSrc ? (
                  <img
                    src={skill.imgSrc}
                    alt="R"
                    style={{
                      width: 22, height: 22, background: "transparent"
                    }}
                  />
                ) : (
                  <i className={skill.iconClass} style={{
                    fontSize: 22,
                    color: "#fff",
                    filter: "drop-shadow(0 1px 6px rgba(20,40,70,0.09))"
                  }} />
                )}
              </span>
              <span className="fw-semibold" style={{ color: "#fff" }}>{skill.name}</span>
            </div>
            <div
              className="progress"
              style={{
                height: "1.3rem",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "8px",
                overflow: "visible"
              }}
            >
              <div
                className="progress-bar"
                style={{
                  width: `${skill.level}%`,
                  background: skill.gradient,
                  transition: "width 1.2s cubic-bezier(.78,1.85,.58,1.41)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  borderRadius: "8px",
                  boxShadow: "0 1px 14px 0 rgba(34,150,243,0.13)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  letterSpacing: 0.5
                }}
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {skill.level}%
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .progress-bar {
          animation: skillbar-appear 1.2s cubic-bezier(.46,1.56,.57,.99);
        }
        @keyframes skillbar-appear {
          0% { width: 0; }
          100% { }
        }
      `}</style>
    </section>
  );
}

export default Skills;