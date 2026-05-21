import { SEOHead, SEO_GEO_BLOCK_FR, SEO_GEO_BLOCK_EN } from "../components/SEOHead";
import { PageHero } from "../components/PageHero";
import { VillaSection } from "../components/VillaSection";
import { InternalLinks } from "../components/InternalLinks";
import { PageFAQ, FAQItem } from "../components/PageFAQ";
import { useLanguage } from "../context/LanguageContext";
import heroHome from "../../imports/hero-home.png";

const FAQS: FAQItem[] = [
  { qFr: "Quelle est la superficie de la villa ?", aFr: "La Villa Heurtés Vents est une authentique longère normande d'environ 150m² sur un terrain clos de 1700m². Elle bénéficie d'une architecture traditionnelle en pierres avec des volumes généreux.", qEn: "What is the size of the villa?", aEn: "La Villa Heurtés Vents is an authentic Norman longhouse of approximately 150m² on a 1700m² enclosed plot. It features traditional stone architecture with generous volumes." },
  { qFr: "La villa a-t-elle un jardin privé ?", aFr: "Oui, la villa dispose d'un terrain clos de 1700m² entièrement privé, sans vis-à-vis. Vous profitez d'un espace vert exclusif avec parking sécurisé, terrasse et accès direct à la piscine.", qEn: "Does the villa have a private garden?", aEn: "Yes, the villa has a fully private 1700m² enclosed plot with no overlooking neighbours. You enjoy an exclusive green space with secure parking, terrace and direct pool access." },
  { qFr: "La villa est-elle de plain-pied ?", aFr: "Oui, La Villa Heurtés Vents est entièrement de plain-pied, ce qui facilite les déplacements pour tous les membres du groupe, y compris les personnes à mobilité réduite.", qEn: "Is the villa on a single level?", aEn: "Yes, La Villa Heurtés Vents is entirely on one level, making movement easy for all group members, including those with reduced mobility." },
  { qFr: "Y a-t-il un poêle à bois ?", aFr: "Oui ! La villa est équipée d'un poêle à bois qui crée une atmosphère chaleureuse et cosy, idéale pour les séjours en automne et hiver.", qEn: "Is there a wood-burning stove?", aEn: "Yes! The villa is equipped with a wood-burning stove that creates a warm and cosy atmosphere, perfect for autumn and winter stays." },
  { qFr: "La cuisine est-elle équipée ?", aFr: "La villa dispose d'une cuisine entièrement équipée avec tous les appareils nécessaires : four, lave-vaisselle, réfrigérateur, micro-ondes, etc. Tout le nécessaire pour cuisiner de bons repas.", qEn: "Is the kitchen fully equipped?", aEn: "The villa has a fully equipped kitchen with all necessary appliances: oven, dishwasher, refrigerator, microwave, etc. Everything you need to cook great meals." },
];

export function VillaPage() {
  const { lang } = useLanguage();
  return (
    <>
      <SEOHead
        title={lang === "fr" ? "La Villa — Longère Normande 150m² | La Villa Heurtés Vents" : "The Villa — 150m² Norman Longhouse | La Villa Heurtés Vents"}
        description={lang === "fr" ? "Découvrez La Villa Heurtés Vents : longère normande authentique 150m², 4 chambres, jardin 1700m², poêle à bois, fibre optique. Hardencourt-Cocherel, Eure." : "Discover La Villa Heurtés Vents: authentic 150m² Norman longhouse, 4 bedrooms, 1700m² garden, wood stove, fibre optic. Hardencourt-Cocherel, Eure."}
        path="/la-villa"
        keywords="la villa heurtés vents description, longère normande 150m2, longère pierre normandie, villa de plain-pied normandie, villa sans vis-à-vis eure, villa clos privatif normandie, terrain clos 1700m2, poêle à bois normandie, fibre optique villa normandie, villa télétravail normande, cuisine équipée villa normandie, terrasse privée villa normandie, architecture normande authentique, villa pierre normandie, villa spacieuse normandie, villa bien équipée normandie, villa calme normandie, villa nature normandie, villa campagne normande, villa prestige eure 27120, maison normande location, longère à louer normandie, villa plain-pied normandie, villa avec jardin normandie, villa 150m2 normandie"
      />
      <div style={{ paddingTop: "60px" }}>
        <PageHero
          title={lang === "fr" ? "La Villa" : "The Villa"}
          titleAccent={lang === "fr" ? "Heurtés Vents" : "Heurtés Vents"}
          subtitle={lang === "fr" ? "Longère normande authentique de 150m² sur 1700m² de terrain privé. Architecture en pierres, volumes généreux, sans vis-à-vis." : "Authentic 150m² Norman longhouse on 1700m² of private land. Stone architecture, generous volumes, no overlooking neighbours."}
          image={heroHome}
          breadcrumb={[{ label: lang === "fr" ? "Accueil" : "Home", to: "/" }]}
          currentPage={lang === "fr" ? "La Villa" : "The Villa"}
        />
        <VillaSection />
        <PageFAQ items={FAQS} titleFr="Questions sur la villa" titleEn="Villa questions" />
        <InternalLinks exclude="/la-villa" />
        <div style={{ display: "none" }} aria-hidden="true">{lang === "fr" ? SEO_GEO_BLOCK_FR : SEO_GEO_BLOCK_EN}</div>
      </div>
    </>
  );
}
