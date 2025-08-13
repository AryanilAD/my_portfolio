// HeroSection.jsx — bigger video frame + light blue glow + curved corners

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

  // Set to your actual GIF/video dimensions (example: 640x360 → 16:9)
  const GIF_WIDTH = 640;
  const GIF_HEIGHT = 360;
  const GIF_ASPECT = GIF_WIDTH / GIF_HEIGHT;

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
        gap: 28
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

        {/* Typewriter */}
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

        {/* Socials */}
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

      {/* Right side: bigger video with light blue glow + curved corners */}
      <div
        className="hero-video-frame glow-hover"
        tabIndex={0}
        style={{
          // Bigger base size
          width: 480,                                // was 420 → increased
          aspectRatio: GIF_ASPECT,
          height: `calc(480px / ${GIF_ASPECT})`,
          borderRadius: 18,                          // curved corners
          overflow: "hidden",
          // Persistent subtle blue glow + base shadow
          boxShadow:
            "0 22px 70px rgba(0,0,0,0.38), 0 0 0 1px rgba(41,182,246,0.18), 0 0 24px rgba(41,182,246,0.22)",
          background: "#0a0f1a",
          flexShrink: 0,
          display: "block",
          position: "relative",
          transition: "transform 220ms ease, box-shadow 220ms ease, filter 220ms ease"
        }}
      >
        {/* subtle inner ring to enhance glow */}
        <span
          aria-hidden="true"
          className="glow-ring"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            borderRadius: 18,
            background:
              "radial-gradient(120% 120% at 50% 50%, rgba(41,182,246,0) 55%, rgba(41,182,246,0.16) 85%, rgba(41,182,246,0) 100%)",
            opacity: 0.65    // visible even when not hovered (light glow)
          }}
        />
        <video
          src="assets/video.mp4"
          poster="/assets/hero/hero-poster.jpg"
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
            backgroundColor: "#000",
            borderRadius: 18,
            transition: "transform 220ms ease, filter 220ms ease"
          }}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <style>{`
        /* Hover/focus intensifies glow and adds slight lift */
        .glow-hover:hover,
        .glow-hover:focus {
          transform: translateY(-2px) scale(1.018);
          box-shadow:
            0 28px 84px rgba(0,0,0,0.42),
            0 0 0 2px rgba(41,182,246,0.24),
            0 0 30px rgba(41,182,246,0.34);
          outline: none;
        }
        .glow-hover:hover video,
        .glow-hover:focus video {
          transform: scale(1.02);
          filter: saturate(1.06) contrast(1.03);
        }

        /* Touch devices: emulate hover on tap */
        @media (hover: none) and (pointer: coarse) {
          .glow-hover:active {
            transform: translateY(-1px) scale(1.01);
            box-shadow:
              0 24px 74px rgba(0,0,0,0.40),
              0 0 0 2px rgba(41,182,246,0.22),
              0 0 26px rgba(41,182,246,0.30);
          }
        }

        /* Responsive size bumps (keep it bigger at each breakpoint) */
        @media (max-width: 1200px) {
          .hero-video-frame { width: 440px; height: calc(440px / ${GIF_ASPECT}); }
        }
        @media (max-width: 992px) {
          .hero-section { gap: 22px; }
          .hero-video-frame { width: 400px; height: calc(400px / ${GIF_ASPECT}); }
        }
        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .hero-video-frame {
            width: min(96vw, ${GIF_WIDTH}px);
            height: calc(min(96vw, ${GIF_WIDTH}px) / ${GIF_ASPECT});
          }
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
