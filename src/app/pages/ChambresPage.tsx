import { SEOHead, SEO_GEO_BLOCK_FR, SEO_GEO_BLOCK_EN } from "../components/SEOHead";
import { PageHero } from "../components/PageHero";
import { Rooms } from "../components/Rooms";
import { InternalLinks } from "../components/InternalLinks";
import { PageFAQ, FAQItem } from "../components/PageFAQ";
import { useLanguage } from "../context/LanguageContext";
import heroHome from "../../imports/hero-home.png";

const FAQS: FAQItem[] = [
  { qFr: "Combien de chambres y a-t-il ?", aFr: "La villa dispose de 4 chambres : une suite parentale king size et 3 chambres doubles. Toutes les chambres sont confortablement meublées et décorées avec soin.", qEn: "How many bedrooms are there?", aEn: "The villa has 4 bedrooms: one king size master suite and 3 double rooms. All bedrooms are comfortably furnished and carefully decorated." },
  { qFr: "Combien de personnes peuvent dormir ?", aFr: "La villa accueille confortablement jusqu'à 8 personnes avec ses 4 chambres. La suite parentale dispose d'un lit king size et les 3 autres chambres de lits doubles.", qEn: "How many people can sleep?", aEn: "The villa comfortably accommodates up to 8 people with its 4 bedrooms. The master suite has a king size bed and the 3 other rooms have double beds." },
  { qFr: "Le linge de lit est-il fourni ?", aFr: "Oui, les draps et housses d'oreillers sont fournis pour toutes les chambres. Les serviettes de bain sont également incluses dans la location.", qEn: "Is bed linen provided?", aEn: "Yes, sheets and pillowcases are provided for all bedrooms. Bath towels are also included in the rental." },
  { qFr: "Y a-t-il des chambres avec salle de bain privative ?", aFr: "La villa dispose de 2 salles de bains. La suite parentale bénéficie d'une salle de bain privative. Une deuxième salle de bain est disponible pour les 3 autres chambres.", qEn: "Are there rooms with en-suite bathrooms?", aEn: "The villa has 2 bathrooms. The master suite has a private en-suite bathroom. A second bathroom is available for the other 3 bedrooms." },
  { qFr: "Peut-on avoir un lit bébé ?", aFr: "Oui, un lit bébé peut être mis à disposition sur demande préalable. Merci de contacter Pierre lors de votre réservation pour organiser cela.", qEn: "Can we have a cot?", aEn: "Yes, a baby cot can be made available on prior request. Please contact Pierre when booking to arrange this." },
];

export function ChambresPage() {
  const { lang } = useLanguage();
  return (
    <>
      <SEOHead
        title={lang === "fr" ? "Chambres — 4 Chambres & Suites | La Villa Heurtés Vents" : "Bedrooms — 4 Rooms & Suites | La Villa Heurtés Vents"}
        description={lang === "fr" ? "4 chambres luxueuses : suite parentale king size et 3 chambres doubles. Draps fournis, 2 salles de bains. Capacité 8 personnes. La Villa Heurtés Vents, Normandie." : "4 luxurious bedrooms: king size master suite and 3 double rooms. Linen provided, 2 bathrooms. Capacity 8 people. La Villa Heurtés Vents, Normandy."}
        path="/chambres"
        keywords="chambres villa normandie, suite parentale king size normandie, chambre double villa normandie, 4 chambres normandie, villa 8 personnes normandie, chambre luxe normandie, suite chambre normandie, lit king size normandie, linge fourni villa normandie, serviettes incluses villa normandie, 2 salles de bains normandie, chambre avec salle de bain normandie, chambre privative normandie, villa 4 chambres 8 personnes eure, chambre normandie proche paris, chambre normandie proche giverny, hébergement normandie 8 personnes, lit bébé normandie sur demande, villa familiale 4 chambres, villa couple chambre normandie, chambre romantique normandie, chambre prestige normandie, villa avec chambre suite normandie, chambres confort normandie, villa normandie 8 couchages"
      />
      <div style={{ paddingTop: "60px" }}>
        <PageHero
          title={lang === "fr" ? "Chambres" : "Bedrooms"}
          titleAccent={lang === "fr" ? "& Suites" : "& Suites"}
          subtitle={lang === "fr" ? "4 chambres pour 8 personnes — suite parentale king size, 3 chambres doubles, 2 salles de bains. Tout le confort d'une villa de luxe." : "4 bedrooms for 8 people — king size master suite, 3 double rooms, 2 bathrooms. All the comfort of a luxury villa."}
          image={heroHome}
          breadcrumb={[{ label: lang === "fr" ? "Accueil" : "Home", to: "/" }]}
          currentPage={lang === "fr" ? "Chambres" : "Bedrooms"}
        />
        <Rooms />
        <PageFAQ items={FAQS} titleFr="Questions sur les chambres" titleEn="Bedroom questions" />
        <InternalLinks exclude="/chambres" />
        <div style={{ display: "none" }} aria-hidden="true">{lang === "fr" ? SEO_GEO_BLOCK_FR : SEO_GEO_BLOCK_EN}</div>
      </div>
    </>
  );
}
