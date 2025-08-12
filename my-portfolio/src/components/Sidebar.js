// components/Sidebar.jsx — mobile-only hamburger, closing works on X and scrim
import React, { useEffect, useRef, useState } from "react";

const navItems = [
  { id: "home", icon: "bi-house-door-fill", label: "Home", gradient: "linear-gradient(135deg, #36d1c4, #00baff)" },
  { id: "about", icon: "bi-person-circle", label: "About", gradient: "linear-gradient(135deg, #fa709a, #fee140)" },
  { id: "projects", icon: "bi-kanban-fill", label: "Projects", gradient: "linear-gradient(135deg, #ff5858, #f09819)" },
  { id: "professional-experience", icon: "bi-journal-text", label: "Professional Exp", gradient: "linear-gradient(135deg, #fc466b, #3f5efb)" },
  { id: "education", icon: "bi-mortarboard-fill", label: "Education", gradient: "linear-gradient(135deg, #11998e, #38ef7d)" },
  { id: "hobbies", icon: "bi-award-fill", label: "Hobbies", gradient: "linear-gradient(135deg, #fc00ff, #00dbde)" },
  { id: "contact", icon: "bi-envelope-fill", label: "Contact", gradient: "linear-gradient(135deg, #a770ef, #fdb99b)" }
];

function Sidebar() {
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const drawerRef = useRef(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const onTapOutside = (e) => {
      if (open && drawerRef.current && !drawerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onTapOutside);
    document.addEventListener("touchstart", onTapOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onTapOutside);
      document.removeEventListener("touchstart", onTapOutside);
    };
  }, [open]);

  // Close on Esc key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const toggleMenu = () => setOpen((prev) => !prev);
  const handleNavClick = () => { if (isMobile) setOpen(false); };

  return (
    <>
      {/* Mobile hamburger / X toggle */}
      {isMobile && (
        <button
          onClick={toggleMenu}
          aria-label={open ? "Close menu" : "Open menu"}
          style={{
            position: "fixed",
            top: 14,
            left: 14,
            width: 44,
            height: 44,
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.22)",
            background: "rgba(26,32,54,0.55)",
            color: "#e9f4ff",
            zIndex: 1201,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(10px)"
          }}
        >
          <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} style={{ fontSize: 22 }} />
        </button>
      )}

      {/* Scrim overlay */}
      {isMobile && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            transition: "opacity 0.2s ease",
            opacity: open ? 1 : 0,
            pointerEvents: open ? "auto" : "none",
            zIndex: 1200
          }}
        />
      )}

      {/* Sidebar */}
      <aside
        ref={drawerRef}
        className="d-flex flex-column align-items-center justify-content-between sidebar-glass"
        style={{
          width: 74,
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 1200,
          padding: "2rem 0 1.5rem 0",
          background: "rgba(36,45,102,0.23)",
          borderRight: "2px solid rgba(210,222,230,0.08)",
          backdropFilter: "blur(19px) saturate(160%)",
          transform: isMobile ? (open ? "translateX(0)" : "translateX(-110%)") : "translateX(0)",
          transition: "transform 0.28s cubic-bezier(.22,.9,.26,1)"
        }}
      >
        <nav className="d-flex flex-column align-items-center gap-3" style={{ width: "100%" }}>
          {navItems.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              onClick={handleNavClick}
              title={nav.label}
              className="d-flex align-items-center justify-content-center position-relative"
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: "rgba(245,245,245,0.07)",
                color: "#e1e6ef",
                fontSize: 26
              }}
              onMouseEnter={() => setHovered(nav.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <i
                className={`bi ${nav.icon}`}
                style={{
                  background: nav.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: 28
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: 58,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(20,23,39,0.94)",
                  color: "#fff",
                  padding: "7px 18px",
                  borderRadius: 7,
                  display: isMobile ? "none" : "block"
                }}
              >
                {nav.label}
              </span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
