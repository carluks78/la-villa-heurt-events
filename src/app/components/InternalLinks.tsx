import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";

const ALL_LINKS = [
  { path: "/", labelFr: "Accueil", labelEn: "Home", emoji: "🏠" },
  { path: "/la-villa", labelFr: "La Villa", labelEn: "The Villa", emoji: "🏡" },
  { path: "/chambres", labelFr: "Chambres", labelEn: "Bedrooms", emoji: "🛏️" },
  { path: "/piscine-bien-etre", labelFr: "Piscine & Bien-être", labelEn: "Pool & Wellness", emoji: "🏊" },
  { path: "/activites", labelFr: "Activités", labelEn: "Activities", emoji: "🎨" },
  { path: "/galerie", labelFr: "Galerie", labelEn: "Gallery", emoji: "📷" },
  { path: "/idees-sejours", labelFr: "Idées séjours", labelEn: "Stay ideas", emoji: "✨" },
  { path: "/tarifs", labelFr: "Tarifs", labelEn: "Rates", emoji: "💶" },
  { path: "/reservation", labelFr: "Réservation", labelEn: "Booking", emoji: "📅" },
  { path: "/contact", labelFr: "Contact", labelEn: "Contact", emoji: "📞" },
  { path: "/acces", labelFr: "Accès", labelEn: "Directions", emoji: "🗺️" },
  { path: "/consignes", labelFr: "Consignes", labelEn: "House rules", emoji: "📋" },
  { path: "/faq", labelFr: "FAQ", labelEn: "FAQ", emoji: "❓" },
];

interface InternalLinksProps {
  exclude?: string;
  titleFr?: string;
  titleEn?: string;
}

export function InternalLinks({ exclude, titleFr = "Découvrez aussi", titleEn = "Explore more" }: InternalLinksProps) {
  const { lang } = useLanguage();
  const links = ALL_LINKS.filter((l) => l.path !== exclude);

  return (
    <section style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(201,169,110,0.1)", padding: "56px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600, color: "#fff", marginBottom: "24px", textAlign: "center" }}>
          {lang === "fr" ? titleFr : titleEn}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,169,110,0.15)",
                borderRadius: "100px",
                padding: "9px 18px",
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.5px",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(201,169,110,0.1)";
                el.style.borderColor = "rgba(201,169,110,0.4)";
                el.style.color = "#C9A96E";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.04)";
                el.style.borderColor = "rgba(201,169,110,0.15)";
                el.style.color = "rgba(255,255,255,0.75)";
              }}
            >
              <span style={{ fontSize: "14px" }}>{l.emoji}</span>
              {lang === "fr" ? l.labelFr : l.labelEn}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
