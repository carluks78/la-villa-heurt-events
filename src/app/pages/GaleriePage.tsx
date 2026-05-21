import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import { SEOHead, SEO_GEO_BLOCK_FR, SEO_GEO_BLOCK_EN } from "../components/SEOHead";
import { PageHero } from "../components/PageHero";
import { InternalLinks } from "../components/InternalLinks";
import { useLanguage } from "../context/LanguageContext";

import heroHome from "../../imports/hero-home.png";
import salon1 from "../../imports/salon-1.jpeg";
import salon2 from "../../imports/salon_2.png";
import salon from "../../imports/salon.png";
import chambre1 from "../../imports/chambre_1_.png";
import chambre2 from "../../imports/chambre_2.png";
import chambre3 from "../../imports/chambre_3.png";
import chambre4 from "../../imports/chambre_4.png";
import balneo from "../../imports/balneo.png";
import piscine from "../../imports/piscine.JPG";
import piscine1 from "../../imports/piscine-1.JPG";
import img4937 from "../../imports/IMG_4937.JPG";
import img4939 from "../../imports/IMG_4939.JPG";
import img4940 from "../../imports/IMG_4940.JPG";
import img4941 from "../../imports/IMG_4941.JPG";
import cuisine from "../../imports/cuisine.JPG";
import cuisine1 from "../../imports/cuisine1.JPG";
import cuisine2 from "../../imports/cuisine2.JPG";

const IMAGES_FR = [
  { src: heroHome, alt: "La Villa Heurtés Vents — Vue extérieure, longère normande en pierre", label: "Extérieur" },
  { src: piscine, alt: "Piscine chauffée de La Villa Heurtés Vents — eau tempérée", label: "Piscine" },

  { src: piscine1, alt: "Piscine privée et jardin clos de la villa normande", label: "Piscine & Jardin" },

  { src: salon1, alt: "Salon chaleureux de la villa normande", label: "Salon" },
  { src: salon2, alt: "Espace séjour lumineux de la longère", label: "Séjour" },
  { src: salon, alt: "Intérieur élégant de la longère normande", label: "Intérieur" },

  { src: chambre1, alt: "Suite parentale king size — La Villa Heurtés Vents", label: "Suite parentale" },
  { src: chambre2, alt: "Chambre double élégante", label: "Chambre 2" },
  { src: chambre3, alt: "Chambre prestige normande", label: "Chambre 3" },
  { src: chambre4, alt: "Chambre avec vue sur la nature", label: "Chambre 4" },

  { src: balneo, alt: "Balnéothérapie et espace détente", label: "Balnéothérapie" },

  { src: IMG4937, alt: "Vue de la villa normande et son jardin privatif", label: "Villa & Jardin" },
  { src: IMG4939, alt: "Espace extérieur de La Villa Heurtés Vents", label: "Extérieur" },
  { src: IMG4940, alt: "Terrasse et jardin clos 1700m²", label: "Terrasse" },
  { src: IMG4941, alt: "La Villa Heurtés Vents — Normandie, Eure", label: "La Villa" },

  { src: cuisine, alt: "Cuisine équipée haut de gamme de La Villa Heurtés Vents", label: "Cuisine" },
  { src: cuisine1, alt: "Cuisine américaine avec bar et équipements premium", label: "Cuisine équipée" },
  { src: cuisine2, alt: "Espace cuisine lumineux de la villa normande", label: "Cuisine & Séjour" },
];

const IMAGES_EN = [
  { src: heroHome, alt: "La Villa Heurtés Vents — Exterior view, stone Norman longhouse", label: "Exterior" },
  { src: piscine, alt: "Heated pool at La Villa Heurtés Vents — temperature-controlled water", label: "Pool" },
  { src: piscine1, alt: "Private pool and enclosed garden of the Norman villa", label: "Pool & Garden" },
  { src: salon1, alt: "Cosy living room of the Norman villa", label: "Living room" },
  { src: salon2, alt: "Bright lounge area of the longhouse", label: "Lounge" },
  { src: salon, alt: "Elegant interior of the Norman longhouse", label: "Interior" },
  { src: chambre1, alt: "King size master suite — La Villa Heurtés Vents", label: "Master suite" },
  { src: chambre2, alt: "Elegant double room", label: "Bedroom 2" },
  { src: chambre3, alt: "Prestige Norman bedroom", label: "Bedroom 3" },
  { src: chambre4, alt: "Bedroom with nature view", label: "Bedroom 4" },
  { src: balneo, alt: "Hydrotherapy and relaxation area", label: "Hydrotherapy" },
  { src: img4937, alt: "Norman villa and its private garden", label: "Villa & Garden" },
  { src: img4939, alt: "Exterior space of La Villa Heurtés Vents", label: "Exterior" },
  { src: img4940, alt: "Terrace and 1700m² enclosed garden", label: "Terrace" },
  { src: img4941, alt: "La Villa Heurtés Vents — Normandy, Eure", label: "The Villa" },
  { src: cuisine, alt: "Premium equipped kitchen at La Villa Heurtés Vents", label: "Kitchen" },
{ src: cuisine1, alt: "American kitchen with bar and premium appliances", label: "Equipped kitchen" },
{ src: cuisine2, alt: "Bright kitchen area of the Norman villa", label: "Kitchen & Lounge" },
];

