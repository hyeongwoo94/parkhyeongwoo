import React from 'react';
import type { ReactNode } from 'react';

interface ModalBtnProps {
    children: ReactNode; // ReactNode 타입으로 children 지정
    onClick: (modalName: string) => void;
    modalName: string;

}

function ModalBtn({ modalName, onClick, children  }: ModalBtnProps){
    return(
        <>
            <button type='button' onClick={() => onClick(modalName)}>
                {children}
            </button>
        </>
    )
}

export default React.memo (ModalBtn)