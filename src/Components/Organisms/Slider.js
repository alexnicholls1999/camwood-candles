import React, { useEffect, useReducer } from 'react';
import { Col, Container, Row } from '../../Layouts/Grid/Grid';
import {
  lastSlideAction,
  moveDotsAction,
  nextSlideAction,
  prevSlideAction,
  resetSlideAction,
} from '../../react-reducers/slider.actions';
import useSliderReducer from '../../react-reducers/slider.reducer';
import Hyperlink from '../Atoms/Hyperlink';
import Dots from '../Molecules/Dots';

function Slider({ slides }) {
  const [{ slideIndex }, dispatch] = useReducer(useSliderReducer, {
    slideIndex: 1,
  });

  useEffect(() => {
    const interval = setInterval(nextSlide, slideIndex * 2000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  const nextSlide = () => {
    dispatch(nextSlideAction());
    if (slideIndex === slides.length) return dispatch(resetSlideAction());
  };

  const prevSlide = () => {
    dispatch(prevSlideAction());
    if (slideIndex === 1) return dispatch(lastSlideAction(slides.length));
  };

  return (
    <div className="slider">
      <div className="slideshow-container">
          {slides.map }
      </div>
      <div className="slider-btn"></div>
      <Dots
        slideIndex={slideIndex}
        moveDot={(index) => dispatch(moveDotsAction(index))}
      />
    </div>
  );
}

export default Slider;
