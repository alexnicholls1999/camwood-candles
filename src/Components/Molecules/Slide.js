import React from 'react';
import { Col, Container, Row } from '../../Layouts/Grid/Grid';
import Hyperlink from '../Atoms/Hyperlink';

function Slide({ slide, active }) {
  return (
    <Row
      className='slide fade'
      style={{ display: `${active ? 'flex' : 'none'}` }}
    >
      <Col
        className={`slide-image ${slide.isSecondary ? 'order-1' : 'order-2'}`}
        md={6}
      >
        <img src={slide.img.src} alt={slide.img.alt} />
      </Col>
      <Col
        md={6}
        className={`slide-info ${
          slide.isSecondary ? 'secondary order-2' : 'primary order-1'
        }`}
      >
        <Container>
          <h2
            className={`h-2 ${
              slide.isSecondary ? 'secondary--title' : 'primary--title'
            }`}
          >
            {slide.title}
          </h2>
          <ul class='product-description'>
            {slide.descriptions.map((desc) => {
              return <li>{desc}</li>;
            })}
            <li>
              Please{' '}
              <Hyperlink hyperlink={{ isSecondary: slide.isSecondary }} /> to
              see dimensions sheet for sizes and prices.
            </li>
          </ul>
        </Container>
      </Col>
    </Row>
  );
}

export default Slide;
