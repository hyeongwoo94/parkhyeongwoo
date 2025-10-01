import  React from 'react';
import styled from 'styled-components';
import { useState } from "react"
// import { useNavigate, useLocation } from "react-router-dom";
// import { headerMenu } from '../../redux/config/MockData';
import { CodeViewBtn } from '../../assets/svg/SvgCode';
import ExplaninModal from '../ExplaninModal';
import { HeaderExplain } from '../explain/HeaderExplain';
import { useTranslation } from 'react-i18next'; // 언어변경
import { Link } from 'react-router-dom';

const HeaderStyle = styled.div`
`;


function Header() {
    const [open,setOpen] = useState(false);
    // const location = useLocation();
    // const navigate = useNavigate();
    const [openModal,setOpenModal] = useState(false);
    const { t: tMenu } = useTranslation("headerMenu"); // headerMenu 안의 것들만 가져오기
    return (
        <>
            <HeaderStyle className="header">
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
            </HeaderStyle>
            <div className={`header_menu ${open ? "open" : ""}`} >
                <ul className='header_menu_list'>
                    {/* {headerMenu.map((menu, idx) => {
                        const isActive = location.pathname.includes(menu.path); // ✅ 현재 URL 비교
                        return (
                        <li
                            key={idx}
                            className={isActive ? "on" : ""}
                            onClick={() => navigate(menu.path)}
                        >
                            <p>{tMenu(menu.title)}</p>
                        </li>
                        );
                    })} */}
                    <li>
                        <Link to="/CountPage">{tMenu('count')}</Link>
                    </li>
                    <li>
                        <Link to="/TodoPage">{tMenu('todo')}</Link>
                    </li>
                    <li>
                        <Link to="/">{tMenu('weather')}</Link>
                    </li>
                    <li>
                        <Link to="/">{tMenu('shop')}</Link>
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