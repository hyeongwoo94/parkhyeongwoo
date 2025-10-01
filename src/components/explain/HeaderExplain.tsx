import  React from 'react';
import CodeView from "../CodeView"
import {headerMenuList} from '../../redux/config/MockData';

export const HeaderExplain = React.memo(function Btn() {
    return(
        <>
            <div className="code_explain">
                <div className="code_explain_box">
                    <h3 className="code_explain_title">기획</h3>
                    <ul className="code_explain_ul">
                       <li>1.목데이터로 메뉴 자동추가</li>
                       <li>2.url을 확인 후 해당 페이지 on 처리</li>
                       <li>3.삼항연산자 사용하여 모달 보여주고 없애기</li>
                    </ul>
                </div>
                <div className="code_explain_box">
                    <h3 className="code_explain_title">개선할점</h3>
                    <ul className="code_explain_ul">
                      <li>
                        250930.모달이나,alert을 훅으로 만들어서 매번 작성할 필요 없게 만들자.
                      </li>
                    </ul>
                </div>
                <div className="code_explain_box">
                    <h3 className="code_explain_title">사용 훅</h3>
                    <ul className="code_explain_flex">
                        {headerMenuList.map((text, idx) => (
                            <li key={idx}># {text}</li>
                        ))}
                    </ul>
                </div>
                <CodeView language="tsx" 
                    code={`
<ul className='header_menu_list'>
{/* 언어변경이 있기때문에 목데이터에서 언어변경의 변수값이 나오도록 만들기 */}
    {headerMenu.map((menu, idx) => {
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
    })}
</ul>
                    `} 
                />
            </div>
        </>
    )
});

