import ContentPage from "../components/styles/ContentPage"
import type { MemoItem } from '../redux/config/MemoData'; //타입도 export해서 import로 가져올수 있다.
import { memoData } from '../redux/config/MemoData';

//  나중에 데이터를 해서 가져온다면 useState로해서 데이터를 만들어서 넣어주고 useEffect로 한번만 호출되게 해줘야 한다. 
// ------------------------------------------------------------------------------- 구조내용
{/* <ul  className="memo">
    <li className="memo_item">
        <h2 className="memo_title">선언형 사고방식 키우기</h2>                    //가장 큰제목
        <ul className="memo_cont"> 
            <li className="memo_box">                                          // 큰제목에 안의 소제목당 하나씩
                <h4 className="memo_category">결과를 먼저 말하기</h4>            // 소제목
                <div className="memo_exmple">
                <p className="memo_exmple_q">내가 지금 원하는 상태는?</p>        //핵심 질문
                    <p className="memo_exmple_title">예시 : 삭제 하고 재배열</p> //핵심 내용
                    <p className="memo_exmple_text">                           //메인내용
                        명령형을 사고방식: 배열에서 내가 원하는 것을 빼고 다시 재배열해서 반환하자.<br />
                        선언형 사고방식: 내가 삭제하고 싶은 거 빼고 나머지를 원해.
                    </p>
                </div>
            </li>
        </ul>
    </li>
</ul> */}
// -------------------------------------------------------------------------------

export function MemoItem({category, exmple_q,exmple_text}:MemoItem){
    return(
        <>
            <li className="memo_box">
                {category && <h4 className="memo_category">{category}</h4>}
                <div className="memo_exmple">
                    {exmple_q && <p className="memo_exmple_q">{exmple_q}</p>}
                    {exmple_text &&  <p className="memo_exmple_text">{exmple_text}</p>}
                </div>
            </li>
        </>
    )
} 


function MemoPage () {

    return(
        <>
            <ContentPage>
                <ul>
                    {memoData.map((item) => (
                        <li className="memo_item" key={item.id}>
                            <h2 className="memo_title">{item.title}</h2>
                            <ul className="memo_cont">
                                {item.contant.map((c, idx) => (
                                    <MemoItem
                                        key={idx}
                                        category={c.category}
                                        exmple_q={c.exmple_q}
                                        exmple_text={c.exmple_text}
                                    />                                        
                                ))}                                        
                            </ul>
                        </li>
                    ))}
                </ul>
            </ContentPage>
        </>
    )
}

export default MemoPage
