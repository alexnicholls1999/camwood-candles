import React from 'react';
import { Col, Container, Row } from '../../Layouts/Grid/Grid';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <p className="copyright">&copy; 2022 Camwood Candles</p>
          </Col>
          <Col md={6}>
            <ul className="social-media-footer">
              <li className="media-icon">
                <a href="" className="media-icon--link">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="media-icon">
                <a href="" className="media-icon--link">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="media-icon">
                <a href="" className="media-icon--link">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <button className="btn btn-primary top">&#8593;</button>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
