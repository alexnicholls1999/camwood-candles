import React from 'react';

function Hyperlink({ hyperlink }) {
  return (
    <a
      className={`hyperlink ${
        hyperlink.isSecondary ? 'primary--link' : 'secondary--link'
      }`}
      href={hyperlink.path}
    >
      click here
    </a>
  );
}

export default Hyperlink;
