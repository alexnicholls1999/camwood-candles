import React from 'react';
import Dot from '../Atoms/Iconography/Dot';

function Dots({ i, secondary, slideIndex, moveDot }) {
  return (
    <div className={`dots-container ${secondary ? 'dotsLeft' : 'dotsRight'}`}>
      {Array.from({ length: i }).map((item, index) => (
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
