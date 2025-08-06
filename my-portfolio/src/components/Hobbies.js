import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hobbies() {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);
  const hobbies = [
    {
      id: 1,
      name: "Cooking",
      description: "Cooking is a stress buster",
      bgImage: "/assets/img/food.jpg", // <- your provided faded image
      animation: "fade-in"
    },
    {
      id: 2,
      name: "Traveling",
      description: "Exploring spirituality.",
      bgImage: "/assets/img/travelling.jpg",
      animation: "fade-right"
    },
    {
      id: 3,
      name: "Music",
      description: "Love for music is inevitable",
      bgImage: "/assets/img/guitar.jpg",
      animation: "flip-up"
    },
    {
      id: 4,
      name: "Anime",
      description: "My go to reality escape pod",
      bgImage: "/assets/img/anime.jpg",
      animation: "fade-left"
    }
  ];
  return (
    <section id="hobbies" className="container py-5" data-aos="fade-left">
      <h2 className="fw-bold mb-4">Hobbies</h2>
      <div className="row">
        {hobbies.map(({ id, name, emoji, description, bgImage, animation }) => (
          <div key={id} className="col-md-6 col-lg-3 mb-4" data-aos={animation} data-aos-delay={id * 80}>
            <div
              className="hobby-card"
              tabIndex={0}
              style={{
                background:
                  `linear-gradient(rgba(30,40,70,.62), rgba(40,25,70,.49)), url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: 18,
                color: "white",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 220,
                fontWeight: "600",
                position: "relative",
                boxShadow: "0 2px 18px rgba(0,0,0,0.15)",
                transition: "transform 0.23s, box-shadow 0.25s"
              }}
            >
              <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }} role="img" aria-label={name}>
                  {emoji}
                </div>
                <h5 className="mb-2" style={{ fontWeight: 700 }}>{name}</h5>
                <p style={{ fontWeight: 400, fontSize: "1rem", textAlign: "center" }}>{description}</p>
              </div>
              {/* Optional: faded overlay for extra text contrast */}
              <div
                style={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                  borderRadius: 18,
                  background: "linear-gradient(170deg,rgba(20,20,30,.16) 70%,rgba(33,150,243,.13))",
                  zIndex: 1
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .hobby-card:hover, .hobby-card:focus {
          transform: translateY(-8px) scale(1.07);
          box-shadow: 0 8px 34px 0 rgba(33,150,243,.13);
          border-radius: 24px;
        }
      `}</style>
    </section>
  );
}
export default Hobbies;