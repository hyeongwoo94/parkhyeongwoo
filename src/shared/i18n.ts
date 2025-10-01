// src/i18n/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./en";
import { ko } from "./ko";
import LanguageDetector from "i18next-browser-languagedetector";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en, ko },
    lng: localStorage.getItem("lang") || "ko",
    fallbackLng: "ko", // 기본 언어
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
