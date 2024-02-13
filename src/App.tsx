import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { MainLayout } from "components/_index";
import React from "react";

const AboutPage = React.lazy(() => import('pages/About'));
const HomePage = React.lazy(() => import('pages/Home'));
const NotFoundPage = React.lazy(() => import('pages/NotFound'));

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence initial={true} mode={"wait"}>
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<HomePage/>} />
          </Route>
          <Route element={<MainLayout/>}>
            <Route path="/about" element={<AboutPage/>} />
          </Route>
          
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
