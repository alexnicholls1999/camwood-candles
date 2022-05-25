import React from 'react';

function Navlink({ navlink }) {
  return (
    <li className="nav-link">
      <a href={navlink.path}>{navlink.title}</a>
    </li>
  );
}

export default Navlink;
