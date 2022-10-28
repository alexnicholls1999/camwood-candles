import React, { useContext } from 'react';
import Hamburger from '../Components/Atoms/Iconography/Hamburger';
import Footer from '../Components/Organisms/Footer';
import Header from '../Components/Organisms/Header';
import Modal from '../Components/Organisms/Modal';
import Table from '../Components/Organisms/Table';
import { ControlsContext } from '../react-context/ControlsProvider';

function MainLayout({ children, secondary }) {
  const { dimensions, handleOpenModal } = useContext(ControlsContext);

  const headings = ['Product Name', 'Dimensions', 'Cost'];

  const pillarsndinning = [
    {
      id: 0,
      productName: 'Sunflower',
      dimensions: '10cm x 5cm',
      cost: '£8.50',
    },
    {
      id: 1,
      productName: 'Wheatsheaf',
      dimensions: '9.5cm x 4cm',
      cost: '£6.50',
    },
    {
      id: 2,
      productName: 'Sunflower',
      dimensions: '2.5cm length',
      cost: '£2.50',
    },
  ];

  const smallVotives = [
    {
      id: 0,
      productName: 'Teddy',
      dimensions: '6cm x 4cm',
      cost: '£2.50',
    },
    {
      id: 1,
      productName: 'Owl',
      dimensions: '5cm x 4cm',
      cost: '£2.50',
    },
    {
      id: 2,
      productName: 'Hive',
      dimensions: '4cm x 4cm',
      cost: '£2.50',
    },
    {
      id: 3,
      productName: 'Rose',
      dimensions: '5cm x 5cm',
      cost: '£2.50',
    },
  ];

  const mediumVotives = [
    {
      id: 0,
      productName: 'Heart',
      dimensions: '5cm x 4cm',
      cost: '£4.50',
    },
    {
      id: 1,
      productName: 'Sheep',
      dimensions: '5cm x 7cm',
      cost: '£4.50',
    },
    {
      id: 2,
      productName: 'Lotus Flower',
      dimensions: '5cm x 6cm',
      cost: '£4.50',
    },
    {
      id: 3,
      productName: 'Rose',
      dimensions: '5cm x 5cm',
      cost: '£2.50',
    },
  ];

  const burners = [
    {
      id: 0,
      productName: 'Burner',
      dimensions: '9cm x 9cm',
      cost: '£8.00',
    },
  ];

  const skincare = [
    {
      id: 0,
      productName: 'Hand Balm',
      dimensions: '30ml',
      cost: '£5.00',
    },
    {
      id: 1,
      productName: 'Lip Balm',
      dimensions: '5.5ml',
      cost: '£2.50',
    },
    {
      id: 2,
      productName: 'Luxury Soap',
      dimensions: '100g',
      cost: '£4.00',
    },
  ];

  const other = [
    {
      id: 0,
      productName: 'Puppy',
      dimensions: '10cm x 8cm',
      cost: '£8.50',
    },
    {
      id: 1,
      productName: 'Figurine',
      dimensions: '12cm x 6cm',
      cost: '£6.50',
    },
    {
      id: 2,
      productName: 'Hive',
      dimensions: '5cm x 5cm',
      cost: '£6.50',
    },
  ];

  return (
    <>
      <div className='dimensions'>
        <Modal show={dimensions} onClose={handleOpenModal}>
          <Table
            title='Pillars & Dinning'
            headings={headings}
            data={pillarsndinning}
          />
          <Table
            title='Small Votives'
            headings={headings}
            data={smallVotives}
          />
          <Table
            title='Medium Votives'
            headings={headings}
            data={mediumVotives}
          />
          <Table title='Burners' headings={headings} data={burners} />
          <Table title='Skincare' headings={headings} data={skincare} />
          <Table title='Other' headings={headings} data={other} />
        </Modal>
      </div>

      <Hamburger />
      <Header secondary={secondary} />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
