import { Route, Routes, useLocation  } from "react-router-dom";
import Home from "../pages/Home";
import Sub1 from "../pages/Sub1";
import Sub2 from "../pages/Sub2";
import Layout from "../components/styles/Layout";
import Counter from "../components/Counter";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// 라우터 정의
const Router = () => {

    const { i18n } = useTranslation();
  const location = useLocation();

  // ✅ URL이 /en으로 시작하면 영어, 아니면 한국어
  useEffect(() => {
    if (location.pathname.startsWith("/en")) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ko");
    }
  }, [location.pathname, i18n]);
  return (

      <Routes>
        <Route path="/"  element={<Layout hideHeaderFooter><Home /></Layout>}  />
        <Route path="/en"  element={<Layout hideHeaderFooter><Home /></Layout>}  />
        <Route path="/ko"  element={<Layout hideHeaderFooter><Home /></Layout>}  />
        <Route path="Sub1" element={<Layout><Sub1 /></Layout>} />
        <Route path="Sub2" element={<Layout><Sub2 /></Layout>} />
        <Route path="Counter" element={<Layout><Counter /></Layout>} />
      </Routes>

  );
};
export default Router;