import { useRef } from "react";
import { motion, useInView } from "motion/react";

import { SEOHead, SEO_GEO_BLOCK_FR, SEO_GEO_BLOCK_EN } from "../components/SEOHead";
import { PageHero } from "../components/PageHero";
import { InternalLinks } from "../components/InternalLinks";
import { useLanguage } from "../context/LanguageContext";
import { CheckCircle, XCircle, Phone, Bed, Flame, Waves, Trash2, Volume2, Key, Baby, Car, Coffee, Tv } from "lucide-react";
import heroHome from "../../imports/hero-home.png";

const WA_URL = `https://wa.me/33601414173?text=${encodeURIComponent("Bonjour Pierre, j'ai une question concernant mon séjour à La Villa Heurtés Vents.")}`;

interface Rule { icon: React.ElementType; titleFr: string; titleEn: string; ok?: string[]; okEn?: string[]; no?: string[]; noEn?: string[]; }

const RULES: Rule[] = [
  {
    icon: Flame,
    titleFr: "Tabac & Fumée",
    titleEn: "Smoking",
    no: ["Interdiction absolue de fumer à l'intérieur de la villa", "Pas de cigarettes dans les chambres ou les pièces de vie", "Pas de vapotage à l'intérieur"],
    noEn: ["Strictly no smoking inside the villa", "No cigarettes in bedrooms or living areas", "No vaping indoors"],
    ok: ["Fumeurs acceptés à l'extérieur, dans le jardin uniquement"],
    okEn: ["Smokers welcome outside, in the garden only"],
  },
  {
    icon: Bed,
    titleFr: "Draps & Literie",
    titleEn: "Bedding & Linen",
    ok: ["Les draps, housses de couette et housses d'oreillers sont fournis", "Les serviettes de bain sont incluses pour tous les séjours", "Lit parapluie disponible sur demande préalable"],
    okEn: ["Sheets, duvet covers and pillowcases are provided", "Bath towels are included for all stays", "Travel cot available on prior request"],
    no: ["Au départ : retirer draps et housses d'oreillers et les déposer au pied de chaque lit", "Ne pas emporter le linge de maison"],
    noEn: ["On departure: remove sheets and pillowcases and place at the foot of each bed", "Do not take household linen"],
  },
  {
    icon: Waves,
    titleFr: "Piscine & Balnéothérapie",
    titleEn: "Pool & Hydrotherapy",
    ok: ["Piscine chauffée disponible de mai à septembre", "Accès libre pour les résidents de la villa", "Barbecue à disposition dans le jardin"],
    okEn: ["Heated pool available May to September", "Free access for villa residents", "Barbecue available in the garden"],
    no: [
      "Surveillance des enfants obligatoire à tout moment",
      "Pas de verre (en verre) au bord de la piscine — utiliser plastique ou métal",
      "Pas de plongeons acrobatiques",
      "Douche obligatoire avant d'entrer dans la piscine",
      "Remettre la bâche de protection sur la piscine après chaque utilisation",
    ],
    noEn: [
      "Children must be supervised at all times",
      "No glass near the pool — use plastic or metal",
      "No acrobatic diving",
      "Shower required before entering the pool",
      "Replace the pool cover after each use",
    ],
  },
  {
    icon: Volume2,
    titleFr: "Bruit & Voisinage",
    titleEn: "Noise & Neighbours",
    ok: ["Ambiance festive bienvenue jusqu'à minuit", "Musique d'ambiance en soirée tolérée"],
    okEn: ["Festive atmosphere welcome until midnight", "Background music tolerated in the evening"],
    no: ["Silence respectueux après minuit", "Pas de musique forte après 22h", "Respect du voisinage à tout moment"],
    noEn: ["Respectful silence after midnight", "No loud music after 10pm", "Respect neighbours at all times"],
  },
  {
    icon: Car,
    titleFr: "Stationnement & Accès",
    titleEn: "Parking & Access",
    ok: ["Parking privé sécurisé sur le terrain clos", "Accès depuis l'allée privée de la villa"],
    okEn: ["Private secure parking on the enclosed grounds", "Access via the villa's private driveway"],
    no: ["Les véhicules doivent être garés uniquement dans l'allée désignée — ne pas garer sur la pelouse ou en dehors de l'espace prévu", "Ne pas bloquer l'accès à la propriété"],
    noEn: ["Vehicles must be parked only in the designated driveway — do not park on the lawn or outside the designated area", "Do not block access to the property"],
  },
  {
    icon: Trash2,
    titleFr: "Ménage & Départs",
    titleEn: "Cleaning & Departure",
    ok: ["Vaisselle propre rangée avant le départ", "Poubelles vidées dans les conteneurs appropriés", "Départ avant 13h00"],
    okEn: ["Clean dishes put away before departure", "Bins emptied in appropriate containers", "Departure before 1:00 PM"],
    no: ["La villa doit être rendue dans un état correct", "Signaler tout dégât ou casse à Pierre", "Pas de nourriture laissée dans les placards"],
    noEn: ["The villa must be returned in a reasonable condition", "Report any damage or breakage to Pierre", "No food left in cupboards"],
  },
  {
    icon: Key,
    titleFr: "Clés & Sécurité",
    titleEn: "Keys & Security",
    ok: ["Pierre vous remettra les clés à votre arrivée", "Arrivée possible à partir de 12h00 (midi)", "Pierre disponible en cas d'urgence 24h/24"],
    okEn: ["Pierre will hand you the keys on arrival", "Check-in from 12:00 noon", "Pierre available for emergencies 24/7"],
    no: ["Ne pas reproduire les clés", "Fermer à clé en cas d'absence", "Remettre toutes les clés au départ"],
    noEn: ["Do not copy the keys", "Lock up when leaving", "Return all keys on departure"],
  },
  {
    icon: Baby,
    titleFr: "Enfants & Familles",
    titleEn: "Children & Families",
    ok: ["Les familles avec enfants sont les bienvenues", "Lit parapluie disponible sur demande préalable", "Jardin clos et sécurisé pour jouer"],
    okEn: ["Families with children are welcome", "Travel cot available on prior request", "Enclosed and secure garden for playing"],
    no: ["Surveillance des enfants requise en permanence", "Pas d'enfants seuls au bord de la piscine"],
    noEn: ["Children must be supervised at all times", "No children alone by the pool"],
  },
  {
    icon: Coffee,
    titleFr: "Équipements fournis",
    titleEn: "Equipment provided",
    ok: [
      "Machine à café (capsules en vente locale)",
      "Lave-linge et sèche-linge disponibles",
      "Fer à repasser et table à repasser",
      "Sèche-cheveux dans chaque salle de bain",
      "Shampoing, gel douche et papier toilette fournis",
      "Barbecue à disposition dans le jardin",
      "TV dans chaque chambre et dans le salon — Netflix & Prime Video inclus",
    ],
    okEn: [
      "Coffee machine (capsules available locally)",
      "Washing machine and dryer available",
      "Iron and ironing board",
      "Hair dryer in each bathroom",
      "Shampoo, shower gel and toilet paper provided",
      "Barbecue available in the garden",
      "TV in every bedroom and living room — Netflix & Prime Video included",
    ],
    no: [],
    noEn: [],
  },
  {
    icon: Tv,
    titleFr: "Divertissement & Connectivité",
    titleEn: "Entertainment & Connectivity",
    ok: [
      "Fibre optique haut débit incluse",
      "TV grand écran dans chaque chambre et au salon",
      "Netflix et Prime Video disponibles",
      "Parfait pour le télétravail et les séjours connectés",
    ],
    okEn: [
      "High-speed fibre optic included",
      "Large-screen TV in every bedroom and living room",
      "Netflix and Prime Video available",
      "Perfect for remote work and connected stays",
    ],
    no: [],
    noEn: [],
  },
  {
    icon: Phone,
    titleFr: "Contact d'urgence",
    titleEn: "Emergency contact",
    ok: ["Pierre Jacques : +33 6 01 41 41 73 (WhatsApp & Téléphone)", "Disponible pour toute urgence pendant votre séjour", "Police : 17 | SAMU : 15 | Pompiers : 18"],
    okEn: ["Pierre Jacques: +33 6 01 41 41 73 (WhatsApp & Phone)", "Available for any emergency during your stay", "Police: 17 | SAMU: 15 | Fire: 18"],
    no: [],
    noEn: [],
  },
];

