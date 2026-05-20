import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import { SEOHead } from "./components/SEOHead";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { VillaSection } from "./components/VillaSection";
import { Rooms } from "./components/Rooms";
import { WellnessSection } from "./components/WellnessSection";
import { TourismSection } from "./components/TourismSection";
import { BookingSection } from "./components/BookingSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

import heroHome from "../imports/hero-home.png";
import salon1 from "../imports/salon-1.jpeg";
import salon2 from "../imports/salon_2.png";
import salon from "../imports/salon.png";
import chambre1 from "../imports/chambre_1_.png";
import chambre2 from "../imports/chambre_2.png";
import chambre3 from "../imports/chambre_3.png";
import chambre4 from "../imports/chambre_4.png";
import balneo from "../imports/balneo.png";

const GALLERY_IMAGES = [
  { src: heroHome, alt: "La Villa Heurt Events - Vue extérieure", label: "Extérieur" },
  { src: salon1, alt: "Salon chaleureux de la villa normande", label: "Salon" },
  { src: salon2, alt: "Espace séjour lumineux", label: "Séjour" },
  { src: salon, alt: "Intérieur élégant de la longère", label: "Intérieur" },
  { src: chambre1, alt: "Suite parentale king size", label: "Suite" },
  { src: chambre2, alt: "Chambre double élégante", label: "Chambre 2" },
  { src: chambre3, alt: "Chambre prestige normande", label: "Chambre 3" },
  { src: chambre4, alt: "Chambre avec vue sur la nature", label: "Chambre 4" },
  { src: balneo, alt: "Balnéothérapie et piscine chauffée", label: "Piscine & Spa" },
];

