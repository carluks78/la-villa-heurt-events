import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router";
import { SEOHead, SEO_GEO_BLOCK_FR, SEO_GEO_BLOCK_EN } from "../components/SEOHead";
import { PageHero } from "../components/PageHero";
import { InternalLinks } from "../components/InternalLinks";
import { PageFAQ, FAQItem } from "../components/PageFAQ";
import { useLanguage } from "../context/LanguageContext";
import heroHome from "../../imports/hero-home.png";
import chambre1 from "../../imports/chambre_1_.png";
import balneo from "../../imports/balneo.png";
import salon1 from "../../imports/salon-1.jpeg";

const FAQS: FAQItem[] = [
  { qFr: "La villa est-elle adaptée aux week-ends en couple ?", aFr: "Absolument ! La suite parentale king size, la piscine chauffée et la balnéothérapie créent un cadre idéal pour un week-end romantique. La proximité de Giverny et de bons restaurants complète cette expérience.", qEn: "Is the villa suited to couples' weekends?", aEn: "Absolutely! The king size master suite, heated pool and hydrotherapy create an ideal setting for a romantic weekend. The proximity to Giverny and good restaurants completes the experience." },
  { qFr: "Combien de personnes peut accueillir la villa pour un séjour famille ?", aFr: "La villa accueille jusqu'à 8 personnes, ce qui en fait un choix idéal pour les grandes familles ou deux familles souhaitant partager leurs vacances. 4 chambres, 2 salles de bains, grand jardin clos.", qEn: "How many people can the villa accommodate for a family stay?", aEn: "The villa accommodates up to 8 people, making it ideal for large families or two families sharing holidays. 4 bedrooms, 2 bathrooms, large enclosed garden." },
  { qFr: "La villa est-elle adaptée au télétravail ?", aFr: "Oui ! La fibre optique haut débit garantit une connexion stable pour le télétravail. La tranquillité de la villa, le cadre naturel et les espaces de vie généreux en font un lieu idéal pour une semaine de workcation.", qEn: "Is the villa suitable for remote working?", aEn: "Yes! High-speed fibre optic ensures a stable connection for remote working. The peace of the villa, natural setting and generous living spaces make it ideal for a workcation week." },
  { qFr: "Y a-t-il des activités pour les bébés et jeunes enfants ?", aFr: "La villa propose un lit bébé sur demande, un jardin clos et sécurisé pour jouer. Les 3 Étangs de Jouy-sur-Eure, les parcs et espaces verts de la région sont parfaits pour les familles avec jeunes enfants.", qEn: "Are there activities for babies and young children?", aEn: "The villa offers a cot on request, an enclosed and secure garden for playing. Les 3 Étangs in Jouy-sur-Eure, parks and green spaces in the area are perfect for families with young children." },
];

const STAYS_FR = [
  {
    emoji: "💑",
    title: "Week-end Romantique",
    sub: "Pour deux, en amoureux",
    image: chambre1,
    tags: ["Suite King Size", "Piscine privée", "Balnéothérapie", "Giverny 15min"],
    desc: "La suite parentale king size, la piscine chauffée, l'espace balnéothérapie et la proximité de Giverny créent un cadre inoubliable pour un week-end en amoureux. Dîner à La Maison Pacel, visite des jardins de Monet, détente au bord de la piscine — le programme idéal.",
    highlights: ["Suite parentale king size", "Piscine chauffée privée", "Balnéothérapie relaxante", "Fondation Monet à 12km", "Restaurants gastronomiques proches"],
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    title: "Séjour en Famille",
    sub: "Jusqu'à 8 personnes",
    image: salon1,
    tags: ["8 personnes", "Jardin clos", "Lit bébé", "3 Étangs 12min"],
    desc: "Terrain clos de 1700m², jardin sécurisé, 4 chambres spacieuses et 2 salles de bains — La Villa Heurtés Vents est parfaite pour les familles. Les 3 Étangs à Jouy-sur-Eure, Giverny et MacArthurGlen sont à portée de main pour des journées inoubliables.",
    highlights: ["4 chambres pour 8 personnes", "Jardin clos sécurisé 1700m²", "Lit bébé disponible", "Les 3 Étangs Jouy-sur-Eure 12km", "MacArthurGlen à 5km"],
  },
  {
    emoji: "🥂",
    title: "Séjour entre Amis",
    sub: "Groupes festifs bienvenus",
    image: balneo,
    tags: ["8 personnes", "Piscine", "Soirées", "MacArthurGlen"],
    desc: "Pour les groupes d'amis en quête d'une parenthèse en Normandie : grand espace de vie, terrasse, piscine chauffée, et toutes les activités de la région. Shopping chez MacArthurGlen, visite de Vernon, soirées conviviales autour du poêle à bois.",
    highlights: ["Villa entière 150m²", "Piscine & balnéo pour tout le groupe", "Poêle à bois convivial", "Vernon & restaurants à 8km", "MacArthurGlen à 5km"],
  },
  {
    emoji: "💻",
    title: "Workcation",
    sub: "Télétravail & ressourcement",
    image: salon1,
    tags: ["Fibre optique", "Calme", "Semaine", "Nature"],
    desc: "Fibre optique haut débit, espace de vie calme et inspirant, jardin pour les pauses — La Villa Heurtés Vents est idéale pour une semaine de workcation. Combinez travail et découverte de la Normandie le week-end.",
    highlights: ["Fibre optique haut débit", "Environnement calme & inspirant", "Jardin pour les pauses", "Paris à 1h pour les réunions", "Proche des commerces Pacy-sur-Eure"],
  },
  {
    emoji: "👶",
    title: "Séjour avec Bébé",
    sub: "Familles avec tout-petits",
    image: heroHome,
    tags: ["Lit bébé", "Plain-pied", "Jardin clos", "Calme"],
    desc: "La villa de plain-pied, le jardin clos et sécurisé, le lit bébé disponible sur demande — tout est pensé pour que les familles avec bébés ou tout-petits puissent profiter pleinement de leur séjour en toute sérénité.",
    highlights: ["Plain-pied sans escaliers dangereux", "Jardin clos sécurisé", "Lit bébé fourni sur demande", "Calme et nature préservée", "Pierre à l'écoute pour vos besoins"],
  },
];

