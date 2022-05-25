import React from 'react';
import { Col, Container, Row } from '../../Layouts/Grid/Grid';
import Logo from '../Atoms/Iconography/Logo';
import Navbar from '../Molecules/Navbar';

function Header() {
  return (
    <header>
      <Container fluid>
        <Row>
          <Col md={6} lg={4}>
            <Logo />
          </Col>
          <Col md={6} lg={8}>
            <Navbar />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