function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section
      id="galerie"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #0A0A0F 0%, #0c0c14 100%)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "4px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "16px" }}>
            Galerie
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Découvrez la villa{" "}
            <em style={{ color: "#C9A96E", fontWeight: 400 }}>en images</em>
          </h2>
        </motion.div>

        {/* Masonry-style grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto",
            gap: "12px",
          }}
          className="gallery-grid"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              onClick={() => setLightbox(i)}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "10px",
                cursor: "pointer",
                gridColumn: i === 0 ? "1 / 3" : "auto",
                gridRow: i === 0 ? "1 / 3" : "auto",
                aspectRatio: i === 0 ? "unset" : "4/3",
                minHeight: i === 0 ? "400px" : "auto",
              }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "filter 0.4s",
                  filter: "brightness(0.9) saturate(1.05)",
                }}
                onMouseEnter={(e) => { (e.target as HTMLImageElement).style.filter = "brightness(1) saturate(1.1)"; }}
                onMouseLeave={(e) => { (e.target as HTMLImageElement).style.filter = "brightness(0.9) saturate(1.05)"; }}
              />
              {/* Overlay on hover */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 50%, rgba(10,10,15,0.8) 100%)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  padding: "16px",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0"; }}
              >
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 600, color: "#fff", letterSpacing: "1px" }}>
                  {img.label}
                </span>
                <ZoomIn size={18} color="#C9A96E" />
              </div>
              {/* Gold border accent on hover */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  border: "1px solid rgba(201,169,110,0)",
                  borderRadius: "10px",
                  transition: "border-color 0.3s",
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9998,
              background: "rgba(0,0,0,0.95)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
              padding: "24px",
            }}
          >
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "24px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "50%",
                width: "44px",
                height: "44px",
                cursor: "pointer",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={GALLERY_IMAGES[lightbox].src}
              alt={GALLERY_IMAGES[lightbox].alt}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90vw",
                maxHeight: "85vh",
                objectFit: "contain",
                borderRadius: "8px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            />
            {/* Caption */}
            <div
              style={{
                position: "absolute",
                bottom: "24px",
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "1px",
                background: "rgba(0,0,0,0.6)",
                padding: "8px 20px",
                borderRadius: "100px",
                backdropFilter: "blur(8px)",
              }}
            >
              {GALLERY_IMAGES[lightbox].alt}
            </div>
            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l! - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); }}
              style={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                cursor: "pointer",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              ‹
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l! + 1) % GALLERY_IMAGES.length); }}
              style={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                cursor: "pointer",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .gallery-grid > div:first-child {
            grid-column: 1 / -1 !important;
            grid-row: auto !important;
            aspect-ratio: 16/9 !important;
            min-height: 220px !important;
          }
          .gallery-grid > div {
            aspect-ratio: 1 !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
          .gallery-grid > div {
            aspect-ratio: 16/9 !important;
            min-height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}

function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(null);

  const FAQS = [
    { q: "Quelle est la capacité maximale de la villa ?", a: "La Villa Heurt Events accueille jusqu'à 8 personnes confortablement avec ses 4 chambres et 2 salles de bains." },
    { q: "La piscine est-elle accessible toute l'année ?", a: "La piscine chauffée est disponible de mai à septembre. Hors saison, elle peut être accessible selon les conditions météo — contactez Pierre pour plus d'informations." },
    { q: "Quelle est la distance depuis Paris ?", a: "La villa se trouve à environ 80 km de Paris, soit environ 1 heure de trajet via l'A13. C'est la destination idéale pour une escapade depuis la capitale !" },
    { q: "La villa est-elle proche de Giverny ?", a: "Oui ! La Fondation Claude Monet et les jardins de Giverny sont à seulement 12 km, soit environ 15 minutes en voiture. C'est l'un des atouts majeurs de la villa." },
    { q: "Y a-t-il une connexion internet à la villa ?", a: "Absolument ! La villa est équipée de la fibre optique haut débit, parfaite pour le télétravail ou simplement rester connecté pendant votre séjour." },
    { q: "Les animaux de compagnie sont-ils acceptés ?", a: "Les animaux de compagnie ne sont malheureusement pas acceptés à la villa. N'hésitez pas à contacter Pierre pour discuter de situations particulières." },
    { q: "Quelles sont les heures d'arrivée et de départ ?", a: "L'arrivée (check-in) est possible à partir de 16h00 et le départ (check-out) est avant 11h00. Des arrangements flexibles peuvent être discutés avec Pierre." },
    { q: "Le parking est-il sécurisé ?", a: "Oui, la villa dispose d'un parking privé sécurisé sur le terrain clos de 1700m², sans vis-à-vis." },
  ];

  return (
    <section
      id="faq"
      ref={ref}
      style={{ background: "#0A0A0F", padding: "80px 0" }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "4px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "12px" }}>FAQ</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fff", margin: 0 }}>
            Questions fréquentes
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: open === i ? "1px solid rgba(201,169,110,0.3)" : "1px solid rgba(255,255,255,0.06)",
                borderRadius: "10px",
                overflow: "hidden",
                transition: "border-color 0.3s",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  padding: "20px 24px",
                  textAlign: "left",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                  color: "#fff",
                }}
              >
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 600, lineHeight: 1.4 }}>
                  {faq.q}
                </span>
                <span
                  style={{
                    color: "#C9A96E",
                    fontSize: "20px",
                    flexShrink: 0,
                    transition: "transform 0.3s",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    display: "inline-block",
                  }}
                >
                  +
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ padding: "0 24px 20px", fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div
      style={{
        background: "#0A0A0F",
        minHeight: "100vh",
        fontFamily: "'Montserrat', sans-serif",
        overflowX: "hidden",
      }}
    >
      <SEOHead />
      <Navigation />
      <Hero />
      <VillaSection />
      <Rooms />
      <WellnessSection />
      <GallerySection />
      <TourismSection />
      <BookingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />

      {/* Global styles */}
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #0A0A0F;
          color: #fff;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0A0A0F; }
        ::-webkit-scrollbar-thumb { background: #C9A96E; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #E8D5A3; }
        ::selection { background: rgba(201,169,110,0.3); color: #fff; }
        img { max-width: 100%; height: auto; }
        a { transition: color 0.2s; }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.3); }
      `}</style>
    </div>
  );
}