const STAYS_EN = [
  {
    emoji: "💑",
    title: "Romantic Weekend",
    sub: "For two, in love",
    image: chambre1,
    tags: ["King Size Suite", "Private pool", "Hydrotherapy", "Giverny 15min"],
    desc: "The king size master suite, heated pool, hydrotherapy area and proximity to Giverny create an unforgettable setting for a romantic weekend. Dinner at La Maison Pacel, visit to Monet's gardens, relaxation by the pool — the perfect programme.",
    highlights: ["King size master suite", "Private heated pool", "Relaxing hydrotherapy", "Monet Foundation 12km", "Gourmet restaurants nearby"],
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    title: "Family Stay",
    sub: "Up to 8 people",
    image: salon1,
    tags: ["8 people", "Enclosed garden", "Baby cot", "3 Étangs 12min"],
    desc: "1700m² enclosed plot, secure garden, 4 spacious bedrooms and 2 bathrooms — La Villa Heurtés Vents is perfect for families. Les 3 Étangs in Jouy-sur-Eure, Giverny and MacArthurGlen are within easy reach for unforgettable days.",
    highlights: ["4 bedrooms for 8 people", "Secure enclosed garden 1700m²", "Baby cot available", "Les 3 Étangs 12km", "MacArthurGlen 5km"],
  },
  {
    emoji: "🥂",
    title: "Friends Getaway",
    sub: "Groups welcome",
    image: balneo,
    tags: ["8 people", "Pool", "Evenings", "MacArthurGlen"],
    desc: "For groups of friends seeking a break in Normandy: large living space, terrace, heated pool, and all the region's activities. Shopping at MacArthurGlen, visit to Vernon, convivial evenings around the wood stove.",
    highlights: ["Full villa 150m²", "Pool & spa for the whole group", "Convivial wood stove", "Vernon & restaurants 8km", "MacArthurGlen 5km"],
  },
  {
    emoji: "💻",
    title: "Workcation",
    sub: "Remote work & relaxation",
    image: salon1,
    tags: ["Fibre optic", "Quiet", "Weekly", "Nature"],
    desc: "High-speed fibre optic, calm and inspiring living space, garden for breaks — La Villa Heurtés Vents is ideal for a workcation week. Combine work and discovering Normandy at weekends.",
    highlights: ["High-speed fibre optic", "Calm & inspiring environment", "Garden for breaks", "Paris 1h for meetings", "Near Pacy-sur-Eure shops"],
  },
  {
    emoji: "👶",
    title: "Stay with Baby",
    sub: "Families with little ones",
    image: heroHome,
    tags: ["Baby cot", "Single level", "Enclosed garden", "Peaceful"],
    desc: "The single-level villa, enclosed and secure garden, baby cot available on request — everything is designed for families with babies or toddlers to enjoy their stay in complete peace of mind.",
    highlights: ["Single level with no dangerous stairs", "Secure enclosed garden", "Cot provided on request", "Peaceful and preserved nature", "Pierre responsive to your needs"],
  },
];

