import { Link } from "react-router";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Star, ArrowRight } from "lucide-react";
import { SEOHead, SEO_GEO_BLOCK_FR, SEO_GEO_BLOCK_EN } from "../components/SEOHead";
import { InternalLinks } from "../components/InternalLinks";
import { useLanguage } from "../context/LanguageContext";
import heroHome from "../../imports/hero-home.png";
import balneo from "../../imports/balneo.png";
import salon1 from "../../imports/salon-1.jpeg";
import chambre1 from "../../imports/chambre_1_.png";

interface GeoPageProps {
  path: string;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  keywordsFr: string;
  keywordsEn: string;
  h1Fr: string;
  h1En: string;
  subtitleFr: string;
  subtitleEn: string;
  image?: string;
  featuresFr: string[];
  featuresEn: string[];
  bodyFr: string[];
  bodyEn: string[];
}

const FEATURES_GLOBAL_FR = [
  "Longère normande 150m² en pierre authentique",
  "4 chambres — suite king size + 3 doubles",
  "Piscine chauffée privée (mai–septembre)",
  "Balnéothérapie & espace détente",
  "Jardin clos privatif 1700m²",
  "Fibre optique haut débit",
  "Parking sécurisé sur terrain clos",
  "À 1h de Paris via A13 — sortie Vernon",
  "12 km de la Fondation Claude Monet Giverny",
  "5 km de MacArthurGlen Paris-Giverny",
];
const FEATURES_GLOBAL_EN = [
  "Authentic 150m² stone Norman longhouse",
  "4 bedrooms — king suite + 3 doubles",
  "Private heated pool (May–September)",
  "Hydrotherapy & relaxation area",
  "Private enclosed 1700m² garden",
  "High-speed fibre optic",
  "Secure parking on enclosed grounds",
  "1h from Paris via A13 — Vernon exit",
  "12 km from Claude Monet Foundation Giverny",
  "5 km from MacArthurGlen Paris-Giverny",
];

