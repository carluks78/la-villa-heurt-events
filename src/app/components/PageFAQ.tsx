import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export interface FAQItem {
  qFr: string;
  aFr: string;
  qEn: string;
  aEn: string;
}

interface PageFAQProps {
  items: FAQItem[];
  titleFr?: string;
  titleEn?: string;
}

export function PageFAQ({ items, titleFr = "Questions fréquentes", titleEn = "Frequently asked questions" }: PageFAQProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [open, setOpen] = useState<number | null>(null);
  const { lang } = useLanguage();

  return (
    <section ref={ref} style={{ background: "#0A0A0F", padding: "72px 0" }}>
      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "0 32px" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "4px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "10px" }}>FAQ</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 700, color: "#fff", margin: 0 }}>
            {lang === "fr" ? titleFr : titleEn}
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {items.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.05, duration: 0.5 }}
              style={{ background: "rgba(255,255,255,0.03)", border: open === i ? "1px solid rgba(201,169,110,0.3)" : "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", overflow: "hidden", transition: "border-color 0.3s" }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", background: "none", border: "none", padding: "18px 22px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "14px" }}>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#fff", lineHeight: 1.4 }}>
                  {lang === "fr" ? faq.qFr : faq.qEn}
                </span>
                <span style={{ color: "#C9A96E", fontSize: "20px", flexShrink: 0, transition: "transform 0.3s", transform: open === i ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block" }}>+</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: "hidden" }}>
                    <div style={{ padding: "0 22px 18px", fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                      {lang === "fr" ? faq.aFr : faq.aEn}
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
