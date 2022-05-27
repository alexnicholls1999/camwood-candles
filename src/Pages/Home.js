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
import pillar from './../assets/pillars_dinning/pillar1.jpg';
import burner from './../assets/burners/burners_blue.jpg';
import other from './../assets/other.jpg';
import handbalm from './../assets/handbalm.jpg';
import lipbalm from './../assets/lipbalm.jpg';

// Gallery Images
import galleryImage1 from './../assets/gallery/272896555_646407579938897_4415084328210236413_n.jpg';
import galleryImage2 from './../assets/gallery/272896555_646407579938897_4415084328210236413_n.jpg';
import galleryImage3 from './../assets/gallery/272947480_624551558843551_690097386572143986_n.jpg';
import galleryImage4 from './../assets/gallery/273059730_267183262160951_3438234941065248415_n.jpg';
import galleryImage5 from './../assets/gallery/273066710_467638144861426_6902820451433005858_n.jpg';
import galleryImage6 from './../assets/gallery/273077638_292961712838222_2380055696589881482_n.jpg';
import galleryImage7 from './../assets/gallery/273080435_509908090525839_8494720692570817881_n.jpg';
import galleryImage8 from './../assets/gallery/273263557_1020114465514838_9085530217992514366_n.jpg';
import galleryImage9 from './../assets/gallery/272896555_646407579938897_4415084328210236413_n.jpg';
import Button from '../Components/Atoms/Form/Button';
import Map from '../Components/Organisms/Map';

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

const waxnproducts = [
  {
    isSecondary: false,
    title: 'Other',
    information: [
      'Our hand-made beeswax cute puppy candle is one of our favourites and is very popular.',
      'Our hand-made beeswax Hive candle is very realistic with its little bee.',
      'Our hand-made beeswax romantic Figurine is a wonderful gift for your special someone.',
      'We are passionate about making our candles. All our products are made by hand, using high quality British beeswax and 100% cotton wicks, which ensure a drip free burn. Beeswax is the most natural of waxes and does not release toxic by-products, therefore provides a cleaner, healthier burn. Please see our info sheet for sizes and prices.',
    ],
    img: {
      alt: 'other',
      src: other,
    },
  },
  {
    isSecondary: true,
    title: 'Skincare',
    information: [
      'Beeswax lip balm using natures natural ingredients.',
      'Beeswax hand balm using natures natural ingredients.',
    ],
    img: {
      alt: 'skincare_handbalm',
      src: handbalm,
    },
  },
  {
    isSecondary: false,
    title: '',
    information: [''],
    img: {
      alt: 'skincare_lipbalm',
      src: lipbalm,
    },
  },
];

const galleryItems = [
  {
    src: galleryImage1,
    alt: 'instagram-image',
  },
  {
    src: galleryImage2,
    alt: 'instagram-image',
  },
  {
    src: galleryImage3,
    alt: 'instagram-image',
  },
  {
    src: galleryImage4,
    alt: 'instagram-image',
  },
  {
    src: galleryImage5,
    alt: 'instagram-image',
  },
  {
    src: galleryImage6,
    alt: 'instagram-image',
  },
  {
    src: galleryImage7,
    alt: 'instagram-image',
  },
  {
    src: galleryImage8,
    alt: 'instagram-image',
  },
  {
    src: galleryImage9,
    alt: 'instagram-image',
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

      <Slider
        slider={{
          isSecondary: false,
          slide: {
            title: 'Pillars and Dinning',
            img: {
              alt: 'Pillars_1',
              src: pillar,
            },
            description: [
              'Our hand-made selection of beeswax pillar and taper dinning candles make a beatiful centrepiece and add a touch of elegance to every home.',
              'We are passionate about making our candles. All our products are made by hand, using high quality British beeswax and 100% cotton wicks, which ensure a drip free burn.',
              'Beeswax is the most natural of waxes and does not release toxic by-products, therefore provides a cleaner, healthier burn.',
            ],
          },
        }}
      />
      <Slider
        slider={{
          isSecondary: true,
          slide: {
            title: 'Melts and Burners',
            img: {
              alt: 'MeltsnBurners_1',
              src: burner,
            },
            description: [
              'Our hand-made selection of beeswax pillar and taper dinning candles make a beatiful centrepiece and add a touch of elegance to every home.',
              'We are passionate about making our candles. All our products are made by hand, using high quality British beeswax and 100% cotton wicks, which ensure a drip free burn.',
              'Beeswax is the most natural of waxes and does not release toxic by-products, therefore provides a cleaner, healthier burn.',
            ],
          },
        }}
      />

      <Container fluid className="waxnproducts page-section" id="waxnproducts">
        {waxnproducts.map(({ isSecondary, title, information, img }) => {
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

      <Container className="gallery">
        <h2 className="h-2 primary--title text-center">View us on Instagram</h2>
        <div className="gallery-grid">
          {galleryItems.map((item) => {
            return (
              <div className="grid--item">
                <img src={item.src} alt={item.alt} />
              </div>
            );
          })}
        </div>
      </Container>

      <div className="contact">
        <Row>
          <Col className="primary" md={5} lg={4}>
            <div className="contact-form-wrapper">
              <h2 className="h-2 primary--title">Get in Touch</h2>
              <div className="contact-details contact-grid">
                <div class="contact-method">
                  <i class="far fa-map"></i>
                  <p>Ashington, RH20 3BX</p>
                </div>
                <div class="contact-method">
                  <i class="fa fas fa-phone"></i>
                  <p>0742424342523</p>
                </div>
                <div class="contact-method">
                  <i class="far fa-envelope"></i>
                  <p>camwoodcandles@outlook.com</p>
                </div>
              </div>
              <div className="serverMessage" id="serverErr"></div>
              <form className="contact-form">
                <div className="form-control">
                  <label>Name</label>
                  <input type="text" placeholder="Enter Name" id="name" />
                </div>
                <div className="form-control">
                  <label>Email</label>
                  <input type="text" placeholder="Enter Email" id="email" />
                </div>
                <div className="form-control">
                  <label>Message</label>
                  <textarea
                    type="text"
                    cols={30}
                    rows={8}
                    placeholder="Enter Message"
                    id="message"
                  />
                </div>
                <Button button={{ secondary: true, text: 'Send' }} />
              </form>
            </div>
          </Col>
          <Col md={7} lg={8}>
            <Map />
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
}

export default Home;
