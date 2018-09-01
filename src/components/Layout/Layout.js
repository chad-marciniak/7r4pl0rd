import React from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import ContentContainer from '../ContentContainer/ContentContainer';
import Footer from '../Footer/Footer';
import { injectGlobal, css } from 'emotion';
import ItemList from '../ItemList/ItemList';

injectGlobal`
  @font-face {
    font-family: 'Arimo';
    src: url('../font/Arimo.WOFF')
      format('woff');
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background: #1D1E1E;
    color: #3f3f3f;
  }
  button, text {
    color: #3f3f3f;
  }
`;

const layout = css({
  width: '70%',
  display: 'block',
  padding: '0px 15% 0px 15%'
});

const innerLayout = css({
  display: 'grid',
  gridTemplateColumns: 'auto'
});

const Layout = () => (
  // layout should take props for amount of columns
  // pass props to Nav from nav reducer
  // container prop should take children
  <div className={layout}>
    <div className={innerLayout}>
      <Header />
      <Nav />
      <ContentContainer>
        <ItemList>items</ItemList>
      </ContentContainer>
      <Footer />
    </div>
  </div>
);

export default Layout;
