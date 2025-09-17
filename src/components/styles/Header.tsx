import  React from 'react';
import styled from 'styled-components';


const HeaderStyle = styled.div`
    width: 100%;
    background-color: #333;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    color: #fff;
    font-weight: 600;
    box-sizing: border-box;
`;


function Header() {
  return (
    <HeaderStyle>
      <span>Sparta Coding Club - Let's learn React</span>
    </HeaderStyle>
  );
}

export default React.memo(Header)