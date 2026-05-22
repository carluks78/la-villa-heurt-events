import { Link } from "react-router";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";
import { SEOHead, SEO_GEO_BLOCK_FR, SEO_GEO_BLOCK_EN } from "../components/SEOHead";
import { Hero } from "../components/Hero";
import { useLanguage } from "../context/LanguageContext";

const PAGES_FR = [
  { to: "/la-villa", title: "La Villa", sub: "Longère normande 150m²", emoji: "" },
  { to: "/chambres", title: "Chambres", sub: "4 chambres, 2 salles de bain", emoji: "" },
  { to: "/piscine-bien-etre", title: "Piscine & Bien-être", sub: "Piscine chauffée & balnéothérapie", emoji: "" },
  { to: "/activites", title: "Activités", sub: "Giverny, Vernon, MacArthurGlen…", emoji: "" },
  { to: "/galerie", title: "Galerie", sub: "Photos de la villa", emoji: "" },
  { to: "/idees-sejours", title: "Idées séjours", sub: "Couple, famille, amis…", emoji: "" },
  { to: "/tarifs", title: "Tarifs", sub: "À partir de 459€ — 2 nuits min.", emoji: "" },
  { to: "/reservation", title: "Réservation", sub: "Disponibilités Airbnb", emoji: "" },
  { to: "/contact", title: "Contact", sub: "Pierre Jacques — WhatsApp", emoji: "" },
  { to: "/acces", title: "Accès", sub: "1h de Paris — A13 Vernon", emoji: "" },
  { to: "/consignes", title: "Consignes", sub: "Règles de la maison & QR code", emoji: "" },
  { to: "/faq", title: "FAQ", sub: "Toutes vos questions", emoji: "" },
];

const PAGES_EN = [
  { to: "/la-villa", title: "The Villa", sub: "150m² Norman longhouse", emoji: "" },
  { to: "/chambres", title: "Bedrooms", sub: "4 bedrooms, 2 bathrooms", emoji: "" },
  { to: "/piscine-bien-etre", title: "Pool & Wellness", sub: "Heated pool & hydrotherapy", emoji: "" },
  { to: "/activites", title: "Activities", sub: "Giverny, Vernon, MacArthurGlen…", emoji: "" },
  { to: "/galerie", title: "Gallery", sub: "Villa photos", emoji: "" },
  { to: "/idees-sejours", title: "Stay ideas", sub: "Couples, families, friends…", emoji: "" },
  { to: "/tarifs", title: "Rates", sub: "From €459 — 2 nights min.", emoji: "" },
  { to: "/reservation", title: "Booking", sub: "Airbnb availability", emoji: "" },
  { to: "/contact", title: "Contact", sub: "Pierre Jacques — WhatsApp", emoji: "" },
  { to: "/acces", title: "Directions", sub: "1h from Paris — A13 Vernon", emoji: "" },
  { to: "/consignes", title: "House rules", sub: "Rules & QR code", emoji: "" },
  { to: "/faq", title: "FAQ", sub: "All your questions", emoji: "" },
];

function PageGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();
  const pages = lang === "fr" ? PAGES_FR : PAGES_EN;

  return (
    <section ref={ref} style={{ background: "#0A0A0F", padding: "80px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "4px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "12px" }}>
            {lang === "fr" ? "Explorer" : "Explore"}
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fff", margin: 0 }}>
            {lang === "fr" ? "Tout ce que vous cherchez" : "Everything you need"}
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "14px" }}>
          {pages.map((p, i) => (
            <motion.div key={p.to} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.05, duration: 0.5 }}>
              <Link to={p.to} style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "22px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,169,110,0.1)", borderRadius: "12px", textDecoration: "none", transition: "all 0.25s" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(201,169,110,0.07)"; el.style.borderColor = "rgba(201,169,110,0.3)"; el.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.03)"; el.style.borderColor = "rgba(201,169,110,0.1)"; el.style.transform = "translateY(0)"; }}
              >
                <span style={{ fontSize: "24px" }}>{p.emoji}</span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 600, color: "#fff" }}>{p.title}</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.45)", lineHeight: 1.4 }}>{p.sub}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SEOTextSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();

  return (
    <section ref={ref} style={{ background: "linear-gradient(180deg, #0A0A0F 0%, #060814 50%, #0A0A0F 100%)", padding: "80px 0", borderTop: "1px solid rgba(201,169,110,0.08)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "4px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "16px", textAlign: "center" }}>
            {lang === "fr" ? "La villa en détail" : "About the villa"}
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: "40px", lineHeight: 1.25 }}>
            {lang === "fr" ? <>Une longère normande d'exception,<br /><em style={{ color: "#C9A96E", fontWeight: 400 }}>au cœur de la Haute-Normandie</em></> : <>An exceptional Norman longhouse,<br /><em style={{ color: "#C9A96E", fontWeight: 400 }}>in the heart of Upper Normandy</em></>}
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", marginBottom: "40px" }}>
            <div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.85, margin: 0 }}>
                {lang === "fr"
                  ? "La Villa Heurtés Vents est une authentique longère normande en pierre de 150 m², entièrement rénovée avec soin pour offrir un cadre de vie luxueux tout en préservant le charme de l'architecture normande. Nichée à Hardencourt-Cocherel, dans le département de l'Eure (27120), elle bénéficie d'un environnement naturel exceptionnel, loin du bruit et de l'agitation urbaine. La propriété dispose de 4 chambres spacieuses pouvant accueillir jusqu'à 8 personnes, dont une suite parentale king size, et de 2 salles de bains entièrement équipées. Le vaste jardin clos de 1 700 m², sans aucun vis-à-vis, garantit une intimité totale et un calme absolu."
                  : "La Villa Heurtés Vents is an authentic 150 m² stone Norman longhouse, fully renovated with care to offer a luxurious living environment while preserving the charm of Norman architecture. Nestled in Hardencourt-Cocherel, in the Eure department (27120), it benefits from an exceptional natural setting, far from urban noise and bustle. The property has 4 spacious bedrooms accommodating up to 8 people, including a king-size master suite, and 2 fully equipped bathrooms. The vast enclosed garden of 1,700 m², with no neighbouring overlooking, guarantees complete privacy and absolute tranquillity."}
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.85, margin: 0 }}>
                {lang === "fr"
                  ? "Le joyau de la villa est sa piscine chauffée privée, disponible de mai à septembre, complétée d'un espace balnéothérapie avec jets massants. Plongez dans une eau tempérée à 26°C et profitez de votre spa personnel en pleine campagne normande. La terrasse ensoleillée avec transats invite à la détente, tandis que le barbecue privatif permet des soirées conviviales en plein air. À l'intérieur, le poêle à bois crée une atmosphère chaleureuse en toutes saisons, et la connexion fibre optique haut débit satisfait aussi bien les télétravailleurs que les familles en vacances. Équipée d'une machine à café, d'un lave-linge, d'un fer à repasser, d'un sèche-cheveux, de téléviseurs dans chaque chambre et au salon avec Netflix et Prime Video inclus, la villa offre tout le confort nécessaire pour un séjour parfait."
                  : "The jewel of the villa is its private heated pool, available from May to September, complemented by a hydrotherapy area with massage jets. Dive into water heated to 26°C and enjoy your personal spa in the heart of the Norman countryside. The sunny terrace with sun loungers invites relaxation, while the private barbecue allows for convivial evenings outdoors. Inside, the wood stove creates a warm atmosphere in all seasons, and the high-speed fibre optic connection satisfies both remote workers and families on holiday. Equipped with a coffee machine, washing machine, iron, hair dryer, televisions in every bedroom and the living room with Netflix and Prime Video included, the villa offers all the comfort needed for a perfect stay."}
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "16px", marginBottom: "40px" }}>
            {(lang === "fr" ? [
              { value: "150 m²", label: "Surface habitable" },
              { value: "4", label: "Chambres" },
              { value: "8", label: "Voyageurs max." },
              { value: "1 700 m²", label: "Jardin privé clos" },
              { value: "12 km", label: "De Giverny" },
              { value: "1h", label: "De Paris (A13)" },
            ] : [
              { value: "150 m²", label: "Living area" },
              { value: "4", label: "Bedrooms" },
              { value: "8", label: "Max. guests" },
              { value: "1,700 m²", label: "Enclosed garden" },
              { value: "12 km", label: "From Giverny" },
              { value: "1h", label: "From Paris (A13)" },
            ]).map((stat) => (
              <div key={stat.label} style={{ textAlign: "center", padding: "20px 12px", background: "rgba(201,169,110,0.04)", border: "1px solid rgba(201,169,110,0.12)", borderRadius: "10px" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", fontWeight: 700, color: "#C9A96E", lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "1px", color: "rgba(255,255,255,0.45)", marginTop: "6px", textTransform: "uppercase" }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, textAlign: "center", maxWidth: "900px", margin: "0 auto 32px" }}>
            {lang === "fr"
              ? "Idéalement situé à 12 km de Giverny et des jardins de la Fondation Claude Monet, à 5 km du centre commercial MacArthurGlen Douains, à 8 km de Vernon et à 6 km de Pacy-sur-Eure, La Villa Heurtés Vents est le point de départ idéal pour explorer la Normandie tout en profitant d'un havre de paix luxueux. Que vous souhaitiez un week-end romantique, des vacances en famille, un séjour entre amis ou un workcation en pleine nature, la villa s'adapte à toutes vos envies."
              : "Ideally located 12 km from Giverny and the Claude Monet Foundation gardens, 5 km from MacArthurGlen Douains shopping outlet, 8 km from Vernon and 6 km from Pacy-sur-Eure, La Villa Heurtés Vents is the ideal starting point for exploring Normandy while enjoying a luxurious haven of peace. Whether you are looking for a romantic weekend, a family holiday, a stay with friends, or a workcation in nature, the villa adapts to all your wishes."}
          </p>

          <div style={{ textAlign: "center" }}>
            <Link to="/reservation" style={{ display: "inline-block", background: "linear-gradient(135deg, #1a45c8, #3b6ef0)", color: "#fff", padding: "14px 44px", borderRadius: "4px", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, boxShadow: "0 8px 30px rgba(26,69,200,0.35)" }}>
              {lang === "fr" ? "Voir les tarifs & réserver" : "View rates & book"}
            </Link>
          </div>

          <div style={{ marginTop: "48px", borderTop: "1px solid rgba(201,169,110,0.08)", paddingTop: "32px" }}>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", lineHeight: 1.8, fontFamily: "'Montserrat', sans-serif", margin: 0 }}>
              {lang === "fr" ? SEO_GEO_BLOCK_FR : SEO_GEO_BLOCK_EN}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function HomePage() {
  const { lang } = useLanguage();
  return (
    <>
      <SEOHead
        title={lang === "fr" ? "La Villa Heurtés Vents | Location Villa Luxe Normandie — Piscine Chauffée, Proche Giverny & Paris" : "La Villa Heurtés Vents | Luxury Villa Rental Normandy — Heated Pool, Near Giverny & Paris"}
        description={lang === "fr" ? "Location villa de luxe en Haute-Normandie. Longère normande 150m², 4 chambres, piscine chauffée, balnéothérapie, jardin 1700m². À 1h de Paris, 12km de Giverny." : "Luxury villa rental in Upper Normandy. 150m² Norman longhouse, 4 bedrooms, heated pool, hydrotherapy, 1700m² garden. 1h from Paris, 12km from Giverny."}
        path="/"
        keywords="villa heurtés vents accueil, location villa luxe normandie, villa piscine chauffée normandie, longère normande 150m2, villa 4 chambres 8 personnes normandie, villa proche paris 1h, villa proche giverny, villa hardencourt-cocherel, villa eure 27120, location saisonnière normandie, gîte luxe normandie, villa balnéothérapie normandie, villa jardin privé 1700m2, villa sans vis-à-vis normandie, villa fibre optique normandie, villa poêle à bois normandie, villa suite parentale king size, villa parking privé normandie, week-end normandie proche paris, séjour détente normandie, séjour famille normandie, séjour couple normandie, villa airbnb normandie giverny, Pierre Jacques propriétaire villa, réserver villa normandie, villa luxe haute normandie, villa prestige normandie, normandie location vacances, escapade normandie paris, villa campagne normande"
      />
      <Hero />
      <PageGrid />
      <SEOTextSection />
    </>
  );
}
