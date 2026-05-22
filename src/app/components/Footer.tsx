import { Link } from "react-router";
import { Phone, Mail, MapPin, ExternalLink, Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const NAV_COL1_FR = [
  { label: "La Villa", to: "/la-villa" },
  { label: "Chambres", to: "/chambres" },
  { label: "Piscine & Bien-être", to: "/piscine-bien-etre" },
  { label: "Activités", to: "/activites" },
  { label: "Galerie", to: "/galerie" },
];
const NAV_COL1_EN = [
  { label: "The Villa", to: "/la-villa" },
  { label: "Bedrooms", to: "/chambres" },
  { label: "Pool & Wellness", to: "/piscine-bien-etre" },
  { label: "Activities", to: "/activites" },
  { label: "Gallery", to: "/galerie" },
];
const NAV_COL2_FR = [
  { label: "Idées séjours", to: "/idees-sejours" },
  { label: "Réservation & Tarifs", to: "/reservation" },
  { label: "Contact", to: "/contact" },
  { label: "Accès", to: "/acces" },
  { label: "Consignes", to: "/consignes" },
  { label: "FAQ", to: "/faq" },
];
const NAV_COL2_EN = [
  { label: "Stay ideas", to: "/idees-sejours" },
  { label: "Booking & Rates", to: "/reservation" },
  { label: "Contact", to: "/contact" },
  { label: "Directions", to: "/acces" },
  { label: "House rules", to: "/consignes" },
  { label: "FAQ", to: "/faq" },
];

export function Footer() {
  const { lang } = useLanguage();
  const col1 = lang === "fr" ? NAV_COL1_FR : NAV_COL1_EN;
  const col2 = lang === "fr" ? NAV_COL2_FR : NAV_COL2_EN;

  const linkStyle = { fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" };

  return (
    <footer style={{ background: "#050508", borderTop: "1px solid rgba(201,169,110,0.1)", padding: "72px 0 32px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "800px", height: "200px", background: "radial-gradient(ellipse, rgba(201,169,110,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "48px", marginBottom: "56px" }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: "none", display: "block", marginBottom: "16px" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", letterSpacing: "4px", color: "#C9A96E", opacity: 0.7, textTransform: "uppercase", marginBottom: "4px" }}>La Villa</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#C9A96E", letterSpacing: "2px" }}>HEURTÉS VENTS</div>
            </Link>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "15px", fontStyle: "italic", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: "16px" }}>
              {lang === "fr" ? "Votre havre de luxe en Haute-Normandie." : "Your luxury haven in Upper Normandy."}
            </p>
            <div style={{ display: "flex", gap: "3px", marginBottom: "16px" }}>
              {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#C9A96E", fontSize: "12px" }}>★</span>)}
            </div>
            <a href="https://www.airbnb.com/slink/04z2yC75" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(255,90,95,0.12)", border: "1px solid rgba(255,90,95,0.25)", color: "#FF5A5F", padding: "8px 14px", borderRadius: "6px", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "1px", fontWeight: 600 }}>
              <ExternalLink size={11} /> Airbnb
            </a>
          </div>

          {/* Nav col 1 */}
          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "2px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "18px" }}>
              {lang === "fr" ? "La villa" : "The villa"}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {col1.map((l) => <Link key={l.to} to={l.to} style={linkStyle}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C9A96E")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
              >{l.label}</Link>)}
            </div>
          </div>

          {/* Nav col 2 */}
          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "2px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "18px" }}>
              {lang === "fr" ? "Informations" : "Information"}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {col2.map((l) => <Link key={l.to} to={l.to} style={linkStyle}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C9A96E")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
              >{l.label}</Link>)}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "2px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "18px" }}>
              {lang === "fr" ? "Contact direct" : "Direct contact"}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <a href="tel:+33601414173" style={{ display: "flex", gap: "9px", alignItems: "center", color: "rgba(255,255,255,0.6)", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontSize: "13px" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C9A96E")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
              ><Phone size={13} color="#C9A96E" /> +33 6 01 41 41 73</a>
              <a href="mailto:pierre@villa-heurtevents.fr" style={{ display: "flex", gap: "9px", alignItems: "center", color: "rgba(255,255,255,0.6)", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontSize: "13px" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C9A96E")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
              ><Mail size={13} color="#C9A96E" /> markarley@hotmail.fr</a>
              <a href="https://maps.google.com/?q=Hardencourt-Cocherel+27120" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", gap: "9px", alignItems: "flex-start", color: "rgba(255,255,255,0.6)", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontSize: "13px", lineHeight: 1.5 }}>
                <MapPin size={13} color="#C9A96E" style={{ flexShrink: 0, marginTop: "2px" }} /> Hardencourt-Cocherel<br />Eure 27120, Normandie
              </a>
              <a href={`https://wa.me/33601414173?text=${encodeURIComponent("Bonjour Pierre, je souhaite des informations sur La Villa Heurtés Vents.")}`}
                target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.2)", color: "#25D366", padding: "9px 14px", borderRadius: "8px", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 600 }}>
                <WhatsAppIcon size={13} /> WhatsApp — Pierre
              </a>
            </div>
          </div>
        </div>

        <div style={{ height: "1px", background: "rgba(201,169,110,0.08)", marginBottom: "24px" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.3)", margin: 0 }}>
            © 2026 La Villa Heurtés Vents — Pierre Jacques.{" "}
            {lang === "fr" ? "Tous droits réservés." : "All rights reserved."}
            <br />
            <span style={{ fontSize: "10px", opacity: 0.7 }}>Location saisonnière · Hardencourt-Cocherel · Eure 27120 · Normandie · France</span>
          </p>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.2)", margin: 0, display: "flex", alignItems: "center", gap: "4px" }}>
            {lang === "fr" ? "Fait avec" : "Made with"} <Heart size={10} color="#C9A96E" fill="#C9A96E" /> {lang === "fr" ? "en Normandie" : "in Normandy"}
          </p>
        </div>

        <div style={{ display: "none" }} aria-hidden="true">
          La Villa Heurtés Vents location villa Giverny Normandie piscine chauffée Hardencourt-Cocherel Eure Pierre Jacques WhatsApp réservation Airbnb semaine week-end romantique famille
        </div>
      </div>
    </footer>
  );
}
