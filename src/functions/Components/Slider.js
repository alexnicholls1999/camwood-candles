class Slider {
  constructor(slideIndex, slideArray) {
    this.slideIndex = slideIndex;
    this.slideArray = slideArray;
  }

  showSlides(n) {
    const slides = Array.from(this.slideArray.children);

    if (n > slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = slides.length;
    }

    slides.map((slide) => {
      slide.style.display = 'none';
      return null;
    });

    slides[this.slideIndex - 1].style.display = 'flex';
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }
}

class Dots {
  constructor() {}

  showDots() {}

  currentSlide() {}
}

class Slide {
  constructor(id, products) {
    this.id = id;
    this.products = products;
  }

  render() {
    const slideId = document.querySelector(this.id);

    console.log(slideId);

    const productsList = this.products
      .map((product) => {
        return `
            <div class="slide row">
              <div class="${
                product.isSecondary
                  ? 'col-md-6 slide-image order-2'
                  : 'col-md-6 slide-image'
              }">
                  <img
                      src=${product.slideImage.src}
                      alt=${product.slideImage.alt}
                  />
              </div>
              <div class="${
                product.isSecondary
                  ? 'col-md-6 slide-info order-1'
                  : 'col-md-6 slide-info'
              }">
                  <div class="container">
                      <h2 class="${
                        product.isSecondary
                          ? 'secondary--title'
                          : 'primary--title'
                      }">${product.slideInfo.title}</h2>
                      <ul class="product-description">
                          ${product.slideInfo.description
                            .map((desc) => {
                              return `
                                  <li>${desc}</li>
                              `;
                            })
                            .join(' ')}
                          <li>
                              Please
                              <a href="#" class="hyperlink ${
                                product.isSecondary
                                  ? 'secondary--link'
                                  : 'primary--link'
                              }">click here</a>
                              to see dimensions sheet for sizes and prices.
                          </li>
                      </ul>
                  </div>
              </div>
            </div>
        `;
      })
      .join('');

    slideId.innerHTML = productsList;
  }
}

export function Sliders(pillarsndinning, meltsnburners) {
  let slideIndex = 1;

  const pillarsndinningSlider = {
    id: '#pillarsnDinning',
    controls: {
      next: '#next',
      previous: '#previous'
    }
  };

  const meltsnburnersSlider = {
    id: '#meltsnBurners',
    controls: {
      next: '#next-2',
      previous: '#previous-2'
    }
  };

  const pillarsndinningSlides = new Slide('#pillarsnDinning', pillarsndinning);
  const meltsnburnersSlides = new Slide('#meltsnBurners', meltsnburners);

  pillarsndinningSlides.render();
  meltsnburnersSlides.render();

  const slider = (component) => {
    const next = document.querySelector(component.controls.next);
    const previous = document.querySelector(component.controls.previous);
    const slidesArray = document.querySelector(component.id);

    const sliderComponent = new Slider(slideIndex, slidesArray);

    next.onclick = () => sliderComponent.plusSlides(1);
    previous.onclick = () => sliderComponent.plusSlides(-1);

    sliderComponent.showSlides(slideIndex);
  };

  slider(pillarsndinningSlider);
  slider(meltsnburnersSlider);
}
