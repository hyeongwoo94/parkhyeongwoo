import { Route, Routes, useLocation  } from "react-router-dom";
import Home from "../pages/Home";
import CountPage from "../pages/CountPage";
import TodoPage from "../pages/TodoPage";
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
        <>
        <Routes>
            <Route>
                <Route path="/"  element={<Home />}  />
                <Route path="/en"  element={<Home />}  />
                <Route path="/ko"  element={<Home />}  />
            </Route>
        
            <Route element={<Layout />}>
                {/* 영어 URL 그룹 */}
                <Route path="/en/CountPage" element={<CountPage />} />
                <Route path="/en/TodoPage" element={<TodoPage />} />
                <Route path="/en/Sub2" element={<Sub2 />} />
                <Route path="/en/Counter" element={<Counter />} />

                {/* 한국어 URL 그룹 */}
                <Route path="/CountPage" element={<CountPage />} />
                <Route path="/TodoPage" element={<TodoPage />} />
                <Route path="/Sub2" element={<Sub2 />} />
                <Route path="/Counter" element={<Counter />} />
            </Route>
            
        </Routes>
        </>
  );
};
export default Router;