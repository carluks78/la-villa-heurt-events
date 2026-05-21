import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router";
import { SEOHead, SEO_GEO_BLOCK_FR, SEO_GEO_BLOCK_EN } from "../components/SEOHead";
import { PageHero } from "../components/PageHero";
import { InternalLinks } from "../components/InternalLinks";
import { PageFAQ, FAQItem } from "../components/PageFAQ";
import { useLanguage } from "../context/LanguageContext";
import { CheckCircle, Calendar, Shield, AlertCircle, Star, ArrowRight, Percent, Clock } from "lucide-react";
import heroHome from "../../imports/hero-home.png";

const FAQS: FAQItem[] = [
  {
    qFr: "Quel est le tarif de base pour une nuit ?",
    aFr: "La Villa Heurtés Vents est proposée à partir de 459€ pour 2 nuits (durée minimum de séjour). Le tarif par nuit varie selon la saison, la durée et la disponibilité. Consultez Airbnb pour les tarifs actuels ou contactez Pierre directement.",
    qEn: "What is the base rate per night?",
    aEn: "La Villa Heurtés Vents is available from €459 for 2 nights (minimum stay). The nightly rate varies by season, duration and availability. Check Airbnb for current rates or contact Pierre directly.",
  },
  {
    qFr: "Y a-t-il une réduction pour une semaine complète ?",
    aFr: "Oui ! Pour un séjour d'une semaine complète (7 nuits), bénéficiez d'une réduction de 10% sur le tarif de base. C'est l'idéal pour des vacances en famille ou entre amis avec le temps de profiter de toutes les activités de la région.",
    qEn: "Is there a discount for a full week?",
    aEn: "Yes! For a full week's stay (7 nights), enjoy a 10% discount on the base rate. This is ideal for family or friends holidays with time to enjoy all the region's activities.",
  },
  {
    qFr: "Quelle est la politique d'annulation ?",
    aFr: "La réservation à La Villa Heurtés Vents est ferme et définitive. En cas d'annulation de votre part, le montant payé ne sera pas remboursé. Nous vous recommandons de souscrire une assurance voyage pour vous protéger en cas d'imprévu.",
    qEn: "What is the cancellation policy?",
    aEn: "Bookings at La Villa Heurtés Vents are firm and final. In the event of cancellation, the amount paid will not be refunded. We recommend taking out travel insurance to protect yourself against unforeseen events.",
  },
  {
    qFr: "Quelle est la durée minimum de séjour ?",
    aFr: "La durée minimum est de 2 nuits pour tous les séjours. Pour certaines périodes de haute saison (été, Noël, Pâques), une durée minimum de 5 à 7 nuits peut être requise. Contactez Pierre pour connaître les conditions exactes.",
    qEn: "What is the minimum stay?",
    aEn: "The minimum stay is 2 nights for all bookings. During some high-season periods (summer, Christmas, Easter), a minimum of 5 to 7 nights may be required. Contact Pierre for exact conditions.",
  },
  {
    qFr: "Les charges sont-elles incluses dans le tarif ?",
    aFr: "Oui, toutes les charges courantes (eau, électricité, chauffage, internet fibre) sont incluses dans le tarif. La taxe de séjour peut s'appliquer selon la réglementation locale.",
    qEn: "Are utilities included in the rate?",
    aEn: "Yes, all running costs (water, electricity, heating, fibre internet) are included in the rate. Tourist tax may apply according to local regulations.",
  },
];

