import  React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

interface buttonProps {
  children: ReactNode; // ReactNode 타입으로 children 지정
}

const OrginBtn = styled.button`
    outline: none;
    padding: 5px 10px;
    box-sizing: border-box;
    background-color: #37a2ff;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
`;

export const Btn = React.memo(function Btn({ children }: buttonProps) {
  return <OrginBtn>{children}</OrginBtn>;
});


interface FixdBtnProps {
  children: React.ReactNode;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

const FixedDiv = styled.div<FixdBtnProps>`
  position: fixed;
  top: ${({ top }) => top ?? "auto"};
  right: ${({ right }) => right ?? "auto"};
  bottom: ${({ bottom }) => bottom ?? "auto"};
  left: ${({ left }) => left ?? "auto"};
`;

export const FixdBtnLayout = React.memo(function FixdBtn({ children, top, right,  bottom,  left}: FixdBtnProps) {
  return <FixedDiv top={top} right={right} bottom={bottom} left={left}>{children}</FixedDiv>;
});

interface ModalBtnProps {
    children: ReactNode; // ReactNode 타입으로 children 지정
    onClick: (modalName: string) => void;
    modalName: string;

}

export const ModalBtn = React.memo(function FixdBtn({ modalName, onClick, children  }: ModalBtnProps) {
  return (
      <>
          <button type='button' onClick={() => onClick(modalName)}>
              {children}
          </button>
      </>
  );
});