import React from 'react';
import { Col, Container, Row } from '../../Layouts/Grid/Grid';
import Hyperlink from '../Atoms/Hyperlink';

import slideImg from '../../assets/burners/burners_blue.jpg';

const description = [
  'Our hand-made selection of beeswax pillar and taper dinning candles make a beatiful centrepiece and add a touch of elegance to every home.',
  'We are passionate about making our candles. All our products are made by hand, using high quality British beeswax and 100% cotton wicks, which ensure a drip free burn.',
  'Beeswax is the most natural of waxes and does not release toxic by-products, therefore provides a cleaner, healthier burn.',
];

function Slider({ slider }) {
  return (
    <div className="slider" id="meltsnburners">
      <div className="slideshow-container">
        <Row className="slide">
          <Col className="slide-image" md={6}>
            <img src={slideImg} alt="burner" />
          </Col>
          <Col className="slide-info" md={6}>
            <Container>
              <h2 className="primary--title">Melts & Burners</h2>
              <ul className="product-description">
                {description.map((desc) => {
                  return <li>{desc}</li>;
                })}
                <li>
                  Please{' '}
                  <Hyperlink hyperlink={{ path: '#', isSecondary: false }} /> to
                  see dimensions sheet for sizes and prices.
                </li>
              </ul>
            </Container>
          </Col>
        </Row>
      </div>
      <div className="slider-btn">
        <div className="arrow" id="previous">
          &#10094;
        </div>
        <div className="arrow" id="next">
          &#10095;
        </div>
      </div>
      <div className="dots-container">
        <div className="dot" id="dot-one"></div>
        <div className="dot" id="dot-two"></div>
        <div className="dot" id="dot-three"></div>
      </div>
    </div>
  );
}

export default Slider;
