import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { MainLayout } from "components/_index";
import React from "react";

const AboutPage = React.lazy(() => import("pages/About"));
const ContactPage = React.lazy(() => import("pages/Contact"));
const HomePage = React.lazy(() => import("pages/Home"));
const NotFoundPage = React.lazy(() => import("pages/NotFound"));
const ProjectsPage = React.lazy(() => import("pages/ProjectsPage"));
const ProjectsPageById = React.lazy(() => import("pages/ProjectsPageById"));

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence initial={true} mode={"wait"}>
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/about" element={<AboutPage />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/project" element={<ProjectsPage />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/project/:ID" element={<ProjectsPageById />} />
          </Route>

          <Route element={<MainLayout />}>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
