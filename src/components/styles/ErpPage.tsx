import  React from 'react';
import styled from 'styled-components';

interface ConstantPageProps{
    children: React.ReactNode
}

const ContantPageStyles = styled.div`
    margin-top: 63px;
    box-sizing: border-box;
    height: calc(100dvh - (63px + 59px));
    overflow-y: auto;
    @media (max-width:1280px) {
        padding: 20px 0;
        margin-top: 43px;
        height: calc(100dvh - (43px + 53px));
    }
`;

function ErpPage({children}:ConstantPageProps) {
  return (
    <ContantPageStyles>
        {children}
    </ContantPageStyles>
  );
}


export default React.memo(ErpPage)