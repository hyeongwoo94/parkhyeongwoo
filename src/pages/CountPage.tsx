import ContentPage from "../components/styles/ContentPage"
import ExplaninModal from "../components/ExplaninModal"
import { CodeViewBtn } from "../assets/svg/SvgCode"
import { CounterExplain } from "../components/explain/CounterExplain";
import { useState } from "react";
import { useModal } from "../hooks/useModal";
import styled from 'styled-components';

export function Count1(){
	const [count,setCount] = useState<number>(0);
	return(
    <>
		<div className="practice_flex">
			<div className="flex-center-gap-10">
				<h2 className="practice_title">
					1. useState로 카운트 만들기
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
				<h2 className="practice_title">
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
export function Count3(){
	const [active,setActive] = useState<string>('긴급');

	const SpanState = styled.span<{$type: string; $active: boolean}>`
		font-size: 12px;
		border: solid 1px #333;
		border-radius: 10px;
		padding: 5px 10px;
		box-sizing: border-box;
		${({ $type, $active }) => {
			if ($type === "긴급")
				return `
				background: ${$active ? "red" : "white"};
				color: ${$active ? "white" : "red"};
				`;
			if ($type === "중요")
				return `
				background: ${$active ? "orange" : "white"};
				color: ${$active ? "white" : "orange"};
				`;
			if ($type === "일반")
				return `
				background: ${$active ? "gray" : "white"};
				color: ${$active ? "white" : "gray"};
				`;
			}}
	`;
	return(
    <>
		<div className="practice_flex">
			<div className="flex-center-gap-10">
				<h2  className="practice_title">
					3. useState로 공지사항 분류
				</h2>
				<div className="flex-center-gap-10">
					{["긴급", "중요", "일반"].map((type) => (
						<button>
							<SpanState
								key={type}
								$type={type}
								$active={active === type}
								onClick={() => setActive(type)}
							>
								{type}
							</SpanState>
						</button>
					))}
				</div>
			</div>
			<div className="flex-center-gap-10">
				<SpanState $type={active} $active={true}>
					{active}
				</SpanState>
			</div>
		</div>
    </>
  )
}
export function Count4(){
	const states =["상태1","상태2","상태3"];
	const [active, setActive] = useState<string>("상태1")
	const StateStyle = styled.span<{$active: string}>`
	${({ $active }) => {
		if($active === '상태1'){
			return `color: red`;
		}else if($active === '상태2'){
			return `color: blue`;
		}else if($active === '상태3'){
			return `color: green`;
		}
	}}
	`
	return(
    <>
		<div className="practice_flex_col">
			<div className="flex-center-gap-10">
				<h2 className="practice_title">
					3-1. [251013] 연습 
				</h2>
			</div>
			<div className="practice_design">
				<h3>설계</h3>
				<p>1.상태값 설정</p>
				<p>2.반복문으로 코드최적화(map)</p>
				<p>3.조건문으로 스타일제어</p>
				<p>4.style-component를 사용해서 색상 제어</p>
			</div>
			<div>
				<div className="practice_flex">
					<div className="flex-center-gap-10">
						{states.map(state =>{
							return <button key={state} onClick={()=>{setActive(state)}}>{state}</button>
						})}
					</div>
					<div>
						<StateStyle $active={active}>{active}</StateStyle>
					</div>
				</div>
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
				<li className="practice_item">
            		<Count3/>
				</li>
				<li className="practice_item">
            		<Count4/>
				</li>
			</ul>
            {open && (<ExplaninModal onClose={closeModal} content={<CounterExplain />} />)}
          </ContentPage>
        </>
    )
}

export default CountPage