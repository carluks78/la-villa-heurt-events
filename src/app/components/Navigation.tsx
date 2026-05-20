import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "La Villa", href: "#villa" },
  { label: "Chambres", href: "#chambres" },
  { label: "Piscine & Bien-être", href: "#piscine" },
  { label: "Activités", href: "#activites" },
  { label: "Galerie", href: "#galerie" },
  { label: "Réservation", href: "#reservation" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "12px 32px" : "20px 32px",
          background: scrolled
            ? "rgba(10,10,15,0.92)"
            : "linear-gradient(180deg, rgba(10,10,15,0.7) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,169,110,0.15)" : "none",
          transition: "all 0.4s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "10px",
              letterSpacing: "4px",
              color: "#C9A96E",
              opacity: 0.8,
              textTransform: "uppercase",
            }}
          >
            La Villa
          </span>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "18px",
              letterSpacing: "2px",
              color: "#C9A96E",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            HEURT EVENTS
          </span>
        </a>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "12px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                transition: "color 0.25s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C9A96E")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.85)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Phone + Reserve */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href="tel:+33601414173"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#C9A96E",
              textDecoration: "none",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.5px",
            }}
            className="hidden-mobile"
          >
            <Phone size={14} />
            +33 6 01 41 41 73
          </a>
          <a
            href="https://www.airbnb.com/slink/04z2yC75"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(135deg, #1a45c8, #3b6ef0)",
              color: "#fff",
              padding: "8px 20px",
              borderRadius: "4px",
              textDecoration: "none",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              fontWeight: 600,
              border: "1px solid rgba(201,169,110,0.3)",
              transition: "all 0.3s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement;
              el.style.background = "linear-gradient(135deg, #C9A96E, #E8D5A3)";
              el.style.color = "#0A0A0F";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement;
              el.style.background = "linear-gradient(135deg, #1a45c8, #3b6ef0)";
              el.style.color = "#fff";
            }}
          >
            Réserver
          </a>
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#C9A96E",
              cursor: "pointer",
              padding: "4px",
              display: "none",
            }}
            className="show-mobile"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: "fixed",
              top: "60px",
              left: 0,
              right: 0,
              zIndex: 999,
              background: "rgba(10,10,15,0.98)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid rgba(201,169,110,0.2)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "20px 28px", display: "flex", flexDirection: "column", gap: "4px" }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "14px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+33601414173"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#C9A96E",
                  textDecoration: "none",
                  padding: "16px 0 8px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "14px",
                }}
              >
                <Phone size={16} />
                +33 6 01 41 41 73
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
