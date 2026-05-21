import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Home, TreePine, Wifi, Flame, Waves, Car, Users, Heart } from "lucide-react";
import salon1 from "../../imports/salon-1.jpeg";
import salon2 from "../../imports/salon_2.png";
import salon from "../../imports/salon.png";

const HIGHLIGHTS = [
  { icon: Home, label: "150 m²", sublabel: "Longère en pierre" },
  { icon: TreePine, label: "1 700 m²", sublabel: "Jardin privé clos" },
  { icon: Users, label: "4 chambres", sublabel: "Jusqu'à 8 personnes" },
  { icon: Wifi, label: "Fibre optique", sublabel: "Haut débit" },
  { icon: Waves, label: "Piscine chauffée", sublabel: "+ Balnéothérapie" },
  { icon: Flame, label: "Poêle à bois", sublabel: "Chaleur authentique" },
  { icon: Car, label: "Parking privé", sublabel: "Sécurisé" },
  { icon: Heart, label: "Sans vis-à-vis", sublabel: "Intimité absolue" },
];

export function VillaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="villa"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #0A0A0F 0%, #0d0d18 50%, #0A0A0F 100%)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(26,69,200,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
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
            Notre propriété
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.15,
              margin: "0 0 24px",
            }}
          >
            Une longère normande
            <br />
            <em style={{ color: "#C9A96E", fontWeight: 400 }}>hors du temps</em>
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(17px, 2.5vw, 22px)",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Loin du stress quotidien, nichée au cœur de la campagne normande, La Villa Heurtés Vents
            vous invite à redécouvrir l'art de vivre. Prairies verdoyantes, silence bienveillant,
            luxe discret — ici, chaque moment devient souvenir.
          </p>
        </motion.div>

        {/* Image grid + text */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            alignItems: "center",
            marginBottom: "80px",
          }}
        >
          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "auto auto",
                gap: "8px",
              }}
            >
              <img
                src={salon1}
                alt="Salon chaleureux de La Villa Heurtés Vents"
                style={{
                  gridColumn: "1 / -1",
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                  borderRadius: "8px 8px 0 0",
                  filter: "brightness(0.9) saturate(1.1)",
                }}
              />
              <img
                src={salon2}
                alt="Espace séjour lumineux de la villa"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "0 0 0 8px",
                  filter: "brightness(0.9) saturate(1.1)",
                }}
              />
              <img
                src={salon}
                alt="Intérieur élégant de la longère normande"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "0 0 8px 0",
                  filter: "brightness(0.9) saturate(1.1)",
                }}
              />
            </div>
            {/* Gold frame accent */}
            <div
              style={{
                position: "absolute",
                top: "-12px",
                left: "-12px",
                right: "12px",
                bottom: "12px",
                border: "1px solid rgba(201,169,110,0.2)",
                borderRadius: "12px",
                pointerEvents: "none",
              }}
            />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 600,
                color: "#fff",
                marginBottom: "24px",
                lineHeight: 1.2,
              }}
            >
              À 1h de Paris,
              <br />
              <span style={{ color: "#C9A96E" }}>un monde à part</span>
            </h3>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "14px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              Cette longère en pierre du pays, entièrement rénovée avec soin, marie le charme
              authentique de la Normandie profonde et le confort d'une résidence de prestige.
              Ses 150 m² pensés pour votre bien-être s'ouvrent sur un jardin clos de 1 700 m²,
              sans vis-à-vis — votre espace, rien qu'à vous.
            </p>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "14px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              Proche de Giverny, Vernon et Deauville, la villa est idéale pour des vacances en
              famille, un week-end romantique, ou une retraite entre amis. La fibre optique,
              la piscine chauffée et la balnéothérapie font de chaque séjour une expérience
              inoubliable.
            </p>

            {/* Key facts */}
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              {[
                { val: "150 m²", label: "Surface" },
                { val: "4", label: "Chambres" },
                { val: "1h", label: "De Paris" },
                { val: "12 km", label: "De Giverny" },
              ].map((fact) => (
                <div key={fact.label}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#C9A96E",
                      lineHeight: 1,
                    }}
                  >
                    {fact.val}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "1.5px",
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase",
                      marginTop: "4px",
                    }}
                  >
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.07 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,169,110,0.12)",
                borderRadius: "12px",
                padding: "24px 20px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                transition: "all 0.3s",
                cursor: "default",
              }}
              whileHover={{
                background: "rgba(201,169,110,0.06)",
                borderColor: "rgba(201,169,110,0.3)",
                y: -2,
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: "rgba(26,69,200,0.15)",
                  border: "1px solid rgba(26,69,200,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <item.icon size={20} color="#C9A96E" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.45)",
                    marginTop: "2px",
                  }}
                >
                  {item.sublabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
