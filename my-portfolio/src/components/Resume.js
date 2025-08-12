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

// Group array into rows of two
function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function ProfessionalExperience() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  // Newest at top, two per row
  const pairs = chunk([...experiences].reverse(), 2);

  return (
    <section
      id="professional-experience"
      className="container py-5"
      data-aos="fade-up"
    >
      <h2 className="fw-bold mb-4">Professional Experience</h2>
      <div
        style={{
          fontWeight: 500,
          fontSize: "1rem",
          color: "#b6e1fc",
          marginBottom: "20px"
        }}
      >
        <h5>Total Experience:&nbsp;{totalExperienceString(experiences)}</h5>
      </div>

      <div style={{ maxWidth: 820, margin: "0 auto", position: "relative" }}>
        {pairs.map((pair, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              gap: 20,
              marginBottom: "42px",
              justifyContent: "center"
            }}
          >
            {pair.map((exp, colIdx) => (
              <div
                key={colIdx}
                style={{
                  flex: 1,
                  background:
                    "linear-gradient(135deg, #22314b 0%, #3f5870 100%)",
                  borderRadius: 18,
                  boxShadow: "0 5px 20px 0 rgba(33,58,110,0.10)",
                  color: "#e2e8ef",
                  padding: "1.13rem 1.23rem 1.09rem 1.28rem",
                  minWidth: 320,
                  maxWidth: 406,
                  fontFamily: "inherit",
                  fontSize: ".99rem"
                }}
              >
                <div
                  style={{
                    fontWeight: 800,
                    color: "#fff",
                    fontSize: "1.09rem",
                    marginBottom: 2
                  }}
                >
                  {exp.title}
                </div>
                <div style={{ fontWeight: 600, color: "#bbd8fd" }}>
                  {exp.role}
                </div>
                <div style={{ fontWeight: 700, color: "#bfdafe" }}>
                  {exp.location}
                </div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: ".98rem",
                    color: "#bfdafe",
                    marginBottom: 4
                  }}
                >
                  {exp.period}
                </div>
                {exp.desc && exp.desc.length > 0 && (
                  <ul style={{ margin: "7px 0 2px 0", paddingLeft: 17 }}>
                    {exp.desc.map((txt, j) => (
                      <li key={j} style={{ fontSize: ".96rem" }}>
                        {txt}
                      </li>
                    ))}
                  </ul>
                )}
                <FormatSkills skills={exp.skills} />
              </div>
            ))}
            {pair.length === 1 && (
              <div style={{ flex: 1, minWidth: 320, maxWidth: 406 }} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProfessionalExperience;
