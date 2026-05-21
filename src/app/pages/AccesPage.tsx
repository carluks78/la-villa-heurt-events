import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { SEOHead, SEO_GEO_BLOCK_FR, SEO_GEO_BLOCK_EN } from "../components/SEOHead";
import { PageHero } from "../components/PageHero";
import { InternalLinks } from "../components/InternalLinks";
import { PageFAQ, FAQItem } from "../components/PageFAQ";
import { useLanguage } from "../context/LanguageContext";
import { MapPin, Car, Train, Clock, Navigation, Phone } from "lucide-react";
import heroHome from "../../imports/hero-home.png";

const FAQS: FAQItem[] = [
  { qFr: "Quelle est l'adresse exacte de la villa ?", aFr: "La villa est à Hardencourt-Cocherel, Eure 27120, Normandie. Pierre vous communiquera l'adresse et les coordonnées GPS précises à la confirmation de réservation.", qEn: "What is the exact address?", aEn: "The villa is at Hardencourt-Cocherel, Eure 27120, Normandy. Pierre will provide the exact address and GPS coordinates upon booking confirmation." },
  { qFr: "Y a-t-il une gare à proximité ?", aFr: "La gare de Vernon (SNCF) est à 8 km. Liaisons régulières depuis Paris Saint-Lazare (~1h15). Pierre peut orienter sur les options de taxi depuis la gare.", qEn: "Is there a train station nearby?", aEn: "Vernon station (SNCF) is 8 km away. Regular connections from Paris Saint-Lazare (~1h15). Pierre can advise on taxi options from the station." },
  { qFr: "Peut-on venir sans voiture ?", aFr: "La villa est principalement accessible en voiture. Depuis la gare de Vernon, un taxi ou VTC est nécessaire (8 km). Nous recommandons la voiture pour profiter des activités locales dispersées.", qEn: "Can we get there without a car?", aEn: "The villa is primarily accessible by car. From Vernon station, a taxi or private hire is needed (8 km). We recommend a car to enjoy the spread-out local activities." },
  { qFr: "Y a-t-il un parking disponible ?", aFr: "Oui ! Parking privé sécurisé sur le terrain clos de 1700m². Vous pouvez garer votre véhicule en toute tranquillité pendant tout votre séjour.", qEn: "Is there parking?", aEn: "Yes! Private secure parking on the 1700m² enclosed grounds. You can park your vehicle in complete peace throughout your stay." },
  { qFr: "Quelle sortie d'autoroute prendre ?", aFr: "Depuis Paris A13, sortie 16 Vernon/Giverny, puis N15 direction Pacy-sur-Eure, suivre Hardencourt-Cocherel. Pierre enverra le GPS précis à la réservation.", qEn: "Which motorway exit?", aEn: "From Paris A13, exit 16 Vernon/Giverny, then N15 towards Pacy-sur-Eure, follow Hardencourt-Cocherel. Pierre will send precise GPS on booking." },
];

const DISTANCES = [
  { fr: "Paris (A13)", en: "Paris (A13)", dist: "80 km", time: "1h", icon: "🚗" },
  { fr: "Paris CDG (Aéroport)", en: "Paris CDG (Airport)", dist: "105 km", time: "1h20", icon: "✈️" },
  { fr: "Gare de Vernon", en: "Vernon Station", dist: "8 km", time: "12 min", icon: "🚂" },
  { fr: "Giverny", en: "Giverny", dist: "12 km", time: "15 min", icon: "🌸" },
  { fr: "Pacy-sur-Eure", en: "Pacy-sur-Eure", dist: "6 km", time: "8 min", icon: "🏘️" },
  { fr: "MacArthurGlen Douains", en: "MacArthurGlen Douains", dist: "5 km", time: "7 min", icon: "🛍️" },
  { fr: "Rouen", en: "Rouen", dist: "55 km", time: "50 min", icon: "🏰" },
  { fr: "Deauville", en: "Deauville", dist: "90 km", time: "1h15", icon: "🌊" },
  { fr: "Évreux", en: "Évreux", dist: "35 km", time: "35 min", icon: "🏙️" },
  { fr: "Versailles", en: "Versailles", dist: "85 km", time: "1h10", icon: "👑" },
];

