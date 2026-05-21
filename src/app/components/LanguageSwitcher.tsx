import { useLanguage } from "../context/LanguageContext";

export function LanguageSwitcher() {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      onClick={toggleLang}
      title={lang === "fr" ? "Switch to English" : "Passer en français"}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(201,169,110,0.2)",
        borderRadius: "6px",
        padding: "5px 10px",
        cursor: "pointer",
        color: "#C9A96E",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "1px",
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(201,169,110,0.12)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; }}
    >
      {lang === "fr" ? "🇬🇧 EN" : "🇫🇷 FR"}
    </button>
  );
}