function PricingCard({ icon: Icon, title, price, detail, badge, highlight = false }: {
  icon: React.ElementType; title: string; price: string; detail: string; badge?: string; highlight?: boolean;
}) {
  return (
    <div style={{
      background: highlight ? "linear-gradient(135deg, rgba(201,169,110,0.12) 0%, rgba(201,169,110,0.05) 100%)" : "rgba(255,255,255,0.03)",
      border: `1px solid ${highlight ? "rgba(201,169,110,0.4)" : "rgba(201,169,110,0.12)"}`,
      borderRadius: "18px", padding: "32px 28px", textAlign: "center", position: "relative",
    }}>
      {badge && (
        <div style={{ position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg, #C9A96E, #E8C98A)", color: "#0A0A0F", padding: "4px 16px", borderRadius: "100px", fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", whiteSpace: "nowrap" }}>
          {badge}
        </div>
      )}
      <div style={{ width: "52px", height: "52px", borderRadius: "13px", background: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
        <Icon size={22} color="#C9A96E" />
      </div>
      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "2px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: "10px" }}>{title}</p>
      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "38px", fontWeight: 700, color: "#C9A96E", lineHeight: 1, marginBottom: "8px" }}>{price}</p>
      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{detail}</p>
    </div>
  );
}

function TarifContent() {
  const { lang } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const included_fr = [
    "Eau, électricité, chauffage et fibre optique inclus",
    "Linge de lit (draps, housses, oreillers) fourni",
    "Serviettes de bain fournies",
    "Accès piscine chauffée (mai–septembre)",
    "Accès balnéothérapie",
    "Parking privé sécurisé",
    "Barbecue à disposition",
    "Machine à café, lave-linge, fer à repasser",
    "TV + Netflix / Prime Video dans chaque pièce",
    "Shampoing, gel douche, papier toilette fournis",
  ];
  const included_en = [
    "Water, electricity, heating and fibre optic included",
    "Bed linen (sheets, covers, pillows) provided",
    "Bath towels provided",
    "Heated pool access (May–September)",
    "Hydrotherapy access",
    "Private secure parking",
    "Barbecue available",
    "Coffee machine, washing machine, iron",
    "TV + Netflix / Prime Video in every room",
    "Shampoo, shower gel, toilet paper provided",
  ];
  const included = lang === "fr" ? included_fr : included_en;

  return (
    <section ref={ref} style={{ background: "#0A0A0F", padding: "72px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>

        {/* Pricing cards */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "64px" }}>
          <PricingCard
            icon={Calendar}
            title={lang === "fr" ? "Tarif standard" : "Standard rate"}
            price="459€"
            detail={lang === "fr" ? "2 nuits minimum · jusqu'à 8 pers." : "2 nights minimum · up to 8 people"}
            badge={lang === "fr" ? "Séjour minimum" : "Minimum stay"}
          />
          <PricingCard
            icon={Percent}
            title={lang === "fr" ? "Réduction semaine" : "Weekly discount"}
            price="-10%"
            detail={lang === "fr" ? "7 nuits · tarif préférentiel" : "7 nights · preferential rate"}
            highlight
            badge={lang === "fr" ? "Populaire" : "Popular"}
          />
          <PricingCard
            icon={Star}
            title={lang === "fr" ? "Réduction mensuelle" : "Monthly discount"}
            price="-30%"
            detail={lang === "fr" ? "30 nuits · meilleur tarif" : "30 nights · best value"}
          />
        </motion.div>

        {/* Main 2-col layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "56px", alignItems: "start", marginBottom: "64px" }} className="tarif-grid">

          {/* Left: rich text */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.8 }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "3px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "14px" }}>
              {lang === "fr" ? "Nos tarifs" : "Our rates"}
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: "24px" }}>
              {lang === "fr" ? "Une villa de prestige, des tarifs transparents" : "A prestige villa, transparent pricing"}
            </h2>

            {lang === "fr" ? (
              <>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: "18px" }}>
                  La Villa Heurtés Vents vous propose une expérience de séjour d'exception en Haute-Normandie, à seulement 1h de Paris et 12km des jardins impressionnistes de Giverny. Notre longère normande de 150m², avec piscine chauffée, balnéothérapie et jardin privatif de 1700m², est disponible à partir de <strong style={{ color: "#C9A96E" }}>459€ pour 2 nuits</strong> (durée minimum de séjour).
                </p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: "18px" }}>
                  Pour les séjours d'une semaine, profitez d'une <strong style={{ color: "#C9A96E" }}>réduction de 10%</strong> sur le tarif de base — idéal pour des vacances en famille ou entre amis avec le temps d'explorer la région : Giverny, Vernon, MacArthurGlen Paris-Giverny, Les 3 Étangs de Jouy-sur-Eure. Les séjours au mois bénéficient d'une <strong style={{ color: "#C9A96E" }}>réduction de 30%</strong>, parfaite pour une workcation en Normandie.
                </p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: "28px" }}>
                  Tous nos tarifs incluent les charges (eau, électricité, chauffage, fibre optique), le linge de lit, les serviettes, l'accès à la piscine chauffée et à la balnéothérapie, ainsi qu'un équipement complet : machine à café, lave-linge, fer à repasser, TV avec Netflix et Prime Video dans chaque chambre, shampoing, gel douche et papier toilette fournis.
                </p>
              </>
            ) : (
              <>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: "18px" }}>
                  La Villa Heurtés Vents offers an exceptional stay in Upper Normandy, just 1h from Paris and 12km from Giverny's impressionist gardens. Our 150m² Norman longhouse, with heated pool, hydrotherapy and 1700m² private garden, is available from <strong style={{ color: "#C9A96E" }}>€459 for 2 nights</strong> (minimum stay).
                </p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: "18px" }}>
                  For week-long stays, enjoy a <strong style={{ color: "#C9A96E" }}>10% discount</strong> on the base rate — ideal for family or friends holidays with time to explore the region: Giverny, Vernon, MacArthurGlen Paris-Giverny, Les 3 Étangs in Jouy-sur-Eure. Monthly stays benefit from a <strong style={{ color: "#C9A96E" }}>30% discount</strong>, perfect for a Normandy workcation.
                </p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: "28px" }}>
                  All our rates include utilities (water, electricity, heating, fibre optic), bed linen, towels, access to the heated pool and hydrotherapy, plus full equipment: coffee machine, washing machine, iron, TV with Netflix and Prime Video in every room, shampoo, shower gel and toilet paper provided.
                </p>
              </>
            )}

            {/* Stars */}
            <div style={{ display: "flex", gap: "4px", marginBottom: "28px" }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#C9A96E" color="#C9A96E" />)}
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.45)", marginLeft: "8px", alignSelf: "center" }}>
                {lang === "fr" ? "Villa 5 étoiles — Airbnb" : "5-star villa — Airbnb"}
              </span>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://www.airbnb.com/slink/04z2yC75" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #1a45c8, #3b6ef0)", color: "#fff", padding: "15px 28px", borderRadius: "6px", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700, boxShadow: "0 8px 24px rgba(26,69,200,0.35)" }}>
                {lang === "fr" ? "Réserver sur Airbnb" : "Book on Airbnb"} <ArrowRight size={14} />
              </a>
              <a href={`https://wa.me/33601414173?text=${encodeURIComponent(lang === "fr" ? "Bonjour Pierre, je souhaite un devis pour La Villa Heurtés Vents." : "Hello Pierre, I'd like a quote for La Villa Heurtés Vents.")}`}
                target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)", color: "#25D366", padding: "15px 28px", borderRadius: "6px", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "1px" }}>
                WhatsApp Pierre
              </a>
            </div>
          </motion.div>

          {/* Right: included + cancellation */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3, duration: 0.8 }}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* What's included */}
            <div style={{ background: "rgba(201,169,110,0.05)", border: "1px solid rgba(201,169,110,0.2)", borderRadius: "16px", padding: "28px" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "3px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "18px" }}>
                {lang === "fr" ? "Tout est inclus" : "All included"}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                {included.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "9px", alignItems: "flex-start" }}>
                    <CheckCircle size={14} color="#22c55e" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cancellation */}
            <div style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "16px", padding: "24px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "12px" }}>
                <AlertCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: "1px" }} />
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 700, color: "#ef4444", textTransform: "uppercase", letterSpacing: "1px" }}>
                  {lang === "fr" ? "Politique d'annulation" : "Cancellation policy"}
                </p>
              </div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>
                {lang === "fr"
                  ? "Toute réservation est ferme et définitive. En cas d'annulation, aucun remboursement ne sera effectué. Nous vous recommandons de souscrire une assurance annulation pour vous protéger contre tout imprévu."
                  : "All bookings are firm and final. In the event of cancellation, no refund will be made. We recommend taking out cancellation insurance to protect against unforeseen events."}
              </p>
            </div>

            {/* Check-in/out */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,169,110,0.12)", borderRadius: "16px", padding: "24px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "14px" }}>
                <Clock size={16} color="#C9A96E" />
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "3px", color: "#C9A96E", textTransform: "uppercase" }}>
                  {lang === "fr" ? "Horaires" : "Timings"}
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: "#fff", lineHeight: 1 }}>12h00</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "6px" }}>{lang === "fr" ? "Arrivée" : "Check-in"}</p>
                </div>
                <div style={{ width: "1px", background: "rgba(201,169,110,0.15)" }} />
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: "#fff", lineHeight: 1 }}>13h00</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "6px" }}>{lang === "fr" ? "Départ" : "Check-out"}</p>
                </div>
              </div>
            </div>

            {/* Guarantee badges */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {[
                { icon: Shield, label: lang === "fr" ? "Paiement sécurisé" : "Secure payment" },
                { icon: Clock, label: lang === "fr" ? "Réponse < 1h" : "Response < 1h" },
              ].map((g, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", alignItems: "center", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,169,110,0.12)", borderRadius: "10px", padding: "10px 14px" }}>
                  <g.icon size={14} color="#C9A96E" />
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.6)" }}>{g.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SEO text section — visible for Google */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.7 }}
          style={{ borderTop: "1px solid rgba(201,169,110,0.1)", paddingTop: "48px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "3px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "16px" }}>
            {lang === "fr" ? "Informations pratiques — Location villa Normandie" : "Practical information — Villa rental Normandy"}
          </p>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.3)", lineHeight: 1.8, maxWidth: "900px" }}>
            {lang === "fr"
              ? "La Villa Heurtés Vents — location villa luxe Normandie, Hardencourt-Cocherel, Eure 27120. Villa piscine chauffée balnéothérapie Normandie. Longère normande 150m2 4 chambres 8 personnes. Proche Giverny Fondation Monet 12km. MacArthurGlen 5km. Vernon 8km. Pacy-sur-Eure 6km. Paris 1h A13. Tarifs villa normandie : à partir de 459€ 2 nuits. Réduction semaine -10%. Réduction mensuelle -30%. Réservation sans annulation. Location vacances Eure Haute-Normandie. Gîte luxe Normandie. Villa saisonnière Hardencourt. Maison vacances proche Paris. Week-end romantique Normandie piscine. Séjour famille 8 personnes Normandie. Villa fibre optique télétravail. Pierre Jacques propriétaire +33601414173. Barbecue, machine à café, lave-linge, TV Netflix chaque chambre, serviettes bain fournies."
              : "La Villa Heurtés Vents — luxury villa rental Normandy, Hardencourt-Cocherel, Eure 27120. Villa heated pool hydrotherapy Normandy. 150m2 Norman longhouse 4 bedrooms 8 people. Near Giverny Monet Foundation 12km. MacArthurGlen 5km. Vernon 8km. Pacy-sur-Eure 6km. Paris 1h A13. Villa Normandy rates: from €459 2 nights. Weekly discount -10%. Monthly discount -30%. Non-refundable booking. Holiday rental Eure Upper Normandy. Luxury gite Normandy. Seasonal villa Hardencourt. Holiday house near Paris. Romantic weekend Normandy pool. Family stay 8 people Normandy. Fibre optic remote work villa. Pierre Jacques owner +33601414173. Barbecue, coffee machine, washing machine, TV Netflix every room, bath towels provided."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function TarifPage() {
  const { lang } = useLanguage();
  return (
    <>
      <SEOHead
        title={lang === "fr" ? "Tarifs & Réservation — À partir de 459€ | La Villa Heurtés Vents" : "Rates & Booking — From €459 | La Villa Heurtés Vents"}
        description={lang === "fr" ? "Tarifs La Villa Heurtés Vents : à partir de 459€ pour 2 nuits. Réduction -10% à la semaine, -30% au mois. Réservation sans annulation. Villa luxe piscine chauffée Normandie." : "La Villa Heurtés Vents rates: from €459 for 2 nights. -10% weekly discount, -30% monthly discount. Non-refundable booking. Luxury villa heated pool Normandy."}
        path="/tarifs"
        keywords="tarifs villa normandie, prix villa heurtés vents, tarif location villa normandie, à partir de 459€ villa normandie, réduction semaine villa normandie, réduction mensuelle villa normandie, tarif piscine chauffée normandie, réservation villa normandie, prix location villa piscine normandie, tarif villa 8 personnes normandie, politique annulation villa normandie, tarif villa giverny, tarif villa eure 27120, prix villa haute-normandie, booking villa normandie tarif, tarif location saisonnière normandie, villa normandie pas annulation remboursement"
      />
      <div style={{ paddingTop: "60px" }}>
        <PageHero
          title={lang === "fr" ? "Tarifs" : "Rates"}
          titleAccent={lang === "fr" ? "& Réservation" : "& Booking"}
          subtitle={lang === "fr" ? "À partir de 459€ pour 2 nuits — réduction -10% à la semaine, -30% au mois. Tout inclus : piscine, linge, équipements." : "From €459 for 2 nights — -10% weekly, -30% monthly discount. All inclusive: pool, linen, equipment."}
          image={heroHome}
          breadcrumb={[{ label: lang === "fr" ? "Accueil" : "Home", to: "/" }]}
          currentPage={lang === "fr" ? "Tarifs" : "Rates"}
        />
        <TarifContent />
        <PageFAQ items={FAQS} titleFr="Questions sur les tarifs" titleEn="Rate questions" />
        <InternalLinks exclude="/tarifs" />
        <div style={{ padding: "16px 32px", maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.2)", lineHeight: 1.7 }}>
            {lang === "fr" ? SEO_GEO_BLOCK_FR : SEO_GEO_BLOCK_EN}
          </p>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .tarif-grid { grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}
