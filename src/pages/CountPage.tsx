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
export function Count3(){
	const [active,setActive] = useState<string>('긴급');
	return(
    <>
		<div className="practice_flex">
			<div className="flex-center-gap-10">
				<h2  className="practice_title">
					3. useState로 공지사항 분류
				</h2>
				<div className="flex-center-gap-10">
					{["긴급", "중요", "일반"].map((type, index) => (
						<button key={index}>
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
export function Count4(){
	const states =["상태1","상태2","상태3"];
	const [active, setActive] = useState<string>("상태1")
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
export function Count5(){
	// 1️⃣ 리스트 상태
	const [subjects, setSubjects] = useState<string[]>(["사과", "배", "포도"]);

	// 2️⃣ 인풋 입력 상태
	const [inputValue, setInputValue] = useState<string>("");

	// 3️⃣ 인풋 변경 핸들러
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	// 4️⃣ 추가 버튼 클릭 시 실행
	const handleAddSubject = () => {
		if (inputValue.trim() === "") return; // 빈 값이면 추가하지 않음
		setSubjects([...subjects, inputValue]); // 새로운 과일 추가
		setInputValue(""); // 입력창 초기화
	};
	// 🔥 엔터키 입력 시 추가 실행
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
		handleAddSubject();
		}
	};
	// 🔥 더블클릭으로 삭제
	const handleRemove = (index: number) => {
		setSubjects(subjects.filter((_, i) => i !== index));
	};

	// 5️⃣ map으로 리스트 렌더링
	const list = subjects.map((subject, index) => (
		<div key={index} onDoubleClick={() => handleRemove(index)}>{subject}</div>
	));
	return(
    <>
		<div className="practice_flex_col">
			<div className="flex-center-gap-10">
				<h2 className="practice_title">
					4. map로 뿌려주고 추가해서 리렌더링하기
				</h2>
				
			</div>
			<div className="practice_flex">
				<div className="flex-center-gap-10">
					{list}
				</div>
				<div className="flex-center-gap-10">
					<input type="text"  placeholder="과일추가하기"  value={inputValue}  onChange={handleInputChange} onKeyDown={handleKeyDown}/>
					<button className="common_btn" onClick={handleAddSubject}>추가</button>
				</div>
			</div>
		</div>
    </>
  )
}
export function Count6(){
	const [과일들, set과일들]  = useState<string[]>([]);
	const [입력값, set입력값] = useState<string>('');

	const 감지 = (e: React.ChangeEvent<HTMLInputElement>) => {
		set입력값(e.target.value)
	}
	const 엔터 =(e: React.KeyboardEvent<HTMLInputElement>)=>{
		if(e.key === 'Enter'){

			const 값 = 입력값.trim();
			if (!값) return;
			if (과일들.includes(값)) 
				return (
					alert(`${값}는 이미 있습니다.`),
					set입력값('')
				);

			set과일들((새로운: string[]) => [...새로운, 입력값])
			set입력값('');
		}
	}
	return(
    <>
		<div className="practice_flex_col">
			<div className="flex-center-gap-10">
				<h2 className="practice_title">
					5. 연습
				</h2>
			</div>
			<div className="practice_flex">
				<div className="flex-center-gap-10">
					{과일들.map((과일) => {
						return <div key={과일}>{과일}</div>
					})}
				</div>
				<div>
					<input type="text" value={입력값}  onChange={감지} onKeyDown={엔터} />
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
				<li className="practice_item">
            		<Count5/>
				</li>
				<li className="practice_item">
            		<Count6/>
				</li>
			</ul>
            {open && (<ExplaninModal onClose={closeModal} content={<CounterExplain />} />)}
          </ContentPage>
        </>
    )
}

export default CountPage