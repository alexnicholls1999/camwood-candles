import React, { useContext } from 'react';
import { ControlsContext } from '../../react-context/ControlsProvider';

import Close from '../Atoms/Iconography/Close';

function Menu({ show, onClose }) {
  const { handleOpenModal, handleContact } = useContext(ControlsContext);

  return (
    <div className={`mobile-menu ${show && 'open'}`}>
      <h2>Menu</h2>
      <Close onClick={onClose} />
      <nav>
        <ul className="menu">
          <li className="menu--item active-link">
            <a href="#top">Home</a>
          </li>
          <li className="menu--item">
            <a href="#aboutus">About Us</a>
          </li>
          <li className="menu--item">
            <a href="#votives">Votives</a>
          </li>
          <li className="menu--item">
            <a href="#meltsnburners">Melts & Burners</a>
          </li>
          <li className="menu--item">
            <a href="#skincare">Skincare</a>
          </li>
          <li class="btn-wrapper" style={{ marginTop: '0.75rem' }}>
            <button className="btn btn-primary" onClick={handleOpenModal}>
              Dimensions
            </button>
            <button className="btn btn-primary" onClick={handleContact}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
