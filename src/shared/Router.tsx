import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Sub1 from "../pages/Sub1";
import Sub2 from "../pages/Sub2";
import Layout from "../components/styles/Layout";
import Counter from "../components/Counter";


// 라우터 정의
const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/"  element={<Layout hideHeaderFooter><Home /></Layout>}  />
        <Route path="Sub1" element={<Layout><Sub1 /></Layout>} />
        <Route path="Sub2" element={<Layout><Sub2 /></Layout>} />
        <Route path="Counter" element={<Layout><Counter /></Layout>} />
      </Routes>
    </HashRouter>
  );
};
export default Router;