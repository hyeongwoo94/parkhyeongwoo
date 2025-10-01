import  React from 'react';
import styled from 'styled-components';

interface ConstantPageProps{
    children: React.ReactNode
}

const ContantPageStyles = styled.div`
    margin-top: 63px;
    @media (max-width:1280px) {
        margin-top: 43px;
    }
`;

function ContantPage({children}:ConstantPageProps) {
  return (
    <ContantPageStyles>
        <div className="main_cont_w">
            {children}
        </div>
    </ContantPageStyles>
  );
}


export default React.memo(ContantPage)