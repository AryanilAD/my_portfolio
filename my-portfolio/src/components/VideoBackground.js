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
      {/* Fixed wrapper prevents any page scroll/resize causing gaps */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          zIndex: -2,
          backgroundColor: "#000"
        }}
      >
        {/* Background video that truly covers any aspect ratio */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/video/poster.jpg"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            objectPosition: "center center",
            // Extra safety for devices that ignore object-fit during layout:
            minWidth: "100%",
            minHeight: "100%",
            pointerEvents: "none"
          }}
        >
          <source src="/assets/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay above video, below content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 1,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.46) 0%, rgba(0,0,0,0.50) 45%, rgba(0,0,0,0.42) 100%)"
          }}
        />
      </div>

      {/* Autoplay fallback only when required */}
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

      {/* Hardening for mobile and iOS Safari */}
      <style>{`
        html, body, #root {
          height: 100%;
        }
        @supports (object-fit: cover) {
          video {
            object-fit: cover !important;
            object-position: center center !important;
          }
        }
        /* Force fill on extreme tall/narrow or wide screens */
        @media (max-aspect-ratio: 9/16) {
          video {
            width: 100vh !important;
            height: 100vh !important;
            min-width: 100% !important;
            min-height: 100% !important;
          }
        }
        @media (min-aspect-ratio: 16/9) {
          video {
            width: 100vw !important;
            height: 100vw !important;
            min-width: 100% !important;
            min-height: 100% !important;
          }
        }
        /* iOS Safari viewport resizing on scroll address bar */
        @media (max-width: 768px) {
          body { min-height: 100vh; }
        }
      `}</style>
    </>
  );
}
