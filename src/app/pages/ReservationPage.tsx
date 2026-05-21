import { SEOHead, SEO_GEO_BLOCK_FR, SEO_GEO_BLOCK_EN } from "../components/SEOHead";
import { PageHero } from "../components/PageHero";
import { BookingSection } from "../components/BookingSection";
import { InternalLinks } from "../components/InternalLinks";
import { PageFAQ, FAQItem } from "../components/PageFAQ";
import { useLanguage } from "../context/LanguageContext";
import heroHome from "../../imports/hero-home.png";

const FAQS: FAQItem[] = [
  { qFr: "Comment réserver La Villa Heurtés Vents ?", aFr: "Vous pouvez réserver directement sur Airbnb via le lien de ce site, ou contacter Pierre Jacques par WhatsApp au +33 6 01 41 41 73. Pierre répond généralement en moins d'une heure.", qEn: "How do I book La Villa Heurtés Vents?", aEn: "You can book directly on Airbnb via the link on this site, or contact Pierre Jacques on WhatsApp at +33 6 01 41 41 73. Pierre usually responds within an hour." },
  { qFr: "Quelles sont les conditions d'annulation ?", aFr: "Les conditions d'annulation sont précisées lors de la réservation sur Airbnb. Pour une annulation flexible, un remboursement intégral est possible jusqu'à 48h avant l'arrivée. Pour une réservation directe, contactez Pierre.", qEn: "What are the cancellation conditions?", aEn: "Cancellation conditions are specified at the time of Airbnb booking. For flexible cancellation, a full refund is possible up to 48h before arrival. For direct bookings, contact Pierre." },
  { qFr: "Le paiement est-il sécurisé ?", aFr: "Oui, le paiement via Airbnb est totalement sécurisé avec protection acheteur. Pour une réservation directe, Pierre peut proposer d'autres modalités.", qEn: "Is payment secure?", aEn: "Yes, payment via Airbnb is fully secure with buyer protection. For direct bookings, Pierre can offer other payment methods." },
  { qFr: "Quels sont les tarifs ?", aFr: "Les tarifs varient selon la saison et la durée du séjour. Consultez la disponibilité en temps réel sur Airbnb ou contactez Pierre directement pour obtenir une offre personnalisée.", qEn: "What are the rates?", aEn: "Rates vary by season and length of stay. Check real-time availability on Airbnb or contact Pierre directly for a personalised quote." },
  { qFr: "Quelle est la durée minimale de séjour ?", aFr: "La durée minimale est généralement de 2 nuits pour les week-ends et de 5 nuits en haute saison. Contactez Pierre pour les séjours spécifiques ou hors saison.", qEn: "What is the minimum stay?", aEn: "The minimum stay is generally 2 nights for weekends and 5 nights in high season. Contact Pierre for specific or off-season stays." },
];

export function ReservationPage() {
  const { lang } = useLanguage();
  return (
    <>
      <SEOHead
        title={lang === "fr" ? "Réservation & Tarifs | La Villa Heurtés Vents — Normandie" : "Booking & Rates | La Villa Heurtés Vents — Normandy"}
        description={lang === "fr" ? "Réservez La Villa Heurtés Vents : tarifs, disponibilités, conditions d'annulation. Paiement sécurisé Airbnb ou contact direct avec Pierre Jacques." : "Book La Villa Heurtés Vents: rates, availability, cancellation conditions. Secure Airbnb payment or direct contact with Pierre Jacques."}
        path="/reservation"
        keywords="réservation villa normandie, tarifs villa normandie, réserver villa heurtés vents, disponibilité villa normandie, prix villa normandie, prix location villa piscine normandie, booking villa normandie, réservation airbnb normandie, réservation villa giverny, réservation villa eure, annulation villa normandie, paiement sécurisé villa normandie, réserver week-end normandie, réserver séjour normandie, tarif semaine villa normandie, tarif week-end villa normandie, prix villa 8 personnes normandie, réservation directe normandie, contact propriétaire villa normandie, Pierre Jacques réservation villa, location villa tarif normandie, prix villa luxe normandie, réserver villa piscine normandie, booking villa normandie paris"
      />
      <div style={{ paddingTop: "60px" }}>
        <PageHero
          title={lang === "fr" ? "Réservation" : "Booking"}
          titleAccent={lang === "fr" ? "& Tarifs" : "& Rates"}
          subtitle={lang === "fr" ? "Réservez votre séjour à La Villa Heurtés Vents. Paiement sécurisé Airbnb ou contact direct avec Pierre Jacques." : "Book your stay at La Villa Heurtés Vents. Secure Airbnb payment or direct contact with Pierre Jacques."}
          image={heroHome}
          breadcrumb={[{ label: lang === "fr" ? "Accueil" : "Home", to: "/" }]}
          currentPage={lang === "fr" ? "Réservation" : "Booking"}
        />
        <BookingSection />
        <PageFAQ items={FAQS} titleFr="Questions sur la réservation" titleEn="Booking questions" />
        <InternalLinks exclude="/reservation" />
        <div style={{ display: "none" }} aria-hidden="true">{lang === "fr" ? SEO_GEO_BLOCK_FR : SEO_GEO_BLOCK_EN}</div>
      </div>
    </>
  );
}
