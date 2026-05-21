import { useRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

interface Crumb { label: string; to: string; }

interface PageHeroProps {
  title: string;
  titleAccent?: string;
  subtitle?: string;
  image: string;
  breadcrumb?: Crumb[];
  currentPage: string;
}

export function PageHero({ title, titleAccent, subtitle, image, breadcrumb = [], currentPage }: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        height: "clamp(320px, 45vw, 520px)",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.4) saturate(0.9)" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,15,0.2) 0%, rgba(10,10,15,0.75) 100%)" }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "1100px", margin: "0 auto", padding: "0 32px 52px", width: "100%" }}>
        {/* Breadcrumb */}
        {(breadcrumb.length > 0) && (
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "16px", flexWrap: "wrap" }}>
            {breadcrumb.map((c, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Link to={c.to} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.55)", textDecoration: "none", letterSpacing: "0.5px" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C9A96E")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                >{c.label}</Link>
                <ChevronRight size={10} color="rgba(255,255,255,0.35)" />
              </span>
            ))}
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "#C9A96E", letterSpacing: "0.5px" }}>{currentPage}</span>
          </div>
        )}

        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 5vw, 58px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, margin: 0 }}>
            {title}{" "}
            {titleAccent && <em style={{ color: "#C9A96E", fontWeight: 400 }}>{titleAccent}</em>}
          </h1>
          {subtitle && (
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(16px, 2vw, 21px)", color: "rgba(255,255,255,0.7)", marginTop: "14px", maxWidth: "620px", lineHeight: 1.55 }}>
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
