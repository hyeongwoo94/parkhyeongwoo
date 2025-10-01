import  React from 'react';
import CodeView from "../CodeView"
import {explanations} from '../../redux/config/MockData';

export const HomeExplain = React.memo(function Btn() {
    return(
        <>
            <div className="code_explain">
                <div className="code_explain_box">
                    <h3 className="code_explain_title">기획의도</h3>
                    <ul className="code_explain_ul">
                       <li>1.한글/영문 버전</li>
                       <li>2.색상테마 버전</li>
                       <li>3.제작한 코드 안내</li>
                    </ul>
                </div>
                <div className="code_explain_box">
                    <h3 className="code_explain_title">사용 라이브러리</h3>
                    <ul className="code_explain_flex">
                        {explanations.map((text, idx) => (
                            <li key={idx}># {text}</li>
                        ))}
                    </ul>
                </div>
                <CodeView language="tsx" 
                    code={`
export function ThemaBox(){
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const toggleTheme = () => {
      setTheme(prev => (prev === "light" ? "dark" : "light"));
    };
    useEffect(() => {
      document.body.setAttribute("data-theme", theme); // body에 data-theme 적용
    }, [theme]);
    return(
        <button onClick={toggleTheme}>
            {theme === "dark" ? <CiLight size={24} /> : <MdDarkMode size={24} />}
        </button>
    )
}
//로컬스토리지로 언어변경 제어
export function LangBox() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<"ko" | "en">(
    (localStorage.getItem("lang") as "ko" | "en") || "ko"
  );

  const toggleLanguage = () => {
    const newLang = lang === "ko" ? "en" : "ko"; // 현재 언어 반대
    i18n.changeLanguage(newLang);
    setLang(newLang);
    localStorage.setItem("lang", newLang); // ✅ 로컬스토리지에 저장
  };

  useEffect(() => {
    document.body.setAttribute("data-lang", lang);
  }, [lang]);

    return(
            <button className='lang_btn' onClick={toggleLanguage}>
                {lang === "ko" ? "En" : "Ko"}
            </button>
    )
}

                    
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
                    <h3 className="code_explain_title">기획의도</h3>
                    <ul className="code_explain_ul">
                        <li>포트폴리오의 흥미 유발</li>
                        <li>타이핑 효과 추가</li>
                        <li>아무개의 포트폴리오를 보는게 아닌 박형우의 포트폴리오를 강조</li>
                    </ul>
                </div>
                <CodeView language="javascript" 
                    code={`    // 드래그 할 데이터 즉 키워드 값의 코드
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
