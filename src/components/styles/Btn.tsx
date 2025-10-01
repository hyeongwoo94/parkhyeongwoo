import  React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

interface buttonProps {
  children: ReactNode; // ReactNode 타입으로 children 지정
  onClick: () => void;
}

const OrginBtn = styled.button`

`;

export const Btn = React.memo(function Btn({ children, onClick }: buttonProps) {
  return <OrginBtn className='common_btn' onClick={onClick}>{children}</OrginBtn>;
});




interface ModalBtnProps {
    children: ReactNode; // ReactNode 타입으로 children 지정
    onClick: (modalName: string) => void;
    modalName: string; 
}

export const ModalBtn = React.memo(function ModalBtn({ modalName, onClick, children  }: ModalBtnProps) {
  return (
      <>
          <button onClick={() => onClick(modalName)}>
              {children}
          </button>
      </>
  );
});