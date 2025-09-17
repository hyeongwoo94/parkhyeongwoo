import {useState} from 'react'
import  Router  from './shared/Router'
import { useTranslation } from "react-i18next";
import "./shared/i18n"; // 초기화
import './App.scss'
import './_common.scss'
import { FixdBtnLayout } from './components/styles/Btn';

function App() {
  const { t, i18n } = useTranslation();
   const [lang, setLang] = useState("ko");

    const toggleLanguage = () => {
      const newLang = lang === "ko" ? "en" : "ko"; // 현재 언어 반대
      i18n.changeLanguage(newLang);
      setLang(newLang);
    };
    return (
      <>
      <FixdBtnLayout bottom='10px' right='10px'>
          <button onClick={toggleLanguage}>
          {lang === "ko" ? "English로 변경" : "한국어로 변경"}
        </button>
        <p>{t("welcome")}</p>
      </FixdBtnLayout>
        <Router/>
      </>
    
    )
}

export default App
