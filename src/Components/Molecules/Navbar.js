import React, { useContext } from 'react';
import { ControlsContext } from '../../react-context/ControlsProvider';
import Button from '../Atoms/Form/Button';
import Navlink from '../Atoms/Navlink';

const links = [
  {
    title: 'Home',
    path: '#top'
  },
  {
    title: 'About',
    path: '#aboutus'
  },
  {
    title: 'Votives',
    path: '#votives'
  },
  {
    title: 'Melts & Burners',
    path: '#meltsnburners'
  },
  {
    title: 'Skincare',
    path: '#skincare'
  }
];

function Navbar({ secondary }) {
  const { handleOpenModal, handleContact } = useContext(ControlsContext);

  return (
    <nav className={`${secondary ? 'navbar dark' : 'navbar'}`}>
      <ul className='nav-menu'>
        {links.map((link) => {
          const { title, path } = link;

          return <Navlink navlink={{ title: title, path: path }} />;
        })}

        <li className='btn-wrapper'>
          <Button
            button={{
              secondary: false,
              text: 'Pricing',
              onClick: handleOpenModal
            }}
          />
          <Button
            button={{
              secondary: false,
              text: 'Contact',
              onClick: handleContact
            }}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
