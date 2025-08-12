// components/VideoBackground.jsx — final hard lock (no right-side gap)

import React, { useEffect, useRef, useState } from "react";

export default function VideoBackground() {
  const videoRef = useRef(null);
  const [needsPlayButton, setNeedsPlayButton] = useState(false);

  // Dynamic viewport height (mobile safe)
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
      {/* Fullscreen fixed wrapper; clips any overflow */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100dvh",
          height: "calc(var(--vh, 1vh) * 100)",
          overflow: "hidden",
          zIndex: -2,
          backgroundColor: "#000"
        }}
      >
        {/* Video with aggressive overscan + center translate */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/video/poster.jpg"
          className="bg-video-lock"
        >
          <source src="/assets/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay above video */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
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

      <style>{`
        /* Prevent any horizontal scroll that could reveal edges */
        html, body { margin: 0; padding: 0; overflow-x: hidden; }
        #root { height: 100%; }

        /* Core lock: overscan + center translate + zoom */
        .bg-video-lock {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1);
          width: 140vw;                 /* heavy overscan to kill right/left gaps */
          height: 140vh;                /* heavy overscan to kill top/bottom gaps */
          min-width: 140%;
          min-height: 140%;
          object-fit: cover !important;
          object-position: center center !important;
          pointer-events: none;
          animation: bgZoom 32s ease-in-out infinite alternate;
        }

        @keyframes bgZoom {
          0%   { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) scale(1.06); }
        }

        /* Portrait extremes */
        @media (max-aspect-ratio: 9/16) {
          .bg-video-lock {
            width: 150vw;
            height: 150vh;
            min-width: 150%;
            min-height: 150%;
          }
        }

        /* Landscape extremes */
        @media (min-aspect-ratio: 16/9) {
          .bg-video-lock {
            width: 150vw;
            height: 150vh;
            min-width: 150%;
            min-height: 150%;
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
