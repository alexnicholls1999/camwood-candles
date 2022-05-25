import React from 'react';
import Hamburger from '../Components/Atoms/Iconography/Hamburger';
import Header from '../Components/Organisms/Header';
import Point from '../Components/Organisms/Point';
import Section from '../Components/Organisms/Section';
import Slider from '../Components/Organisms/Slider';
import { Col, Container, Row } from '../Layouts/Grid/Grid';
import MainLayout from '../Layouts/MainLayout';

import smallVotives from './../assets/votives/small_medium_votives_1.jpg';
import mediumVotives from './../assets/votives/small_medium_votives_2.jpg';

const points = [
  {
    id: 0,
    pointId: 'natural-substance',
    title: 'Natural Substance.',
    isSecondary: false,
    message:
      'Beeswax is a completely all-natural substance straight from Mother Nature herself. It is the purest and most natural of all waxes with no additives.',
  },
  {
    id: 1,
    pointId: 'burnefficency',
    title: 'Burn Efficency.',
    isSecondary: true,
    message: 'Beeswax burns longer, cleaner and brighter than any other waxes.',
  },
  {
    id: 2,
    pointId: 'native',
    title: 'Native.',
    isSecondary: false,
    message:
      'Beeswax is the only wax that is essentially used in its native state, with only filtering for processing.',
  },
  {
    id: 3,
    pointId: 'airquality',
    title: 'Better air quality.',
    isSecondary: true,
    message:
      'Natural beeswax candles can provide an important ingredient for a healthier home. They help eliminate bacteria, dust, pollen, pet dander and bacteria from the air when burned.',
  },
];

const votives = [
  {
    isSecondary: false,
    title: 'Small Votives',
    information: [
      'Our hand-made beeswax Votive selection made with fun in mind, make that perfect gift for all your friends and family. We are passionate about making our candles. All our products are made by hand, using high quality British beeswax and 100% cotton wicks, which ensure a drip free burn.',
      'Small Votives include: Rose, Owl, Parcel, Hive, Teddy. Medium Votives include: Lotus Flower, Heart, Sheep. Please click here to see dimensions sheet for sizes and prices.',
    ],
    img: {
      alt: 'small_medium_votives_1',
      src: smallVotives,
    },
  },
  {
    isSecondary: true,
    title: 'Medium Votives',
    information: [
      'Our hand-made beeswax Votive selection made with fun in mind, make that perfect gift for all your friends and family. We are passionate about making our candles. All our products are made by hand, using high quality British beeswax and 100% cotton wicks, which ensure a drip free burn.',
      'Small Votives include: Rose, Owl, Parcel, Hive, Teddy. Medium Votives include: Lotus Flower, Heart, Sheep. Please click here to see dimensions sheet for sizes and prices.',
    ],
    img: {
      alt: 'small_medium_votives_2',
      src: mediumVotives,
    },
  },
];

function Home() {
  return (
    <MainLayout>
      <Row className="hero page-section">
        <Col className="hero-image" md={6} lg={8}></Col>
        <Col className="hero-content" md={6} lg={4}>
          <Container className="pt-5">
            <div className="hero-intro">
              <h1 className="h-1 primary--title">Camwood Candles</h1>
              <p className="slogan">
                Beeswax is natures gift to us <br />
                This is our gift to you!
              </p>
            </div>
            <button className="store-link-btn">Purchase A Gift Now</button>
          </Container>
        </Col>
      </Row>
      {/* Hero Section */}

      <Container fluid className="about page-section">
        <Row>
          <Col md={6}>
            <h2 className="h-2 about-title secondary--title">About Us</h2>
            <h3 className="about-slogan primary--title">
              "A shining light in the dark"
            </h3>
          </Col>
          <Col md={6}>
            <div className="about-info">
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

      <div className="points">
        <div className="points-grid">
          {points.map((point) => {
            return (
              <Point
                point={{
                  pointId: point.pointId,
                  isSecondary: point.isSecondary,
                  title: point.title,
                  message: point.message,
                }}
              />
            );
          })}
        </div>
      </div>

      <Container fluid className="votives primary page-section" id="votives">
        {votives.map(({ isSecondary, title, information, img }) => {
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

      <Slider />
      <Slider />
    </MainLayout>
  );
}

export default Home;
