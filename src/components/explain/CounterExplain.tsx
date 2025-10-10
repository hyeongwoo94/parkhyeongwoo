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
export function Count251010(){
    const [count,setCount] = useState<number>(0);
    return(
    <>
        <div>
            {count}
        </div>
        <div className="flex-center-gap-10">
            <button className="common_btn" onClick={() => setCount(count + 1)}>+</button>
            <button className="common_btn" onClick={() => setCount(count - 1)}>-</button>
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
