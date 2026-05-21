import { SEOHead, SEO_GEO_BLOCK_FR, SEO_GEO_BLOCK_EN } from "../components/SEOHead";
import { PageHero } from "../components/PageHero";
import { InternalLinks } from "../components/InternalLinks";
import { PageFAQ, FAQItem } from "../components/PageFAQ";
import { useLanguage } from "../context/LanguageContext";
import heroHome from "../../imports/hero-home.png";

const FAQS: FAQItem[] = [
  { qFr: "Quelle est la capacité maximale de la villa ?", aFr: "La Villa Heurtés Vents accueille jusqu'à 8 personnes avec ses 4 chambres et 2 salles de bains. Suite parentale king size et 3 chambres doubles disponibles.", qEn: "What is the maximum capacity?", aEn: "La Villa Heurtés Vents accommodates up to 8 people with its 4 bedrooms and 2 bathrooms. King size master suite and 3 double rooms available." },
  { qFr: "La piscine est-elle accessible toute l'année ?", aFr: "La piscine chauffée est disponible de mai à septembre. Hors saison, contactez Pierre pour connaître les conditions selon votre période.", qEn: "Is the pool open all year?", aEn: "The heated pool is available from May to September. Off-season, contact Pierre for conditions based on your stay period." },
  { qFr: "Quelle est la distance depuis Paris ?", aFr: "La villa se trouve à environ 80 km de Paris, soit environ 1 heure via l'A13 (sortie Vernon). Destination idéale pour une escapade depuis la capitale !", qEn: "How far from Paris?", aEn: "The villa is approximately 80 km from Paris, about 1 hour via the A13 (Vernon exit). Ideal for a getaway from the capital!" },
  { qFr: "La villa est-elle proche de Giverny ?", aFr: "Oui ! La Fondation Claude Monet et ses jardins sont à seulement 12 km (15 minutes en voiture). Un atout majeur de la villa.", qEn: "Is the villa close to Giverny?", aEn: "Yes! The Claude Monet Foundation and gardens are only 12 km away (15 minutes by car). A major asset of the villa." },
  { qFr: "Y a-t-il la fibre optique à la villa ?", aFr: "Absolument ! La villa est équipée de la fibre optique haut débit, parfaite pour le télétravail ou rester connecté pendant votre séjour.", qEn: "Is there fibre optic internet?", aEn: "Absolutely! The villa is equipped with high-speed fibre optic, perfect for remote working or staying connected during your stay." },
  { qFr: "Les animaux de compagnie sont-ils acceptés ?", aFr: "Les animaux ne sont malheureusement pas acceptés. Contactez Pierre pour discuter de situations particulières.", qEn: "Are pets allowed?", aEn: "Pets are unfortunately not accepted. Contact Pierre to discuss particular situations." },
  { qFr: "Quelles sont les heures d'arrivée et de départ ?", aFr: "Arrivée possible à partir de 12h00 (midi) et départ avant 13h00. Des arrangements flexibles peuvent être discutés directement avec Pierre.", qEn: "What are check-in and check-out times?", aEn: "Check-in from 12:00 noon and check-out before 1:00 PM. Flexible arrangements can be discussed directly with Pierre." },
  { qFr: "Y a-t-il un parking sécurisé ?", aFr: "Oui, parking privé sécurisé sur le terrain clos de 1700m², sans vis-à-vis. Tranquillité totale.", qEn: "Is there secure parking?", aEn: "Yes, private secure parking on the enclosed 1700m² grounds. Complete peace of mind." },
  { qFr: "La villa est-elle de plain-pied ?", aFr: "Non un étage pour accéder aux chambres.", qEn: "Is the villa on one level?", aEn: "No, La Villa Heurtés Vents have floor." },
  { qFr: "Peut-on organiser des événements à la villa ?", aFr: "Pour événements ou fêtes, informez Pierre au préalable et obtenez son accord. La tranquillité du voisinage doit être respectée.", qEn: "Can events be organised at the villa?", aEn: "For events or parties, inform Pierre in advance and obtain his agreement. The peace of the neighbourhood must be respected." },
  { qFr: "Le linge de maison est-il fourni ?", aFr: "Oui, draps et serviettes de bain sont inclus. Un lit bébé peut être fourni sur demande préalable.", qEn: "Is household linen provided?", aEn: "Yes, sheets and bath towels are included. A baby cot can be provided on prior request." },
  { qFr: "Comment payer les activités locales ?", aFr: "La plupart des activités (Fondation Monet, MacArthurGlen, restaurants) se paient directement sur place. Réservez Giverny à l'avance en haute saison.", qEn: "How to pay for local activities?", aEn: "Most activities (Monet Foundation, MacArthurGlen, restaurants) are paid directly on site. Book Giverny in advance during peak season." },
];

export function FAQPage() {
  const { lang } = useLanguage();
  return (
    <>
      <SEOHead
        title={lang === "fr" ? "FAQ — Questions Fréquentes | La Villa Heurtés Vents" : "FAQ — Frequently Asked Questions | La Villa Heurtés Vents"}
        description={lang === "fr" ? "Toutes les réponses à vos questions sur La Villa Heurtés Vents : capacité, piscine, accès Paris, Giverny, WiFi, animaux, check-in, parking, tarifs, réservation." : "All answers to your questions about La Villa Heurtés Vents: capacity, pool, Paris access, Giverny, WiFi, pets, check-in, parking, rates, booking."}
        path="/faq"
        keywords="FAQ villa normandie, questions villa heurtés vents, foire aux questions villa normandie, questions location villa normandie, questions piscine villa normandie, questions accès villa normandie, questions réservation villa normandie, questions tarifs villa normandie, questions capacité villa normandie, questions WiFi villa normandie, questions animaux villa normandie, questions check-in villa normandie, questions parking villa normandie, capacité 8 personnes villa normandie, piscine chauffée mai septembre, villa 1h paris faq, villa giverny 12km faq, fibre optique villa normandie, plain-pied villa normandie, animaux non acceptés villa normandie, check-in 12h check-out 13h villa, parking privé villa normandie, questions famille villa normandie, questions couple villa normandie, tout savoir villa normandie"
      />
      <div style={{ paddingTop: "60px" }}>
        <PageHero
          title={lang === "fr" ? "Questions" : "Frequently Asked"}
          titleAccent={lang === "fr" ? "Fréquentes" : "Questions"}
          subtitle={lang === "fr" ? "Tout ce que vous devez savoir avant de réserver La Villa Heurtés Vents. Des réponses claires pour un séjour serein." : "Everything you need to know before booking La Villa Heurtés Vents. Clear answers for a peaceful stay."}
          image={heroHome}
          breadcrumb={[{ label: lang === "fr" ? "Accueil" : "Home", to: "/" }]}
          currentPage="FAQ"
        />
        <PageFAQ items={FAQS} titleFr="Toutes vos questions" titleEn="All your questions" />
        <InternalLinks exclude="/faq" titleFr="Réserver ou en savoir plus" titleEn="Book or learn more" />
        <div style={{ padding: "0 32px 48px", maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", lineHeight: 1.8, fontFamily: "'Montserrat', sans-serif" }}>
            {lang === "fr" ? SEO_GEO_BLOCK_FR : SEO_GEO_BLOCK_EN}
          </p>
        </div>
      </div>
    </>
  );
}
