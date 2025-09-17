// src/i18n/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./en";
import { ko } from "./ko";

i18n
  .use(initReactI18next)
  .init({
    resources: { en, ko },
    lng: "ko", // 기본 언어
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
