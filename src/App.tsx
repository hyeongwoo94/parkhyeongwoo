import {useState, useEffect} from 'react'
import  Router  from './shared/Router'
import { useTranslation } from "react-i18next";
import "./shared/i18n"; // 초기화
import './App.scss'
import { FixdBtnLayout } from './components/styles/Btn';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
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
      document.body.setAttribute("data-lang", lang);
    }, [lang]);

    const toggleTheme = () => {
      setTheme(prev => (prev === "light" ? "dark" : "light"));
    };
    useEffect(() => {
      document.body.setAttribute("data-theme", theme); // body에 data-theme 적용
    }, [theme]);
    return (
      <>
        <FixdBtnLayout top='15px' right='15px'>
            <button className='lang_btn' onClick={toggleLanguage}>
              {lang === "ko" ? "En" : "Ko"}
            </button>
        </FixdBtnLayout>
        <FixdBtnLayout top='15px' left='15px'>
            <button onClick={toggleTheme}>
              {theme === "dark" ? <CiLight /> : <MdDarkMode />}
            </button>
        </FixdBtnLayout>
        <Router/>
      </>
    
    )
}

export default App
