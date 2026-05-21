import { useEffect } from "react";

const SITE_URL = "https://la-villa-heurt-events.vercel.app";
const SITE_NAME = "La Villa Heurtés Vents";
const OG_IMAGE = `${SITE_URL}/logo.png`;

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
  path?: string;
  keywords?: string;
}

const GLOBAL_KEYWORDS = `La Villa Heurtés Vents, villa heurtés vents normandie, location villa Giverny, location villa luxe Normandie, location vacances Eure 27120, villa piscine chauffée Normandie, maison vacances proche Paris, week-end romantique Normandie, villa Haute-Normandie, location saisonnière Vernon, Hardencourt-Cocherel, balnéothérapie Normandie, villa 4 chambres Normandie, villa 150m2 Normandie, longère normande location, location famille Normandie, location couple Normandie, Giverny Monet Normandie, Fondation Claude Monet, MacArthurGlen Douains, Pacy-sur-Eure, Jouy-sur-Eure, Les 3 Étangs Jouy, Cave Annexe Pacy, Brasserie Saint-Lazare Pacy, Maison Pacel Pacy, Carrefour Market Pacy, Aldi Pacy, séjour luxe Normandie, villa luxe 8 personnes, villa avec jacuzzi Normandie, villa avec spa Normandie, villa jardin privé Normandie, location villa près de Paris, villa 1 heure Paris, villa normande authentique, longère pierre Normandie, villa sans vis-à-vis Normandie, villa clos privatif Normandie, villa avec fibre optique, villa télétravail Normandie, workcation Normandie, séjour détente Normandie, villa calme campagne normande, villa Eure location, Normandie location de vacances, gîte de luxe Normandie, villa prestige Normandie, Airbnb Normandie Giverny, Airbnb Vernon Normandie, Airbnb Pacy-sur-Eure, location saisonnière Hardencourt, Pierre Jacques propriétaire villa normandie, villa heurtés vents eure 27120, location villa heurtés vents, heurtés vents hardencourt`;

const jsonLdBase = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LodgingBusiness", "VacationRental"],
      "@id": `${SITE_URL}/#lodging`,
      name: SITE_NAME,
      alternateName: ["Villa Heurtés Vents", "La Villa Heurtés Vents Normandie", "La Villa Heurtes Vents", "Villa Normandie Giverny"],
      url: SITE_URL,
      telephone: "+33601414173",
      description: "Location villa de luxe en Haute-Normandie. Longère en pierre 150m², 4 chambres, piscine chauffée, balnéothérapie, jardin 1700m². À 1h de Paris, 12km de Giverny.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hardencourt-Cocherel",
        addressLocality: "Hardencourt-Cocherel",
        postalCode: "27120",
        addressRegion: "Normandie",
        addressCountry: "FR",
      },
      geo: { "@type": "GeoCoordinates", latitude: 49.1167, longitude: 1.4833 },
      image: OG_IMAGE,
      priceRange: "€€€",
      starRating: { "@type": "Rating", ratingValue: "5" },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Piscine chauffée privée", value: true },
        { "@type": "LocationFeatureSpecification", name: "Balnéothérapie", value: true },
        { "@type": "LocationFeatureSpecification", name: "Fibre optique haut débit", value: true },
        { "@type": "LocationFeatureSpecification", name: "Jardin privé 1700m²", value: true },
        { "@type": "LocationFeatureSpecification", name: "Parking privé sécurisé", value: true },
        { "@type": "LocationFeatureSpecification", name: "Cuisine entièrement équipée", value: true },
        { "@type": "LocationFeatureSpecification", name: "Poêle à bois", value: true },
        { "@type": "LocationFeatureSpecification", name: "4 chambres dont suite parentale king size", value: true },
        { "@type": "LocationFeatureSpecification", name: "2 salles de bains", value: true },
        { "@type": "LocationFeatureSpecification", name: "Terrain clos sans vis-à-vis", value: true },
        { "@type": "LocationFeatureSpecification", name: "Terrasse privée", value: true },
        { "@type": "LocationFeatureSpecification", name: "Lit bébé sur demande", value: true },
      ],
      numberOfRooms: 4,
      petsAllowed: false,
      checkinTime: "12:00",
      checkoutTime: "13:00",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33601414173",
        contactType: "reservations",
        availableLanguage: ["French", "English"],
      },
      sameAs: ["https://www.airbnb.com/slink/04z2yC75"],
    },
  ],
};

