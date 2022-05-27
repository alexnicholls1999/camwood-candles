import React from 'react';

function SliderBtn({ onPreviousClick, onNextClick }) {
  return (
    <div className='slider-btn'>
      <div onClick={onPreviousClick} className='arrow' id='previous'>
        &#10094;
      </div>
      <div onClick={onNextClick} className='arrow' id='next'>
        &#10095;
      </div>
    </div>
  );
}

export default SliderBtn;
