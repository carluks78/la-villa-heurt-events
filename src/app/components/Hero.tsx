import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, MapPin, Star } from "lucide-react";
import heroHome from "../../imports/hero-home.png";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToVilla = () => {
    const el = document.querySelector("#villa");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "600px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Parallax background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `translateY(${scrollY * 0.4}px)`,
          willChange: "transform",
        }}
      >
        <img
          src={heroHome}
          alt="La Villa Heurtes Vents - Vue extérieure, villa de luxe en Haute-Normandie"
          style={{
            width: "100%",
            height: "120%",
            objectFit: "cover",
            objectPosition: "center 30%",
            filter: "brightness(0.55) saturate(1.1)",
          }}
        />
      </div>

      {/* Gradient overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(10,10,15,0.5) 0%, rgba(10,10,15,0.1) 40%, rgba(10,10,15,0.6) 80%, rgba(10,10,15,0.95) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(26,69,200,0.15) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "900px",
        }}
      >
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(201,169,110,0.12)",
            border: "1px solid rgba(201,169,110,0.35)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "24px",
          }}
        >
          <MapPin size={12} color="#C9A96E" />
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              letterSpacing: "2px",
              color: "#C9A96E",
              textTransform: "uppercase",
            }}
          >
            Hardencourt-Cocherel · Haute-Normandie
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(42px, 8vw, 88px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.05,
            letterSpacing: "-1px",
            margin: "0 0 8px",
          }}
        >
          La Villa
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 1 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(42px, 8vw, 88px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#C9A96E",
            lineHeight: 1.05,
            letterSpacing: "-1px",
            margin: "0 0 28px",
          }}
        >
          Heurtes Vents
        </motion.h1>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{
            width: "80px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #C9A96E, transparent)",
            margin: "0 auto 28px",
          }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(18px, 3vw, 26px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "40px",
            lineHeight: 1.5,
          }}
        >
          Votre havre de paix en Normandie — Piscine chauffée, balnéothérapie
          <br />
          <span style={{ opacity: 0.7, fontSize: "0.85em" }}>À seulement 1h de Paris · Proche Giverny &amp; Vernon</span>
        </motion.p>

        {/* Stars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "40px" }}
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="#C9A96E" color="#C9A96E" />
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="https://www.airbnb.com/slink/04z2yC75"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(135deg, #1a45c8 0%, #3b6ef0 100%)",
              color: "#fff",
              padding: "16px 36px",
              borderRadius: "4px",
              textDecoration: "none",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontWeight: 600,
              border: "1px solid rgba(201,169,110,0.3)",
              transition: "all 0.3s",
              boxShadow: "0 8px 30px rgba(26,69,200,0.4)",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 12px 40px rgba(26,69,200,0.6)";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 8px 30px rgba(26,69,200,0.4)";
            }}
          >
            Réserver sur Airbnb
          </a>
          <button
            onClick={scrollToVilla}
            style={{
              background: "transparent",
              color: "#C9A96E",
              padding: "16px 36px",
              borderRadius: "4px",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontWeight: 600,
              border: "1px solid rgba(201,169,110,0.5)",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement;
              el.style.background = "rgba(201,169,110,0.1)";
              el.style.borderColor = "#C9A96E";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement;
              el.style.background = "transparent";
              el.style.borderColor = "rgba(201,169,110,0.5)";
            }}
          >
            Découvrir la villa
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        onClick={scrollToVilla}
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          color: "rgba(255,255,255,0.5)",
        }}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "9px",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} color="rgba(201,169,110,0.7)" />
        </motion.div>
      </motion.button>
    </section>
  );
}
