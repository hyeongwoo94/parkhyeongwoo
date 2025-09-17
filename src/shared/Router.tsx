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
    <Layout>
      <Routes>
				{/* 
						Routes안에 이렇게 작성합니다. 
						Route에는 react-router-dom에서 지원하는 props들이 있습니다.

						path는 우리가 흔히 말하는 사용하고싶은 "주소"를 넣어주면 됩니다.
						element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어줍니다.
				 */}
        <Route path="/" element={<Home />} />
        <Route path="Sub1" element={<Sub1 />} />
        <Route path="Sub2" element={<Sub2 />} />
        <Route path="Counter" element={<Counter />} />
      </Routes>
    </Layout>
    </HashRouter>
  );
};
export default Router;