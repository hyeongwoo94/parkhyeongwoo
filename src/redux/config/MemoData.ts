export type MemoItemData = {
    title?:string;
    id: number;
    contant: MemoItem[]; 
};
export type MemoItem = {
    category?: string;
    exmple_q?: string;
    exmple_text?: string;
}
export const memoData:MemoItemData[] = [
 {
    id:1,
    title:"알아둬야 할 점",
    contant:[
        {
            category:"1. 이 페이지는 목데이터로 제작",
            exmple_q:"API연동시 목데이터에 있는 type를 export해서 가져오거나, 위치 이동",
        },
        {
            category:"2. useState()사용",
            exmple_q:`const [memoList, setMemoList] = useState<MemoItemData[]>([]);
                    api로 받아온 데이터 저장
            `,
        },
        {
            category:"3. useEffect()사용",
            exmple_text:`useEffect(() => {
                            fetch('/api/memo') // 백엔드 API 엔드포인트
                            .then(res => res.json())
                            .then((data: MemoItemData[]) => setMemoList(data));
                        }, []);
                        컴포넌트 마운트 후 특정값이 바뀔 때만 부수효과 실행
                    `,
        },
    ]
},
{
    id:2,
    title:"선언형 사고방식 키우기",
    contant:[
        {
            category:"1. 결과를 먼저 말하기",
            exmple_q:"- 내가 지금 원하는 상태는?",
            exmple_text:`예시 : 삭제 하고 재배열
                        명령형 사고방식: 배열에서 내가 원하는 것을 빼고 다시 재배열해서 반환하자.
                        선언형 사고방식: 내가 삭제하고 싶은 거 빼고 나머지를 원해.`,
        },
        {
            category:"2. 고차함수 적극 활용",
            exmple_q:"- map, filter, reduce",
            exmple_text:"변환 == for == map()\n조건선택 == if == map()\n누적계산 == for+변수누적 == reduce",
        },
        {
            category:"3. 데이터를 변환한다가 아닌 새로운 데이터를 만든다라고 생각하기",
            exmple_q:"- 리액트는 불변성을 전제로 한다.",
            exmple_text:`퍼블리싱 습관은 재활용이 잘되게 하기위한코드를 짠다. 그래서 선언형 사고방식이 부족햇던 것
                            setTodos(prev => prev.filter(todo => todo.id !== targetId));`,
        },
    ]
}
];