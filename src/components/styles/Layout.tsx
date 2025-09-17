import type { ReactNode } from 'react';
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components';


interface LayoutProps {
  children: ReactNode; // ReactNode 타입으로 children 지정
}

const LayoutStyle =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100dvh - 100px);
`;


function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <LayoutStyle>
        {children}
      </LayoutStyle>
      <Footer />
    </div>
  );
}

export default Layout;