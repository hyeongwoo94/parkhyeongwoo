import  React from 'react';
import CodeView from "../CodeView"

export const CounterExplain = React.memo(function Btn() {
    return(
        <>
            <div className="code_explain">
                <div className="code_explain_box">
                    <h3 className="code_explain_title">정답</h3>
                </div>
                <CodeView language="tsx" 
                    code={`
export function Count1(){
    const [count,setCount] = useState<number>(0);
    return(
    <>
        <div className="practice_flex">
            <div className="flex-center-gap-10">
                <h2>
                    1. 기본 useState로 카운트 만들기
                </h2>
                <div>
                    {count}
                </div>
            </div>
            <div className="flex-center-gap-10">
                <button className="common_btn" onClick={() => setCount(count + 1)}>+</button>
                <button className="common_btn" onClick={() => setCount(count - 1)}>-</button>
            </div>
        </div>
    </>
  )
}
export function Count2(){
    const [active,setActive] = useState<number>(1);
    return(
    <>
        <div className="practice_flex">
            <div className="flex-center-gap-10">
                <h2>
                    2. useState로 탭만들기
                </h2>
                <div className="flex-center-gap-10">
                    <button  className={"common_btn" + (active === 1 ? "on" : "")} onClick={()=>setActive(1)}>1탭버튼</button>
                    <button  className={"common_btn" + (active === 2 ? "on" : "")} onClick={()=>setActive(2)}>2탭버튼</button>
                    <button  className={"common_btn" + (active === 3 ? "on" : "")} onClick={()=>setActive(3)}>3탭버튼</button>
                </div>
            </div>
            <div className="flex-center-gap-10">
                {active === 1 && <div>1탭내용</div>}
                {active === 2 && <div>22탭내용</div>}
                {active === 3 && <div>333탭내용</div>}
            </div>
        </div>
    </>
  )
}
                    `} 
                />
            </div>
        </>
    )
});
