// components/VideoBackground.jsx — mobile-proof fullscreen cover with overscan + zoom

import React, { useEffect, useRef, useState } from "react";

export default function VideoBackground() {
  const videoRef = useRef(null);
  const [needsPlayButton, setNeedsPlayButton] = useState(false);

  // Dynamic viewport height: prefer 100dvh, fallback to JS var for older browsers
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVH();
    window.addEventListener("resize", setVH);
    window.addEventListener("orientationchange", setVH);
    return () => {
      window.removeEventListener("resize", setVH);
      window.removeEventListener("orientationchange", setVH);
    };
  }, []);

  // Autoplay handling
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
      {/* Fixed wrapper that always clips overflow */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          // prefer modern 100dvh; fallback to JS --vh
          height: "100dvh",
          height: "calc(var(--vh, 1vh) * 100)",
          overflow: "hidden",
          zIndex: -2,
          backgroundColor: "#000"
        }}
      >
        {/* Background video with overscan to kill side gaps */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/video/poster.jpg"
          className="video-bg"
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

      {/* Autoplay fallback */}
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
            color: "#e8f2ff)",
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

      <style>{`
        html, body, #root { height: 100%; margin: 0; padding: 0; }

        /* Core positioning + overscan + smooth zoom to hide any residual edges */
        .video-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120vw;                 /* overscan width */
          height: 120dvh;               /* overscan height (modern) */
          height: calc(var(--vh, 1vh) * 120); /* fallback overscan */
          min-width: 120%;
          min-height: 120%;
          object-fit: cover !important;
          object-position: center center !important;
          pointer-events: none;
          animation: zoomInBg 28s ease-in-out infinite alternate;
        }

        @keyframes zoomInBg {
          0%   { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) scale(1.08); }
        }

        /* Extra safety for ultra-tall portrait phones */
        @media (max-aspect-ratio: 9/16) {
          .video-bg {
            width: 130vw;
            height: calc(var(--vh, 1vh) * 125);
            min-width: 130%;
            min-height: 125%;
          }
        }

        /* Extra safety for ultra-wide landscape phones */
        @media (min-aspect-ratio: 16/9) {
          .video-bg {
            width: 125vw;
            height: calc(var(--vh, 1vh) * 125);
            min-width: 125%;
            min-height: 125%;
          }
        }

        /* iOS/Android dynamic toolbar support */
        @media (max-width: 1024px) {
          body { min-height: calc(var(--vh, 1vh) * 100); }
        }
      `}</style>
    </>
  );
}
