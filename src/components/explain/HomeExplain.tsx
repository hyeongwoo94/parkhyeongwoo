import  React from 'react';
import CodeView from "../CodeView"
import './_homeexplain.scss'
export const HomeExplain = React.memo(function Btn() {
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

// 반복문으로 뿌려줄 키워드 작서
const items = ["박형우","30","김형우","20", "이형우","40","최형우","50","감형우"];

//키워드 값을 항상 랜덤 순서로 렌더링하기 위해 복제를 함
const [dragItems, setDragItems] = useState<string[]>([]);

// 맨 처음 렌더링될 때 한 번만 랜덤으로 섞기
useEffect(() => {
    const shuffled = [...items];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
    setDragItems(shuffled);
}, []); 

// 내가 원하는 답 지정하기
const correctAnswer = {
    keyword1: "박형우",
    keyword2: "30",
};

// 드래그 할 데이터 즉 키워드 값의 코드
const handleDragStart = (e: React.DragEvent<HTMLLIElement>, value: string) => {
    e.dataTransfer.setData("text/plain", value);
    e.currentTarget.classList.add("dragging"); // 드래그 시작 시 클래스 추가
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

const handleDragEnd = (e: React.DragEvent<HTMLLIElement>) => {
    e.currentTarget.classList.remove("dragging"); // 추가한 클래스 지워주기
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
