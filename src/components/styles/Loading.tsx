import  React from 'react';
import { ReactTyped } from "react-typed";
import { useTranslation } from 'react-i18next'; // 언어변경
import { useState } from "react";




function Loading(){
        const { t: tHome } = useTranslation("home"); // home 안의 것들만 가져오기
        const [open, setOpen] = useState(false);
    return(
        <>
            <div className={`loading ${open ? "open" : ""}`}>
                <div className="loading_top">
                    <h2>
                        <ReactTyped
                            strings={[tHome("loading.text_1"),tHome("loading.text_2"),tHome("loading.text_3")]}
                            typeSpeed={60}
                            backSpeed={30}
                            // loop
                            showCursor={false}
                            onComplete={() => {
                                setTimeout(() => {
                                    setOpen(true);
                                }, 1000); // 1초 후 실행
                            }}
                        />
                    </h2>
                </div>
                <div className="loading_bottom"></div>
            </div>
        </>
    )
}

export default React.memo(Loading)
