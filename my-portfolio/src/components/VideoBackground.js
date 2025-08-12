// components/VideoBackground.jsx
import React, { useEffect, useRef, useState } from "react";

export default function VideoBackground() {
  const videoRef = useRef(null);
  const [needsPlayButton, setNeedsPlayButton] = useState(false);

  useEffect(() => {
    // iOS/Android mobile 100dvh fix: update CSS var on resize
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

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
      {/* Fixed wrapper that always matches viewport and clips overflow */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          // Use dynamic viewport height to avoid gaps behind mobile toolbars
          height: "calc(var(--vh, 1vh) * 100)",
          overflow: "hidden",
          zIndex: -2,
          backgroundColor: "#000"
        }}
      >
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
            width: "100vw",
            height: "calc(var(--vh, 1vh) * 100)",
            objectFit: "cover",
            objectPosition: "center",
            // Extra safety in case device ignores object-fit initially
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
            zIndex: 1,
            pointerEvents: "none",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.46) 0%, rgba(0,0,0,0.50) 45%, rgba(0,0,0,0.42) 100%)"
          }}
        />
      </div>

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
        /* Ensure root can accommodate our fixed layers */
        html, body, #root {
          height: 100%;
        }

        /* Enforce cover regardless of aspect ratio */
        @supports (object-fit: cover) {
          video {
            object-fit: cover !important;
            object-position: center center !important;
          }
        }

        /* Handle extreme tall screens (portrait phones) */
        @media (max-aspect-ratio: 9/16) {
          video {
            width: calc(var(--vh, 1vh) * 100) !important; /* tie width to height to avoid side gaps */
            height: calc(var(--vh, 1vh) * 100) !important;
            min-width: 100% !important;
            min-height: 100% !important;
          }
        }

        /* Handle extreme wide screens (landscape phones) */
        @media (min-aspect-ratio: 16/9) {
          video {
            width: 100vw !important;
            height: 100vw !important;
            min-width: 100% !important;
            min-height: 100% !important;
          }
        }

        /* iOS Safari toolbar shrink/expand */
        @media (max-width: 1024px) {
          body { min-height: calc(var(--vh, 1vh) * 100); }
        }
      `}</style>
    </>
  );
}
