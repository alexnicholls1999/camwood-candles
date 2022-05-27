import React, { useEffect, useReducer } from 'react';
import { Col, Container, Row } from '../../Layouts/Grid/Grid';
import {
  lastSlideAction,
  moveDotsAction,
  nextSlideAction,
  prevSlideAction,
  resetSlideAction
} from '../../react-reducers/slider.actions';
import useSliderReducer from '../../react-reducers/slider.reducer';
import Hyperlink from '../Atoms/Hyperlink';
import SliderBtn from '../Atoms/SliderBtn';
import Dots from '../Molecules/Dots';
import Slide from '../Molecules/Slide';

function Slider({ dotNumber, slides, secondary }) {
  const [{ slideIndex }, dispatch] = useReducer(useSliderReducer, {
    slideIndex: 1
  });

  useEffect(() => {
    const interval = setInterval(nextSlide, slideIndex * 4000);
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
    <div className={`slider ${secondary ? 'secondary' : 'primary'}`}>
      <div className='slideshow-container'>
        {slides.map((slide, i) => (
          <Slide
            key={i}
            active={slideIndex === i + 1}
            slide={{
              isSecondary: slide.isSecondary,
              title: slide.title,
              img: {
                src: slide.img.src,
                alt: slide.img.alt
              },
              descriptions: slide.descriptions
            }}
          />
        ))}
      </div>
      <SliderBtn onNextClick={nextSlide} onPreviousClick={prevSlide} />
      <Dots
        i={dotNumber}
        secondary={secondary}
        slideIndex={slideIndex}
        moveDot={(index) => dispatch(moveDotsAction(index))}
      />
    </div>
  );
}

export default Slider;
