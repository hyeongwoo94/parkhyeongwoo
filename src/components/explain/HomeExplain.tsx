import  React from 'react';
import CodeView from "../CodeView"
import './_homeexplain.scss'
export const HomeExplain = React.memo(function Btn() {
    return(
        <>
            <div className="code_explain">
                <div className="code_explain_box">
                    <h3 className="code_explain_title">작업 히스토리</h3>
                    <ul className="code_explain_ul">
                        <li>1. ui 하드코딩</li>
                        <li>2. useState로 갑관리를 해서 퀴즈 제작</li>
                        <li>3. 키워드 랜덤 로직 제작</li>
                        <li>4. 드래그드롭시 키워드 계속 재배치 ▷ useEffect로 한번만 재배치되게 하기</li>
                        <li>5. 각종 컴포넌트 제작</li>
                        <li>6. 언어변경 환경 셋팅</li>
                        <li>7. 하드코딩 텍스트 언어ts로 변경</li>
                        <li>8. 드래그드롭 후 언어변경시 이미 이동된 텍스트 변경 안됨 ▷ 키워드 배열을 key 값으로 제어</li>
                    </ul>
                </div>
                <CodeView language="tsx" 
                    code={`// -------------------------------------------------------------------------------------언어변경
const { t: tHome } = useTranslation("home"); // home 안의 것들만 가져오기
const { t: tCommon } = useTranslation("common"); //공통 텍스트 가져오기
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
                    
                    `} 
                />
            </div>
        </>
    )
});

export const HomeExplain2 = React.memo(function Btn() {
    return(
        <>
            <div className="code_explain">
                <div className="code_explain_box">
                    <h3 className="code_explain_title">핵심 내용</h3>
                    <ul className="code_explain_ul">
                        <li>
                            react-dnd-html5-backend 라이브러리 사용
                        </li>
                        <li>
                            useStatet사용
                        </li>
                    </ul>
                </div>
                <div className="code_explain_box">
                    <h3 className="code_explain_title">구동방식</h3>
                    <ul className="code_explain_ul">
                        <li>useState로 빈칸에 들어갈 내용 제작</li>
                        <li>키워드 단어들 배열로 제작</li>
                        <li>정답 객체 지정한 변수 제작</li>
                        <li>
                            드래그 할 경우 해당 값을 감지
                        </li>
                        <li>드래그 한 값을 옮겨 담을 곳 감지</li>
                        <li>드래그 드롭을 할 경우 해당 값 넣기</li>
                        <li>삼항연산자로 정답이 맞을 경우와 틀릴경우 보여주는 컴포넌트 다르게 설정</li>
                        <li>추가적으로 useEffect, floor,random을 사용해서 키워드르 매번 랜덤으로 뿌려줌</li>
                    </ul>
                </div>
                <CodeView language="javascript" 
                    code={`// 드래그 할 데이터 즉 키워드 값의 코드
const [keyword1, setKeyword1] = useState("□□□");
const [keyword2, setKeyword2] = useState("□□□");

                    `} 
                />
            </div>
        </>
    )
});
