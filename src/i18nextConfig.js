import i18n from "i18next";
import { resources } from "./config/languages.texts.ts";
import { initReactI18next } from "react-i18next";
import {
  languageDetector,
  languageDetectorOptions,
} from "./config/lang-detector.ts";

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    detection: languageDetectorOptions,
    resources,
    fallbackLng: ["pt", "en"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
