import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Clock, ArrowUpRight, Palette, ShoppingBag, Trees, Utensils, Sailboat, Building2, Wine, Coffee, ShoppingCart, Waves } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const ATTRACTIONS = [
  {
    id: 1,
    nameFr: "Fondation Claude Monet — Giverny",
    nameEn: "Claude Monet Foundation — Giverny",
    type: "Culture & Art",
    icon: Palette,
    distance: "12 km",
    time: "15 min",
    descFr: "Plongez dans l'univers impressionniste du maître. Les jardins de Monet, source d'inspiration de ses célèbres Nymphéas, vous attendent dans toute leur splendeur.",
    descEn: "Dive into the master's impressionist world. Monet's gardens, the inspiration for his famous Water Lilies, await you in all their splendour.",
    badge: "Incontournable",
    badgeColor: "#C9A96E",
    mapUrl: "https://maps.google.com/?q=Fondation+Claude+Monet+Giverny",
    website: "https://www.fondation-monet.com",
    highlight: true,
  },
  {
    id: 2,
    nameFr: "MacArthurGlen Paris-Giverny",
    nameEn: "MacArthurGlen Paris-Giverny",
    type: "Shopping premium",
    icon: ShoppingBag,
    distance: "5 km",
    time: "7 min",
    descFr: "Le village outlet premium avec plus de 80 marques de luxe à prix réduit. Mode, décoration, gastronomie — le shopping de prestige à portée de main.",
    descEn: "Premium outlet village with over 80 luxury brands at reduced prices. Fashion, decoration, gastronomy — prestige shopping at your fingertips.",
    badge: "Shopping",
    badgeColor: "#1a45c8",
    mapUrl: "https://maps.google.com/?q=MacArthurGlen+Giverny+Douains",
    website: "https://www.macarthurglen.com/fr/outlets/fr/paris-giverny/",
    highlight: false,
  },
  {
    id: 3,
    nameFr: "Vernon — Ville d'art médiévale",
    nameEn: "Vernon — Medieval art town",
    type: "Patrimoine",
    icon: Building2,
    distance: "8 km",
    time: "12 min",
    descFr: "Ville médiévale bordant la Seine, Vernon révèle ses ruelles pavées, son vieux moulin sur l'eau et son marché coloré le samedi matin.",
    descEn: "Medieval town on the Seine, Vernon reveals its cobbled streets, old water mill and colourful Saturday market.",
    badge: "Patrimoine",
    badgeColor: "#6B1A2E",
    mapUrl: "https://maps.google.com/?q=Vernon+Eure",
    website: "https://www.cape-tourisme.fr",
    highlight: false,
  },
  {
    id: 4,
    nameFr: "Les 3 Étangs — Jouy-sur-Eure",
    nameEn: "Les 3 Étangs — Jouy-sur-Eure",
    type: "Nature & Loisirs",
    icon: Waves,
    distance: "8 km",
    time: "12 min",
    descFr: "Baignade, pêche, canoë, pédalo — un espace naturel de 25 hectares idéal pour les familles. Cadre verdoyant et nature préservée au bord de l'Eure.",
    descEn: "Swimming, fishing, canoeing, pedalo — a 25-hectare natural area ideal for families. Green setting and preserved nature by the Eure river.",
    badge: "Nature",
    badgeColor: "#2d6a4f",
    mapUrl: "https://maps.google.com/?q=Les+3+Etangs+Jouy-sur-Eure",
    website: "https://maps.google.com/?q=Les+3+Etangs+Jouy-sur-Eure",
    highlight: false,
  },
  {
    id: 5,
    nameFr: "Cave à vin L'Annexe — Pacy-sur-Eure",
    nameEn: "L'Annexe Wine Cellar — Pacy-sur-Eure",
    type: "Gastronomie",
    icon: Wine,
    distance: "6 km",
    time: "8 min",
    descFr: "Sélection de vins fins, champagnes et spiritueux. Une cave à découvrir pour ravir les amateurs de bons vins, à quelques minutes de la villa.",
    descEn: "Selection of fine wines, champagnes and spirits. A cellar to discover for wine lovers, just a few minutes from the villa.",
    badge: "Vin & Spiritueux",
    badgeColor: "#7c3aed",
    mapUrl: "https://maps.google.com/?q=Cave+a+vin+Annexe+Pacy+sur+Eure",
    website: "https://maps.google.com/?q=Cave+a+vin+Annexe+Pacy+sur+Eure",
    highlight: false,
  },
  {
    id: 6,
    nameFr: "Brasserie Le Saint-Lazare — Pacy-sur-Eure",
    nameEn: "Brasserie Le Saint-Lazare — Pacy-sur-Eure",
    type: "Restaurant",
    icon: Coffee,
    distance: "6 km",
    time: "8 min",
    descFr: "Brasserie traditionnelle en plein cœur de Pacy-sur-Eure. Cuisine du terroir normand, ambiance chaleureuse. Idéal pour un repas convivial en famille ou entre amis.",
    descEn: "Traditional brasserie in the heart of Pacy-sur-Eure. Norman regional cuisine, warm atmosphere. Ideal for a convivial meal with family or friends.",
    badge: "Restaurant",
    badgeColor: "#C9A96E",
    mapUrl: "https://maps.google.com/?q=Brasserie+Saint+Lazare+Pacy+sur+Eure",
    website: "https://maps.google.com/?q=Brasserie+Saint+Lazare+Pacy+sur+Eure",
    highlight: false,
  },
  {
    id: 7,
    nameFr: "La Maison Pacel — Pacy-sur-Eure",
    nameEn: "La Maison Pacel — Pacy-sur-Eure",
    type: "Restaurant gastronomique",
    icon: Utensils,
    distance: "6 km",
    time: "8 min",
    descFr: "Cuisine gastronomique raffinée dans un cadre élégant. Produits locaux normands travaillés avec soin pour une expérience culinaire d'exception à Pacy-sur-Eure.",
    descEn: "Refined gastronomic cuisine in an elegant setting. Local Norman produce carefully prepared for an exceptional culinary experience in Pacy-sur-Eure.",
    badge: "Gastronomie",
    badgeColor: "#0e7490",
    mapUrl: "https://maps.google.com/?q=La+Maison+Pacel+Pacy+sur+Eure",
    website: "https://maps.google.com/?q=La+Maison+Pacel+Pacy+sur+Eure",
    highlight: false,
  },
  {
    id: 8,
    nameFr: "Carrefour Market — Pacy-sur-Eure",
    nameEn: "Carrefour Market — Pacy-sur-Eure",
    type: "Courses & Provisions",
    icon: ShoppingCart,
    distance: "6 km",
    time: "8 min",
    descFr: "Supermarché de proximité pour toutes vos courses du séjour. Fruits, légumes, produits locaux normands, vins régionaux — tout pour préparer de bons repas à la villa.",
    descEn: "Local supermarket for all your holiday shopping. Fruit, vegetables, local Norman produce, regional wines — everything to prepare great meals at the villa.",
    badge: "Courses",
    badgeColor: "#2563eb",
    mapUrl: "https://maps.google.com/?q=Carrefour+Market+Pacy-sur-Eure",
    website: "https://maps.google.com/?q=Carrefour+Market+Pacy-sur-Eure",
    highlight: false,
  },
  {
    id: 9,
    nameFr: "Aldi — Pacy-sur-Eure",
    nameEn: "Aldi — Pacy-sur-Eure",
    type: "Courses",
    icon: ShoppingCart,
    distance: "6 km",
    time: "8 min",
    descFr: "Supermarché discount avec une bonne sélection de produits du quotidien. Pratique pour compléter vos courses pendant votre séjour à La Villa Heurtés Vents.",
    descEn: "Discount supermarket with a good selection of everyday products. Handy for topping up your shopping during your stay at La Villa Heurtés Vents.",
    badge: "Courses",
    badgeColor: "#0369a1",
    mapUrl: "https://maps.google.com/?q=Aldi+Pacy-sur-Eure",
    website: "https://maps.google.com/?q=Aldi+Pacy-sur-Eure",
    highlight: false,
  },
  {
    id: 10,
    nameFr: "Canoë sur l'Eure",
    nameEn: "Canoeing on the Eure",
    type: "Activités",
    icon: Sailboat,
    distance: "10 km",
    time: "15 min",
    descFr: "Descendez l'Eure en canoë à travers les paysages normands. Une expérience ressourçante au fil de l'eau, entre nature et sérénité.",
    descEn: "Canoe down the Eure through Norman landscapes. A restorative experience along the river, between nature and serenity.",
    badge: "Aventure",
    badgeColor: "#0e7490",
    mapUrl: "https://maps.google.com/?q=Canoe+riviere+Eure+Normandie",
    website: "https://www.cape-tourisme.fr",
    highlight: false,
  },
];

