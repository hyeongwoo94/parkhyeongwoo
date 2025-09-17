import  React from 'react';
import styled from 'styled-components';


const HeaderStyle = styled.div`

`;


function Header() {
  return (
    <HeaderStyle>
      <span>Sparta Coding Club - Let's learn React</span>
    </HeaderStyle>
  );
}

export default React.memo(Header)