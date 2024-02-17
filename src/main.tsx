import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ThemeProviders from "config/theme/ThemeProvider.tsx";
import "./assets/global.css";

const Loading = () => {
  return (
    <>
      ... loading!
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProviders>
        <Suspense fallback={<Loading/>}>
          <App />
        </Suspense>
      </ThemeProviders>
    </BrowserRouter>
  </React.StrictMode>
);
