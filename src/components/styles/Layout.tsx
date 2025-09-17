import type { ReactNode } from 'react';
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components';


interface LayoutProps {
  children: ReactNode; // ReactNode 타입으로 children 지정
  hideHeaderFooter?: boolean;
}

const LayoutStyle =styled.div`

`;


function Layout({ children, hideHeaderFooter  }: LayoutProps) {
  return (
    <div>
       {!hideHeaderFooter && <Header />}
      <LayoutStyle>
        {children}
      </LayoutStyle>
       {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default Layout;