import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Waves, Thermometer, Droplets, Wind, Sun, Leaf } from "lucide-react";
import piscineImg from "../../imports/piscine.JPG";

const WELLNESS_FEATURES = [
  { icon: Waves, title: "Piscine chauffée", desc: "Plongez dans une eau tempérée à 26°C et laissez le stress s'évaporer." },
  { icon: Droplets, title: "Balnéothérapie", desc: "Jets massants, bulles revitalisantes — un spa privé rien que pour vous." },
  { icon: Thermometer, title: "Eau thermorégulée", desc: "Profitez de la piscine toute l'année grâce à la régulation thermique." },
  { icon: Wind, title: "Air pur normand", desc: "Respirez l'air frais de la campagne, loin de toute pollution urbaine." },
  { icon: Sun, title: "Terrasse ensoleillée", desc: "Transats, soleil, et nature — la détente dans son expression la plus pure." },
  { icon: Leaf, title: "Jardin privé", desc: "1700 m² clos sans vis-à-vis pour profiter en toute intimité." },
];

export function WellnessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="piscine"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #0A0A0F 0%, #060814 50%, #0A0A0F 100%)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blue electric glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(26,69,200,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
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
            Piscine & Bien-être
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
            Votre spa privé
            <br />
            <em style={{ color: "#C9A96E", fontWeight: 400 }}>au cœur de la nature</em>
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "20px",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "620px",
              margin: "0 auto",
            }}
          >
            Piscine chauffée, balnéothérapie premium, terrasse baignée de soleil —
            le bien-être n'est pas une option, c'est une promesse.
          </p>
        </motion.div>

        {/* Main content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "48px",
            alignItems: "center",
            marginBottom: "64px",
          }}
        >
          {/* Image with glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ position: "relative", order: 1 }}
          >
            {/* Glow behind image */}
            <div
              style={{
                position: "absolute",
                inset: "-20px",
                background: "radial-gradient(ellipse, rgba(26,69,200,0.2) 0%, transparent 70%)",
                borderRadius: "20px",
                filter: "blur(20px)",
              }}
            />
            <img
              src={piscineImg}
              alt="Piscine chauffée et balnéothérapie - La Villa Heurtés Vents"
              style={{
                width: "100%",
                borderRadius: "16px",
                position: "relative",
                zIndex: 1,
                display: "block",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(26,69,200,0.2)",
                filter: "brightness(0.95) saturate(1.2)",
              }}
            />
            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                background: "rgba(10,10,15,0.95)",
                border: "1px solid rgba(201,169,110,0.3)",
                borderRadius: "12px",
                padding: "16px 20px",
                backdropFilter: "blur(16px)",
                zIndex: 2,
                boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#C9A96E",
                  lineHeight: 1,
                }}
              >
                26°C
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "1px",
                  color: "rgba(255,255,255,0.5)",
                  marginTop: "4px",
                }}
              >
                Eau chauffée
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              style={{
                position: "absolute",
                top: "-16px",
                left: "20px",
                background: "rgba(26,69,200,0.9)",
                border: "1px solid rgba(59,110,240,0.5)",
                borderRadius: "12px",
                padding: "12px 16px",
                backdropFilter: "blur(16px)",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "1px",
                }}
              >
                ✦ Accès privatif 24h/24
              </div>
            </motion.div>
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            style={{ order: 2 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {WELLNESS_FEATURES.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.6 }}
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "16px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "10px",
                    transition: "all 0.3s",
                  }}
                  whileHover={{
                    background: "rgba(26,69,200,0.06)",
                    borderColor: "rgba(26,69,200,0.2)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "8px",
                      background: "rgba(201,169,110,0.1)",
                      border: "1px solid rgba(201,169,110,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <feat.icon size={18} color="#C9A96E" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#fff",
                        marginBottom: "4px",
                      }}
                    >
                      {feat.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.5,
                      }}
                    >
                      {feat.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ textAlign: "center" }}
        >
          <a
            href="https://www.airbnb.com/slink/04z2yC75"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #1a45c8, #3b6ef0)",
              color: "#fff",
              padding: "16px 48px",
              borderRadius: "4px",
              textDecoration: "none",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontWeight: 600,
              boxShadow: "0 8px 30px rgba(26,69,200,0.35)",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = "translateY(-2px)";
              (e.target as HTMLElement).style.boxShadow = "0 12px 40px rgba(26,69,200,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = "translateY(0)";
              (e.target as HTMLElement).style.boxShadow = "0 8px 30px rgba(26,69,200,0.35)";
            }}
          >
            Réserver — Profiter de la piscine
          </a>
        </motion.div>
      </div>
    </section>
  );
}
