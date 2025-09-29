import React, { useState, useEffect, useMemo  } from "react";
import ExplaninModal from '../components/ExplaninModal';
import {HomeExplain, HomeExplain2} from "../components/explain/HomeExplain"; // 모달의 내용들
import { FixdBtnLayout, ModalBtn } from "../components/styles/Btn"; // 스타일 컴포넌트 가져오기
import { useTranslation } from 'react-i18next'; // 언어변경
import Loading from "../components/styles/Loading";
import { CodeViewBtn } from "../assets/svg/SvgCode";




function Home () {
// -------------------------------------------------------------------------------------언어변경
    const { t: tHome } = useTranslation("home"); // home 안의 것들만 가져오기
// -------------------------------------------------------------------------------------언어변경

 // -------------------------------------------------------------------------------------내 나이 자동화
    const birthYear = 1994;
    const currentYear = new Date().getFullYear();  // 현재 연도 가져오기
    const age = currentYear - birthYear;           // 만 나이 계산 (단순)
// -------------------------------------------------------------------------------------내 나이 자동화

// ----------------------------------------------------------------------------------------------드래그 관련
    // 드래그 가능한 아이템 key
    const itemsKeys = [
        "item1",
        "item2",
        "item3",
        "item4",
        "age",
        "ageMinus5",
        "agePlus5",
        "ageMinus7",
        "agePlus7"
    ];

    // 드래그 아이템 배열 (key + value)
    const dragItems = useMemo(() => {
        return itemsKeys.map(key => {
        if (key === "age") return { key, value: age.toString() };
        if (key === "ageMinus5") return { key, value: (age - 5).toString() };
        if (key === "agePlus5") return { key, value: (age + 5).toString() };
        if (key === "ageMinus7") return { key, value: (age - 7).toString() };
        if (key === "agePlus7") return { key, value: (age + 7).toString() };
        return { key, value: tHome(key) };
        });
    }, [tHome, age]);

    const [shuffledItems, setShuffledItems] = useState<typeof dragItems>([]);

    // 랜덤으로 섞기
    useEffect(() => {
        const shuffled = [...dragItems];
        for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setShuffledItems(shuffled);
    }, [dragItems]);

    // 드롭된 값은 key로 저장
    const [keyword1Key, setKeyword1Key] = useState<string | null>(null);
    const [keyword2Key, setKeyword2Key] = useState<string | null>(null);

    // 정답 key
    const correctAnswer = {
        keyword1Key: "item1",
        keyword2Key: "age",
    };

// ----------------------------------------------------------------------------------------------드래그 관련

    // 드래그 할 데이터 즉 키워드 값의 코드
    const handleDragStart = (e: React.DragEvent<HTMLLIElement>, value: string) => {
        e.dataTransfer.setData("text/plain", value);
        e.currentTarget.classList.add("dragging"); // 드래그 시작 시 클래스 추가
    };
    const handleDragEnd = (e: React.DragEvent<HTMLLIElement>) => {
        e.currentTarget.classList.remove("dragging"); // 추가한 클래스 지워주기
    };

    //드래그 한 데이터를 넣을 코드의 값
    const handleDrop = (
        e: React.DragEvent<HTMLDivElement>,
        setter: (val: string) => void
    ) => {
        const key = e.dataTransfer.getData("text/plain");
        if (!itemsKeys.includes(key)) return;
        setter(key);
        e.dataTransfer.clearData();
    };
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };



// ------------------------------------------------------------------------------------------------- 모달 관련
    // 어떤 모달이 열렸는지 관리 (null이면 안 열림)
    const [openModal, setOpenModal] = useState<string | null>(null); //모달이 열리고 닫히고 제어

    const handleOpenModal = (modalName: string) => {
        setOpenModal(modalName);  //한페이지에서 여러 모달 등장 시킬수 도있음
    };

    const handleCloseModal = () => {
        setOpenModal(null); //해당 모달 닫기
    };

    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setShowLoading(false); // 10초 후 Loading 제거
        }, 16000); // 10000ms = 10초

        return () => clearTimeout(timer);
    }, []);
    return(
        <>
            {showLoading && <Loading />}
            <section className='home'>
                <div className='home_wrap'>
                    <div className="home_w">
                         <FixdBtnLayout bottom="15px" right="15px">
                            <ModalBtn modalName="modal1" onClick={handleOpenModal}>
                               <CodeViewBtn />
                            </ModalBtn>
                        </FixdBtnLayout>
                        <ModalBtn modalName="modal2" onClick={handleOpenModal}>
                            <CodeViewBtn />
                        </ModalBtn>
                        <div className='home_title_box'>

                            <div onDrop={(e) => handleDrop(e, setKeyword1Key)} onDragOver={handleDragOver}>
                                <p>{tHome("say.text_1")} <span>{keyword1Key ? dragItems.find(i => i.key === keyword1Key)?.value : "□□□"}</span> {tHome("say.text_2")}</p>
                            </div>
                            <div onDrop={(e) => handleDrop(e, setKeyword2Key)} onDragOver={handleDragOver}>
                                <p>{tHome("say.text_3")} <span>{keyword2Key ? dragItems.find(i => i.key === keyword2Key)?.value : "□□□"}</span>  {tHome("say.text_2")}</p>
                            </div>
                        </div>

                        <ul className='home_item_box'>
                              {shuffledItems.map(item => (
                                <li
                                key={item.key}
                                draggable
                                onDragStart={(e) => handleDragStart(e, item.key)}
                                onDragEnd={handleDragEnd}
                                >
                                <p className="home_item_text">{item.value}</p>
                                </li>
                            ))}
                        </ul>
                        {/* 틀렷을 경우는 alert으로 하고 정답일 경우 버튼을 추가해주자. */}
                       <div>
                           {(keyword1Key && keyword2Key) 
                            ? (keyword1Key === correctAnswer.keyword1Key && keyword2Key === correctAnswer.keyword2Key
                            ? tHome("quizBothRight")
                            : keyword1Key === correctAnswer.keyword1Key ? tHome("quizNameRight")
                            : keyword2Key === correctAnswer.keyword2Key ? tHome("quizAgeRight")
                            : tHome("quizBothWrong"))
                            : ""}
                       </div>
                       <div>
                        {
                            (keyword1Key === correctAnswer.keyword1Key && 
                            keyword2Key === correctAnswer.keyword2Key) ? <button>눌러</button> :""
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
                <ExplaninModal onClose={handleCloseModal} content={<HomeExplain2 />} />
            )}
        </>
    )
}


export default Home