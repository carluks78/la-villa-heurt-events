import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { Home } from "lucide-react";

export function NotFoundPage() {
  const { lang } = useLanguage();
  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0F", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px" }}>
      <div style={{ textAlign: "center", maxWidth: "520px" }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "120px", fontWeight: 700, color: "rgba(201,169,110,0.12)", lineHeight: 1 }}>404</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 600, color: "#fff", margin: "0 0 16px" }}>
          {lang === "fr" ? "Page introuvable" : "Page not found"}
        </h1>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "36px" }}>
          {lang === "fr"
            ? "La page que vous cherchez n'existe pas. Retournez à l'accueil pour découvrir La Villa Heurtés Vents."
            : "The page you are looking for does not exist. Return to the homepage to discover La Villa Heurtés Vents."}
        </p>
        <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #C9A96E, #E8C98A)", color: "#0A0A0F", padding: "13px 28px", borderRadius: "7px", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px" }}>
          <Home size={15} /> {lang === "fr" ? "Accueil" : "Home"}
        </Link>
        <p style={{ marginTop: "48px", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "14px", color: "rgba(201,169,110,0.4)" }}>
          La Villa Heurtés Vents — Hardencourt-Cocherel, Normandie
        </p>
      </div>
    </div>
  );
}
