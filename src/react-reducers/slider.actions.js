import sliderTypes from './slider.types';

export const moveDotsAction = (dotsIndex) => ({
  type: sliderTypes.MOVE_DOTS,
  payload: dotsIndex,
});

export const lastSlideAction = (quotes) => ({
  type: sliderTypes.LAST_SLIDE,
  payload: quotes,
});

export const nextSlideAction = () => ({
  type: sliderTypes.NEXT_SLIDE,
});

export const prevSlideAction = () => ({
  type: sliderTypes.PREVIOUS_SLIDE,
});

export const resetSlideAction = () => ({
  type: sliderTypes.RESET_SLIDE,
});
