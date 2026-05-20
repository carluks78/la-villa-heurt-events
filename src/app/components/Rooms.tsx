import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { BedDouble, Bath, Maximize, ChevronLeft, ChevronRight } from "lucide-react";
import chambre1 from "../../imports/chambre_1_.png";
import chambre2 from "../../imports/chambre_2.png";
import chambre3 from "../../imports/chambre_3.png";
import chambre4 from "../../imports/chambre_4.png";

const ROOMS = [
  {
    id: 1,
    name: "Suite Parentale",
    subtitle: "Chambre 1 — King Size",
    image: chambre1,
    alt: "Suite parentale king size - La Villa Heurt Events",
    desc: "Un espace royal de détente avec un lit king size, décoré avec raffinement pour une nuit de rêve. Lumière naturelle et vue sur le jardin.",
    features: ["Lit King Size", "Dressing", "Vue jardin"],
    badge: "Suite",
    badgeColor: "#6B1A2E",
  },
  {
    id: 2,
    name: "Chambre Élégance",
    subtitle: "Chambre 2 — Double",
    image: chambre2,
    alt: "Chambre double élégante avec décoration soignée",
    desc: "Atmosphère douce et lumineuse, cette chambre allie confort premium et décoration raffinée pour un séjour parfait.",
    features: ["Lit double", "Luminosité naturelle", "Rangements"],
    badge: "Double",
    badgeColor: "#1a45c8",
  },
  {
    id: 3,
    name: "Chambre Prestige",
    subtitle: "Chambre 3 — Double",
    image: chambre3,
    alt: "Chambre prestige de la villa normande",
    desc: "Chaleur et intimité se conjuguent dans cette chambre décorée avec soin. Un cocon parfait pour un sommeil réparateur.",
    features: ["Lit double", "Ambiance cosy", "Décoration premium"],
    badge: "Prestige",
    badgeColor: "#1a45c8",
  },
  {
    id: 4,
    name: "Chambre Nature",
    subtitle: "Chambre 4 — Double",
    image: chambre4,
    alt: "Chambre avec vue sur le jardin normand",
    desc: "Baignée de lumière et d'authenticité normande, cette chambre offre une connexion unique avec la nature environnante.",
    features: ["Lit double", "Vue sur nature", "Calme absolu"],
    badge: "Nature",
    badgeColor: "#2d6a4f",
  },
];

export function Rooms() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section
      id="chambres"
      ref={ref}
      style={{
        background: "#0A0A0F",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative bordeaux glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(107,26,46,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              letterSpacing: "4px",
              color: "#C9A96E",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Hébergement
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.15,
              margin: "0 0 20px",
            }}
          >
            4 Chambres de caractère
            <br />
            <em style={{ color: "#C9A96E", fontWeight: 400 }}>pour votre confort absolu</em>
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "20px",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Chaque chambre est une invitation au repos, décorée avec soin pour allier
            élégance normande et confort contemporain.
          </p>
        </motion.div>

        {/* Main room display */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            alignItems: "start",
          }}
        >
          {/* Large featured image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{ position: "relative" }}
          >
            <div style={{ position: "relative", overflow: "hidden", borderRadius: "12px" }}>
              <motion.img
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                src={ROOMS[active].image}
                alt={ROOMS[active].alt}
                style={{
                  width: "100%",
                  height: "480px",
                  objectFit: "cover",
                  display: "block",
                  filter: "brightness(0.92) saturate(1.1)",
                }}
              />
              {/* Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  background: ROOMS[active].badgeColor,
                  color: "#fff",
                  padding: "4px 12px",
                  borderRadius: "4px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {ROOMS[active].badge}
              </div>
              {/* Navigation arrows */}
              <button
                onClick={() => setActive((a) => (a - 1 + ROOMS.length) % ROOMS.length)}
                style={{
                  position: "absolute",
                  left: "12px",
                  bottom: "20px",
                  background: "rgba(10,10,15,0.7)",
                  border: "1px solid rgba(201,169,110,0.3)",
                  color: "#C9A96E",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(8px)",
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setActive((a) => (a + 1) % ROOMS.length)}
                style={{
                  position: "absolute",
                  left: "60px",
                  bottom: "20px",
                  background: "rgba(10,10,15,0.7)",
                  border: "1px solid rgba(201,169,110,0.3)",
                  color: "#C9A96E",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(8px)",
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Room info card */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,169,110,0.15)",
                borderRadius: "12px",
                padding: "24px",
                marginTop: "20px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  color: "#C9A96E",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                {ROOMS[active].subtitle}
              </p>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "26px",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "12px",
                }}
              >
                {ROOMS[active].name}
              </h3>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.7,
                  marginBottom: "16px",
                }}
              >
                {ROOMS[active].desc}
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {ROOMS[active].features.map((f) => (
                  <span
                    key={f}
                    style={{
                      background: "rgba(26,69,200,0.15)",
                      border: "1px solid rgba(26,69,200,0.25)",
                      color: "rgba(255,255,255,0.7)",
                      padding: "4px 10px",
                      borderRadius: "100px",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "11px",
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Thumbnail list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {ROOMS.map((room, i) => (
              <motion.div
                key={room.id}
                onClick={() => setActive(i)}
                whileHover={{ x: 4 }}
                style={{
                  display: "flex",
                  gap: "16px",
                  background:
                    active === i
                      ? "rgba(201,169,110,0.08)"
                      : "rgba(255,255,255,0.02)",
                  border:
                    active === i
                      ? "1px solid rgba(201,169,110,0.35)"
                      : "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "10px",
                  padding: "12px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  alignItems: "center",
                }}
              >
                <img
                  src={room.image}
                  alt={room.alt}
                  style={{
                    width: "80px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "6px",
                    flexShrink: 0,
                    filter: active === i ? "brightness(1)" : "brightness(0.7)",
                    transition: "filter 0.3s",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "11px",
                      color: active === i ? "#C9A96E" : "rgba(255,255,255,0.4)",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    {room.subtitle}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "16px",
                      color: active === i ? "#fff" : "rgba(255,255,255,0.6)",
                      fontWeight: 600,
                    }}
                  >
                    {room.name}
                  </div>
                  <div style={{ display: "flex", gap: "12px", marginTop: "6px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "rgba(255,255,255,0.4)", fontFamily: "'Montserrat', sans-serif", fontSize: "11px" }}>
                      <BedDouble size={11} /> Lit
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "rgba(255,255,255,0.4)", fontFamily: "'Montserrat', sans-serif", fontSize: "11px" }}>
                      <Maximize size={11} /> Spacieuse
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Bathrooms info */}
            <div
              style={{
                background: "rgba(107,26,46,0.12)",
                border: "1px solid rgba(107,26,46,0.25)",
                borderRadius: "10px",
                padding: "20px",
                marginTop: "8px",
              }}
            >
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <Bath size={24} color="#C9A96E" />
                <div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#fff" }}>
                    2 Salles de bains
                  </div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "2px" }}>
                    Équipées & design · Sèche-cheveux
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
