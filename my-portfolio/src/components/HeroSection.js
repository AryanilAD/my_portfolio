import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function HeroSection() {
  const [text] = useTypewriter({
    words: [
      "Machine Learning Engineer",
      "Data Enthusiast",
      "Analytics Expert",
      "Business Consultant"
    ],
    loop: true,
    delaySpeed: 2200,
  });

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 5vw",
        background: "transparent"
      }}
    >
      {/* Left side: text */}
      <div style={{ flex: 1, maxWidth: 540 }}>
        <h1
          style={{
            fontWeight: 700,
            fontSize: 56,
            color: "#e0e6f0",
            marginBottom: 16,
            letterSpacing: 1,
            fontFamily: "'Poppins', Arial, sans-serif",
            textShadow: "0 4px 16px rgba(7,20,50,0.21)",
            textAlign: "left",
            marginLeft: 27
          }}
        >
          Aryanil Dey
        </h1>

        {/* Typewriter with underline */}
        <div
          style={{
            display: "inline-block",
            position: "relative",
            textAlign: "left",
            marginBottom: 16,
            marginLeft: 28
          }}
        >
          <span
            style={{
              fontSize: 28,
              color: "#e0e6f0",
              fontWeight: 400,
              fontFamily: "'Poppins', Arial, sans-serif",
              minHeight: "48px"
            }}
          >
            {text}
            <Cursor cursorColor="#29B6F6" />
          </span>
          <div
            style={{
              height: 3,
              width: 330,
              background: "#29B6F6",
              marginTop: 8,
              borderRadius: 2
            }}
          />
        </div>

        {/* Resume button directly under typewriter */}
        <a
          href="/assets/AD_Resume_25.pdf"
          className="cv-download-btn"
          target="_blank"
          rel="noopener noreferrer"
          download
          tabIndex={0}
          style={{
            textDecoration: "none",
            marginLeft: 28,
            marginTop: 8,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "linear-gradient(135deg, #2aa6e8 0%, #29B6F6 100%)",
            color: "#0b172a",
            padding: "10px 16px",
            borderRadius: 10,
            fontWeight: 700,
            boxShadow: "0 6px 20px rgba(41,182,246,0.28)",
            transition: "transform 0.15s ease, box-shadow 0.2s ease, filter 0.2s ease"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 10px 24px rgba(41,182,246,0.35)";
            e.currentTarget.style.filter = "brightness(1.03)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(41,182,246,0.28)";
            e.currentTarget.style.filter = "none";
          }}
        >
          <i className="bi bi-file-earmark-arrow-down" style={{ fontSize: 20, color: "#0b172a" }} />
          <span>Resume</span>
        </a>

        {/* Social Icons - Solid White with Hover Animation */}
        <div
          style={{
            fontSize: 0,
            textAlign: "left",
            marginTop: 24,
            marginLeft: 26,
            display: "flex",
            gap: 18
          }}
        >
          <a
            className="hero-social-white"
            href="https://github.com/AryanilAD"
            rel="noopener noreferrer"
            target="_blank"
            title="GitHub"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 68,
              height: 68,
              borderRadius: "50%",
              background: "rgba(34,49,75,0.15)",
              boxShadow: "0 2px 18px 0 #29b6f622, 0 1.5px 2px #151d2f11",
              transition: "box-shadow 0.28s, background 0.20s, transform 0.17s"
            }}
            onMouseOver={e => e.currentTarget.style.background = "rgba(65,183,255,0.20)"}
            onMouseOut={e => e.currentTarget.style.background = "rgba(34,49,75,0.15)"}
          >
            <i
              className="bi bi-github"
              style={{
                fontSize: 48,
                color: "#fff",
                transition: "color 0.22s, transform 0.18s"
              }}
            />
          </a>
          <a
            className="hero-social-white"
            href="https://www.linkedin.com/in/aryanildey"
            rel="noopener noreferrer"
            target="_blank"
            title="LinkedIn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 68,
              height: 68,
              borderRadius: "50%",
              background: "rgba(34,49,75,0.15)",
              boxShadow: "0 2px 18px 0 #29b6f622, 0 1.5px 2px #151d2f11",
              transition: "box-shadow 0.28s, background 0.20s, transform 0.17s"
            }}
            onMouseOver={e => e.currentTarget.style.background = "rgba(65,183,255,0.20)"}
            onMouseOut={e => e.currentTarget.style.background = "rgba(34,49,75,0.15)"}
          >
            <i
              className="bi bi-linkedin"
              style={{
                fontSize: 48,
                color: "#fff",
                transition: "color 0.22s, transform 0.18s"
              }}
            />
          </a>
        </div>
      </div>

      {/* Right side: profile photo */}
      <div className="hero-photo" tabIndex={0}>
        <img
          src="assets/img/20230624_175741.jpg"
          alt="Aryanil Dey"
          draggable={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "inherit",
            background: "linear-gradient(135deg,#22314b 0%, #3f5870 100%)",
            userSelect: "none"
          }}
        />
      </div>
    </section>
  );
}

export default HeroSection;
