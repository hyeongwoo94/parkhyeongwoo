import  React from 'react';
import styled from 'styled-components';


const FooterStyles = styled.div`

`;

function Footer() {
  return (
    <FooterStyles>
      <span>copyright @SCC</span>
    </FooterStyles>
  );
}


export default React.memo(Footer)