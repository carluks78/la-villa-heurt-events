import { SEOHead, SEO_GEO_BLOCK_FR, SEO_GEO_BLOCK_EN } from "../components/SEOHead";
import { PageHero } from "../components/PageHero";
import { TourismSection } from "../components/TourismSection";
import { InternalLinks } from "../components/InternalLinks";
import { PageFAQ, FAQItem } from "../components/PageFAQ";
import { useLanguage } from "../context/LanguageContext";
import heroHome from "../../imports/hero-home.png";

const FAQS: FAQItem[] = [
  { qFr: "Faut-il réserver la Fondation Monet à l'avance ?", aFr: "Oui, fortement recommandé en haute saison (avril–octobre). La Fondation Claude Monet est très prisée, notamment les week-ends et jours fériés. Réservez directement sur fondation-monet.com.", qEn: "Should I book the Monet Foundation in advance?", aEn: "Yes, highly recommended in high season (April–October). The Claude Monet Foundation is very popular, especially weekends and public holidays. Book directly at fondation-monet.com." },
  { qFr: "MacArthurGlen est-il loin de la villa ?", aFr: "MacArthurGlen Paris-Giverny est à seulement 5 km de la villa, soit environ 7 minutes en voiture. C'est l'un des atouts majeurs de la situation géographique de la villa !", qEn: "Is MacArthurGlen far from the villa?", aEn: "MacArthurGlen Paris-Giverny is only 5 km from the villa, about 7 minutes by car. It's one of the major advantages of the villa's location!" },
  { qFr: "Y a-t-il des supermarchés proches ?", aFr: "Oui ! À Pacy-sur-Eure (6 km), vous trouverez un Carrefour Market et un Aldi pour toutes vos courses. Parfait pour vous approvisionner pour votre séjour.", qEn: "Are there supermarkets nearby?", aEn: "Yes! In Pacy-sur-Eure (6 km), you'll find a Carrefour Market and an Aldi for all your shopping. Perfect for stocking up for your stay." },
  { qFr: "Peut-on faire du canoë à proximité ?", aFr: "Absolument ! La rivière Eure se prête parfaitement au canoë et à d'autres activités nautiques. Pierre peut vous recommander les prestataires locaux pour organiser votre sortie.", qEn: "Can we go canoeing nearby?", aEn: "Absolutely! The Eure river is perfect for canoeing and other water activities. Pierre can recommend local operators to organise your outing." },
  { qFr: "Y a-t-il des bons restaurants à proximité ?", aFr: "Plusieurs excellents restaurants se trouvent à quelques minutes : La Maison Pacel et la Brasserie Le Saint-Lazare à Pacy-sur-Eure offrent une belle cuisine locale. Demandez à Pierre ses recommandations personnalisées !", qEn: "Are there good restaurants nearby?", aEn: "Several excellent restaurants are just minutes away: La Maison Pacel and Brasserie Le Saint-Lazare in Pacy-sur-Eure offer great local cuisine. Ask Pierre for personalised recommendations!" },
];

export function ActivitesPage() {
  const { lang } = useLanguage();
  return (
    <>
      <SEOHead
        title={lang === "fr" ? "Activités & Tourisme — Giverny, Vernon, MacArthurGlen | La Villa Heurtés Vents" : "Activities & Tourism — Giverny, Vernon, MacArthurGlen | La Villa Heurtés Vents"}
        description={lang === "fr" ? "Fondation Monet Giverny (12km), MacArthurGlen (5km), Les 3 Étangs, restaurants, commerces à Pacy-sur-Eure. Toutes les activités proches de La Villa Heurtés Vents." : "Monet Foundation Giverny (12km), MacArthurGlen (5km), Les 3 Étangs, restaurants, shops in Pacy-sur-Eure. All activities near La Villa Heurtés Vents."}
        path="/activites"
        keywords="activités normandie proche villa, Fondation Claude Monet Giverny 12km, jardins impressionnistes Giverny, MacArthurGlen Paris-Giverny Douains 5km, shopping outlet normandie, Vernon ville médiévale 8km, Les 3 Étangs Jouy-sur-Eure, canoë rivière Eure normandie, Cave Annexe Pacy-sur-Eure, Brasserie Saint-Lazare Pacy, Maison Pacel Pacy-sur-Eure, Carrefour Market Pacy, Aldi Pacy-sur-Eure, restaurants Pacy-sur-Eure, gastronomie normandie, tourisme normandie, activités famille normandie, sorties normandie proche paris, visites normandie giverny, activités couple normandie, randonnée eure normandie, normandie tourisme, que faire normandie, loisirs normandie, promenades normandie"
      />
      <div style={{ paddingTop: "60px" }}>
        <PageHero
          title={lang === "fr" ? "Activités" : "Activities"}
          titleAccent={lang === "fr" ? "& Tourisme" : "& Tourism"}
          subtitle={lang === "fr" ? "Giverny, Vernon, shopping premium, nature, gastronomie, commerces — tout à quelques minutes de la villa." : "Giverny, Vernon, premium shopping, nature, gastronomy, shops — all just minutes from the villa."}
          image={heroHome}
          breadcrumb={[{ label: lang === "fr" ? "Accueil" : "Home", to: "/" }]}
          currentPage={lang === "fr" ? "Activités" : "Activities"}
        />
        <TourismSection />
        <PageFAQ items={FAQS} titleFr="Questions sur les activités" titleEn="Activity questions" />
        <InternalLinks exclude="/activites" />
        <div style={{ display: "none" }} aria-hidden="true">{lang === "fr" ? SEO_GEO_BLOCK_FR : SEO_GEO_BLOCK_EN}</div>
      </div>
    </>
  );
}
