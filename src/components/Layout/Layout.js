import React from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import ContentContainer from '../ContentContainer/ContentContainer';
import Footer from '../Footer/Footer';
import './Layout.css';
import ItemList from '../ItemList/ItemList';

const Layout = () => (
  <div className="layout">
    <div className="outer-layout">
      <div className="inner-layout">
        <Header />
        <Nav />
        <ContentContainer>
          <ItemList>items</ItemList>
        </ContentContainer>
        <Footer />
      </div>
    </div>
  </div>
);

export default Layout;
