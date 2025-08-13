// HeroSection.jsx — hero video sized to match the GIF's rectangular frame

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

  const resumeHref = "/assets/AD_Resume.pdf";
  const resumeHrefCacheBust = "/assets/AD_Resume.pdf?v=2";

  // Replace with your GIF's exact pixel dimensions
  // Example: if GIF is 640x360 (16:9), set these accordingly.
  const GIF_WIDTH = 640;
  const GIF_HEIGHT = 360;
  const GIF_ASPECT = GIF_WIDTH / GIF_HEIGHT; // 16/9 in this example

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
        background: "transparent",
        gap: 24
      }}
    >
      {/* Left side */}
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: 28,
            marginBottom: 8
          }}
        >
          <span
            style={{
              fontSize: 28,
              color: "#e0e6f0",
              fontWeight: 400,
              fontFamily: "'Poppins', Arial, sans-serif",
              minHeight: "48px",
              lineHeight: "1.3"
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

        {/* Resume button */}
        <a
          href={resumeHref}
          className="cv-download-btn"
          target="_blank"
          rel="noopener noreferrer"
          download
          tabIndex={0}
          style={{
            position: "relative",
            textDecoration: "none",
            marginLeft: 28,
            marginTop: 6,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 18px",
            borderRadius: 14,
            fontWeight: 700,
            color: "#e9f4ff",
            background: "linear-gradient(135deg, rgba(41,182,246,0.14), rgba(65,183,255,0.10))",
            border: "1px solid rgba(255,255,255,0.22)",
            boxShadow: "0 10px 30px rgba(10, 22, 40, 0.20), inset 0 1px 0 rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            overflow: "hidden",
            transition: "transform 0.18s ease, box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease, filter 0.25s ease"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 16px 38px rgba(41,182,246,0.30), inset 0 1px 0 rgba(255,255,255,0.18)";
            e.currentTarget.style.background = "linear-gradient(135deg, rgba(41,182,246,0.22), rgba(65,183,255,0.16))";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.32)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(10, 22, 40, 0.20), inset 0 1px 0 rgba(255,255,255,0.12)";
            e.currentTarget.style.background = "linear-gradient(135deg, rgba(41,182,246,0.14), rgba(65,183,255,0.10))";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
          }}
          onClick={() => {
            setTimeout(() => {
              window.open(resumeHrefCacheBust, "_blank", "noopener,noreferrer");
            }, 0);
          }}
        >
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: "-120%",
              height: "100%",
              width: "120%",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)",
              transform: "skewX(-20deg)"
            }}
          />
          <i className="bi bi-file-earmark-arrow-down" style={{ fontSize: 20, color: "#e9f4ff" }} />
          <span>Resume</span>
        </a>

        {/* Socials omitted for brevity (keep your existing) */}
      </div>

      {/* Right side: rectangular video matching GIF aspect */}
      <div
        className="hero-video-frame"
        tabIndex={0}
        style={{
          // Base width in px scaled from GIF, but responsive via max/min
          width: 420,                                   // base desktop width
          aspectRatio: GIF_ASPECT,                      // lock to GIF's ratio
          height: `calc(420px / ${GIF_ASPECT})`,        // fallback for browsers without aspect-ratio
          borderRadius: 0,                              // rectangular frame
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
          background: "#000",
          flexShrink: 0,
          display: "block"
        }}
      >
        <video
          src="/assets/hero/hero-loop.mp4"      // put video at public/assets/hero/hero-loop.mp4
          poster="/assets/hero/hero-poster.jpg" // optional
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            backgroundColor: "#000"
          }}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Responsive sizing to keep the same GIF ratio at smaller breakpoints */}
      <style>{`
        @media (max-width: 1200px) {
          .hero-video-frame { width: 360px; }
        }
        @media (max-width: 992px) {
          .hero-video-frame { width: 320px; }
        }
        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .hero-video-frame {
            width: min(92vw, ${GIF_WIDTH}px); /* cap at GIF pixel width, fill up to 92vw */
          }
        }
        /* Fallback for browsers without aspect-ratio support: enforce height from width */
        @supports not (aspect-ratio: 1) {
          .hero-video-frame {
            height: calc(var(--frame-w, 420px) / ${GIF_ASPECT});
          }
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
