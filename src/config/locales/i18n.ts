import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import backend from "i18next-http-backend";
import HttpApi from 'i18next-http-backend'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  // .use(backend)
  .init({
    // lng: "en-US",
    fallbackLng: "en-US",
    supportedLngs: ["en-US", "fa-IR"],
    detection: {
      order: ["path" , "localStorage" , "htmlTag", "cookie", "subdomain","navigator"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    // saveMissing: true,
    // defaultNS: "translation",
    // interpolation: {
    //   escapeValue: false,
    // },
  });

export default i18n;
