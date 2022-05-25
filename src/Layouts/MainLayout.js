import React from 'react';
import Hamburger from '../Components/Atoms/Iconography/Hamburger';
import Header from '../Components/Organisms/Header';

function MainLayout({ children }) {
  return (
    <>
      <Hamburger />
      <Header />
      {children}
    </>
  );
}

export default MainLayout;