function DirectionsContent() {
  const { lang } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const carSteps = lang === "fr"
    ? ["Depuis Paris (Porte d'Auteuil), prenez l'A13 direction Rouen/Caen", "Sortie 16 : Vernon / Giverny", "Prenez la N15 direction Pacy-sur-Eure", "Suivez les directions Hardencourt-Cocherel", "Pierre vous enverra les coordonnées GPS précises"]
    : ["From Paris (Porte d'Auteuil), take the A13 towards Rouen/Caen", "Exit 16: Vernon / Giverny", "Take the N15 towards Pacy-sur-Eure", "Follow signs to Hardencourt-Cocherel", "Pierre will send you the precise GPS coordinates"];

  const trainSteps = lang === "fr"
    ? ["Paris Saint-Lazare → Gare de Vernon (SNCF, ~1h15)", "Taxi ou VTC depuis la gare de Vernon (8 km, ~15 min)", "Pierre peut organiser votre transfert sur demande"]
    : ["Paris Saint-Lazare → Vernon Station (SNCF, ~1h15)", "Taxi or private hire from Vernon station (8 km, ~15 min)", "Pierre can organise your transfer on request"];

  return (
    <section ref={ref} style={{ background: "#0A0A0F", padding: "72px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", marginBottom: "64px" }}>
          {/* By car */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "22px" }}>
              <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(26,69,200,0.12)", border: "1px solid rgba(26,69,200,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Car size={18} color="#C9A96E" />
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600, color: "#fff" }}>
                {lang === "fr" ? "En voiture" : "By car"}
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {carSteps.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "rgba(201,169,110,0.12)", border: "1px solid rgba(201,169,110,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: "#C9A96E" }}>{i + 1}</span>
                  </div>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{s}</span>
                </div>
              ))}
            </div>
            <a href="https://maps.google.com/?q=Hardencourt-Cocherel+27120" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "7px", marginTop: "18px", background: "rgba(26,69,200,0.12)", border: "1px solid rgba(26,69,200,0.25)", color: "#fff", padding: "9px 18px", borderRadius: "7px", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "1px" }}>
              <Navigation size={13} /> Google Maps
            </a>
          </motion.div>

          {/* By train */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.8 }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "22px" }}>
              <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(26,69,200,0.12)", border: "1px solid rgba(26,69,200,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Train size={18} color="#C9A96E" />
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600, color: "#fff" }}>
                {lang === "fr" ? "En train + taxi" : "By train + taxi"}
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {trainSteps.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "rgba(201,169,110,0.12)", border: "1px solid rgba(201,169,110,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: "#C9A96E" }}>{i + 1}</span>
                  </div>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{s}</span>
                </div>
              ))}
            </div>
            <a href={`https://wa.me/33601414173?text=${encodeURIComponent("Bonjour Pierre, je souhaite organiser mon transfert depuis la gare de Vernon.")}`}
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "7px", marginTop: "18px", background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.2)", color: "#25D366", padding: "9px 18px", borderRadius: "7px", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600 }}>
              <Phone size={13} /> {lang === "fr" ? "Organiser le transfert" : "Arrange transfer"}
            </a>
          </motion.div>
        </div>

        {/* Distances */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.7 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 600, color: "#fff", textAlign: "center", marginBottom: "28px" }}>
            {lang === "fr" ? "Distances depuis la villa" : "Distances from the villa"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" }}>
            {DISTANCES.map((d, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "center", padding: "14px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,169,110,0.1)", borderRadius: "9px" }}>
                <span style={{ fontSize: "18px" }}>{d.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 600, color: "#fff" }}>{lang === "fr" ? d.fr : d.en}</div>
                  <div style={{ display: "flex", gap: "8px", marginTop: "3px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "3px", fontFamily: "'Montserrat', sans-serif", fontSize: "11px" }}>
                      <MapPin size={9} color="#C9A96E" /> <span style={{ color: "#C9A96E", fontWeight: 600 }}>{d.dist}</span>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "3px", fontFamily: "'Montserrat', sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.4)" }}>
                      <Clock size={9} /> {d.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* GPS card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.6 }}
          style={{ marginTop: "40px", background: "rgba(201,169,110,0.05)", border: "1px solid rgba(201,169,110,0.18)", borderRadius: "14px", padding: "28px", textAlign: "center" }}>
          <MapPin size={26} color="#C9A96E" style={{ margin: "0 auto 10px", display: "block" }} />
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>Hardencourt-Cocherel, Eure 27120</h3>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "18px" }}>
            {lang === "fr" ? "GPS : 49.1167 N, 1.4833 E — Pierre vous enverra les coordonnées exactes à la confirmation" : "GPS: 49.1167 N, 1.4833 E — Pierre will send exact coordinates upon confirmation"}
          </p>
          <a href="https://maps.google.com/?q=Hardencourt-Cocherel+27120" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(26,69,200,0.18)", border: "1px solid rgba(26,69,200,0.3)", color: "#fff", padding: "11px 24px", borderRadius: "7px", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "1px" }}>
            <Navigation size={14} /> {lang === "fr" ? "Ouvrir dans Google Maps" : "Open in Google Maps"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function AccesPage() {
  const { lang } = useLanguage();
  return (
    <>
      <SEOHead
        title={lang === "fr" ? "Accès & Localisation — 1h de Paris | La Villa Heurtés Vents" : "Directions & Location — 1h from Paris | La Villa Heurtés Vents"}
        description={lang === "fr" ? "La Villa Heurtés Vents à Hardencourt-Cocherel, Eure. À 1h de Paris via l'A13 (sortie Vernon), 12km de Giverny. Voiture recommandée." : "La Villa Heurtés Vents in Hardencourt-Cocherel, Eure. 1h from Paris via A13 (Vernon exit), 12km from Giverny. Car recommended."}
        path="/acces"
        keywords="accès villa normandie, localisation villa normandie, villa 1h de paris, villa A13 normandie, villa sortie vernon A13, villa hardencourt-cocherel localisation, comment aller villa normandie, villa eure GPS, GPS villa normandie 49.1167 1.4833, trajet paris villa normandie, itinéraire villa normandie, gare Vernon villa, taxi gare Vernon normandie, voiture villa normandie, transports villa normandie, distances villa normandie, villa 80km paris, villa 12km giverny, villa 8km vernon, villa 5km macarthurglen, villa 6km pacy-sur-eure, villa normandie comment venir, parking privé villa normandie, villa normandie proche autoroute, villa normandie accès facile"
      />
      <div style={{ paddingTop: "60px" }}>
        <PageHero
          title={lang === "fr" ? "Accès" : "Directions"}
          titleAccent={lang === "fr" ? "& Localisation" : "& Location"}
          subtitle={lang === "fr" ? "À 1h de Paris via l'A13, proche de Giverny et Vernon. Voiture recommandée pour profiter pleinement de la région." : "1h from Paris via the A13, close to Giverny and Vernon. Car recommended to fully enjoy the region."}
          image={heroHome}
          breadcrumb={[{ label: lang === "fr" ? "Accueil" : "Home", to: "/" }]}
          currentPage={lang === "fr" ? "Accès" : "Directions"}
        />
        <DirectionsContent />
        <PageFAQ items={FAQS} titleFr="Questions sur l'accès" titleEn="Access questions" />
        <InternalLinks exclude="/acces" />
        <div style={{ display: "none" }} aria-hidden="true">{lang === "fr" ? SEO_GEO_BLOCK_FR : SEO_GEO_BLOCK_EN}</div>
      </div>
    </>
  );
}
