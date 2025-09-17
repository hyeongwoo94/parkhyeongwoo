import React from 'react';

interface ExplaninModalProps {
   onClose: () => void;
  content: React.ReactNode;
}
//npm install react-syntax-highlighter
function ExplaninModal({ onClose, content }: ExplaninModalProps){
    return(
        <>
            <div className="modal" >
                <div className='modal_bg' onClick={onClose}>
                    {/* 여기서 온클릭은 클릭 버블링을 방지해준다. */}
                    <div className="modal_500w modal_box"  onClick={(e) => e.stopPropagation()}>
                        <button onClick={onClose}>닫기</button>
                        <div className="modal_cont">
                           <div>
                             {content}
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo (ExplaninModal)