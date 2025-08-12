// components/VideoBackground.jsx
import React, { useEffect, useRef, useState } from "react";

const baseVideoStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "100vw",
  height: "100vh",
  transform: "translate(-50%, -50%)",
  objectFit: "cover",
  objectPosition: "center center",
  zIndex: -2,
  pointerEvents: "none",
  backgroundColor: "#000"
};

export default function VideoBackground() {
  const videoRef = useRef(null);
  const [needsPlayButton, setNeedsPlayButton] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Ensure attributes for best autoplay compatibility
    v.muted = true;
    v.playsInline = true;

    const tryAutoplay = async () => {
      try {
        await v.play();
        setNeedsPlayButton(false);
      } catch {
        // Autoplay blocked (common on iOS/Android if policy changes)
        setNeedsPlayButton(true);
      }
    };

    // Kick off autoplay after mount
    tryAutoplay();
  }, []);

  const handleManualPlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      v.muted = true; // keep muted for background
      await v.play();
      setNeedsPlayButton(false);
    } catch {
      // If manual play still fails, keep the button visible
      setNeedsPlayButton(true);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: -2
      }}
    >
      <video
        ref={videoRef}
        style={baseVideoStyle}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/video/poster.jpg" /* optional */
      >
        <source src="/assets/bg.mp4" type="video/mp4" />
        {/* Add a webm if you have one for better compatibility */}
        {/* <source src="/assets/bg.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>

      {/* If autoplay is blocked, show a tiny play button overlay to trigger playback */}
      {needsPlayButton && (
        <button
          onClick={handleManualPlay}
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
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

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          video {
            width: 100vw !important;
            height: 100vh !important;
            object-fit: cover !important;
            object-position: center center !important;
          }
        }
      `}</style>
    </div>
  );
}
