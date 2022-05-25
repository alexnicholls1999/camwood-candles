import React from 'react';
import Hamburger from '../Components/Atoms/Iconography/Hamburger';
import Footer from '../Components/Organisms/Footer';
import Header from '../Components/Organisms/Header';

function MainLayout({ children }) {
  return (
    <>
      <Hamburger />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