const DISTANCES = [
  { fr: "Paris", en: "Paris", dist: "80 km", time: "1h" },
  { fr: "Giverny", en: "Giverny", dist: "12 km", time: "15 min" },
  { fr: "MacArthurGlen", en: "MacArthurGlen", dist: "5 km", time: "7 min" },
  { fr: "Pacy-sur-Eure", en: "Pacy-sur-Eure", dist: "6 km", time: "8 min" },
  { fr: "Vernon", en: "Vernon", dist: "8 km", time: "12 min" },
  { fr: "Rouen", en: "Rouen", dist: "55 km", time: "50 min" },
];

export function TourismSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();

  return (
    <section id="activites" ref={ref} style={{ background: "#0A0A0F", padding: "100px 0", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9 }} style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "4px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "14px" }}>
            {lang === "fr" ? "Tourisme & Activités" : "Tourism & Activities"}
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, margin: "0 0 18px" }}>
            {lang === "fr" ? "Le meilleur de la Normandie" : "The best of Normandy"}<br />
            <em style={{ color: "#C9A96E", fontWeight: 400 }}>{lang === "fr" ? "à votre portée" : "at your fingertips"}</em>
          </h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "rgba(255,255,255,0.6)", maxWidth: "640px", margin: "0 auto" }}>
            {lang === "fr"
              ? "Giverny, shopping premium, nature, gastronomie normande, commerces — tout ce dont vous rêvez à quelques minutes."
              : "Giverny, premium shopping, nature, Norman gastronomy, shops — everything you dream of just minutes away."}
          </p>
        </motion.div>

        {/* Distance badges */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.7 }}
          style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "60px" }}>
          {DISTANCES.map((d) => (
            <div key={d.fr} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,169,110,0.15)", borderRadius: "100px", padding: "9px 18px", display: "flex", alignItems: "center", gap: "8px" }}>
              <MapPin size={11} color="#C9A96E" />
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 600, color: "#fff" }}>{lang === "fr" ? d.fr : d.en}</span>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "#C9A96E" }}>{d.dist}</span>
              <span style={{ display: "flex", alignItems: "center", gap: "3px", color: "rgba(255,255,255,0.35)", fontFamily: "'Montserrat', sans-serif", fontSize: "10px" }}>
                <Clock size={9} /> {d.time}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Attraction cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "18px" }}>
          {ATTRACTIONS.map((attr, i) => (
            <motion.div key={attr.id} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + i * 0.07, duration: 0.7 }}
              style={{ background: attr.highlight ? "rgba(201,169,110,0.06)" : "rgba(255,255,255,0.02)", border: attr.highlight ? "1px solid rgba(201,169,110,0.3)" : "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "24px", position: "relative", overflow: "hidden" }}>
              {attr.highlight && <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "100px", height: "100px", background: "radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%)" }} />}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                <div style={{ display: "flex", gap: "11px", alignItems: "flex-start" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "9px", background: `${attr.badgeColor}22`, border: `1px solid ${attr.badgeColor}44`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <attr.icon size={18} color={attr.badgeColor} />
                  </div>
                  <div>
                    <div style={{ display: "inline-block", background: `${attr.badgeColor}22`, color: attr.badgeColor, padding: "2px 7px", borderRadius: "4px", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600, marginBottom: "5px" }}>
                      {attr.badge}
                    </div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 600, color: "#fff", lineHeight: 1.2, margin: 0 }}>
                      {lang === "fr" ? attr.nameFr : attr.nameEn}
                    </h3>
                  </div>
                </div>
                <a href={attr.mapUrl} target="_blank" rel="noopener noreferrer" title="Google Maps"
                  style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C9A96E")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
                ><ArrowUpRight size={17} /></a>
              </div>

              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "14px" }}>
                {lang === "fr" ? attr.descFr : attr.descEn}
              </p>

              <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "5px", fontFamily: "'Montserrat', sans-serif", fontSize: "12px" }}>
                  <MapPin size={11} color="#C9A96E" /> <span style={{ color: "#C9A96E", fontWeight: 600 }}>{attr.distance}</span>
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>
                  <Clock size={10} /> {attr.time}
                </span>
                <a href={attr.mapUrl} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(26,69,200,0.8)", textDecoration: "none", marginLeft: "auto" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#4f83f5")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(26,69,200,0.8)")}
                >Google Maps →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
