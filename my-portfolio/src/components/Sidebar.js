// components/Sidebar.jsx — hover labels active for all device sizes
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

  useEffect(() => {
    const onTapOutside = (e) => {
      if (!open) return;
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
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
          WebkitBackdropFilter: "blur(10px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer"
        }}
        className="sidebar-toggle"
      >
        <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} style={{ fontSize: 22 }} />
      </button>

      {/* Scrim shifted to right of sidebar */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 74,
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
        className="d-flex flex-column align-items-center justify-content-between sidebar-glass"
        style={{
          width: 74,
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 1250,
          padding: "2rem 0 1.5rem",
          background: "rgba(36,45,102,0.23)",
          borderRight: "2px solid rgba(210,222,230,0.08)",
          backdropFilter: "blur(19px) saturate(160%)",
          transform: open ? "translateX(0)" : "translateX(-110%)",
          transition: "transform 280ms cubic-bezier(.22,.9,.26,1)"
        }}
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
                cursor: "pointer",
                marginBottom: idx === navItems.length - 1 ? 0 : 2,
                boxShadow: hovered === nav.id ? "0 0 16px 0.4px rgba(41,182,246,0.17)" : "0 1px 6px rgba(40,50,80,0.03)",
                transition: "all 0.25s cubic-bezier(.45,1.35,.34,1.2)"
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
                  fontSize: 28,
                  transition: "transform 0.23s cubic-bezier(.47,1.52,.41,.98)",
                  transform: hovered === nav.id ? "scale(1.19) rotate(-8deg)" : "scale(1) rotate(0)"
                }}
              />
              <span
                className="sidebar-label"
                style={{
                  position: "absolute",
                  left: 58,
                  top: "50%",
                  background: "rgba(20,23,39,0.94)",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: 15,
                  letterSpacing: 0.4,
                  padding: hovered === nav.id ? "7px 18px" : "7px 0",
                  borderRadius: 7,
                  opacity: hovered === nav.id ? 1 : 0,
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  transform: "translateY(-50%)",
                  transition: "all 0.18s cubic-bezier(.87,0,.13,1)"
                }}
              >
                {nav.label}
              </span>
            </a>
          ))}
        </nav>

        <style>{`
          .sidebar-glass {
            background: rgba(36,45,102,0.16);
            backdrop-filter: blur(13px) saturate(146%);
          }
          /* Toggle visible only on mobile */
          @media (max-width: 991px) {
            .sidebar-toggle { display: flex !important; }
          }
          /* On larger screens hide toggle, keep sidebar open */
          @media (min-width: 992px) {
            .sidebar-toggle { display: none !important; }
            aside { transform: translateX(0) !important; }
          }
        `}</style>
      </aside>
    </>
  );
}

export default Sidebar;
