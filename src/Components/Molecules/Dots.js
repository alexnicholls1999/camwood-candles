import React from 'react';
import Dot from '../Atoms/Iconography/Dot';

function Dots({ slideIndex, moveDot }) {
  return (
    <div className="dots-container">
      {Array.from({ length: 5 }).map((item, index) => (
        <Dot
          dot={{
            onClick: () => moveDot(index + 1),
            active: slideIndex === index + 1,
          }}
        />
      ))}
    </div>
  );
}

export default Dots;
