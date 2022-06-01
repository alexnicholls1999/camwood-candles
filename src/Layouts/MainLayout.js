import React from 'react';
import Hamburger from '../Components/Atoms/Iconography/Hamburger';
import Footer from '../Components/Organisms/Footer';
import Header from '../Components/Organisms/Header';
import Modal from '../Components/Organisms/Modal';

function MainLayout({ children }) {
  return (
    <>
      <Hamburger />
      <Header />
      {children}
      <Footer />
      <Modal />
    </>
  );
}

export default MainLayout;
