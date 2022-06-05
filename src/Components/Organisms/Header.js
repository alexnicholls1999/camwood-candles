import React, { useContext } from 'react';
import { Col, Container, Row } from '../../Layouts/Grid/Grid';
import { ControlsContext } from '../../react-context/ControlsProvider';
import Logo from '../Atoms/Iconography/Logo';
import Navbar from '../Molecules/Navbar';

function Header({ secondary }) {
  const { topRef } = useContext(ControlsContext);

  return (
    <header ref={topRef}>
      <Container fluid>
        <Row>
          <Col md={6} lg={4}>
            <Logo />
          </Col>
          <Col md={6} lg={8}>
            <Navbar secondary={secondary} />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
