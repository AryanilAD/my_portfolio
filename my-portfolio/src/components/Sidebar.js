// components/Sidebar.jsx — mobile click fix by resizing scrim
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
  const drawerRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const onTapOutside = (e) => {
      if (!open) return;
      if (drawerRef.current && !drawerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onTapOutside);
    document.addEventListener("touchstart", onTapOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onTapOutside);
      document.removeEventListener("touchstart", onTapOutside);
    };
  }, [open]);

  // Lock scroll on mobile when open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <>
      {/* Toggle */}
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        style={{
          position: "fixed",
          left: 14,
          top: 14,
          zIndex: 1300,
          width: 44,
          height: 44,
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,0.22)",
          background: "rgba(26,32,54,0.55)",
          color: "#e9f4ff",
          backdropFilter: "blur(10px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer"
        }}
        className="sidebar-toggle"
      >
        <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} style={{ fontSize: 22 }} />
      </button>

      {/* Scrim shifted to the right of the sidebar so it doesn't cover it */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 74, // start right after sidebar
          width: "calc(100% - 74px)",
          height: "100vh",
          zIndex: 1200,
          background: open ? "rgba(0,0,0,0.35)" : "transparent",
          pointerEvents: open ? "auto" : "none",
          transition: "background 200ms ease"
        }}
      />

      {/* Sidebar */}
      <aside
        ref={drawerRef}
        style={{
          width: 74,
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 1250, // above scrim
          padding: "2rem 0 1.5rem",
          background: "rgba(36,45,102,0.23)",
          borderRight: "2px solid rgba(210,222,230,0.08)",
          backdropFilter: "blur(19px) saturate(160%)",
          transform: open ? "translateX(0)" : "translateX(-110%)",
          transition: "transform 280ms cubic-bezier(.22,.9,.26,1)"
        }}
        className="sidebar-glass"
      >
        <nav className="d-flex flex-column align-items-center gap-3" style={{ width: "100%" }}>
          {navItems.map((nav, idx) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              onClick={handleNavClick}
              title={nav.label}
              className="d-flex align-items-center justify-content-center position-relative sidebar-icon-link"
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: "rgba(245,245,245,0.07)",
                color: "#e1e6ef",
                cursor: "pointer"
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
              <span className="sidebar-label" style={{ display: "none" }}>{nav.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      <style>{`
        @media (max-width: 991px) {
          .sidebar-toggle { display: flex !important; }
        }
        @media (min-width: 992px) {
          aside { transform: translateX(0) !important; }
          .sidebar-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}

export default Sidebar;
