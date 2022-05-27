import sliderTypes from './slider.types';

export default function useSliderReducer(state, action) {
  switch (action.type) {
    case sliderTypes.MOVE_DOTS:
      return { slideIndex: action.payload };
    case sliderTypes.NEXT_SLIDE:
      return { slideIndex: state.slideIndex + 1 };
    case sliderTypes.PREVIOUS_SLIDE:
      return { slideIndex: state.slideIndex - 1 };
    case sliderTypes.LAST_SLIDE:
      return { slideIndex: action.payload };
    case sliderTypes.RESET_SLIDE:
      return { slideIndex: 1 };
    default:
      break;
  }
}
