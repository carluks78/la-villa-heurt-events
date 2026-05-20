import { useEffect } from "react";

const SITE_URL = "https://www.villaheurtevents.fr";
const SITE_NAME = "La Villa Heurt Events";
const DEFAULT_TITLE = "La Villa Heurt Events | Location Villa Luxe Normandie avec Piscine Chauffée - Proche Giverny";
const DEFAULT_DESC =
  "Séjournez dans une longère en pierre de 150m², 4 chambres, piscine chauffée, balnéothérapie, jardin privé 1700m². À 1h de Paris, proche Giverny. Réservez votre séjour de rêve en Haute-Normandie.";
const OG_IMAGE = `${SITE_URL}/logo.svg`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LodgingBusiness",
      "@id": `${SITE_URL}/#lodging`,
      name: SITE_NAME,
      url: SITE_URL,
      telephone: "+33601414173",
      description: DEFAULT_DESC,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hardencourt-Cocherel",
        addressLocality: "Hardencourt-Cocherel",
        addressRegion: "Normandie",
        postalCode: "27120",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 49.1167,
        longitude: 1.4833,
      },
      image: [
        `${SITE_URL}/logo.svg`,
      ],
      priceRange: "€€€",
      starRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Piscine chauffée", value: true },
        { "@type": "LocationFeatureSpecification", name: "Balnéothérapie", value: true },
        { "@type": "LocationFeatureSpecification", name: "Fibre optique", value: true },
        { "@type": "LocationFeatureSpecification", name: "Jardin privé", value: true },
        { "@type": "LocationFeatureSpecification", name: "Parking privé", value: true },
        { "@type": "LocationFeatureSpecification", name: "Cuisine équipée", value: true },
        { "@type": "LocationFeatureSpecification", name: "Poêle à bois", value: true },
        { "@type": "LocationFeatureSpecification", name: "4 chambres", value: true },
        { "@type": "LocationFeatureSpecification", name: "2 salles de bains", value: true },
      ],
      numberOfRooms: 4,
      petsAllowed: false,
      checkinTime: "16:00",
      checkoutTime: "11:00",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33601414173",
        contactType: "reservations",
        availableLanguage: ["French", "English"],
      },
      sameAs: [
        "https://www.airbnb.com/slink/04z2yC75",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Quelle est la capacité de La Villa Heurt Events ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La villa accueille jusqu'à 8 personnes avec 4 chambres et 2 salles de bains.",
          },
        },
        {
          "@type": "Question",
          name: "La villa est-elle proche de Giverny ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, La Villa Heurt Events est à seulement 12 km de Giverny et de la Fondation Claude Monet.",
          },
        },
        {
          "@type": "Question",
          name: "La piscine est-elle chauffée toute l'année ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, la piscine est chauffée et disponible selon la saison. Contactez-nous pour les détails.",
          },
        },
        {
          "@type": "Question",
          name: "La villa est-elle à quelle distance de Paris ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La Villa Heurt Events est à environ 1 heure de Paris (80 km), facilement accessible par l'A13.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "La Villa", item: `${SITE_URL}/la-villa` },
        { "@type": "ListItem", position: 3, name: "Réservation", item: `${SITE_URL}/reservation` },
      ],
    },
  ],
};

export function SEOHead() {
  useEffect(() => {
    document.title = DEFAULT_TITLE;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        isProperty ? el.setAttribute("property", name) : el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string, type?: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
      if (type) el.setAttribute("type", type);
    };

    // Core SEO
    setMeta("description", DEFAULT_DESC);
    setMeta("keywords", "location villa Giverny, villa luxe Normandie, location vacances Eure, villa piscine chauffée Normandie, maison vacances proche Paris, week-end romantique Normandie, villa Haute-Normandie, location saisonnière Vernon, La Villa Heurt Events, Hardencourt-Cocherel");
    setMeta("author", "Pierre Jacques - La Villa Heurt Events");
    setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMeta("theme-color", "#0A0A0F");

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:title", DEFAULT_TITLE, true);
    setMeta("og:description", DEFAULT_DESC, true);
    setMeta("og:url", SITE_URL, true);
    setMeta("og:site_name", SITE_NAME, true);
    setMeta("og:image", OG_IMAGE, true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:image:alt", "La Villa Heurt Events - Villa de luxe en Haute-Normandie", true);
    setMeta("og:locale", "fr_FR", true);
    setMeta("og:locale:alternate", "en_GB", true);

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", DEFAULT_TITLE);
    setMeta("twitter:description", DEFAULT_DESC);
    setMeta("twitter:image", OG_IMAGE);
    setMeta("twitter:image:alt", "La Villa Heurt Events - Villa de luxe en Normandie");

    // Geo meta
    setMeta("geo.region", "FR-27");
    setMeta("geo.placename", "Hardencourt-Cocherel, Eure, Normandie");
    setMeta("geo.position", "49.1167;1.4833");
    setMeta("ICBM", "49.1167, 1.4833");

    // Canonical
    setLink("canonical", SITE_URL);

    // JSON-LD
    let ldScript = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
    if (!ldScript) {
      ldScript = document.createElement("script");
      ldScript.type = "application/ld+json";
      document.head.appendChild(ldScript);
    }
    ldScript.textContent = JSON.stringify(jsonLd);

    // Favicon
    setLink("icon", "/logo.svg", "image/svg+xml");
    setLink("apple-touch-icon", "/logo.svg");

    // Hreflang
    const addHreflang = (lang: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[hreflang="${lang}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "alternate");
        el.setAttribute("hreflang", lang);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };
    addHreflang("fr", SITE_URL);
    addHreflang("en", `${SITE_URL}/en`);
    addHreflang("x-default", SITE_URL);
  }, []);

  return null;
}
