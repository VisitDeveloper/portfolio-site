import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ThemeProviders from "config/theme/ThemeProvider.tsx";
import "./assets/global.css";
import { Providers } from "store/provider.tsx";

const Loading = () => {
  return <>... loading!</>;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Providers>
        <ThemeProviders>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProviders>
      </Providers>
    </Suspense>
  </React.StrictMode>
);
