import React, { Fragment, useContext } from 'react';
import Point from '../Components/Organisms/Point';
import Section from '../Components/Organisms/Section';
import Slider from '../Components/Organisms/Slider';
import { Col, Container, Row } from '../Layouts/Grid/Grid';
import MainLayout from '../Layouts/MainLayout';

import Map from '../Components/Organisms/Map';
import { ContentContext } from '../content/ContextProvider';
import SocialMedia from '../Components/Molecules/SocialMedia';
import Form from '../Components/Organisms/Form';
import { ControlsContext } from '../react-context/ControlsProvider';
import Slide from '../Components/Molecules/Slide';
import ArrowBtn from '../Components/Atoms/ArrowBtn';

function Home() {
  const content = useContext(ContentContext);
  const { contactRef, votivesRef, handleVotives } = useContext(ControlsContext);

  return (
    <MainLayout>
      <Row className='hero page-section'>
        <Col className='hero-image' md={6} lg={8}></Col>
        <Col className='hero-content' md={6} lg={4}>
          <Container className='pt-5'>
            <div className='hero-intro'>
              <h1 className='h-1 primary--title'>{content.hero.title}</h1>
              <p className='slogan'>
                Beeswax is natures gift to us. <br /> This is our gift to you!
              </p>
            </div>
            <ArrowBtn
              onClick={handleVotives}
              className='store-link-btn'
              text={content.hero.store}
            />
            <SocialMedia socialmedias={content.hero.socialmedias} />
          </Container>
        </Col>
      </Row>
      {/* Hero Section */}

      <Container fluid className='about page-section'>
        <Row>
          <Col md={6}>
            <h2 className='h-2 about-title secondary--title'>About Us</h2>
            <h3 className='about-slogan primary--title'>
              "A shining light in the dark"
            </h3>
          </Col>
          <Col md={6}>
            <div className='about-info'>
              Hello, my name is Carol and I make candles. In 2017 I attended a
              candle making course and fell in love with beeswax. Beeswax is a
              natural wax produced by the honey bee and I loved the idea that
              nature was helping me make my candles, so in 2018 I founded
              Camwood Candles. I have created some beautiful beeswax candles for
              everyone to enjoy and last year expanded my beeswax range to
              include lip and hand balm and soaps.
              <br />
              <br />I hope you enjoy browsing through my beeswax range.
            </div>
          </Col>
        </Row>
      </Container>

      <div className='points'>
        <div className='points-grid'>
          {content.points.map((point) => {
            return (
              <Point
                point={{
                  pointId: point.pointId,
                  isSecondary: point.isSecondary,
                  isThird: point.isThird,
                  isLastPoint: point.isLastPoint,
                  title: point.title,
                  message: point.message,
                }}
              />
            );
          })}
        </div>
      </div>

      <div ref={votivesRef}>
        <Container fluid className='votives primary page-section' id='votives'>
          {content.votives.map(({ isSecondary, title, information, img }) => {
            return (
              <Section
                section={{
                  isSecondary: isSecondary,
                  title: title,
                  information: information,
                  img: {
                    src: img.src,
                    alt: img.alt,
                  },
                }}
              />
            );
          })}
        </Container>
      </div>

      <Slider dotNumber={2} slides={content.pillars} />

      {/* Change to Section */}
      <div className='slider'>
        <div className='slideshow-container'>
          <Slide
            slide={{
              isSecondary: content.meltsnburners.isSecondary,
              title: content.meltsnburners.title,
              img: {
                src: content.meltsnburners.img.src,
                alt: content.meltsnburners.img.alt,
              },
              descriptions: content.meltsnburners.descriptions,
            }}
            active
          />
        </div>
      </div>
      {/* <Slider secondary dotNumber={5} slides={content.meltsnburners} /> */}

      <Container fluid className='waxnproducts page-section' id='waxnproducts'>
        {content.waxnproducts.map(
          ({ isSecondary, title, information, img }) => {
            return (
              <Section
                section={{
                  isSecondary: isSecondary,
                  title: title,
                  information: information,
                  img: {
                    src: img.src,
                    alt: img.alt,
                  },
                }}
                active
              />
            );
          }
        )}
      </Container>

      <Container className='gallery'>
        <h2 className='h-2 primary--title text-center'>
          {content.galleryItemsTitle}
        </h2>
        <div className='gallery-grid'>
          {content.galleryItems.map((item) => {
            return (
              <div className='grid--item'>
                <img src={item.src} alt={item.alt} />
              </div>
            );
          })}
        </div>
      </Container>

      <div className='contact' ref={contactRef}>
        <Row>
          <Col className='primary' md={7} lg={5} xl={4}>
            <div className='contact-form-wrapper'>
              <h2 className='h-2 primary--title'>Get in Touch</h2>
              <div className='contact-details contact-grid'>
                <div class='contact-method'>
                  <i class='far fa-map'></i>
                  <p>Ashington, RH20 3BX</p>
                </div>
                <div class='contact-method'>
                  <i class='fa fas fa-phone'></i>
                  <p>07792167094</p>
                </div>
                <div class='contact-method'>
                  <i class='far fa-envelope'></i>
                  <p>camwoodcandles@outlook.com</p>
                </div>
              </div>
              <Form button={{ submit: true }} />
            </div>
          </Col>
          <Col md={5} lg={7} xl={8}>
            <Map />
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
}

export default Home;
