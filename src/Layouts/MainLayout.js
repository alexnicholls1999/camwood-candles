import React, { useContext } from 'react';
import Hamburger from '../Components/Atoms/Iconography/Hamburger';
import Footer from '../Components/Organisms/Footer';
import Header from '../Components/Organisms/Header';
import Modal from '../Components/Organisms/Modal';
import Table from '../Components/Organisms/Table';
import { ControlsContext } from '../react-context/ControlsProvider';

function MainLayout({ children }) {
  const { dimensions, handleOpenModal } = useContext(ControlsContext);
  const productsArr = [
    {
      title: 'Pillars & Dining',
      table: {
        row1Arr: ['Large Pillar', '15cm x 6cm', '£8 - £12'],
        row2Arr: ['Sunflower', '10cm x 5cm', '£8'],
        row3Arr: ['Wheatsheaf', '9.5cm x 4cm', '£10'],
        row4Arr: ['Dining Taper', '2.5cm length', '£3.50'],
      },
    },
    {
      title: 'Large Votives',
      table: {
        row1Arr: ['Large Pillar', '15cm x 6cm', '£8 - £12'],
        row2Arr: ['Sunflower', '10cm x 5cm', '£8'],
        row3Arr: ['Wheatsheaf', '9.5cm x 4cm', '£10'],
        row4Arr: ['Dining Taper', '2.5cm length', '£3.50'],
      },
    },
    {
      title: 'Other',
      table: {
        row1Arr: ['Large Pillar', '15cm x 6cm', '£8 - £12'],
        row2Arr: ['Sunflower', '10cm x 5cm', '£8'],
        row3Arr: ['Wheatsheaf', '9.5cm x 4cm', '£10'],
        row4Arr: ['Dining Taper', '2.5cm length', '£3.50'],
      },
    },
  ];

  return (
    <>
      <div className="dimensions">
        <Modal show={dimensions} onClose={handleOpenModal}>
          {productsArr.map((product) => {
            const { title, table } = product;

            return (
              <Table
                table={{
                  title: title,
                  rows: table.row1Arr,
                  rows2: table.row2Arr,
                  rows3: table.row3Arr,
                  rows4: table.row4Arr,
                }}
              />
            );
          })}
        </Modal>
      </div>

      <Hamburger />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
