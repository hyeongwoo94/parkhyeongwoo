import  React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
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

function Btn ({ children }: LayoutProps) {
    console.log('렌더링')
    return(
        <>
            <OrginBtn>{children}</OrginBtn>
        </>
    )
}

  //props 거의 안 바뀔 때 사용
export default React.memo(Btn)