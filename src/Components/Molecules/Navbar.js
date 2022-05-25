import React from 'react';
import Button from '../Atoms/Form/Button';
import Navlink from '../Atoms/Navlink';

const links = [
  {
    title: 'Home',
    path: '#top',
  },
  {
    title: 'About',
    path: '#aboutus',
  },
  {
    title: 'Votives',
    path: '#votives',
  },
  {
    title: 'Melts & Burners',
    path: '#meltsnburners',
  },
  {
    title: 'Skincare',
    path: '#skincare',
  },
];

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        {links.map((link) => {
          const { title, path } = link;

          return <Navlink navlink={{ title: title, path: path }} />;
        })}

        <li className="btn-wrapper">
          <Button
            button={{
              secondary: false,
              text: 'Dimensions',
            }}
          />
          <Button
            button={{
              secondary: false,
              text: 'Contact',
            }}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
