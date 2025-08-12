// components/VideoBackground.jsx — eliminates right-side gap on all phones/tablets

import React, { useEffect, useRef, useState } from "react";

export default function VideoBackground() {
  const videoRef = useRef(null);
  const [needsPlayButton, setNeedsPlayButton] = useState(false);

  // Dynamic viewport height to handle mobile toolbars (iOS/Android)
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
      {/* Fixed wrapper covers viewport and clips any overflow so no white edge appears */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "calc(var(--vh, 1vh) * 100)",
          overflow: "hidden",
          zIndex: -2,
          backgroundColor: "#000"
        }}
      >
        {/* Video centered; add slight overscan to avoid right/left slivers */}
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
            // Base fill
            width: "102vw",                     // overscan to kill right-side gap
            height: "calc(var(--vh, 1vh) * 102)", // slight height overscan, too
            objectFit: "cover",
            objectPosition: "center center",
            // Safety for devices that ignore object-fit initially
            minWidth: "102%",
            minHeight: "102%",
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

      {/* Autoplay fallback only if required by browser policy */}
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

      {/* Hardening rules to keep coverage across extreme aspect ratios and mobile UI shifts */}
      <style>{`
        html, body, #root { height: 100%; }

        @supports (object-fit: cover) {
          video { object-fit: cover !important; object-position: center center !important; }
        }

        /* Portrait extremes (very tall phones) */
        @media (max-aspect-ratio: 9/16) {
          video {
            width: 110vw !important;                     /* extra overscan */
            height: calc(var(--vh, 1vh) * 110) !important;
            min-width: 110% !important;
            min-height: 110% !important;
          }
        }

        /* Landscape extremes (very wide) */
        @media (min-aspect-ratio: 16/9) {
          video {
            width: 110vw !important;
            height: 110vh !important;
            min-width: 110% !important;
            min-height: 110% !important;
          }
        }

        /* iOS Safari dynamic toolbar fix */
        @media (max-width: 1024px) {
          body { min-height: calc(var(--vh, 1vh) * 100); }
        }
      `}</style>
    </>
  );
}