export function GeoPage({
  path, titleFr, titleEn, descFr, descEn, keywordsFr, keywordsEn,
  h1Fr, h1En, subtitleFr, subtitleEn, image = heroHome,
  featuresFr, featuresEn, bodyFr, bodyEn,
}: GeoPageProps) {
  const { lang } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const title = lang === "fr" ? titleFr : titleEn;
  const description = lang === "fr" ? descFr : descEn;
  const keywords = lang === "fr" ? keywordsFr : keywordsEn;
  const h1 = lang === "fr" ? h1Fr : h1En;
  const subtitle = lang === "fr" ? subtitleFr : subtitleEn;
  const features = [...(lang === "fr" ? featuresFr : featuresEn), ...(lang === "fr" ? FEATURES_GLOBAL_FR : FEATURES_GLOBAL_EN)];
  const body = lang === "fr" ? bodyFr : bodyEn;

  return (
    <>
      <SEOHead title={title} description={description} path={path} keywords={keywords} />
      <div style={{ paddingTop: "60px" }}>

        {/* Hero */}
        <div style={{ position: "relative", height: "420px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={image} alt={h1} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.45) saturate(1.1)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.7) 100%)" }} />
          <div style={{ position: "relative", zIndex: 5, textAlign: "center", padding: "0 24px", maxWidth: "800px" }}>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(201,169,110,0.12)", border: "1px solid rgba(201,169,110,0.35)", borderRadius: "100px", padding: "5px 14px", marginBottom: "18px" }}>
              <MapPin size={11} color="#C9A96E" />
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "2px", color: "#C9A96E", textTransform: "uppercase" }}>Hardencourt-Cocherel · Normandie</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: "16px" }}>
              {h1}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.7 }}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(16px, 2.5vw, 22px)", fontStyle: "italic", color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>
              {subtitle}
            </motion.p>
          </div>
        </div>

        {/* Main content */}
        <section ref={ref} style={{ background: "#0A0A0F", padding: "72px 0" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "64px", alignItems: "start" }} className="geo-grid">

              {/* Body text */}
              <div>
                {body.map((para, i) => (
                  <motion.p key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.7 }}
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "rgba(255,255,255,0.78)", lineHeight: 1.75, marginBottom: "22px" }}>
                    {para}
                  </motion.p>
                ))}

                {/* 5 stars */}
                <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4, duration: 0.6 }}
                  style={{ display: "flex", gap: "4px", marginBottom: "32px" }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#C9A96E" color="#C9A96E" />)}
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.5)", marginLeft: "8px", alignSelf: "center" }}>
                    {lang === "fr" ? "Villa 5 étoiles — Airbnb" : "5-star Villa — Airbnb"}
                  </span>
                </motion.div>

                {/* CTAs */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.6 }}
                  style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <a href="https://www.airbnb.com/slink/04z2yC75" target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #1a45c8, #3b6ef0)", color: "#fff", padding: "14px 28px", borderRadius: "6px", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700 }}>
                    {lang === "fr" ? "Réserver sur Airbnb" : "Book on Airbnb"} <ArrowRight size={14} />
                  </a>
                  <a href={`https://wa.me/33601414173?text=${encodeURIComponent("Bonjour Pierre, je souhaite réserver La Villa Heurtés Vents.")}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)", color: "#25D366", padding: "14px 28px", borderRadius: "6px", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "1px", fontWeight: 600 }}>
                    WhatsApp Pierre
                  </a>
                </motion.div>
              </div>

              {/* Features card */}
              <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3, duration: 0.8 }}
                style={{ background: "rgba(201,169,110,0.05)", border: "1px solid rgba(201,169,110,0.2)", borderRadius: "16px", padding: "28px", position: "sticky", top: "80px" }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "3px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "18px" }}>
                  {lang === "fr" ? "Les atouts de la villa" : "Villa highlights"}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {features.map((f, i) => (
                    <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: "#C9A96E", fontSize: "12px", marginTop: "2px", flexShrink: 0 }}>✓</span>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid rgba(201,169,110,0.12)" }}>
                  <Link to="/galerie"
                    style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "#C9A96E", textDecoration: "none", letterSpacing: "1px" }}>
                    {lang === "fr" ? "Voir la galerie photos" : "See photo gallery"} <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Photo strip */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6, duration: 0.7 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginTop: "64px" }}>
              {[salon1, balneo, chambre1].map((img, i) => (
                <div key={i} style={{ borderRadius: "10px", overflow: "hidden", aspectRatio: "4/3" }}>
                  <img src={img} alt={`La Villa Heurtés Vents — photo ${i + 1}`} loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.85) saturate(1.05)" }} />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <InternalLinks />
        <div style={{ display: "none" }} aria-hidden="true">{lang === "fr" ? SEO_GEO_BLOCK_FR : SEO_GEO_BLOCK_EN}</div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .geo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

// ── Individual GEO pages ─────────────────────────────────────────────────────

export function GeoGivernyPage() {
  return <GeoPage
    path="/location-villa-giverny"
    titleFr="Location Villa Giverny Normandie | La Villa Heurtés Vents — Piscine & Luxe"
    titleEn="Villa Rental near Giverny Normandy | La Villa Heurtés Vents — Pool & Luxury"
    descFr="Location villa luxe à 12km de Giverny et la Fondation Claude Monet. Longère normande 150m², piscine chauffée, balnéothérapie, jardin 1700m². À 1h de Paris."
    descEn="Luxury villa rental 12km from Giverny and the Claude Monet Foundation. 150m² Norman longhouse, heated pool, hydrotherapy, 1700m² garden. 1h from Paris."
    keywordsFr="location villa giverny, villa proche giverny normandie, location villa fondation monet, villa normandie giverny piscine, villa 12km giverny, location giverny normandie, villa giverny luxe, villa normandie proche impressionnisme, séjour giverny normandie villa, hébergement giverny normandie, gîte giverny normandie luxe, villa eure giverny, villa hardencourt giverny, normandie giverny villa location, villa proche jardins monet"
    keywordsEn="villa rental giverny, villa near giverny normandy, villa near monet foundation, villa normandy giverny pool, villa 12km giverny, giverny normandy villa rental, luxury villa giverny, normandy impressionism villa, giverny stay normandy villa, giverny accommodation normandy"
    h1Fr="Location villa à 12km de Giverny"
    h1En="Villa rental 12km from Giverny"
    subtitleFr="Découvrez la Fondation Claude Monet et ses jardins impressionnistes depuis votre villa de luxe en Normandie"
    subtitleEn="Explore the Claude Monet Foundation and its impressionist gardens from your luxury Normandy villa"
    featuresFr={["À 12km de la Fondation Claude Monet Giverny", "À 15 minutes en voiture des jardins de Monet", "Région des impressionnistes — Haute-Normandie", "Vernon (base de Giverny) à 8km"]}
    featuresEn={["12km from Claude Monet Foundation Giverny", "15 minutes by car to Monet's gardens", "Impressionist region — Upper Normandy", "Vernon (Giverny base) 8km away"]}
    bodyFr={[
      "La Villa Heurtés Vents est idéalement située à seulement 12 kilomètres de Giverny et de la célèbre Fondation Claude Monet. Depuis notre longère normande de 150m², rejoignez en quelques minutes les jardins impressionnistes les plus visités de France.",
      "Passez vos journées à vous émerveiller devant les jardins et le bassin aux nymphéas qui ont inspiré Monet, et retrouvez chaque soir le confort et la sérénité de votre villa privée : piscine chauffée, balnéothérapie, jardin clos de 1700m² sans vis-à-vis.",
      "À 1h de Paris via l'A13 (sortie Vernon), La Villa Heurtés Vents est la base parfaite pour un séjour culturel et ressourçant en Normandie. Réservez directement sur Airbnb ou contactez Pierre par WhatsApp."
    ]}
    bodyEn={[
      "La Villa Heurtés Vents is ideally located just 12 kilometres from Giverny and the famous Claude Monet Foundation. From our 150m² Norman longhouse, you're just minutes away from France's most-visited impressionist gardens.",
      "Spend your days marvelling at the gardens and lily pond that inspired Monet, then return each evening to the comfort and serenity of your private villa: heated pool, hydrotherapy, 1700m² private enclosed garden.",
      "1h from Paris via the A13 (Vernon exit), La Villa Heurtés Vents is the perfect base for a cultural and restorative stay in Normandy. Book directly on Airbnb or contact Pierre on WhatsApp."
    ]}
  />;
}

export function GeoEurePage() {
  return <GeoPage
    path="/location-vacances-eure"
    titleFr="Location Vacances Eure 27120 — Villa Luxe | La Villa Heurtés Vents"
    titleEn="Holiday Rental Eure 27120 — Luxury Villa | La Villa Heurtés Vents"
    descFr="Location vacances dans l'Eure (27120). Villa 150m², 4 chambres, piscine chauffée, balnéothérapie à Hardencourt-Cocherel. Normandie, proche Paris, Giverny, Vernon."
    descEn="Holiday rental in Eure (27120). 150m² villa, 4 bedrooms, heated pool, hydrotherapy in Hardencourt-Cocherel. Normandy, near Paris, Giverny, Vernon."
    keywordsFr="location vacances eure, location vacances 27120, villa eure normandie, villa hardencourt-cocherel eure, location eure normandie, villa eure piscine, gîte eure normandie luxe, location saisonnière eure, villa vacances eure 27120, location maison eure, villa haute-normandie eure, location eure proche paris, location eure giverny, normandie eure location villa"
    keywordsEn="holiday rental eure, vacation rental eure 27120, villa eure normandy, villa hardencourt-cocherel eure, eure normandy villa rental, villa eure pool, luxury gite eure normandy, seasonal rental eure, vacation villa eure 27120"
    h1Fr="Location vacances dans l'Eure — Hardencourt-Cocherel"
    h1En="Holiday rental in Eure — Hardencourt-Cocherel"
    subtitleFr="Une villa d'exception au cœur de la Haute-Normandie, dans le département de l'Eure (27120)"
    subtitleEn="An exceptional villa in the heart of Upper Normandy, in the Eure department (27120)"
    image={salon1}
    featuresFr={["Hardencourt-Cocherel, Eure 27120", "Haute-Normandie — Région Normandie", "Proche Pacy-sur-Eure (6km), Vernon (8km)", "Accès A13 — Paris 1h, Rouen 55km"]}
    featuresEn={["Hardencourt-Cocherel, Eure 27120", "Upper Normandy — Normandy Region", "Near Pacy-sur-Eure (6km), Vernon (8km)", "A13 access — Paris 1h, Rouen 55km"]}
    bodyFr={[
      "Découvrez La Villa Heurtés Vents, une location vacances d'exception dans le département de l'Eure (27120), au cœur de la Haute-Normandie. Notre longère normande authentique en pierre de 150m² offre tout le confort d'une villa de luxe dans un cadre naturel préservé.",
      "À Hardencourt-Cocherel, entre Vernon et Pacy-sur-Eure, profitez de la piscine chauffée privée, de l'espace balnéothérapie, du jardin clos de 1700m² et de 4 chambres pouvant accueillir jusqu'à 8 personnes.",
      "L'Eure est un département de Normandie offrant un cadre de vie exceptionnel, à la fois rural et bien desservi : Paris à 1h, Giverny à 12km, Rouen à 55km. La villa est parfaite pour toutes vos vacances en Normandie."
    ]}
    bodyEn={[
      "Discover La Villa Heurtés Vents, an exceptional holiday rental in the Eure department (27120), in the heart of Upper Normandy. Our authentic 150m² stone Norman longhouse offers all the comfort of a luxury villa in a preserved natural setting.",
      "In Hardencourt-Cocherel, between Vernon and Pacy-sur-Eure, enjoy the private heated pool, hydrotherapy area, 1700m² enclosed garden and 4 bedrooms accommodating up to 8 people.",
      "Eure is a Normandy department offering an exceptional living environment, both rural and well-connected: Paris 1h, Giverny 12km, Rouen 55km. The villa is perfect for all your Normandy holidays."
    ]}
  />;
}

export function GeoPiscineNormandiePage() {
  return <GeoPage
    path="/villa-avec-piscine-normandie"
    titleFr="Villa avec Piscine Chauffée Normandie | La Villa Heurtés Vents"
    titleEn="Villa with Heated Pool Normandy | La Villa Heurtés Vents"
    descFr="Villa avec piscine chauffée privée en Normandie. Balnéothérapie, jardin clos 1700m², 4 chambres. Hardencourt-Cocherel, Eure. À 1h de Paris, 12km de Giverny."
    descEn="Villa with private heated pool in Normandy. Hydrotherapy, 1700m² enclosed garden, 4 bedrooms. Hardencourt-Cocherel, Eure. 1h from Paris, 12km from Giverny."
    keywordsFr="villa avec piscine normandie, villa piscine chauffée normandie, villa piscine privée normandie, location villa piscine normandie, villa piscine normandie paris, villa piscine eure normandie, villa balnéo normandie, villa jacuzzi normandie, villa spa normandie, villa bien-être normandie, location villa piscine chauffée normandie, villa luxe piscine normandie, villa piscine normande, villa détente normandie"
    keywordsEn="villa with heated pool normandy, villa private pool normandy, villa pool rental normandy, villa heated pool normandy paris, villa pool eure normandy, villa hydrotherapy normandy, villa jacuzzi normandy, villa spa normandy, luxury villa pool normandy"
    h1Fr="Villa avec piscine chauffée privée en Normandie"
    h1En="Villa with private heated pool in Normandy"
    subtitleFr="Piscine chauffée, balnéothérapie et jardin privatif — un luxe rare en Normandie"
    subtitleEn="Heated pool, hydrotherapy and private garden — a rare luxury in Normandy"
    image={balneo}
    featuresFr={["Piscine chauffée privée (mai–septembre)", "Balnéothérapie avec jets massants", "Baignade confortable hors saison", "Espace privatif sans vis-à-vis"]}
    featuresEn={["Private heated pool (May–September)", "Hydrotherapy with massage jets", "Comfortable swimming off-season", "Fully private space with no overlooking neighbours"]}
    bodyFr={[
      "La Villa Heurtés Vents propose l'une des rares piscines chauffées privées de Normandie. Profitez de votre bassin exclusif de mai à septembre, dans un espace totalement privatif et sans vis-à-vis. La balnéothérapie avec ses jets massants complète cet espace bien-être unique.",
      "Nichée dans un jardin clos de 1700m² à Hardencourt-Cocherel (Eure 27120), notre villa offre une expérience de détente absolue. Baignade en eaux chauffées le matin, visite des jardins de Giverny dans la journée, balnéothérapie relaxante en soirée — le programme idéal.",
      "À seulement 1h de Paris et 12km de Giverny, La Villa Heurtés Vents est la destination idéale pour un séjour avec piscine en Normandie. Capacité 8 personnes, parfaite pour les familles, les couples et les groupes d'amis."
    ]}
    bodyEn={[
      "La Villa Heurtés Vents offers one of Normandy's rare private heated pools. Enjoy your exclusive pool from May to September, in a completely private space with no overlooking neighbours. The hydrotherapy area with its massage jets completes this unique wellness space.",
      "Nestled in a 1700m² enclosed garden in Hardencourt-Cocherel (Eure 27120), our villa offers an absolutely relaxing experience. Morning swimming in heated waters, daytime visit to Giverny's gardens, evening hydrotherapy — the perfect programme.",
      "Just 1h from Paris and 12km from Giverny, La Villa Heurtés Vents is the ideal destination for a pool stay in Normandy. Capacity 8 people, perfect for families, couples and groups of friends."
    ]}
  />;
}

export function GeoParisMaisonPage() {
  return <GeoPage
    path="/maison-vacances-proche-paris"
    titleFr="Maison de Vacances Proche Paris — 1h | La Villa Heurtés Vents Normandie"
    titleEn="Holiday House Near Paris — 1h | La Villa Heurtés Vents Normandy"
    descFr="Maison de vacances de luxe à 1h de Paris via A13. Villa 150m², piscine chauffée, 4 chambres, jardin 1700m². Hardencourt-Cocherel, Eure, Normandie."
    descEn="Luxury holiday house 1h from Paris via A13. 150m² villa, heated pool, 4 bedrooms, 1700m² garden. Hardencourt-Cocherel, Eure, Normandy."
    keywordsFr="maison vacances proche paris, villa proche paris normandie, location villa 1h paris, villa 80km paris, maison vacances normandie proche paris, location week-end proche paris normandie, escapade paris normandie villa, villa proche paris piscine, week-end normandie depuis paris, maison normandie proximité paris, villa porte auteuil A13 normandie, location normandie parisiens, villa campagne proche paris"
    keywordsEn="holiday house near paris, villa near paris normandy, villa 1h from paris, villa 80km paris, holiday normandy near paris, weekend rental near paris normandy, paris normandy villa getaway, villa near paris pool, normandy weekend from paris"
    h1Fr="Villa de luxe à 1h de Paris — Normandie"
    h1En="Luxury villa 1h from Paris — Normandy"
    subtitleFr="L'escapade parfaite depuis Paris — une villa avec piscine chauffée en pleine Normandie"
    subtitleEn="The perfect getaway from Paris — a villa with heated pool in the heart of Normandy"
    featuresFr={["80km de Paris — 1h via A13", "Sortie 16 Vernon/Giverny depuis Paris", "Idéale pour escapades depuis Paris", "Accès facile Porte d'Auteuil A13", "Proche du centre de Paris en train (Vernon-Paris St-Lazare)"]}
    featuresEn={["80km from Paris — 1h via A13", "Exit 16 Vernon/Giverny from Paris", "Ideal for Paris getaways", "Easy access from Porte d'Auteuil A13", "Close to central Paris by train (Vernon-Paris St-Lazare)"]}
    bodyFr={[
      "Envie d'une vraie coupure sans vous éloigner de Paris ? La Villa Heurtés Vents est à seulement 80 km de la capitale, soit environ 1 heure via l'autoroute A13 (sortie 16 Vernon/Giverny). Pas besoin de prendre l'avion pour vivre un séjour de luxe ressourçant !",
      "Cette magnifique longère normande de 150m² vous accueille dans un cadre authentique et préservé, à Hardencourt-Cocherel dans l'Eure. Piscine chauffée, balnéothérapie, jardin clos de 1700m², 4 chambres pour 8 personnes — tout y est pour décompresser pleinement.",
      "Que ce soit pour un week-end romantique, un séjour en famille ou une semaine de workcation, La Villa Heurtés Vents est votre destination idéale à 1h de Paris. Réservez sur Airbnb ou contactez Pierre directement par WhatsApp."
    ]}
    bodyEn={[
      "Fancy a real break without going far from Paris? La Villa Heurtés Vents is just 80 km from the capital, about 1 hour via the A13 motorway (exit 16 Vernon/Giverny). No need to fly for a luxury, restorative stay!",
      "This magnificent 150m² Norman longhouse welcomes you in an authentic and preserved setting, in Hardencourt-Cocherel, Eure. Heated pool, hydrotherapy, 1700m² enclosed garden, 4 bedrooms for 8 people — everything for a complete break.",
      "Whether for a romantic weekend, a family stay or a workcation week, La Villa Heurtés Vents is your ideal destination 1h from Paris. Book on Airbnb or contact Pierre directly on WhatsApp."
    ]}
  />;
}

export function GeoWeekendRomantiquePage() {
  return <GeoPage
    path="/weekend-romantique-normandie"
    titleFr="Week-end Romantique Normandie | Villa avec Piscine & Balnéo — La Villa Heurtés Vents"
    titleEn="Romantic Weekend Normandy | Villa with Pool & Spa — La Villa Heurtés Vents"
    descFr="Week-end romantique en Normandie : villa de luxe, suite king size, piscine chauffée, balnéothérapie, Giverny. La Villa Heurtés Vents, Hardencourt-Cocherel, Eure."
    descEn="Romantic weekend in Normandy: luxury villa, king size suite, heated pool, hydrotherapy, Giverny. La Villa Heurtés Vents, Hardencourt-Cocherel, Eure."
    keywordsFr="week-end romantique normandie, séjour romantique normandie, week-end amoureux normandie, villa romantique normandie, week-end couple normandie piscine, séjour couple normandie piscine chauffée, escapade romantique normandie, villa luxe couple normandie, week-end romantique proche paris normandie, séjour balnéo couple normandie, week-end giverny normandie, villa romantique eure normandie, week-end détente couple normandie"
    keywordsEn="romantic weekend normandy, romantic stay normandy, couples weekend normandy, romantic villa normandy, couples weekend normandy pool, couples stay normandy heated pool, romantic getaway normandy, luxury villa couples normandy, romantic weekend near paris normandy"
    h1Fr="Week-end romantique en Normandie"
    h1En="Romantic weekend in Normandy"
    subtitleFr="Suite parentale king size, piscine chauffée privée, balnéothérapie — le cadre idéal pour un séjour en amoureux"
    subtitleEn="King size master suite, private heated pool, hydrotherapy — the ideal setting for a couple's stay"
    image={chambre1}
    featuresFr={["Suite parentale king size exclusive", "Piscine chauffée privée pour 2", "Balnéothérapie relaxante en tête-à-tête", "Jardins de Monet Giverny à 12km", "La Maison Pacel — restaurant gastronomique à 6km", "Brasserie Le Saint-Lazare Pacy à 6km"]}
    featuresEn={["Exclusive king size master suite", "Private heated pool for 2", "Relaxing hydrotherapy for two", "Monet Gardens Giverny 12km", "La Maison Pacel — gourmet restaurant 6km", "Brasserie Le Saint-Lazare Pacy 6km"]}
    bodyFr={[
      "La Villa Heurtés Vents est le cadre idéal pour un week-end romantique en Normandie. La suite parentale king size, la piscine chauffée et l'espace balnéothérapie créent une atmosphère intime et luxueuse, idéale pour les couples en quête de dépaysement.",
      "Imaginez : balnéothérapie en tête-à-tête dans votre villa privée le soir, visite romantique des jardins impressionnistes de Giverny le lendemain, dîner gastronomique à La Maison Pacel ou à la Brasserie Le Saint-Lazare... Un programme qui restera gravé dans vos mémoires.",
      "Depuis Paris en 1h via l'A13, La Villa Heurtés Vents est accessible facilement pour un week-end ou plus. Son terrain clos, sans vis-à-vis, vous garantit une intimité totale. Réservez maintenant sur Airbnb ou contactez Pierre par WhatsApp."
    ]}
    bodyEn={[
      "La Villa Heurtés Vents is the ideal setting for a romantic weekend in Normandy. The king size master suite, heated pool and hydrotherapy area create an intimate and luxurious atmosphere, perfect for couples seeking a change of scenery.",
      "Imagine: evening hydrotherapy for two in your private villa, a romantic visit to Giverny's impressionist gardens the next day, a gourmet dinner at La Maison Pacel or Brasserie Le Saint-Lazare... A programme you'll never forget.",
      "Just 1h from Paris via the A13, La Villa Heurtés Vents is easily accessible for a weekend or longer. Its private enclosed grounds with no overlooking neighbours guarantee total intimacy. Book now on Airbnb or contact Pierre on WhatsApp."
    ]}
  />;
}

export function GeoVillaLuxePage() {
  return <GeoPage
    path="/villa-luxe-haute-normandie"
    titleFr="Villa de Luxe Haute-Normandie — Piscine, 4 Chambres | La Villa Heurtés Vents"
    titleEn="Luxury Villa Upper Normandy — Pool, 4 Bedrooms | La Villa Heurtés Vents"
    descFr="Villa de luxe en Haute-Normandie : longère normande 150m², piscine chauffée, balnéothérapie, 4 chambres, jardin 1700m². Hardencourt-Cocherel, Eure 27120."
    descEn="Luxury villa in Upper Normandy: 150m² Norman longhouse, heated pool, hydrotherapy, 4 bedrooms, 1700m² garden. Hardencourt-Cocherel, Eure 27120."
    keywordsFr="villa luxe haute-normandie, villa prestige normandie, villa luxe normandie, villa de prestige eure, hébergement luxe normandie, villa premium normandie, gîte luxe haute-normandie, villa haut de gamme normandie, location villa haut de gamme normandie, villa 5 étoiles normandie, villa prestige 8 personnes normandie, villa luxe famille normandie, villa luxe proche paris normandie"
    keywordsEn="luxury villa upper normandy, prestige villa normandy, luxury villa normandy, premium villa eure, luxury accommodation normandy, luxury villa normandy france, 5-star villa normandy, prestige villa 8 people normandy, luxury family villa normandy"
    h1Fr="Villa de luxe en Haute-Normandie"
    h1En="Luxury villa in Upper Normandy"
    subtitleFr="Une expérience de séjour d'exception dans l'une des plus belles régions de France"
    subtitleEn="An exceptional stay experience in one of France's most beautiful regions"
    featuresFr={["Longère normande authentique en pierre", "Architecture traditionnelle haute-normande", "Finitions et équipements de qualité supérieure", "Jardin paysager clos 1700m²", "Suite parentale aux prestations hôtelières", "Cuisine entièrement équipée haut de gamme"]}
    featuresEn={["Authentic stone Norman longhouse", "Traditional Upper Norman architecture", "Superior quality finishes and fittings", "1700m² landscaped enclosed garden", "Hotel-quality master suite", "Fully equipped premium kitchen"]}
    bodyFr={[
      "La Villa Heurtés Vents incarne l'excellence du luxe normand. Cette authentique longère en pierres de pays, entièrement rénovée et équipée aux meilleurs standards, offre une expérience de séjour qui allie le charme de l'architecture normande traditionnelle au confort d'une villa de prestige.",
      "Piscine chauffée privée, espace balnéothérapie, suite parentale king size, jardin clos de 1700m² sans vis-à-vis, fibre optique haut débit — chaque détail a été pensé pour votre confort et votre plaisir. La villa peut accueillir jusqu'à 8 personnes dans un cadre d'exception.",
      "Située en Haute-Normandie, à Hardencourt-Cocherel dans l'Eure, notre villa de luxe est à 1h de Paris, 12km de Giverny et 5km de MacArthurGlen. La destination ultime pour un séjour de prestige en Normandie."
    ]}
    bodyEn={[
      "La Villa Heurtés Vents embodies the excellence of Norman luxury. This authentic local-stone longhouse, fully renovated and equipped to the highest standards, offers a stay experience that combines the charm of traditional Norman architecture with prestige villa comfort.",
      "Private heated pool, hydrotherapy area, king size master suite, 1700m² enclosed garden with no overlooking neighbours, high-speed fibre optic — every detail has been designed for your comfort and pleasure. The villa accommodates up to 8 people in an exceptional setting.",
      "Located in Upper Normandy, in Hardencourt-Cocherel, Eure, our luxury villa is 1h from Paris, 12km from Giverny and 5km from MacArthurGlen. The ultimate destination for a prestige stay in Normandy."
    ]}
  />;
}

export function GeoVernonPage() {
  return <GeoPage
    path="/location-saisonniere-vernon"
    titleFr="Location Saisonnière Vernon — Villa Luxe 8km | La Villa Heurtés Vents"
    titleEn="Seasonal Rental Vernon — Luxury Villa 8km | La Villa Heurtés Vents"
    descFr="Location saisonnière à 8km de Vernon. Villa 150m², piscine chauffée, 4 chambres. Accès gare Vernon SNCF Paris Saint-Lazare. Hardencourt-Cocherel, Eure."
    descEn="Seasonal rental 8km from Vernon. 150m² villa, heated pool, 4 bedrooms. Vernon SNCF station Paris Saint-Lazare access. Hardencourt-Cocherel, Eure."
    keywordsFr="location saisonnière vernon, villa proche vernon normandie, location vernon eure, villa 8km vernon, hébergement vernon normandie, location vacances vernon normandie, villa normandie gare vernon, location villa près de vernon, séjour vernon normandie, villa normandie proche gare, location Vernon Giverny normandie, villa normandie accès vernon"
    keywordsEn="seasonal rental vernon, villa near vernon normandy, rental vernon eure, villa 8km vernon, accommodation vernon normandy, holiday rental vernon normandy, villa normandy vernon station, villa near vernon, stay vernon normandy"
    h1Fr="Location saisonnière — 8km de Vernon"
    h1En="Seasonal rental — 8km from Vernon"
    subtitleFr="La base idéale pour explorer Vernon, ses musées et ses environs en Haute-Normandie"
    subtitleEn="The ideal base to explore Vernon, its museums and surroundings in Upper Normandy"
    featuresFr={["8km de Vernon — ville d'art et d'histoire", "Accès gare Vernon SNCF (Paris St-Lazare ~1h15)", "Musée de Vernon à 8km", "Château de Bizy à Vernon à 8km", "Giverny à 12km — Fondation Monet"]}
    featuresEn={["8km from Vernon — town of art and history", "Vernon SNCF station access (Paris St-Lazare ~1h15)", "Vernon museum 8km", "Château de Bizy in Vernon 8km", "Giverny 12km — Monet Foundation"]}
    bodyFr={[
      "La Villa Heurtés Vents est idéalement positionnée à seulement 8km de Vernon, ville médiévale d'art et d'histoire nichée en bord de Seine. Depuis notre villa de luxe à Hardencourt-Cocherel, Vernon est accessible en moins de 12 minutes en voiture.",
      "La gare de Vernon (SNCF) permet de rejoindre Paris Saint-Lazare en environ 1h15 — pratique pour un séjour alliant detente à la villa et visites culturelles à Paris. La gare est à 8km, facilement accessible en taxi ou VTC.",
      "Profitez de la villa, de sa piscine chauffée et de son jardin privatif le matin, explorez Vernon et ses environs dans la journée — le Château de Bizy, les musées, le vieux Vernon médiéval — et rentrez chaque soir dans votre havre de paix normand."
    ]}
    bodyEn={[
      "La Villa Heurtés Vents is ideally positioned just 8km from Vernon, a medieval town of art and history nestled on the banks of the Seine. From our luxury villa in Hardencourt-Cocherel, Vernon is accessible in under 12 minutes by car.",
      "Vernon station (SNCF) connects to Paris Saint-Lazare in about 1h15 — practical for a stay combining villa relaxation and cultural visits to Paris. The station is 8km away, easily accessible by taxi or private hire.",
      "Enjoy the villa, its heated pool and private garden in the morning, explore Vernon and its surroundings during the day — Château de Bizy, museums, medieval old Vernon — then return each evening to your Norman haven."
    ]}
  />;
}

export function GeoPiscineChauffeePage() {
  return <GeoPage
    path="/location-maison-piscine-chauffee-normandie"
    titleFr="Location Maison Piscine Chauffée Normandie | La Villa Heurtés Vents"
    titleEn="House Rental Heated Pool Normandy | La Villa Heurtés Vents"
    descFr="Location maison avec piscine chauffée en Normandie. Villa 150m², balnéothérapie, 4 chambres, jardin 1700m². Hardencourt-Cocherel, Eure. 1h de Paris, Giverny 12km."
    descEn="House rental with heated pool in Normandy. 150m² villa, hydrotherapy, 4 bedrooms, 1700m² garden. Hardencourt-Cocherel, Eure. 1h from Paris, Giverny 12km."
    keywordsFr="location maison piscine chauffée normandie, maison piscine chauffée normandie, location maison piscine normandie, maison avec piscine chauffée normandie, location piscine chauffée haute-normandie, maison avec piscine eure, location piscine privée normandie, maison normandie piscine privée, location normandie avec piscine, gîte piscine chauffée normandie, villa piscine chauffée normandie eure, location famille piscine normandie"
    keywordsEn="house rental heated pool normandy, house heated pool normandy, house rental pool normandy, house with heated pool normandy, heated pool rental upper normandy, house with pool eure, private pool rental normandy, house normandy private pool, normandy rental with pool"
    h1Fr="Location maison avec piscine chauffée en Normandie"
    h1En="House rental with heated pool in Normandy"
    subtitleFr="Votre maison avec piscine chauffée privée pour des vacances inoubliables en Normandie"
    subtitleEn="Your house with private heated pool for unforgettable holidays in Normandy"
    image={balneo}
    featuresFr={["Piscine chauffée privée accessible mai-sept.", "Filtration et entretien inclus", "Espace balnéothérapie jets massants", "Accès direct piscine depuis jardin clos", "Sécurité piscine — espace privatif"]}
    featuresEn={["Private heated pool accessible May-Sept.", "Filtration and maintenance included", "Hydrotherapy area with massage jets", "Direct pool access from enclosed garden", "Pool safety — private space"]}
    bodyFr={[
      "Vous rêvez d'une location de maison avec piscine chauffée en Normandie ? La Villa Heurtés Vents exauce votre souhait. Notre longère normande de 150m² dispose d'une piscine chauffée privée, accessible de mai à septembre, et d'un espace balnéothérapie pour vous offrir un véritable séjour de bien-être.",
      "La piscine est totalement privative — vous n'aurez pas de vis-à-vis. Elle est accessible directement depuis votre jardin clos de 1700m². L'entretien est assuré pour vous garantir une eau impeccable tout au long de votre séjour.",
      "Avec 4 chambres pouvant accueillir 8 personnes, La Villa Heurtés Vents est parfaite pour les locations en famille ou entre amis. À 1h de Paris et 12km de Giverny, c'est la maison normande avec piscine chauffée que vous cherchez."
    ]}
    bodyEn={[
      "Do you dream of renting a house with a heated pool in Normandy? La Villa Heurtés Vents makes it happen. Our 150m² Norman longhouse has a private heated pool, accessible from May to September, and a hydrotherapy area for a true wellness stay.",
      "The pool is completely private — no overlooking neighbours. It is accessible directly from your 1700m² enclosed garden. Maintenance is provided to guarantee impeccable water throughout your stay.",
      "With 4 bedrooms accommodating 8 people, La Villa Heurtés Vents is perfect for family or friends rentals. 1h from Paris and 12km from Giverny, it's the Norman house with heated pool you've been looking for."
    ]}
  />;
}

export function GeoHardencourtPage() {
  return <GeoPage
    path="/villa-hardencourt-cocherel"
    titleFr="Villa Hardencourt-Cocherel | La Villa Heurtés Vents — Eure 27120 Normandie"
    titleEn="Villa Hardencourt-Cocherel | La Villa Heurtés Vents — Eure 27120 Normandy"
    descFr="La Villa Heurtés Vents à Hardencourt-Cocherel, Eure 27120. Longère normande 150m², piscine chauffée, 4 chambres. Location luxe en Normandie, proche Paris et Giverny."
    descEn="La Villa Heurtés Vents in Hardencourt-Cocherel, Eure 27120. 150m² Norman longhouse, heated pool, 4 bedrooms. Luxury rental in Normandy, near Paris and Giverny."
    keywordsFr="villa hardencourt-cocherel, location hardencourt-cocherel, villa eure 27120 hardencourt, hardencourt-cocherel location, villa normandie hardencourt, séjour hardencourt-cocherel, gîte hardencourt normandie, location vacances hardencourt, villa hardencourt eure, hardencourt-cocherel normandie location, villa 27120 normandie"
    keywordsEn="villa hardencourt-cocherel, rental hardencourt-cocherel, villa eure 27120 hardencourt, villa normandy hardencourt, stay hardencourt-cocherel, gite hardencourt normandy, holiday rental hardencourt, villa hardencourt eure"
    h1Fr="La Villa Heurtés Vents — Hardencourt-Cocherel, Eure"
    h1En="La Villa Heurtés Vents — Hardencourt-Cocherel, Eure"
    subtitleFr="Un village normand authentique, à la croisée de la Normandie et de l'Île-de-France"
    subtitleEn="An authentic Norman village at the crossroads of Normandy and Île-de-France"
    featuresFr={["Village de Hardencourt-Cocherel, Eure 27120", "Commune de la vallée de l'Eure", "Entre Paris (80km) et Rouen (55km)", "Proche Pacy-sur-Eure (6km) et Vernon (8km)", "Coordonnées GPS : 49.1167 N, 1.4833 E"]}
    featuresEn={["Village of Hardencourt-Cocherel, Eure 27120", "Eure valley commune", "Between Paris (80km) and Rouen (55km)", "Near Pacy-sur-Eure (6km) and Vernon (8km)", "GPS coordinates: 49.1167 N, 1.4833 E"]}
    bodyFr={[
      "Hardencourt-Cocherel est un charmant village de la vallée de l'Eure, dans le département de l'Eure (27120) en Haute-Normandie. C'est ici, dans ce cadre authentique et préservé, que se trouve La Villa Heurtés Vents, notre longère normande de 150m² proposée à la location saisonnière.",
      "Le village bénéficie d'une situation géographique idéale : à 6km de Pacy-sur-Eure (commerces, restaurants), 8km de Vernon (gare SNCF, musées), 12km de Giverny (Fondation Claude Monet), et seulement 80km de Paris via l'A13.",
      "À Hardencourt-Cocherel, vous trouverez la tranquillité de la campagne normande et la proximité de tous les services et attractions de la région. La Villa Heurtés Vents vous accueille avec sa piscine chauffée, sa balnéothérapie et son jardin privé de 1700m²."
    ]}
    bodyEn={[
      "Hardencourt-Cocherel is a charming village in the Eure valley, in the Eure department (27120) of Upper Normandy. It is here, in this authentic and preserved setting, that La Villa Heurtés Vents is located — our 150m² Norman longhouse available for seasonal rental.",
      "The village enjoys an ideal geographic position: 6km from Pacy-sur-Eure (shops, restaurants), 8km from Vernon (SNCF station, museums), 12km from Giverny (Claude Monet Foundation), and only 80km from Paris via the A13.",
      "In Hardencourt-Cocherel, you'll find the tranquillity of the Norman countryside and proximity to all the region's services and attractions. La Villa Heurtés Vents welcomes you with its heated pool, hydrotherapy and 1700m² private garden."
    ]}
  />;
}

export function GeoPacyPage() {
  return <GeoPage
    path="/location-villa-pacy-sur-eure"
    titleFr="Location Villa Pacy-sur-Eure — 6km | La Villa Heurtés Vents Normandie"
    titleEn="Villa Rental Pacy-sur-Eure — 6km | La Villa Heurtés Vents Normandy"
    descFr="Location villa à 6km de Pacy-sur-Eure. Villa 150m², piscine chauffée, 4 chambres, jardin privatif. Commerces, restaurants, cave à vin à Pacy. Eure, Normandie."
    descEn="Villa rental 6km from Pacy-sur-Eure. 150m² villa, heated pool, 4 bedrooms, private garden. Shops, restaurants, wine cellar in Pacy. Eure, Normandy."
    keywordsFr="location villa pacy-sur-eure, villa proche pacy-sur-eure, location pacy-sur-eure normandie, villa 6km pacy, hébergement pacy-sur-eure, villa normandie pacy, location eure pacy, villa jouy-sur-eure pacy, villa proche commerces pacy normandie, villa près de pacy eure, séjour pacy-sur-eure normandie, gîte pacy normandie"
    keywordsEn="villa rental pacy-sur-eure, villa near pacy-sur-eure, rental pacy-sur-eure normandy, villa 6km pacy, accommodation pacy-sur-eure, villa normandy pacy, rental eure pacy, villa near shops pacy normandy"
    h1Fr="Villa de luxe à 6km de Pacy-sur-Eure"
    h1En="Luxury villa 6km from Pacy-sur-Eure"
    subtitleFr="Commerces, restaurants et services à 6km — le confort de la proximité sans le bruit de la ville"
    subtitleEn="Shops, restaurants and services 6km away — convenience without the city noise"
    featuresFr={["6km de Pacy-sur-Eure (toutes commodités)", "Carrefour Market Pacy à 6km", "Aldi Pacy-sur-Eure à 6km", "Cave Annexe (vins) Pacy à 6km", "Brasserie Le Saint-Lazare Pacy à 6km", "La Maison Pacel Pacy à 6km", "Les 3 Étangs Jouy-sur-Eure à 8km"]}
    featuresEn={["6km from Pacy-sur-Eure (all amenities)", "Carrefour Market Pacy 6km", "Aldi Pacy-sur-Eure 6km", "Cave Annexe (wine cellar) Pacy 6km", "Brasserie Le Saint-Lazare Pacy 6km", "La Maison Pacel Pacy 6km", "Les 3 Étangs Jouy-sur-Eure 8km"]}
    bodyFr={[
      "Profitez d'une location villa de luxe à seulement 6km de Pacy-sur-Eure. Cette petite ville normande dynamique dispose de tous les commerces nécessaires à votre séjour : Carrefour Market et Aldi pour les courses, Cave Annexe pour vos vins, et d'excellents restaurants dont La Maison Pacel et la Brasserie Le Saint-Lazare.",
      "Depuis La Villa Heurtés Vents, Pacy-sur-Eure est à environ 8 minutes en voiture. Vous pouvez ainsi profiter de la tranquillité absolue de la villa — terrain clos, sans vis-à-vis, piscine chauffée, balnéothérapie — tout en ayant accès à tous les services urbains de Pacy.",
      "Les 3 Étangs de Jouy-sur-Eure (8km) offrent également un espace naturel remarquable pour la baignade et la détente en plein air. La villa et ses environs constituent un équilibre parfait entre confort luxueux et authenticité normande."
    ]}
    bodyEn={[
      "Enjoy a luxury villa rental just 6km from Pacy-sur-Eure. This dynamic little Norman town has all the amenities for your stay: Carrefour Market and Aldi for groceries, Cave Annexe for your wines, and excellent restaurants including La Maison Pacel and Brasserie Le Saint-Lazare.",
      "From La Villa Heurtés Vents, Pacy-sur-Eure is about 8 minutes by car. You can enjoy the absolute tranquillity of the villa — enclosed grounds, no overlooking neighbours, heated pool, hydrotherapy — while having access to all urban services in Pacy.",
      "Les 3 Étangs in Jouy-sur-Eure (8km) also offers a remarkable natural space for outdoor swimming and relaxation. The villa and its surroundings strike a perfect balance between luxury comfort and Norman authenticity."
    ]}
  />;
}
