import React from 'react';
import { Col, Row } from '../../Layouts/Grid/Grid';

function Section({ section }) {
  return (
    <Row className="pt-2">
      <Col className={`${section.isSecondary ? 'order-2' : null}`} md={6}>
        <h2 className="h-2 primary--title">{section.title}</h2>
        {section.information.map((info) => {
          return <p>{info}</p>;
        })}
      </Col>
      <Col className={`${section.isSecondary ? 'order-1' : null}`} md={6}>
        <div className="section-image">
          <img src={section.img.src} alt={section.img.alt} />
        </div>
      </Col>
    </Row>
  );
}

export default Section;
