import { SEOHead, SEO_GEO_BLOCK_FR, SEO_GEO_BLOCK_EN } from "../components/SEOHead";
import { PageHero } from "../components/PageHero";
import { ContactSection } from "../components/ContactSection";
import { InternalLinks } from "../components/InternalLinks";
import { PageFAQ, FAQItem } from "../components/PageFAQ";
import { useLanguage } from "../context/LanguageContext";
import heroHome from "../../imports/hero-home.png";

const FAQS: FAQItem[] = [
  { qFr: "Quelle est la meilleure façon de contacter Pierre ?", aFr: "WhatsApp est le moyen le plus rapide : +33 6 01 41 41 73. Pierre répond généralement en moins d'une heure. Pour les questions non urgentes, un email est possible.", qEn: "What is the best way to contact Pierre?", aEn: "WhatsApp is the quickest method: +33 6 01 41 41 73. Pierre usually responds within an hour. For non-urgent questions, email is possible." },
  { qFr: "Pierre parle-t-il anglais ?", aFr: "Pierre parle français et peut communiquer en anglais. N'hésitez pas à écrire en anglais, il fera de son mieux pour vous répondre dans les meilleures conditions.", qEn: "Does Pierre speak English?", aEn: "Pierre speaks French and can communicate in English. Feel free to write in English, he will do his best to respond in the best conditions." },
  { qFr: "Y a-t-il un numéro d'urgence pendant le séjour ?", aFr: "En cas d'urgence à la villa, contactez Pierre directement au +33 6 01 41 41 73. Pour les urgences générales : Police 17, SAMU 15, Pompiers 18.", qEn: "Is there an emergency number during the stay?", aEn: "For emergencies at the villa, contact Pierre directly at +33 6 01 41 41 73. For general emergencies: Police 17, SAMU 15, Fire 18." },
  { qFr: "Peut-on visiter la villa avant de réserver ?", aFr: "Une visite physique n'est pas toujours possible. La galerie photos, les avis Airbnb et les échanges directs avec Pierre vous donnent toutes les informations nécessaires pour réserver en confiance.", qEn: "Can we visit the villa before booking?", aEn: "A physical visit is not always possible. The photo gallery, Airbnb reviews and direct exchanges with Pierre give you all the information needed to book with confidence." },
];

export function ContactPage() {
  const { lang } = useLanguage();
  return (
    <>
      <SEOHead
        title={lang === "fr" ? "Contact — Pierre Jacques | La Villa Heurtés Vents" : "Contact — Pierre Jacques | La Villa Heurtés Vents"}
        description={lang === "fr" ? "Contactez Pierre Jacques, propriétaire de La Villa Heurtés Vents. WhatsApp +33 6 01 41 41 73, réponse rapide. Réservation et questions sur la villa en Normandie." : "Contact Pierre Jacques, owner of La Villa Heurtés Vents. WhatsApp +33 6 01 41 41 73, quick response. Booking and questions about the villa in Normandy."}
        path="/contact"
        keywords="contact villa heurtés vents, Pierre Jacques propriétaire villa normandie, whatsapp villa normandie, téléphone villa normandie, contact villa normandie, pierre@villa-heurtevents.fr, contacter propriétaire normandie, réservation directe normandie propriétaire, contact villa piscine normandie, contact villa eure, contact villa giverny, répondre rapidement villa normandie, proprietaire villa normandie whatsapp, villa normandie phone, joindre propriétaire villa normandie, info villa normandie, renseignements villa normandie, demande villa normandie, email villa normandie, propriétaire villa normandie contact"
      />
      <div style={{ paddingTop: "60px" }}>
        <PageHero
          title="Contact"
          titleAccent="Pierre Jacques"
          subtitle={lang === "fr" ? "Une question, une demande spéciale ? Pierre répond rapidement par WhatsApp, téléphone ou email." : "A question, a special request? Pierre responds quickly via WhatsApp, phone or email."}
          image={heroHome}
          breadcrumb={[{ label: lang === "fr" ? "Accueil" : "Home", to: "/" }]}
          currentPage="Contact"
        />
        <ContactSection />
        <PageFAQ items={FAQS} titleFr="Questions sur le contact" titleEn="Contact questions" />
        <InternalLinks exclude="/contact" />
        <div style={{ display: "none" }} aria-hidden="true">{lang === "fr" ? SEO_GEO_BLOCK_FR : SEO_GEO_BLOCK_EN}</div>
      </div>
    </>
  );
}