function StayCard({ stay }: { stay: typeof STAYS_FR[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { lang } = useLanguage();

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", borderRadius: "18px", overflow: "hidden", border: "1px solid rgba(201,169,110,0.15)" }}
      className="stay-card">
      <div style={{ position: "relative", minHeight: "280px" }}>
        <img src={stay.image} alt={stay.title} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,10,15,0.3) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", top: "20px", left: "20px", fontSize: "32px" }}>{stay.emoji}</div>
      </div>
      <div style={{ background: "rgba(255,255,255,0.03)", padding: "32px" }}>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "2px", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", marginBottom: "8px" }}>{stay.sub}</p>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>{stay.title}</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
          {stay.tags.map((tag) => <span key={tag} style={{ background: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.2)", color: "#C9A96E", padding: "3px 10px", borderRadius: "100px", fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "0.5px" }}>{tag}</span>)}
        </div>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "18px" }}>{stay.desc}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "22px" }}>
          {stay.highlights.map((h) => (
            <div key={h} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
              <span style={{ color: "#C9A96E", fontSize: "12px", marginTop: "2px" }}>✓</span>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.55)" }}>{h}</span>
            </div>
          ))}
        </div>
        <Link to="/reservation"
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #C9A96E, #E8C98A)", color: "#0A0A0F", padding: "11px 22px", borderRadius: "7px", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px" }}>
          {lang === "fr" ? "RÉSERVER CE SÉJOUR" : "BOOK THIS STAY"}
        </Link>
      </div>
    </motion.div>
  );
}

export function SejoursPage() {
  const { lang } = useLanguage();
  const stays = lang === "fr" ? STAYS_FR : STAYS_EN;

  return (
    <>
      <SEOHead
        title={lang === "fr" ? "Idées Séjours — Couple, Famille, Amis | La Villa Heurtés Vents" : "Stay Ideas — Couples, Families, Friends | La Villa Heurtés Vents"}
        description={lang === "fr" ? "Week-end romantique, séjour famille, entre amis, workcation ou séjour avec bébé — La Villa Heurtés Vents s'adapte à tous vos projets. Normandie, proche Paris." : "Romantic weekend, family stay, friends getaway, workcation or stay with baby — La Villa Heurtés Vents adapts to all your plans. Normandy, near Paris."}
        path="/idees-sejours"
        keywords="idées séjours villa normandie, week-end romantique normandie piscine, séjour couple normandie, séjour famille normandie, séjour amis normandie, workcation normandie, télétravail normandie villa, séjour bébé villa normandie, séjour 8 personnes normandie, week-end normandie paris, escapade normandie couple, séjour détente normandie piscine, séjour famille 8 personnes normandie, villa famille normandie, villa couple normandie, villa groupe normandie, séjour Giverny Monet normandie, séjour MacArthurGlen normandie, séjour gastronomique normandie, vacances normandie famille, vacances normandie couple, week-end luxe normandie, séjour prestige normandie, villa normandie enfants, séjour avec tout-petits normandie, villa normandie toutes saisons"
      />
      <div style={{ paddingTop: "60px" }}>
        <PageHero
          title={lang === "fr" ? "Idées" : "Stay"}
          titleAccent={lang === "fr" ? "Séjours" : "Ideas"}
          subtitle={lang === "fr" ? "En couple, en famille, entre amis ou en workcation — La Villa Heurtés Vents offre le cadre parfait pour chaque type de séjour." : "As a couple, family, with friends or for a workcation — La Villa Heurtés Vents offers the perfect setting for every type of stay."}
          image={heroHome}
          breadcrumb={[{ label: lang === "fr" ? "Accueil" : "Home", to: "/" }]}
          currentPage={lang === "fr" ? "Idées séjours" : "Stay ideas"}
        />

        <section style={{ background: "#0A0A0F", padding: "72px 0" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "24px" }}>
            {stays.map((stay, i) => <StayCard key={i} stay={stay} />)}
          </div>
        </section>

        <PageFAQ items={FAQS} titleFr="Questions sur les séjours" titleEn="Stay questions" />
        <InternalLinks exclude="/idees-sejours" />
        <div style={{ display: "none" }} aria-hidden="true">{lang === "fr" ? SEO_GEO_BLOCK_FR : SEO_GEO_BLOCK_EN}</div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .stay-card { grid-template-columns: 1fr !important; }
          .stay-card > div:first-child { min-height: 200px !important; }
        }
      `}</style>
    </>
  );
}
