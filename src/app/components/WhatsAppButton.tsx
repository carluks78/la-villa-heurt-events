import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const PHONE = "+33601414173";
const WA_LINK = `https://wa.me/33601414173?text=${encodeURIComponent("Bonjour Pierre, je souhaite des informations sur La Villa Heurt Events.")}`;

const MESSAGES = [
  { lang: "fr", text: "Salut ! Vous souhaitez des informations supplémentaires ?" },
  { lang: "en", text: "Hi! Would you like more information?" },
];

export function WhatsAppButton() {
  const [showPopup, setShowPopup] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  useEffect(() => {
    if (showPopup) {
      intervalRef.current = setInterval(() => {
        setMsgIndex((i) => (i + 1) % MESSAGES.length);
      }, 3500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [showPopup]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopup(false);
    setDismissed(true);
  };

  const handleButtonClick = () => {
    if (dismissed || !showPopup) {
      setShowPopup(true);
      setDismissed(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "12px",
      }}
    >
      {/* Popup bubble */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            style={{
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(12px)",
              borderRadius: "16px",
              padding: "14px 16px",
              maxWidth: "260px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(37,211,102,0.15)",
              border: "1px solid rgba(37,211,102,0.2)",
              position: "relative",
            }}
          >
            {/* Close button */}
            <button
              onClick={handleDismiss}
              style={{
                position: "absolute",
                top: "6px",
                right: "8px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#999",
                padding: "2px",
                display: "flex",
                alignItems: "center",
              }}
              aria-label="Fermer"
            >
              <X size={14} />
            </button>

            {/* WA icon small */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#25D366",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2px",
                }}
              >
                <WhatsAppIcon size={18} color="#fff" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#075E54",
                    fontFamily: "'Montserrat', sans-serif",
                    marginBottom: "4px",
                  }}
                >
                  Pierre Jacques
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={msgIndex}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      fontSize: "13px",
                      color: "#222",
                      margin: 0,
                      lineHeight: "1.45",
                      fontFamily: "'Montserrat', sans-serif",
                      paddingRight: "16px",
                    }}
                  >
                    {MESSAGES[msgIndex].text}
                  </motion.p>
                </AnimatePresence>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#aaa",
                    marginTop: "6px",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {MESSAGES[msgIndex].lang === "fr" ? "Répondez maintenant" : "Reply now"} ›
                </div>
              </div>
            </div>

            {/* Triangle pointer */}
            <div
              style={{
                position: "absolute",
                bottom: "-8px",
                right: "26px",
                width: 0,
                height: 0,
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "8px solid rgba(255,255,255,0.97)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp button */}
      <motion.a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Pierre Jacques sur WhatsApp"
        onClick={handleButtonClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.5), 0 2px 8px rgba(0,0,0,0.2)",
          cursor: "pointer",
          textDecoration: "none",
          position: "relative",
        }}
      >
        {/* Pulsing ring */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "2px solid #25D366",
          }}
        />
        <WhatsAppIcon size={30} color="#fff" />
      </motion.a>
    </div>
  );
}

function WhatsAppIcon({ size = 24, color = "#fff" }: { size?: number; color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
