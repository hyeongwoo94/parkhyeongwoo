import ContentPage from "../components/styles/ContentPage"
import ExplaninModal from "../components/ExplaninModal"
import { CodeViewBtn } from "../assets/svg/SvgCode"
import { CounterExplain } from "../components/explain/CounterExplain";
import { useState } from "react";
import { useModal } from "../hooks/useModal";

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
					- 카운트가되는 버튼을 혼자서 짤 수 있을 때까지 반복해서 연습하기
				</h4>
            </div>
			<ul className="practice">
				<li className="practice_item">
            		<Count251010/>
				</li>
			</ul>
            {open && (<ExplaninModal onClose={closeModal} content={<CounterExplain />} />)}
          </ContentPage>
        </>
    )
}


export function Count251010(){
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

export default CountPage