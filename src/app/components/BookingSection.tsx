import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Calendar, ExternalLink, Phone, Star, Shield, Clock, Users } from "lucide-react";

const REVIEWS = [
  { name: "Sophie M.", flag: "🇫🇷", rating: 5, text: "Un séjour absolument magique ! La piscine chauffée, le calme, la balnéothérapie... On se sent dans un hôtel 5 étoiles. Pierre est un hôte extraordinaire.", date: "Septembre 2024" },
  { name: "James & Claire", flag: "🇬🇧", rating: 5, text: "Incredible place, just 1 hour from Paris. The heated pool, the beautiful countryside, the spacious villa... Perfect for our family vacation. Highly recommended!", date: "Août 2024" },
  { name: "Marie-Laure B.", flag: "🇫🇷", rating: 5, text: "Week-end romantique parfait. La villa est encore plus belle qu'en photos. Très bien équipée, magnifique jardin, excellent accueil de Pierre. On reviendra sans hésiter !", date: "Juin 2024" },
];

const PRICING = [
  { label: "2 nuits minimum", price: "À partir de 459€", detail: "Durée minimum / jusqu'à 8 personnes" },
  { label: "Semaine (-10%)", price: "À partir de 2 900€", detail: "7 nuits / réduction semaine incluse" },
  { label: "Mois (-30%)", price: "Tarif mensuel", detail: "30 nuits / réduction long séjour" },
];

export function BookingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="reservation"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #0A0A0F 0%, #08081A 100%)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "1000px",
          height: "500px",
          background: "radial-gradient(ellipse, rgba(107,26,46,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "4px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "16px" }}>
            Réservation
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.1,
              margin: "0 0 20px",
            }}
          >
            Réservez votre
            <br />
            <em style={{ color: "#C9A96E", fontWeight: 400 }}>séjour de rêve</em>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "40px",
            marginBottom: "72px",
          }}
        >
          {/* Airbnb CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              background: "linear-gradient(135deg, rgba(26,69,200,0.15) 0%, rgba(26,69,200,0.05) 100%)",
              border: "1px solid rgba(26,69,200,0.3)",
              borderRadius: "20px",
              padding: "40px 32px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #FF5A5F, #E94057)",
                margin: "0 auto 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(255,90,95,0.35)",
              }}
            >
              <ExternalLink size={28} color="#fff" />
            </div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "24px",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "12px",
              }}
            >
              Réserver sur Airbnb
            </h3>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.7,
                marginBottom: "28px",
              }}
            >
              Paiement sécurisé, annulation flexible, protection voyageur garantie.
              Consultez les disponibilités en temps réel et réservez en quelques clics.
            </p>
            <a
              href="https://www.airbnb.com/slink/04z2yC75"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "linear-gradient(135deg, #FF5A5F, #E94057)",
                color: "#fff",
                padding: "16px",
                borderRadius: "8px",
                textDecoration: "none",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "13px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontWeight: 700,
                boxShadow: "0 6px 20px rgba(255,90,95,0.35)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = "translateY(0)"; }}
            >
              Voir les disponibilités →
            </a>
          </motion.div>

          {/* WhatsApp direct */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              background: "linear-gradient(135deg, rgba(37,211,102,0.1) 0%, rgba(37,211,102,0.03) 100%)",
              border: "1px solid rgba(37,211,102,0.25)",
              borderRadius: "20px",
              padding: "40px 32px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                margin: "0 auto 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(37,211,102,0.35)",
              }}
            >
              <Phone size={28} color="#fff" />
            </div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "24px",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "4px",
              }}
            >
              Pierre Jacques
            </h3>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "12px",
                color: "#25D366",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Votre hôte · Réponse rapide
            </p>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.7,
                marginBottom: "28px",
              }}
            >
              Des questions sur la villa ? Souhaitez un tarif sur mesure ou une disponibilité
              particulière ? Pierre répond en général sous 1 heure.
            </p>
            <a
              href="https://wa.me/33601414173?text=Bonjour%20Pierre%2C%20je%20souhaite%20des%20informations%20sur%20La%20Villa%20Heurt%20Events."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                color: "#fff",
                padding: "16px",
                borderRadius: "8px",
                textDecoration: "none",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "13px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontWeight: 700,
                boxShadow: "0 6px 20px rgba(37,211,102,0.3)",
                marginBottom: "12px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = "translateY(0)"; }}
            >
              WhatsApp — +33 6 01 41 41 73
            </a>
            <a
              href="tel:+33601414173"
              style={{
                display: "block",
                background: "transparent",
                color: "rgba(255,255,255,0.7)",
                padding: "12px",
                borderRadius: "8px",
                textDecoration: "none",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "12px",
                letterSpacing: "1px",
                border: "1px solid rgba(255,255,255,0.15)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.35)";
                (e.target as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                (e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)";
              }}
            >
              📞 Appeler directement
            </a>
          </motion.div>
        </div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ marginBottom: "72px" }}
        >
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "28px",
              fontWeight: 600,
              color: "#fff",
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            Tarifs indicatifs
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
            {PRICING.map((p, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,169,110,0.15)",
                  borderRadius: "12px",
                  padding: "24px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px" }}>
                  {p.label}
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 700, color: "#C9A96E", marginBottom: "8px" }}>
                  {p.price}
                </div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                  {p.detail}
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.35)", marginTop: "16px" }}>
            * Tarifs variables selon la saison. Consultez Airbnb pour les prix actuels.
          </p>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "72px",
          }}
        >
          {[
            { icon: Shield, label: "Paiement sécurisé", sub: "Via Airbnb" },
            { icon: Clock, label: "Réponse rapide", sub: "< 1 heure" },
            { icon: Calendar, label: "Annulation flexible", sub: "Selon conditions" },
            { icon: Users, label: "Jusqu'à 8 personnes", sub: "4 chambres" },
          ].map((g) => (
            <div
              key={g.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                minWidth: "120px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(201,169,110,0.08)",
                  border: "1px solid rgba(201,169,110,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <g.icon size={20} color="#C9A96E" />
              </div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#fff", textAlign: "center" }}>
                {g.label}
              </div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.4)", textAlign: "center" }}>
                {g.sub}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "28px",
              fontWeight: 600,
              color: "#fff",
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            Avis de nos hôtes
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,169,110,0.12)",
                  borderRadius: "16px",
                  padding: "28px",
                }}
              >
                <div style={{ display: "flex", gap: "3px", marginBottom: "16px" }}>
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} size={14} fill="#C9A96E" color="#C9A96E" />
                  ))}
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px", fontStyle: "italic", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: "20px" }}>
                  "{r.text}"
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "20px" }}>{r.flag}</span>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#C9A96E" }}>
                      {r.name}
                    </span>
                  </div>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>
                    {r.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
