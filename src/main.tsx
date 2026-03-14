import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter, Route, Routes } from "react-router";
import Home from "./pages/HomePage.tsx";
import Event from "./pages/EventPage.tsx";
import Blog from "./pages/BlogPage.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import AboutUsPage from "./pages/AboutUsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import IndividualTherapyPage from "./pages/IndividualTherapyPage.tsx";
import WorkplaceWellbeingPage from "./pages/WorkplaceWellbeingPage.tsx";
import IndividualBlogPage from "./pages/IndividualBlogPage.tsx";
import CollectivesPage from "./pages/CollectivesPage";
import Resources from "./pages/Resources";
import OurCollectivesPage from './pages/OurCollectivesPages.tsx';



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="events" element={<Event />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blogs/:slug" element={<IndividualBlogPage />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="/our-collectives" element={<OurCollectivesPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="services">
            <Route
                path="collectives"
                element={<CollectivesPage />}
              />
              <Route
                path="collectives/:slug"
                element={<IndividualTherapyPage />}
              />
              <Route
                path="workplace-wellbeing"
                element={<WorkplaceWellbeingPage />}
              />
            </Route>
          </Route>
        </Routes>
      </ScrollToTop>
    </HashRouter>
  </StrictMode>,
);
