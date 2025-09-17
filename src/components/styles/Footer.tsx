import  React from 'react';
import styled from 'styled-components';


const FooterStyles = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    background-color: #333;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    box-sizing: border-box;
`;

function Footer() {
  return (
    <FooterStyles>
      <span>copyright @SCC</span>
    </FooterStyles>
  );
}


export default React.memo(Footer)