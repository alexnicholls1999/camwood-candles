import React from 'react';
import { useNavigate } from 'react-router';
import { Container, Row, Col } from '../Layouts/Grid/Grid';
import MainLayout from '../Layouts/MainLayout';

function NotFound() {
  const navigate = useNavigate();

  return (
    <MainLayout secondary>
      <div className='hero page-section'>
        <Row className='hero-container'>
          <Col className='hero-content-404' md={6} lg={4}>
            <Container className='pt-5'>
              <div class='hero-intro'>
                <h1 className='h-1 primary--title'>404 Page Not Found</h1>
                <div class='p-1'></div>
                <p class='slogan'>
                  The page you are looking for can not be found or does not
                  exist.
                </p>
              </div>
              <div class='p-1'></div>
              <button class='btn btn-primary' onClick={() => navigate('/')}>
                Go Back
              </button>
            </Container>
          </Col>
          <Col className='hero-image-404' md={6} lg={8}></Col>
        </Row>
      </div>
    </MainLayout>
  );
}

export default NotFound;
