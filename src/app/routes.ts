import { createBrowserRouter } from "react-router";
import { Root } from "./layouts/Root";
import { HomePage } from "./pages/HomePage";
import { VillaPage } from "./pages/VillaPage";
import { ChambresPage } from "./pages/ChambresPage";
import { PiscinePage } from "./pages/PiscinePage";
import { ActivitesPage } from "./pages/ActivitesPage";
import { GaleriePage } from "./pages/GaleriePage";
import { ReservationPage } from "./pages/ReservationPage";
import { ContactPage } from "./pages/ContactPage";
import { AccesPage } from "./pages/AccesPage";
import { ConsignesPage } from "./pages/ConsignesPage";
import { FAQPage } from "./pages/FAQPage";
import { SejoursPage } from "./pages/SejoursPage";
import { TarifPage } from "./pages/TarifPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import {
  GeoGivernyPage,
  GeoEurePage,
  GeoPiscineNormandiePage,
  GeoParisMaisonPage,
  GeoWeekendRomantiquePage,
  GeoVillaLuxePage,
  GeoVernonPage,
  GeoPiscineChauffeePage,
  GeoHardencourtPage,
  GeoPacyPage,
} from "./pages/GeoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "la-villa", Component: VillaPage },
      { path: "chambres", Component: ChambresPage },
      { path: "piscine-bien-etre", Component: PiscinePage },
      { path: "activites", Component: ActivitesPage },
      { path: "galerie", Component: GaleriePage },
      { path: "reservation", Component: ReservationPage },
      { path: "contact", Component: ContactPage },
      { path: "acces", Component: AccesPage },
      { path: "consignes", Component: ConsignesPage },
      { path: "faq", Component: FAQPage },
      { path: "idees-sejours", Component: SejoursPage },
      { path: "tarifs", Component: TarifPage },
      // GEO SEO landing pages
      { path: "location-villa-giverny", Component: GeoGivernyPage },
      { path: "location-vacances-eure", Component: GeoEurePage },
      { path: "villa-avec-piscine-normandie", Component: GeoPiscineNormandiePage },
      { path: "maison-vacances-proche-paris", Component: GeoParisMaisonPage },
      { path: "weekend-romantique-normandie", Component: GeoWeekendRomantiquePage },
      { path: "villa-luxe-haute-normandie", Component: GeoVillaLuxePage },
      { path: "location-saisonniere-vernon", Component: GeoVernonPage },
      { path: "location-maison-piscine-chauffee-normandie", Component: GeoPiscineChauffeePage },
      { path: "villa-hardencourt-cocherel", Component: GeoHardencourtPage },
      { path: "location-villa-pacy-sur-eure", Component: GeoPacyPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
