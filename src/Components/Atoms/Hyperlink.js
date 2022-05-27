import React from 'react';

function Hyperlink({ hyperlink }) {
  return (
    <a
      className={`hyperlink ${
        hyperlink.isSecondary ? 'secondary--link' : 'primary--link'
      }`}
      href={hyperlink.path}
    >
      click here
    </a>
  );
}

export default Hyperlink;
