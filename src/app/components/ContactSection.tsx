import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Send, Phone, MapPin, Mail, CheckCircle } from "lucide-react";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", dates: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens WhatsApp or email with form data
    const msg = encodeURIComponent(
      `Bonjour Pierre,\n\nNom: ${form.name}\nEmail: ${form.email}\nTéléphone: ${form.phone}\nDates souhaitées: ${form.dates}\n\n${form.message}`
    );
    window.open(`https://wa.me/33601414173?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: "#0A0A0F",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "4px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "16px" }}>
            Contact
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.15,
              margin: "0 0 20px",
            }}
          >
            Parlons de votre
            <br />
            <em style={{ color: "#C9A96E", fontWeight: 400 }}>prochain séjour</em>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 600, color: "#fff", marginBottom: "32px" }}>
              Pierre Jacques
              <br />
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#C9A96E", letterSpacing: "1px", fontWeight: 400 }}>
                Propriétaire & Hôte
              </span>
            </h3>

            {[
              { icon: Phone, label: "Téléphone / WhatsApp", val: "+33 6 01 41 41 73", href: "tel:+33601414173" },
              { icon: Mail, label: "Email", val: "contact@villaheurtevents.fr", href: "mailto:contact@villaheurtevents.fr" },
              { icon: MapPin, label: "Localisation", val: "Hardencourt-Cocherel, Eure 27120\nHaute-Normandie, France", href: "https://maps.google.com/?q=Hardencourt-Cocherel" },
            ].map((c) => (
              <div
                key={c.label}
                style={{
                  display: "flex",
                  gap: "16px",
                  marginBottom: "24px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "rgba(201,169,110,0.1)",
                    border: "1px solid rgba(201,169,110,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <c.icon size={18} color="#C9A96E" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>
                    {c.label}
                  </div>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "14px",
                      color: "#fff",
                      textDecoration: "none",
                      whiteSpace: "pre-line",
                      lineHeight: 1.5,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C9A96E")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                  >
                    {c.val}
                  </a>
                </div>
              </div>
            ))}

            {/* Map embed placeholder */}
            <div
              style={{
                marginTop: "32px",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(201,169,110,0.15)",
                height: "200px",
                background: "rgba(255,255,255,0.03)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <MapPin size={32} color="#C9A96E" opacity={0.6} />
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
                Hardencourt-Cocherel, Eure
              </div>
              <a
                href="https://maps.google.com/?q=Hardencourt-Cocherel+27120"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "rgba(26,69,200,0.2)",
                  border: "1px solid rgba(26,69,200,0.4)",
                  color: "#fff",
                  padding: "8px 20px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "1px",
                }}
              >
                Ouvrir sur Google Maps
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {sent ? (
              <div
                style={{
                  background: "rgba(37,211,102,0.08)",
                  border: "1px solid rgba(37,211,102,0.3)",
                  borderRadius: "16px",
                  padding: "48px 32px",
                  textAlign: "center",
                }}
              >
                <CheckCircle size={48} color="#25D366" style={{ margin: "0 auto 20px", display: "block" }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", color: "#fff", marginBottom: "12px" }}>
                  Message envoyé !
                </h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                  Pierre vous répondra très rapidement via WhatsApp.
                  N'hésitez pas à l'appeler directement pour une réponse immédiate.
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{
                    marginTop: "24px",
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.7)",
                    padding: "10px 24px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "12px",
                  }}
                >
                  Nouveau message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,169,110,0.12)",
                  borderRadius: "16px",
                  padding: "36px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <InputField
                    label="Votre prénom & nom *"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                    placeholder="Marie Dupont"
                  />
                  <InputField
                    label="Email *"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    required
                    placeholder="marie@email.fr"
                  />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <InputField
                    label="Téléphone"
                    type="tel"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                    placeholder="+33 6 00 00 00 00"
                  />
                  <InputField
                    label="Dates souhaitées"
                    value={form.dates}
                    onChange={(v) => setForm({ ...form, dates: v })}
                    placeholder="Ex: 15–22 juillet 2025"
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "1px",
                      color: "rgba(255,255,255,0.5)",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    Votre message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Dites-nous en plus sur votre séjour idéal — nombre de personnes, occasion spéciale, besoins particuliers..."
                    rows={4}
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      padding: "12px 14px",
                      color: "#fff",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "13px",
                      resize: "none",
                      outline: "none",
                      lineHeight: 1.6,
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "rgba(201,169,110,0.4)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    background: "linear-gradient(135deg, #25D366, #128C7E)",
                    color: "#fff",
                    padding: "16px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "12px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    boxShadow: "0 6px 20px rgba(37,211,102,0.3)",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  <Send size={15} />
                  Envoyer via WhatsApp
                </button>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
                  Votre message sera envoyé à Pierre via WhatsApp
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InputField({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        style={{
          display: "block",
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "11px",
          letterSpacing: "1px",
          color: "rgba(255,255,255,0.5)",
          textTransform: "uppercase",
          marginBottom: "6px",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        style={{
          width: "100%",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "8px",
          padding: "12px 14px",
          color: "#fff",
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "13px",
          outline: "none",
          boxSizing: "border-box",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => { e.target.style.borderColor = "rgba(201,169,110,0.4)"; }}
        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
      />
    </div>
  );
}
