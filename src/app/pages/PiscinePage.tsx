import { SEOHead, SEO_GEO_BLOCK_FR, SEO_GEO_BLOCK_EN } from "../components/SEOHead";
import { PageHero } from "../components/PageHero";
import { WellnessSection } from "../components/WellnessSection";
import { InternalLinks } from "../components/InternalLinks";
import { PageFAQ, FAQItem } from "../components/PageFAQ";
import { useLanguage } from "../context/LanguageContext";
import piscineHero from "../../imports/piscine.JPG";

const FAQS: FAQItem[] = [
  { qFr: "La piscine est-elle chauffée ?", aFr: "Oui, la piscine est chauffée pour une baignade confortable même en dehors des mois d'été. La température est maintenue pour votre confort tout au long de la saison.", qEn: "Is the pool heated?", aEn: "Yes, the pool is heated for comfortable swimming even outside the summer months. The temperature is maintained for your comfort throughout the season." },
  { qFr: "Quelle est la période d'ouverture de la piscine ?", aFr: "La piscine chauffée est disponible de mai à septembre. Pour les séjours hors saison, contactez Pierre pour connaître les conditions et disponibilités.", qEn: "What is the pool opening period?", aEn: "The heated pool is available from May to September. For off-season stays, contact Pierre for conditions and availability." },
  { qFr: "Y a-t-il un espace balnéothérapie ?", aFr: "Oui ! La villa dispose d'un espace balnéothérapie pour vous ressourcer. Les jets massants vous permettent de vous détendre pleinement après vos journées d'exploration.", qEn: "Is there a hydrotherapy area?", aEn: "Yes! The villa has a hydrotherapy area for relaxation. The massage jets allow you to fully unwind after your days of exploration." },
  { qFr: "La piscine est-elle sécurisée pour les enfants ?", aFr: "La piscine est accessible dans un espace privatif clos. Des mesures de surveillance sont à prendre par les adultes à tout moment. Pour votre sécurité, ne laissez jamais des enfants sans surveillance.", qEn: "Is the pool safe for children?", aEn: "The pool is accessible in a private enclosed space. Adult supervision is required at all times. For safety, never leave children unsupervised." },
  { qFr: "Y a-t-il des serviettes de piscine disponibles ?", aFr: "Des serviettes de bain sont incluses dans la location. Pour la piscine, nous vous recommandons d'apporter vos propres serviettes de piscine ou de les prévoir en complément.", qEn: "Are pool towels available?", aEn: "Bath towels are included in the rental. For the pool, we recommend bringing your own pool towels or requesting them in advance." },
];

export function PiscinePage() {
  const { lang } = useLanguage();
  return (
    <>
      <SEOHead
        title={lang === "fr" ? "Piscine Chauffée & Balnéothérapie | La Villa Heurtés Vents" : "Heated Pool & Hydrotherapy | La Villa Heurtés Vents"}
        description={lang === "fr" ? "Profitez de la piscine chauffée et de l'espace balnéothérapie de La Villa Heurtés Vents. Disponible de mai à septembre. Normandie, proche Paris." : "Enjoy the heated pool and hydrotherapy area at La Villa Heurtés Vents. Available May to September. Normandy, near Paris."}
        path="/piscine-bien-etre"
        keywords="piscine chauffée normandie, piscine privée normandie, balnéothérapie normandie, villa avec piscine chauffée normandie, villa avec jacuzzi normandie, villa avec spa normandie, villa bien-être normandie, piscine chauffée privatif normandie, villa piscine eure, piscine chauffée haute-normandie, location villa piscine normandie, villa piscine chauffée proche paris, villa piscine chauffée proche giverny, villa piscine chauffée hardencourt, villa avec bassin normandie, villa détente normandie, villa relaxation normandie, villa avec bains normandie, spa privé normandie, villa avec balnéo normandie, location piscine chauffée normandie, villa balnéo eure 27120, piscine chauffée mai septembre normandie, bien-être normandie, villa aquatique normandie"
      />
      <div style={{ paddingTop: "60px" }}>
        <PageHero
          title={lang === "fr" ? "Piscine" : "Pool"}
          titleAccent={lang === "fr" ? "& Bien-être" : "& Wellness"}
          subtitle={lang === "fr" ? "Piscine chauffée privée et espace balnéothérapie pour vous ressourcer pleinement. Un luxe rare en Normandie." : "Private heated pool and hydrotherapy area for complete relaxation. A rare luxury in Normandy."}
          image={piscineHero}
          breadcrumb={[{ label: lang === "fr" ? "Accueil" : "Home", to: "/" }]}
          currentPage={lang === "fr" ? "Piscine & Bien-être" : "Pool & Wellness"}
        />
        <WellnessSection />
        <PageFAQ items={FAQS} titleFr="Questions sur la piscine" titleEn="Pool questions" />
        <InternalLinks exclude="/piscine-bien-etre" />
        <div style={{ display: "none" }} aria-hidden="true">{lang === "fr" ? SEO_GEO_BLOCK_FR : SEO_GEO_BLOCK_EN}</div>
      </div>
    </>
  );
}