export function SEOHead({ title, description, ogImage, path = "", keywords }: SEOHeadProps) {
  useEffect(() => {
    const finalTitle = title || `${SITE_NAME} | Location Villa Luxe Normandie — Piscine Chauffée, Proche Giverny & Paris`;
    const finalDesc = description || "Location villa de luxe en Haute-Normandie. Longère normande 150m², 4 chambres, piscine chauffée, balnéothérapie, jardin 1700m². À 1h de Paris, 12km de Giverny.";
    const finalImg = ogImage || OG_IMAGE;
    const canonical = `${SITE_URL}${path}`;
    const finalKeywords = keywords ? `${keywords}, ${GLOBAL_KEYWORDS}` : GLOBAL_KEYWORDS;

    document.title = finalTitle;

    const setMeta = (name: string, content: string, prop = false) => {
      const sel = prop ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector<HTMLMetaElement>(sel);
      if (!el) { el = document.createElement("meta"); prop ? el.setAttribute("property", name) : el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    const setLink = (rel: string, href: string, hreflang?: string, type?: string) => {
      const sel = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
      let el = document.querySelector<HTMLLinkElement>(sel);
      if (!el) { el = document.createElement("link"); el.setAttribute("rel", rel); if (hreflang) el.setAttribute("hreflang", hreflang); document.head.appendChild(el); }
      el.setAttribute("href", href);
      if (type) el.setAttribute("type", type);
    };

    setMeta("description", finalDesc);
    setMeta("keywords", finalKeywords);
    setMeta("author", `Pierre Jacques — ${SITE_NAME}`);
    setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMeta("theme-color", "#0A0A0F");

    // Open Graph — WhatsApp / réseaux sociaux — logo.png 1200x630
    setMeta("og:type", "website", true);
    setMeta("og:title", finalTitle, true);
    setMeta("og:description", finalDesc, true);
    setMeta("og:url", canonical, true);
    setMeta("og:site_name", SITE_NAME, true);
    setMeta("og:image", finalImg, true);
    setMeta("og:image:secure_url", finalImg, true);
    setMeta("og:image:type", "image/png", true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:image:alt", `${SITE_NAME} — Villa de luxe, piscine chauffée, jardin privé, Normandie`, true);
    setMeta("og:locale", "fr_FR", true);
    setMeta("og:locale:alternate", "en_GB", true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", finalTitle);
    setMeta("twitter:description", finalDesc);
    setMeta("twitter:image", finalImg);
    setMeta("twitter:image:alt", `${SITE_NAME} — Villa luxe Normandie, proche Giverny`);

    setMeta("geo.region", "FR-27");
    setMeta("geo.placename", "Hardencourt-Cocherel, Eure, Normandie, France");
    setMeta("geo.position", "49.1167;1.4833");
    setMeta("ICBM", "49.1167, 1.4833");

    setLink("canonical", canonical);
    setLink("alternate", canonical, "fr");
    setLink("alternate", canonical, "x-default");
    setLink("icon", "/logo.svg", undefined, "image/svg+xml");
    setLink("apple-touch-icon", "/logo.png");

    let ld = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
    if (!ld) { ld = document.createElement("script"); ld.type = "application/ld+json"; document.head.appendChild(ld); }
    ld.textContent = JSON.stringify(jsonLdBase);
  }, [title, description, ogImage, path, keywords]);

  return null;
}

export const SEO_GEO_BLOCK_FR = `La Villa Heurtés Vents — Location villa luxe Normandie. Hardencourt-Cocherel Eure 27120. Villa piscine chauffée balnéothérapie Normandie. Longère normande 150m2 4 chambres 8 personnes. Proche Giverny Fondation Monet 12km. MacArthurGlen 5km. Vernon 8km. Pacy-sur-Eure 6km. Paris 1h A13. Rouen 55km. Deauville 90km. Location vacances Eure Haute-Normandie. Gîte luxe Normandie. Villa saisonnière Hardencourt. Maison vacances proche Paris. Week-end romantique Normandie piscine. Séjour famille 8 personnes Normandie. Villa fibre optique télétravail. Pierre Jacques propriétaire +33601414173. Airbnb Normandie Giverny. Villa jardin privé 1700m2 sans vis-à-vis. Suite parentale king size. Poêle à bois. Terrasse privée. Cuisine équipée. Parking sécurisé. Lit bébé. Les 3 Étangs Jouy-sur-Eure. Brasserie Saint-Lazare Pacy. Maison Pacel Pacy. Cave Annexe Pacy. Carrefour Market Pacy. Aldi Pacy. Canoë Eure Normandie. Fondation Monet jardins impressionnistes. Location villa Giverny Normandie. Villa luxe Haute-Normandie. Séjour prestige Normandie. Location maison piscine chauffée Normandie. Villa avec balnéo Normandie. Gîte de charme Eure. Maison d'hôtes Normandie luxe. Location villa A13 Vernon. Normandie Paris week-end. Escapade Normandie couple. Séjour balnéo Normandie. Vacances famille Normandie Paris. Villa 8 personnes piscine chauffée France.`;

export const SEO_GEO_BLOCK_EN = `La Villa Heurtés Vents — Luxury villa rental Normandy France. Hardencourt-Cocherel Eure 27120. Villa heated pool hydrotherapy Normandy. 150m2 Norman longhouse 4 bedrooms 8 people. Near Giverny Monet Foundation 12km. MacArthurGlen 5km. Vernon 8km. Pacy-sur-Eure 6km. Paris 1h A13. Luxury villa rental Upper Normandy. Near Paris weekend getaway. Romantic weekend Normandy pool. Family stay 8 people Normandy. Villa fibre optic remote work workcation. Pierre Jacques owner WhatsApp +33601414173. Airbnb Normandy Giverny. Private garden 1700m2 no neighbours. King size master suite. Wood stove. Private terrace. Fully equipped kitchen. Secure parking. Baby cot. Les 3 Étangs Jouy-sur-Eure lake swimming. Luxury villa A13 Vernon exit. Normandy Paris weekend break. Couple retreat Normandy heated pool. Family holiday Normandy near Paris. Premium villa 8 people France.`;
