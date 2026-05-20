import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Clock, ArrowUpRight, Palette, ShoppingBag, Trees, Utensils, Sailboat, Building2 } from "lucide-react";

const ATTRACTIONS = [
  {
    id: 1,
    name: "Fondation Claude Monet — Giverny",
    type: "Culture & Art",
    icon: Palette,
    distance: "12 km",
    time: "15 min",
    desc: "Plongez dans l'univers impressionniste du maître. Les jardins de Monet, source d'inspiration de ses célèbres Nymphéas, vous attendent dans toute leur splendeur.",
    badge: "Incontournable",
    badgeColor: "#C9A96E",
    mapUrl: "https://maps.google.com/?q=Fondation+Claude+Monet+Giverny",
    website: "https://www.fondation-monet.com",
    highlight: true,
  },
  {
    id: 2,
    name: "MacArthurGlen Paris-Giverny",
    type: "Shopping premium",
    icon: ShoppingBag,
    distance: "5 km",
    time: "7 min",
    desc: "Le village outlet premium de la région avec plus de 80 marques de luxe à prix réduit. Mode, décoration, gastronomie — le shopping de prestige à portée de main.",
    badge: "Shopping",
    badgeColor: "#1a45c8",
    mapUrl: "https://maps.google.com/?q=MacArthurGlen+Giverny+Douains",
    website: "https://www.macarthurglen.com/fr/outlets/fr/paris-giverny/",
    highlight: false,
  },
  {
    id: 3,
    name: "Vernon — Ville d'art",
    type: "Patrimoine",
    icon: Building2,
    distance: "8 km",
    time: "12 min",
    desc: "Ville médiévale bordant la Seine, Vernon révèle ses ruelles pavées, son vieux moulin sur l'eau et son marché coloré le samedi matin.",
    badge: "Patrimoine",
    badgeColor: "#6B1A2E",
    mapUrl: "https://maps.google.com/?q=Vernon+Eure",
    website: "https://www.cape-tourisme.fr",
    highlight: false,
  },
  {
    id: 4,
    name: "Les 3 Lacs — Pacy-sur-Eure",
    type: "Nature & Loisirs",
    icon: Trees,
    distance: "10 km",
    time: "15 min",
    desc: "Baignade, pêche, canoë, pédalo, base nautique — un espace naturel de 25 hectares idéal pour les familles et les amoureux de la nature.",
    badge: "Nature",
    badgeColor: "#2d6a4f",
    mapUrl: "https://maps.google.com/?q=Lac+de+Pacy+sur+Eure",
    website: "https://www.cape-tourisme.fr",
    highlight: false,
  },
  {
    id: 5,
    name: "Canoë sur l'Eure",
    type: "Activités",
    icon: Sailboat,
    distance: "10 km",
    time: "15 min",
    desc: "Descendez l'Eure en canoë à travers les paysages normands. Une expérience ressourçante au fil de l'eau, entre nature et sérénité.",
    badge: "Aventure",
    badgeColor: "#0e7490",
    mapUrl: "https://maps.google.com/?q=Canoe+riviere+Eure+Normandie",
    website: "https://www.cape-tourisme.fr",
    highlight: false,
  },
  {
    id: 6,
    name: "Restaurants gastronomiques",
    type: "Gastronomie",
    icon: Utensils,
    distance: "5–25 km",
    time: "10–30 min",
    desc: "Cuisine normande raffinée, produits locaux, fromages AOP, calvados — la région regorge de tables d'exception. Demandez à Pierre nos recommandations personnelles.",
    badge: "Gastronomie",
    badgeColor: "#7c3aed",
    mapUrl: "https://maps.google.com/?q=restaurants+Vernon+Normandie",
    website: "#contact",
    highlight: false,
  },
];

const DISTANCES = [
  { place: "Paris", dist: "80 km", time: "1h" },
  { place: "Giverny", dist: "12 km", time: "15 min" },
  { place: "Rouen", dist: "55 km", time: "50 min" },
  { place: "Deauville", dist: "90 km", time: "1h15" },
  { place: "Versailles", dist: "85 km", time: "1h10" },
  { place: "Chartres", dist: "110 km", time: "1h20" },
];

export function TourismSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="activites"
      ref={ref}
      style={{
        background: "#0A0A0F",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "4px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "16px" }}>
            Tourisme & Activités
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
            Le meilleur de la Normandie
            <br />
            <em style={{ color: "#C9A96E", fontWeight: 400 }}>à votre portée</em>
          </h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "rgba(255,255,255,0.6)", maxWidth: "640px", margin: "0 auto" }}>
            Giverny et Monet, shopping premium, nature sauvage, gastronomie normande —
            tout ce dont vous rêvez se trouve à quelques minutes de la villa.
          </p>
        </motion.div>

        {/* Distance badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "64px",
          }}
        >
          {DISTANCES.map((d) => (
            <div
              key={d.place}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,169,110,0.15)",
                borderRadius: "100px",
                padding: "10px 20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <MapPin size={12} color="#C9A96E" />
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#fff" }}>{d.place}</span>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>—</span>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "#C9A96E" }}>{d.dist}</span>
              <span style={{ display: "flex", alignItems: "center", gap: "3px", color: "rgba(255,255,255,0.35)", fontFamily: "'Montserrat', sans-serif", fontSize: "11px" }}>
                <Clock size={10} /> {d.time}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Attraction cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "20px",
          }}
        >
          {ATTRACTIONS.map((attr, i) => (
            <motion.div
              key={attr.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.7 }}
              style={{
                background: attr.highlight ? "rgba(201,169,110,0.06)" : "rgba(255,255,255,0.02)",
                border: attr.highlight ? "1px solid rgba(201,169,110,0.3)" : "1px solid rgba(255,255,255,0.06)",
                borderRadius: "16px",
                padding: "28px",
                transition: "all 0.3s",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background pattern for highlight */}
              {attr.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    width: "120px",
                    height: "120px",
                    background: "radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%)",
                  }}
                />
              )}

              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: `${attr.badgeColor}22`,
                      border: `1px solid ${attr.badgeColor}44`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <attr.icon size={20} color={attr.badgeColor} />
                  </div>
                  <div>
                    <div
                      style={{
                        display: "inline-block",
                        background: `${attr.badgeColor}22`,
                        color: attr.badgeColor,
                        padding: "2px 8px",
                        borderRadius: "4px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        marginBottom: "6px",
                      }}
                    >
                      {attr.badge}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "17px",
                        fontWeight: 600,
                        color: "#fff",
                        lineHeight: 1.2,
                        margin: 0,
                      }}
                    >
                      {attr.name}
                    </h3>
                  </div>
                </div>
                <a
                  href={attr.website}
                  target={attr.website.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  style={{
                    color: "rgba(255,255,255,0.3)",
                    transition: "color 0.2s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C9A96E")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

              {/* Description */}
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "16px" }}>
                {attr.desc}
              </p>

              {/* Distance info */}
              <div style={{ display: "flex", gap: "16px" }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  <MapPin size={12} color="#C9A96E" />
                  <span style={{ color: "#C9A96E", fontWeight: 600 }}>{attr.distance}</span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  <Clock size={12} />
                  {attr.time}
                </span>
                <a
                  href={attr.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "11px",
                    color: "rgba(26,69,200,0.8)",
                    textDecoration: "none",
                    letterSpacing: "0.5px",
                    marginLeft: "auto",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#3b6ef0")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(26,69,200,0.8)")}
                >
                  Google Maps →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
