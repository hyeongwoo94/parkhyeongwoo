import ContentPage from "../components/styles/ContentPage"
import ExplaninModal from "../components/ExplaninModal"
import { CodeViewBtn } from "../assets/svg/SvgCode"
import { CounterExplain } from "../components/explain/CounterExplain";
import { useState } from "react";
import { useModal } from "../hooks/useModal";

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
					<button  className={`common_btn ${active === 1 ? "on" : ""}`} onClick={()=>setActive(1)}>1탭버튼</button>
					<button  className={`common_btn ${active === 2 ? "on" : ""}`} onClick={()=>setActive(2)}>2탭버튼</button>
					<button  className={`common_btn ${active === 3 ? "on" : ""}`} onClick={()=>setActive(3)}>3탭버튼</button>
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
function CountPage () {
    const { open, toggleModal, closeModal } = useModal();
    return(
        <>
          <ContentPage>
            <div className="page_top">
				<div className="page_top_btn">
					<CodeViewBtn onClick={toggleModal}/>
				</div>
				<h4>
					- useState 연습하기
				</h4>
            </div>
			<ul className="practice">
				<li className="practice_item">
            		<Count1/>
				</li>
				<li className="practice_item">
            		<Count2/>
				</li>
			</ul>
            {open && (<ExplaninModal onClose={closeModal} content={<CounterExplain />} />)}
          </ContentPage>
        </>
    )
}

export default CountPage