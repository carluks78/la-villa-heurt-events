import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div style={{ background: "#0A0A0F", minHeight: "100vh", overflowX: "hidden" }}>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0A0A0F; color: #fff; -webkit-font-smoothing: antialiased; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0A0A0F; }
        ::-webkit-scrollbar-thumb { background: #C9A96E; border-radius: 3px; }
        ::selection { background: rgba(201,169,110,0.3); color: #fff; }
        img { max-width: 100%; height: auto; }
        a { transition: color 0.2s; }
      `}</style>
    </div>
  );
}
