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
      {/* Background video */}
      <video
        ref={videoRef}
        style={baseVideoStyle}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/video/poster.jpg"
      >
        <source src="/assets/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay above video, below page content */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.45)", // adjust opacity here
          zIndex: -1,
          pointerEvents: "none"
        }}
      />

      {/* Play button fallback if autoplay blocked */}
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
        >
          Play Background
        </button>
      )}

      {/* Ensure correct sizing on mobile */}
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