function RuleCard({ rule }: { rule: Rule }) {
  const { lang } = useLanguage();
  const ok = lang === "fr" ? rule.ok : rule.okEn;
  const no = lang === "fr" ? rule.no : rule.noEn;
  const Icon = rule.icon;

  return (
    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,169,110,0.12)", borderRadius: "14px", padding: "24px" }}>
      <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px" }}>
        <div style={{ width: "40px", height: "40px", borderRadius: "9px", background: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon size={18} color="#C9A96E" />
        </div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontWeight: 600, color: "#fff", margin: 0 }}>
          {lang === "fr" ? rule.titleFr : rule.titleEn}
        </h3>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {ok?.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: "9px", alignItems: "flex-start" }}>
            <CheckCircle size={14} color="#22c55e" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{item}</span>
          </div>
        ))}
        {no?.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: "9px", alignItems: "flex-start" }}>
            <XCircle size={14} color="#ef4444" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ConsignesPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { lang } = useLanguage();

  return (
    <>
      <SEOHead
        title={lang === "fr" ? "Consignes & Règles — Équipements | La Villa Heurtés Vents" : "House Rules & Equipment | La Villa Heurtés Vents"}
        description={lang === "fr" ? "Consignes La Villa Heurtés Vents : règles piscine, stationnement, équipements fournis (TV Netflix, machine à café, barbecue). Arrivée 12h, départ 13h. QR code en ligne." : "La Villa Heurtés Vents house rules: pool, parking, equipment provided (TV Netflix, coffee machine, barbecue). Check-in 12pm, check-out 1pm. Online QR code."}
        path="/consignes"
        keywords="consignes villa normandie, règles maison villa normandie, équipements villa heurtés vents, TV Netflix villa normandie, machine à café villa normandie, barbecue villa normandie, bâche piscine villa normandie, stationnement villa normandie, arrivée 12h villa normandie, départ 13h villa normandie, QR code consignes villa, règles piscine villa normandie, lave-linge villa normandie, fer à repasser villa normandie, shampoing gel douche villa, lit parapluie villa normandie, WiFi fibre villa normandie"
      />
      <div style={{ paddingTop: "60px" }}>
        <PageHero
          title={lang === "fr" ? "Consignes" : "House Rules"}
          titleAccent={lang === "fr" ? "& Équipements" : "& Equipment"}
          subtitle={lang === "fr" ? "Tout ce qu'il faut savoir pour un séjour agréable. Équipements complets, règles simples, Pierre disponible 24h/24." : "Everything you need to know for a pleasant stay. Full equipment, simple rules, Pierre available 24/7."}
          image={heroHome}
          breadcrumb={[{ label: lang === "fr" ? "Accueil" : "Home", to: "/" }]}
          currentPage={lang === "fr" ? "Consignes" : "House rules"}
        />

        <section ref={ref} style={{ background: "#0A0A0F", padding: "72px 0" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>

            {/* Check-in/out banner */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.7 }}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "48px" }}>
              {[
                { time: "12h00", label: lang === "fr" ? "Arrivée possible dès" : "Check-in from", color: "#22c55e" },
                { time: "13h00", label: lang === "fr" ? "Départ avant" : "Check-out by", color: "#C9A96E" },
              ].map((t) => (
                <div key={t.time} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,169,110,0.12)", borderRadius: "14px", padding: "24px", textAlign: "center" }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.45)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>{t.label}</p>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "40px", fontWeight: 700, color: t.color, lineHeight: 1 }}>{t.time}</p>
                </div>
              ))}
            </motion.div>

            {/* Rules grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
              {RULES.map((rule, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 + i * 0.06, duration: 0.6 }}>
                  <RuleCard rule={rule} />
                </motion.div>
              ))}
            </div>

            {/* Contact bottom */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6, duration: 0.6 }}
              style={{ marginTop: "48px", background: "rgba(201,169,110,0.05)", border: "1px solid rgba(201,169,110,0.2)", borderRadius: "14px", padding: "28px", textAlign: "center" }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>
                {lang === "fr" ? "Une question sur la villa ?" : "A question about the villa?"}
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", marginBottom: "20px" }}>
                {lang === "fr" ? "Pierre répond généralement en moins d'une heure sur WhatsApp." : "Pierre usually responds within an hour on WhatsApp."}
              </p>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #25D366, #128C7E)", color: "#fff", padding: "12px 28px", borderRadius: "8px", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 700 }}>
                📱 WhatsApp — Pierre Jacques
              </a>
            </motion.div>

            {/* Visible SEO geo text */}
            <div style={{ marginTop: "48px", borderTop: "1px solid rgba(201,169,110,0.08)", paddingTop: "32px" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.2)", textTransform: "uppercase", marginBottom: "12px" }}>
                {lang === "fr" ? "Informations — Villa Heurtés Vents Normandie" : "Information — Villa Heurtés Vents Normandy"}
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.22)", lineHeight: 1.8 }}>
                {lang === "fr" ? SEO_GEO_BLOCK_FR : SEO_GEO_BLOCK_EN}
              </p>
            </div>
          </div>
        </section>

        <InternalLinks exclude="/consignes" />
      </div>
    </>
  );
}
