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


const FixedDiv = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
`;

export const FixdBtn = React.memo(function FixdBtn({ children }: buttonProps) {
  return <FixedDiv>{children}</FixedDiv>;
});