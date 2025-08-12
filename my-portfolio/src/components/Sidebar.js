import { useState } from "react";

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

  return (
    <aside
      className="d-flex flex-column align-items-center justify-content-between sidebar-glass"
      style={{
        width: 74,
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1040,
        padding: "2rem 0 1.5rem 0",
        background: "rgba(36,45,102,0.23)",
        borderRight: "2px solid rgba(210,222,230,0.08)",
        backdropFilter: "blur(19px) saturate(160%)"
      }}
    >
      <nav className="d-flex flex-column align-items-center gap-3" style={{ width: "100%" }}>
        {navItems.map((nav, idx) => (
          <a
            key={nav.id}
            href={`#${nav.id}`}
            title={nav.label}
            className="d-flex align-items-center justify-content-center position-relative sidebar-icon-link"
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: "rgba(245,245,245,0.07)",
              color: "#e1e6ef",
              border: "none",
              boxShadow: hovered === nav.id
                ? "0 0 16px 0.4px rgba(41,182,246,0.17)"
                : "0 1px 6px rgba(40,50,80,0.03)",
              fontSize: 26,
              cursor: "pointer",
              outline: "none",
              marginBottom: idx === navItems.length - 1 ? 0 : 2,
              transition: "all 0.25s cubic-bezier(.45,1.35,.34,1.2)"
            }}
            tabIndex={0}
            onMouseEnter={() => setHovered(nav.id)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(nav.id)}
            onBlur={() => setHovered(null)}
          >
            <i
              className={`bi ${nav.icon}`}
              style={{
                background: nav.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                fontSize: 28,
                transition: "transform 0.23s cubic-bezier(.47,1.52,.41,.98), filter 0.17s",
                transform: hovered === nav.id
                  ? "scale(1.19) rotate(-8deg)"
                  : "scale(1) rotate(0)",
                filter: hovered === nav.id
                  ? "drop-shadow(0 2px 10px rgba(40,144,255,0.12))"
                  : "none"
              }}
            />
            {/* Slide-out animated label */}
            <span
              style={{
                position: "absolute",
                left: 58,
                top: "50%",
                transform: hovered === nav.id
                  ? "translateY(-50%) scale(1)"
                  : "translateY(-50%) scale(0.92)",
                background: "rgba(20,23,39,0.94)",
                color: "#fff",
                fontWeight: 500,
                fontSize: 15,
                letterSpacing: 0.4,
                padding: hovered === nav.id ? "7px 18px" : "7px 0",
                borderRadius: 7,
                opacity: hovered === nav.id ? 1 : 0,
                pointerEvents: "none",
                boxShadow: hovered === nav.id
                  ? "0 4px 16px rgba(44,152,243,0.10)"
                  : "none",
                whiteSpace: "nowrap",
                transition: "all 0.18s cubic-bezier(.87,0,.13,1)"
              }}
            >
              {nav.label}
            </span>
          </a>
        ))}
      </nav>
      {/* Socials */}
      <div className="d-flex flex-column align-items-center gap-2 mt-4">
        <a
          href="https://github.com/AryanilAD"
          rel="noopener noreferrer"
          target="_blank"
          style={{
            color: "#e8eaf2",
            fontSize: 22,
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "rgba(245,245,245,0.17)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 1px 6px rgba(32,50,80,0.10)",
            transition: "all 0.25s"
          }}
          onMouseEnter={e => e.currentTarget.style.background = "linear-gradient(135deg,#242d66 0%, #21cbf3 100%)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(245,245,245,0.17)"}
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/aryanildey"
          rel="noopener noreferrer"
          target="_blank"
          style={{
            color: "#e8eaf2",
            fontSize: 22,
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "rgba(245,245,245,0.17)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 1px 6px rgba(32,50,80,0.10)",
            transition: "all 0.25s"
          }}
          onMouseEnter={e => e.currentTarget.style.background = "linear-gradient(135deg,#242d66 0%, #36d1c4 100%)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(245,245,245,0.17)"}
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
      <style>{`
        .sidebar-glass {
          background: rgba(36,45,102,0.16);
          backdrop-filter: blur(13px) saturate(146%);
        }
      `}</style>
    </aside>
  );
}

export default Sidebar;
