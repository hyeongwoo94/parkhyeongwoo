import ErpPage from "../../components/styles/ErpPage"
import styled from 'styled-components';
import ErpSub1 from "./ErpSub1";
import ErpSub2 from "./ErpSub2";
import ErpSub3 from "./ErpSub3";
import ErpSub4 from "./ErpSub4";
import { useState } from "react";

const ErpLayout = styled.div`
   display: flex;
   height: 100%;
`;
const ErpHeader = styled.div`
   width: 15%;
   padding: 20px;
   box-sizing: border-box;
`;
const Erpcontant = styled.div`
   flex: 1;
`;
function ErpHome(){
    const [activeMenu, setActiveMenu] = useState(1)
    return(
        <>
            <ErpPage>
                <ErpLayout>
                    <ErpHeader>
                        <ul>
                            <li>
                                <button  onClick={() => setActiveMenu(1)}>메뉴1</button>
                            </li>
                            <li>
                                <button  onClick={() => setActiveMenu(2)}>메뉴2</button>
                            </li>
                            <li>
                                <button  onClick={() => setActiveMenu(3)}>메뉴3</button>
                            </li>
                            <li>
                                <button  onClick={() => setActiveMenu(4)}>메뉴4</button>
                            </li>
                        </ul>
                    </ErpHeader>
                    <Erpcontant>
                        <div>
                            <button>
                                새글 작성하기
                            </button>
                        </div>
                        {activeMenu === 1 && <ErpSub1 />}
                        {activeMenu === 2 && <ErpSub2 />}
                        {activeMenu === 3 && <ErpSub3 />}
                        {activeMenu === 4 && <ErpSub4 />}
                    </Erpcontant>
                </ErpLayout>
            </ErpPage>
        </>
    )
}
export default ErpHome