export function GaleriePage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { lang } = useLanguage();
  const images = lang === "fr" ? IMAGES_FR : IMAGES_EN;

  return (
    <>
      <SEOHead
        title={lang === "fr" ? "Galerie Photos | La Villa Heurtés Vents — Villa Luxe Normandie" : "Photo Gallery | La Villa Heurtés Vents — Luxury Villa Normandy"}
        description={lang === "fr" ? "Galerie photos de La Villa Heurtés Vents : extérieur, salon, chambres, piscine chauffée, balnéothérapie. Location villa luxe Normandie." : "Photo gallery of La Villa Heurtés Vents: exterior, living room, bedrooms, heated pool, hydrotherapy. Luxury villa rental Normandy."}
        path="/galerie"
        keywords="galerie photos villa normandie, photos villa heurtés vents, photos longère normande, photos salon villa normandie, photos chambre villa normandie, photos piscine chauffée normandie, photos balnéothérapie normandie, photos extérieur villa normandie, photos jardin villa normandie, intérieur villa normandie photos, villa normandie images, villa luxe normandie photos, photos villa eure 27120, visite virtuelle villa normandie, photos villa hardencourt-cocherel, villa normande photo, photos villa proche giverny, photos villa proche paris, photos villa prestige normandie, photos villa piscine normandie, suite parentale photos normandie, salon cosy villa normandie"
      />
      <div style={{ paddingTop: "60px" }}>
        <PageHero
          title={lang === "fr" ? "Galerie" : "Gallery"}
          titleAccent={lang === "fr" ? "Photos" : "Photos"}
          subtitle={lang === "fr" ? "Découvrez La Villa Heurtés Vents en images — intérieur, extérieur, chambres, piscine." : "Discover La Villa Heurtés Vents in pictures — interior, exterior, bedrooms, pool."}
          image={heroHome}
          breadcrumb={[{ label: lang === "fr" ? "Accueil" : "Home", to: "/" }]}
          currentPage={lang === "fr" ? "Galerie" : "Gallery"}
        />

        <section ref={ref} style={{ background: "#0A0A0F", padding: "72px 0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }} className="gallery-grid">
              {images.map((img, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.96 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: i * 0.06, duration: 0.6 }}
                  onClick={() => setLightbox(i)}
                  style={{ position: "relative", overflow: "hidden", borderRadius: "10px", cursor: "pointer", gridColumn: i === 0 ? "1 / 3" : "auto", gridRow: i === 0 ? "1 / 3" : "auto", aspectRatio: i === 0 ? "unset" : "4/3", minHeight: i === 0 ? "400px" : "auto" }}
                  whileHover={{ scale: 1.02 }}>
                  <img src={img.src} alt={img.alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.9) saturate(1.05)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(10,10,15,0.8) 100%)", opacity: 0, transition: "opacity 0.3s", display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "16px" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0"; }}>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 600, color: "#fff", letterSpacing: "1px" }}>{img.label}</span>
                    <ZoomIn size={18} color="#C9A96E" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
              style={{ position: "fixed", inset: 0, zIndex: 9998, background: "rgba(0,0,0,0.95)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)", padding: "24px" }}>
              <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: "20px", right: "24px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <X size={20} />
              </button>
              <motion.img initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                src={images[lightbox].src} alt={images[lightbox].alt}
                onClick={(e) => e.stopPropagation()}
                style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", borderRadius: "8px" }} />
              <div style={{ position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)", fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.6)", background: "rgba(0,0,0,0.6)", padding: "7px 18px", borderRadius: "100px" }}>
                {images[lightbox].alt}
              </div>
              <button onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l! - 1 + images.length) % images.length); }}
                style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", width: "48px", height: "48px", cursor: "pointer", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>‹</button>
              <button onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l! + 1) % images.length); }}
                style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", width: "48px", height: "48px", cursor: "pointer", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>›</button>
            </motion.div>
          )}
        </AnimatePresence>

        <InternalLinks exclude="/galerie" />
        <div style={{ display: "none" }} aria-hidden="true">{lang === "fr" ? SEO_GEO_BLOCK_FR : SEO_GEO_BLOCK_EN}</div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: 1fr 1fr !important; }
          .gallery-grid > div:first-child { grid-column: 1 / -1 !important; grid-row: auto !important; aspect-ratio: 16/9 !important; min-height: 220px !important; }
          .gallery-grid > div { aspect-ratio: 1 !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
          .gallery-grid > div { aspect-ratio: 16/9 !important; min-height: 180px !important; }
        }
      `}</style>
    </>
  );
}
