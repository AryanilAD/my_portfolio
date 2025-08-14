// ProfessionalExperience.jsx — responsive stacked cards + hover animation
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Data
const experiences = [
  {
    title: "Social+",
    role: "Machine Learning Engineer, Internship",
    location: "Greater Kolkata Area · Remote",
    period: "2023/12 – 2024/01",
    desc: [
      "Built tweet tone classifier and scalable data tools.",
      "Worked on Facebook API and web scraping."
    ],
    skills: ["Pandas", "API Testing", "Facebook API", "Web Scraping", "Machine Learning"]
  },
  {
    title: "SAL Biosciences",
    role: "Data Analyst, Data Management Consultant (Intern & FTE)",
    location: "Bengaluru, Karnataka, India · Hybrid/On-site",
    period: "2024/04 – 2024/09",
    desc: [
      "Data analysis, reporting, automation, web scraping, and Google Analytics.",
      "Business data management & analytics; part of high-impact consulting team."
    ],
    skills: [
      "Python", "Business Data Management", "Data Analysis", "Pandas", "Web Scraping",
      "SQL", "Google Analytics", "Data Cleaning"
    ]
  },
  {
    title: "Innomatics Research Labs",
    role: "Data Science With GEN AI, Internship",
    location: "Hyderabad, Telangana, India · Remote",
    period: "2024/09 – 2024/11",
    desc: [
      "Unlocked proficiency in Python, EDA, reporting, and problem solving.",
      "Worked on Generative AI, Streamlit, GEMINI API, HTML, Flask backend, and reporting."
    ],
    skills: [
      "Python", "Amazon EC2", "Generative AI", "Pandas", "Matplotlib", "Streamlit", "SQL", "Jinja", "HTML", "Flask backend", "Reporting & Analysis", "GEMINI API"
    ]
  },
  {
    title: "Biodesign Innovation Labs",
    role: "AI/ML Engineer",
    location: "Bengaluru, Karnataka, India · On-site",
    period: "2024/11 – Present",
    desc: [
      "Training ML models for prediction & recommendation.",
      "Researching medical data analytics.",
      "Collaborating with the full-stack deployment team."
    ],
    skills: ["Docker", "Amazon Web Services (AWS)"]
  }
];

// --- robust total experience calculation with overlaps merge ---
function getMergedIntervals(experiences) {
  function parseDate(str) {
    if (str === "Present") return new Date();
    const [y, m] = str.split("/").map(Number);
    return new Date(y, m - 1);
  }
  let periods = experiences.map(exp => {
    const [start, end] = exp.period.split(" – ");
    return [parseDate(start), parseDate(end)];
  });
  periods.sort((a, b) => a[0] - b[0]);
  const merged = [];
  for (const [start, end] of periods) {
    if (!merged.length || merged[merged.length - 1][1] < start) {
      merged.push([start, end]);
    } else {
      merged[merged.length - 1][1] = new Date(
        Math.max(merged[merged.length - 1][1], end)
      );
    }
  }
  return merged;
}
function totalExperienceString(experiences) {
  const intervals = getMergedIntervals(experiences);
  let months = 0;
  for (const [start, end] of intervals) {
    months +=
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth()) +
      1;
  }
  const y = Math.floor(months / 12),
    m = months % 12;
  let parts = [];
  if (y) parts.push(`${y} yr${y > 1 ? "s" : ""}`);
  if (m) parts.push(`${m} mo${m > 1 ? "s" : ""}`);
  return parts.join(" ") || "0 mo";
}

function FormatSkills({ skills }) {
  if (!skills || !skills.length) return null;
  return (
    <div style={{ marginTop: 6, fontSize: "0.98rem", fontWeight: 700 }}>
      <span style={{ color: "#ffc85a" }}>Skills:</span>{" "}
      <span style={{ color: "#e6f6fb", fontWeight: 600 }}>
        {skills.join(", ")}
      </span>
    </div>
  );
}

function ProfessionalExperience() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Newest first
  const list = [...experiences].reverse();

  return (
    <section id="professional-experience" className="container py-5" data-aos="fade-up">
      <h2 className="fw-bold mb-4">Professional Experience</h2>

      <div style={{ fontWeight: 500, fontSize: "1rem", color: "#b6e1fc", marginBottom: 20 }}>
        <h5>Total Experience:&nbsp;{totalExperienceString(experiences)}</h5>
      </div>

      {/* Responsive grid wrapper */}
      <div className="pe-grid">
        {list.map((exp, i) => (
          <article key={i} className="pe-card" data-aos="zoom-in-up" data-aos-delay={(i % 6) * 30}>
            <div className="pe-title">{exp.title}</div>
            <div className="pe-role">{exp.role}</div>
            <div className="pe-loc">{exp.location}</div>
            <div className="pe-period">{exp.period}</div>

            {exp.desc?.length > 0 && (
              <ul className="pe-desc">
                {exp.desc.map((txt, j) => (
                  <li key={j}>{txt}</li>
                ))}
              </ul>
            )}

            <FormatSkills skills={exp.skills} />
          </article>
        ))}
      </div>

      {/* Styles */}
      <style>{`
        /* Grid: 1 col on phones, 2 cols from ≥768px */
        .pe-grid {
          max-width: 980px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
        }
        @media (min-width: 768px) {
          .pe-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px;
          }
        }

        .pe-card {
          background: linear-gradient(135deg, #22314b 0%, #3f5870 100%);
          border-radius: 18px;
          color: #e2e8ef;
          padding: 1.13rem 1.23rem 1.09rem 1.28rem;
          box-shadow: 0 5px 20px rgba(33,58,110,0.10);
          font-family: inherit;
          font-size: .99rem;
          transition: transform .22s ease, box-shadow .26s ease, border-color .26s ease, filter .26s ease;
          position: relative;
          border: 1px solid rgba(210,222,230,0.08);
          will-change: transform, box-shadow, filter;
        }
        /* Hover/Focus animation: lift + blue glow to match other components */
        .pe-card:hover,
        .pe-card:focus-within {
          transform: translateY(-4px) scale(1.01);
          box-shadow:
            0 18px 48px rgba(41,182,246,0.22),
            0 8px 22px rgba(10,20,40,0.35);
          border-color: rgba(210,222,230,0.18);
          outline: none;
          filter: saturate(1.03) contrast(1.02);
        }

        .pe-title {
          font-weight: 800;
          color: #fff;
          font-size: 1.09rem;
          margin-bottom: 2px;
        }
        .pe-role { font-weight: 600; color: #bbd8fd; }
        .pe-loc  { font-weight: 700; color: #bfdafe; }
        .pe-period {
          font-weight: 700;
          font-size: .98rem;
          color: #bfdafe;
          margin-bottom: 4px;
        }
        .pe-desc { margin: 7px 0 2px 0; padding-left: 17px; }
        .pe-desc li { font-size: .96rem; }

        /* Make cards stretch nicely on large screens but cap width for readability */
        @media (min-width: 1200px) {
          .pe-grid { max-width: 1040px; }
        }
      `}</style>
    </section>
  );
}

export default ProfessionalExperience;
