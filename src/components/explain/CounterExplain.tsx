import  React from 'react';
import CodeView from "../CodeView"

export const CounterExplain = React.memo(function Btn() {
    return(
        <>
            <div className="code_explain">
                <div className="code_explain_box">
                    <h3 className="code_explain_title">[251013] 작성하면서 나의 부족한 로직사고방식</h3>
                    <ul className="code_explain_ul">
                       <li>1."데이터 흐름이해 부족": “버튼 클릭 → 상태 변화 → 리렌더링 → 화면 변화”</li>
                       <li>2.“데이터 기반 렌더링” 대신 “하드코딩” 중심 사고: ["긴급", "중요", "일반"].map() 형태로 돌리기</li>
                       <li>3.“조건에 따른 스타일 제어” 로직 사고 부족: isActive ? activeColor : defaultColor 같은 분기 로직 사고</li>
                    </ul>
                </div>
                <div className="code_explain_box">
                    <h3 className="code_explain_title">[251013] 결론</h3>
                    <ul className="code_explain_ul">
                        <li>사건 중심 사고(Event-driven)” → “상태 중심 사고(State-driven)”이 필요</li>
                        <li>즉, 현재 상태의 스타일(클래스)을 지정해두고 해당 스타일의 따른 상태를 변화를 하려고 한다.</li>
                        <li>이러한 사고방식을 반대로 가져야한다. 상태가 기준이고 상태의 따른 스타일변화(조건부사용)를 줘야한다.</li>
                    </ul>
                </div>
                <div className="code_explain_box">
                    <h3 className="code_explain_title">[251013] 연습방법</h3>
                    <ul className="code_explain_ul">
                        <li>1. 클릭 시 버튼 색상과 아래 텍스트가 바뀌는 기본 패턴 완성<br></br> =&#62; useState로 상태 관리, 상태가 UI를 결정함</li>
                        <li>2. 버튼이 많아져도 코드가 늘어나지 않도록 데이터로 UI 구성<br></br> =&#62;데이터 중심 사고, UI를 데이터로부터 자동 생성, 반복되는 UI 관리 방법 이해</li>
                        <li>3. 상태 기반 스타일링을 props/클래스로 깔끔하게 관리<br></br> =&#62; 상태 기반 스타일링, 재사용 가능한 컴포넌트 설계, React + CSS 관리 패턴 이해</li>
                    </ul>
                </div>
                <CodeView language="tsx" 
                    code={`
[251013]
1.UI를 데이터로 먼저 표현해보기
const noticeTypes = ["긴급", "중요", "일반"];
2.상태로 “현재 선택” 관리
const [active, setActive] = useState("긴급");
3.UI를 map()으로 렌더링
noticeTypes.map(type => <button>{type}</button>)
4.조건부 스타일링 적용
style={{ color: active === type ? "red" : "gray" }}
                        `} 
                />
            </div>
        </>
    )
});
