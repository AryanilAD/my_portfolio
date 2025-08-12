// components/VideoBackground.jsx
import React, { useEffect, useRef, useState } from "react";

export default function VideoBackground() {
  const videoRef = useRef(null);
  const [needsPlayButton, setNeedsPlayButton] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;

    (async () => {
      try {
        await v.play();
        setNeedsPlayButton(false);
      } catch {
        setNeedsPlayButton(true);
      }
    })();
  }, []);

  const handleManualPlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      v.muted = true;
      await v.play();
      setNeedsPlayButton(false);
    } catch {
      setNeedsPlayButton(true);
    }
  };

  return (
    <>
      {/* Video layer */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/video/poster.jpg"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100vw",
          height: "100vh",
          objectFit: "cover",          // fill any phone aspect ratio without distortion
          objectPosition: "center",    // center crop
          zIndex: -2,
          pointerEvents: "none",
          backgroundColor: "#000"
        }}
      >
        <source src="/assets/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay above video, below content */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          // Subtle gradient for readability; adjust opacities if needed
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.46) 45%, rgba(0,0,0,0.40) 100%)"
        }}
      />

      {/* Autoplay fallback (appears only if autoplay blocked) */}
      {needsPlayButton && (
        <button
          onClick={handleManualPlay}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 5,
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.35)",
            background: "rgba(20,30,48,0.35)",
            color: "#e8f2ff",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            cursor: "pointer",
            fontWeight: 600,
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)"
          }}
          aria-label="Play background video"
        >
          Play Background
        </button>
      )}

      {/* Mobile/tablet hardening to handle extreme aspect ratios */}
      <style>{`
        @supports (object-fit: cover) {
          /* Ensure all devices keep full-viewport cover */
          video {
            width: 100vw !important;
            height: 100vh !important;
            object-fit: cover !important;
            object-position: center center !important;
          }
        }

        /* iOS Safari viewport quirks fix */
        @media (max-width: 768px) {
          html, body {
            height: 100%;
          }
          body {
            min-height: 100vh;
          }
        }
      `}</style>
    </>
  );
}
