import React from 'react';
import { Col, Container, Row } from '../../Layouts/Grid/Grid';
import Hyperlink from '../Atoms/Hyperlink';

function Slider({ slider }) {
  return (
    <div
      className={`slider ${slider.isSecondary ? 'primary' : 'secondary'}`}
      id={slider.id}
    >
      <div className='slideshow-container'>
        <Row className='slide'>
          <Col
            className={`slide-image ${slider.isSecondary ? 'order-2' : null}`}
            md={6}
          >
            <img src={slider.slide.img.src} alt={slider.slide.img.src} />
          </Col>
          <Col
            className={`slide-info ${slider.isSecondary ? 'order-1' : null}`}
            md={6}
          >
            <Container>
              <h2
                className={`${
                  slider.isSecondary ? 'primary--title' : 'secondary--title'
                }`}
              >
                {slider.slide.title}
              </h2>
              <ul className='product-description'>
                {slider.slide.description.map((desc) => {
                  return <li>{desc}</li>;
                })}
                <li>
                  Please{' '}
                  <Hyperlink
                    hyperlink={{
                      path: '#',
                      isSecondary: slider.isSecondary
                    }}
                  />{' '}
                  to see dimensions sheet for sizes and prices.
                </li>
              </ul>
            </Container>
          </Col>
        </Row>
      </div>
      <div className='slider-btn'>
        <div className='arrow' id='previous'>
          &#10094;
        </div>
        <div className='arrow' id='next'>
          &#10095;
        </div>
      </div>
      <div className='dots-container'>
        <div className='dot' id='dot-one'></div>
        <div className='dot' id='dot-two'></div>
        <div className='dot' id='dot-three'></div>
      </div>
    </div>
  );
}

export default Slider;
