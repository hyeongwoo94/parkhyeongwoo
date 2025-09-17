import React, { useState } from "react";
import ExplaninModal from '../components/ExplaninModal';
import ModalBtn from '../components/ModalBtn';
import styled from 'styled-components';
import './_home.scss'
import HomeExplain from "../components/explain/HomeExplain";

// npm install react-dnd react-dnd-html5-backend 라이브러리 사용


const FixdBtn = styled.div`
    position: fixed;
    top: 10px;
    right: 10px;
`
function Home () {
    // 텍스트가 들어갈 자리 값 설정
    const [keyword1, setKeyword1] = useState("□□□");
    const [keyword2, setKeyword2] = useState("□□□");
    const [keyword3, setKeyword3] = useState("□□□");

    // 반복문으로 뿌려줄 키워드 작서
    const items = ["박형우", "김형우", "이형우"];
    
    // 내가 원하는 답 지정하기
    const correctAnswer = {
        keyword1: "박형우",
        keyword2: "김형우",
        keyword3: "이형우",
    };

    // 드래그 할 데이터 즉 키워드 값의 코드
    const handleDragStart = (e: React.DragEvent<HTMLLIElement>, value: string) => {
        e.dataTransfer.setData("text/plain", value);
    };

    //드래그 한 데이터를 넣을 코드의 값
    const handleDrop = (
        e: React.DragEvent<HTMLDivElement>,
        setter: (val: string) => void
        ) => {
            const value = e.dataTransfer.getData("text/plain");

            // items 배열에 있는 값만 허용
            if (!items.includes(value)) return;

            setter(value);

            e.dataTransfer.clearData();
            };
            // 드래그 드롭을 할 수 있는 영역
            const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
                e.preventDefault(); // 반드시 있어야 drop 가능
        };

    // 어떤 모달이 열렸는지 관리 (null이면 안 열림)
    const [openModal, setOpenModal] = useState<string | null>(null); //모달이 열리고 닫히고 제어

    const handleOpenModal = (modalName: string) => {
        setOpenModal(modalName);  //한페이지에서 여러 모달 등장 시킬수 도있음
    };

    const handleCloseModal = () => {
        setOpenModal(null); //해당 모달 닫기
    };
    return(
        <>
            <section className='loading'>
                <div className='loading_wrap'>
                    <div>
                         <FixdBtn>
                            <ModalBtn modalName="modal1" onClick={handleOpenModal}>
                                코드리뷰
                            </ModalBtn>
                        </FixdBtn>
                        <ModalBtn modalName="modal2" onClick={handleOpenModal}>
                            코드리뷰2
                        </ModalBtn>
                        <div className='loading_title_box'>
                            <div onDrop={(e) => handleDrop(e, setKeyword1)} onDragOver={handleDragOver}>
                                <p>안녕하세요 저는 <span>{keyword1}</span> 입니다.</p>
                            </div>
                            <div onDrop={(e) => handleDrop(e, setKeyword2)} onDragOver={handleDragOver}>
                                <p>안녕하세요 저는 <span>{keyword2}</span> 입니다.</p>
                            </div>
                            <div onDrop={(e) => handleDrop(e, setKeyword3)} onDragOver={handleDragOver}>
                                <p>안녕하세요 저는 <span>{keyword3}</span> 입니다.</p>
                            </div>
                        </div>

                        <div className='loading_item_box'>
                            <ul>
                                {items.map((item) => (
                                    <li
                                    key={item}
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, item)}
                                    >
                                    {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                       <div>
                            {
                                (keyword1 !== "□□□" && keyword2 !== "□□□" && keyword3 !== "□□□") // 모두 값을 채웟는지 확인
                                    ? (keyword1 === correctAnswer.keyword1 &&
                                        keyword2 === correctAnswer.keyword2 &&
                                        keyword3 === correctAnswer.keyword3  //정답이 맞는지 확인
                                        ? "정답!"
                                        : "틀렸습니다.")  // 결과
                                    : ""
                            }
                       </div>
                       <div>
                        {
                            (keyword1 === correctAnswer.keyword1 && 
                            keyword2 === correctAnswer.keyword2 
                            && keyword3 === correctAnswer.keyword3) ? <button>눌러</button> :""
                        }
                       </div>
                    </div>
                </div>
            </section>


            {/* 모달영역 */}
            {openModal === "modal1" && (
                <ExplaninModal onClose={handleCloseModal} content={<HomeExplain />} />
            )}
            {openModal === "modal2" && (
                <ExplaninModal onClose={handleCloseModal} content="모달 2 내용" />
            )}
        </>
    )
}


export default Home