import  React from 'react';

//색상을 변수로 넣어줘야 다크모드 활용가능
export const CloseSvg = React.memo(function CloseSvg() {
  return(
    <>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18" stroke="var(--stroke-color)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L18 18" stroke="var(--stroke-color)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </>
  ) 
});

interface CodeViewBtnProps {
  onClick?: () => void; // 클릭 이벤트를 부모로부터 받을 수 있도록
}
export const CodeViewBtn = React.memo(function CodeViewBtn({ onClick }: CodeViewBtnProps) {
  return(
    <>
        <div className='code_view_btn' onClick={onClick}>
            <div className='code_view_btn_1'>
                <div className='code_view_btn_2'></div>
            </div>
        </div>
    </>
  ) 
});
