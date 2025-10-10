import  React from 'react';
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import { headerMenu } from '../../redux/config/MockData';
import { CodeViewBtn } from '../../assets/svg/SvgCode';
import ExplaninModal from '../ExplaninModal';
import { HeaderExplain } from '../explain/HeaderExplain';
import { useTranslation } from 'react-i18next'; // 언어변경


function Header() {
    const [open,setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [openModal,setOpenModal] = useState(false);
    const { t: tMenu } = useTranslation("headerMenu"); // headerMenu 안의 것들만 가져오기
    return (
        <>
            <div className="header">
                <div className='main_cont_w header_layout'>
                    <div className='header_logo'>
                        로고위치
                    </div>
                    <button type="button" className={`header_btn ${open ? "open" : ""}`} onClick={() => setOpen(open => !open)}>
                        <div className='header_btn_item _1'></div>
                        <div className='header_btn_item _2'></div>
                        <div className='header_btn_item _3'></div>
                    </button>
                </div>
            </div>
            <div className={`header_menu ${open ? "open" : ""}`} >
                <ul className='header_menu_list'>
                    {/* 언어변경이 있기때문에 목데이터에서 언어변경의 변수값이 나오도록 만들기 */}
                    {headerMenu.map((menu, idx) => {
                        const isActive = location.pathname.includes(menu.path); // ✅ 현재 URL 비교
                        return (
                        <li
                            key={idx}
                            className={isActive ? "on" : ""}
                            onClick={() => {
                                    setOpen(false);            // ✅ 메뉴 클릭 시 open 닫기
                                    navigate(menu.path);       // ✅ 페이지 이동
                                }}
                        >
                            <p>{tMenu(menu.title)}</p>
                        </li>
                        );
                    })}
                    <li>
                        <a target='_blank' href="https://hyeongwoo94.github.io/parkhyeongwoo_vue/"><p>Vue</p></a>
                    </li>
                </ul>
                <div className='header_code_btn'  onClick={()=> setOpenModal(openModal =>!openModal)}>
                    <CodeViewBtn/>
                </div>
            </div>
            {openModal === true ? <ExplaninModal onClose={()=> setOpenModal(false)} content={<HeaderExplain />}></ExplaninModal> : ""}
        </>
    );
}

export default React.memo(Header)