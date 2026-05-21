import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

const NAV_LINKS_FR = [
  { label: "La Villa", to: "/la-villa" },
  { label: "Chambres", to: "/chambres" },
  { label: "Piscine", to: "/piscine-bien-etre" },
  { label: "Activités", to: "/activites" },
  { label: "Galerie", to: "/galerie" },
  { label: "Tarifs", to: "/tarifs" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const NAV_LINKS_EN = [
  { label: "The Villa", to: "/la-villa" },
  { label: "Rooms", to: "/chambres" },
  { label: "Pool", to: "/piscine-bien-etre" },
  { label: "Activities", to: "/activites" },
  { label: "Gallery", to: "/galerie" },
  { label: "Rates", to: "/tarifs" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { lang } = useLanguage();
  const links = lang === "fr" ? NAV_LINKS_FR : NAV_LINKS_EN;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: scrolled ? "10px 28px" : "18px 28px",
          background: scrolled ? "rgba(10,10,15,0.94)" : isHome ? "linear-gradient(180deg,rgba(10,10,15,0.6) 0%,transparent 100%)" : "rgba(10,10,15,0.92)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,169,110,0.12)" : "none",
          transition: "all 0.4s",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "9px", letterSpacing: "4px", color: "#C9A96E", opacity: 0.75, textTransform: "uppercase" }}>La Villa</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", letterSpacing: "2px", color: "#C9A96E", fontWeight: 700, lineHeight: 1.1 }}>HEURTÉS VENTS</div>
        </Link>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: "flex", gap: "22px", alignItems: "center" }}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => ({
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: isActive ? "#C9A96E" : "rgba(255,255,255,0.8)",
                textDecoration: "none",
                borderBottom: isActive ? "1px solid #C9A96E" : "1px solid transparent",
                paddingBottom: "2px",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <LanguageSwitcher />
          <Link
            to="/reservation"
            className="nav-desktop"
            style={{
              background: "linear-gradient(135deg, #1a45c8, #3b6ef0)",
              color: "#fff",
              padding: "7px 18px",
              borderRadius: "5px",
              textDecoration: "none",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              fontWeight: 600,
              border: "1px solid rgba(201,169,110,0.25)",
              whiteSpace: "nowrap",
            }}
          >
            {lang === "fr" ? "Réserver" : "Book"}
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-mobile"
            style={{ background: "none", border: "none", color: "#C9A96E", cursor: "pointer", padding: "4px", display: "none" }}
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
            style={{ position: "fixed", top: "58px", left: 0, right: 0, zIndex: 999, background: "rgba(10,10,15,0.98)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(201,169,110,0.15)", overflow: "hidden" }}
          >
            <div style={{ padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: "2px" }}>
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  style={({ isActive }) => ({
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "13px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: isActive ? "#C9A96E" : "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    display: "block",
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/reservation" style={{ display: "inline-flex", marginTop: "12px", background: "linear-gradient(135deg,#1a45c8,#3b6ef0)", color: "#fff", padding: "12px 24px", borderRadius: "6px", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 700, width: "fit-content" }}>
                {lang === "fr" ? "Réserver" : "Book"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
        @media (min-width: 901px) {
          .nav-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
