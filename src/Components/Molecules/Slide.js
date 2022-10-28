import React, { useContext } from 'react';
import { Col, Container, Row } from '../../Layouts/Grid/Grid';
import { ControlsContext } from '../../react-context/ControlsProvider';
import ArrowBtn from '../Atoms/ArrowBtn';
import Hyperlink from '../Atoms/Hyperlink';

function Slide({ slide, active }) {
  const { handleOpenModal } = useContext(ControlsContext);

  return (
    <Row
      className={`slide fade ${
        slide.isSecondary ? 'secondary order-2' : 'primary order-1'
      }`}
      style={{ display: `${active ? 'flex' : 'none'}` }}
    >
      <Col
        className={`slide-image ${slide.isSecondary ? '' : 'burners'}`}
        md={6}
      >
        <img src={slide.img.src} alt={slide.img.alt} />
      </Col>
      <Col
        md={6}
        className={`slide-info ${slide.isSecondary ? '' : 'burners'}`}
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
          </ul>
          <ArrowBtn
            onClick={handleOpenModal}
            type={slide.isSecondary ? 'secondary' : 'primary'}
            text='View Cost'
          />
        </Container>
      </Col>
    </Row>
  );
}

export default Slide;
