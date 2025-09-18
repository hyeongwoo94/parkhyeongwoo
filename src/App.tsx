import {useState, useEffect} from 'react'
import  Router  from './shared/Router'
import { useTranslation } from "react-i18next";
import "./shared/i18n"; // 초기화
import './App.scss'
import './_common.scss'
import { Btn, FixdBtnLayout } from './components/styles/Btn';

function App() {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState("ko");
     const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleLanguage = () => {
      const newLang = lang === "ko" ? "en" : "ko"; // 현재 언어 반대
      i18n.changeLanguage(newLang);
      setLang(newLang);
    };
    useEffect(() => {
      document.body.setAttribute("data-theme", theme); // body에 data-theme 적용
    }, [theme]);
    const toggleTheme = () => {
      setTheme(prev => (prev === "light" ? "dark" : "light"));
    };
    return (
      <>
        <FixdBtnLayout bottom='10px' right='10px'>
            <Btn onClick={toggleLanguage}>
              {lang === "ko" ? "English로 변경" : "한국어로 변경"}
            </Btn>
        </FixdBtnLayout>
        <FixdBtnLayout top='10px' right='100px'>
            <Btn onClick={toggleTheme}>
              {theme === "dark" ? "light" : "dark"}
            </Btn>
        </FixdBtnLayout>
        <Router/>
      </>
    
    )
}

export default App
