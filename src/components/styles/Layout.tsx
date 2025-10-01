import Header from './Header'
import Footer from './Footer'
import {useState, useEffect,} from 'react'
import { useTranslation } from "react-i18next";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { Outlet } from "react-router-dom";

export function ThemaBox(){
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const toggleTheme = () => {
      setTheme(prev => (prev === "light" ? "dark" : "light"));
    };
    useEffect(() => {
      document.body.setAttribute("data-theme", theme); // body에 data-theme 적용
    }, [theme]);
    return(
        <button onClick={toggleTheme}>
            {theme === "dark" ? <CiLight size={24} /> : <MdDarkMode size={24} />}
        </button>
    )
}

export function LangBox() {
        const { i18n } = useTranslation();
        const [lang, setLang] = useState("ko");


        const toggleLanguage = () => {
        const newLang = lang === "ko" ? "en" : "ko"; // 현재 언어 반대
        i18n.changeLanguage(newLang);
        setLang(newLang);
        };

        useEffect(() => {
        document.body.setAttribute("data-lang", lang);
        }, [lang]);
    return(
            <button className='lang_btn' onClick={toggleLanguage}>
                {lang === "ko" ? "En" : "Ko"}
            </button>
    )
}

function Layout() {



  return (
    <>
        <Header />
            <main>
                <Outlet />
            </main>
        <Footer />
        <div className='fixed_btn_layout'>
            <div className='fixed_btn'>
                <LangBox />
                <ThemaBox />
            </div>
        </div>
    </>
  );
}

export default Layout;