import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import smallVotives from './../assets/votives/small_votives.jpg';
import mediumVotives from './../assets/votives/medium_votives.jpg';

// Pillars
import pillar from './../assets/pillars/pillar1.jpg';
import pillar2 from './../assets/pillars/pillar2.jpg';
import pillar3 from './../assets/pillars/pillar2.jpg';

// Burners
import burnerGreen from './../assets/burners.jpg';
import burnerBlue from './../assets/burners.jpg';
import burnerWhite from './../assets/burners.jpg';
import burnerPink from './../assets/burners.jpg';
import burnerLBlue from './../assets/burners.jpg';

// Other
import other from './../assets/other.jpg';

// Skincare
import skincare from './../assets/skincare/skincare.jpg';
import skincare2 from './../assets/skincare/skincare2.jpg';

// Gallery Images
import galleryImage1 from './../assets/gallery/272896555_646407579938897_4415084328210236413_n.jpg';
import galleryImage2 from './../assets/gallery/272947480_624551558843551_690097386572143986_n.jpg';
import galleryImage3 from './../assets/gallery/273059730_267183262160951_3438234941065248415_n.jpg';
import galleryImage4 from './../assets/gallery/273066710_467638144861426_6902820451433005858_n.jpg';
import galleryImage5 from './../assets/gallery/273077638_292961712838222_2380055696589881482_n.jpg';
import galleryImage6 from './../assets/gallery/273080435_509908090525839_8494720692570817881_n.jpg';
import galleryImage7 from './../assets/gallery/273207738_613585489621627_2336879817597700760_n.jpg';
import galleryImage8 from './../assets/gallery/273263557_1020114465514838_9085530217992514366_n.jpg';
import galleryImage9 from './../assets/gallery/273561239_900940113909391_2377606561430269009_n.jpg';

export const content = {
  hero: {
    title: 'Camwood Candles',
    store: 'View our products',
    socialmedias: [
      {
        isSecondary: false,
        path: 'https://www.facebook.com/beautifulbeeswax',
        icon: faFacebookF,
      },
      {
        isSecondary: true,
        path: 'https://www.instagram.com/camwood/?hl=en-gb',
        icon: faInstagram,
      },
      {
        isSecondary: false,
        path: '#',
        icon: faTwitter,
      },
    ],
  },
  points: [
    {
      id: 0,
      pointId: 'natural-substance',
      title: 'Natural Substance.',
      isSecondary: false,
      isThird: false,
      isLastPoint: false,
      message:
        'Beeswax is a completely all-natural substance straight from Mother Nature herself. It is the purest and most natural of all waxes with no additives.',
    },
    {
      id: 1,
      pointId: 'burnefficency',
      title: 'Burn Efficency.',
      isSecondary: true,
      isThird: false,
      isLastPoint: false,
      message:
        'Beeswax burns longer, cleaner and brighter than any other waxes.',
    },
    {
      id: 2,
      pointId: 'native',
      title: 'Native.',
      isSecondary: false,
      isThird: true,
      isLastPoint: false,
      message:
        'Beeswax is the only wax that is essentially used in its native state, with only filtering for processing.',
    },
    {
      id: 3,
      pointId: 'airquality',
      title: 'Better air quality.',
      isSecondary: true,
      isThird: false,
      isLastPoint: true,
      message:
        'Natural beeswax candles can provide an important ingredient for a healthier home. They help eliminate bacteria, dust, pollen, pet dander and bacteria from the air when burned.',
    },
  ],
  votives: [
    {
      isSecondary: false,
      title: 'Small Votives',
      information: [
        'Our hand-made beeswax Votive selection made with fun in mind, make that perfect gift for all your friends and family. We are passionate about making our candles. All our products are made by hand, using high quality British beeswax and 100% cotton wicks, which ensure a drip free burn.',
        'Small Votives include: Rose, Owl, Parcel, Hive, Teddy. Medium Votives include: Lotus Flower, Heart, Sheep.',
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
        'Beeswax is the most natural of waxes and does not release toxic by-products, therefore provides a cleaner, healthier burn.',
        'Medium Votives include: Lotus Flower, Heart, Sheep.',
      ],
      img: {
        alt: 'small_medium_votives_2',
        src: mediumVotives,
      },
    },
  ],
  pillars: [
    {
      isSecondary: true,
      img: {
        src: pillar,
        alt: 'dining-candle_1',
      },
      title: 'Pillars & Dinning',
      descriptions: [
        'Our hand-made selection of beeswax pillar and taper dinning candles make a beatiful centrepiece and add a touch of elegance to every home.',
        'We are passionate about making our candles. All our products are made by hand, using high quality British beeswax and 100% cotton wicks, which ensure a drip free burn.',
        'Beeswax is the most natural of waxes and does not release toxic by-products, therefore provides a cleaner, healthier burn.',
      ],
    },
    {
      isSecondary: true,
      img: {
        src: pillar2,
        alt: 'dining-candle_2',
      },
      title: 'Pillars & Dinning',
      descriptions: [
        'Our hand-made selection of beeswax pillar and taper dinning candles make a beatiful centrepiece and add a touch of elegance to every home.',
        'We are passionate about making our candles. All our products are made by hand, using high quality British beeswax and 100% cotton wicks, which ensure a drip free burn.',
        'Beeswax is the most natural of waxes and does not release toxic by-products, therefore provides a cleaner, healthier burn.',
      ],
    },
  ],
  meltsnburners: {
    isSecondary: false,
    title: 'Ceramic Burners',
    img: {
      src: burnerGreen,
      alt: 'burner_Green',
    },
    descriptions: [
      'Our beautiful ceramic burners are hand-dipped to create a colourful marbled effect. No two are the same. This makes for the ideal gift when your looking for something unique.',
      'Each burner comes with :-',
      '2x beeswax scented melts',
      '1x beeswax scented t-light',
    ],
  },
  waxnproducts: [
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
        src: skincare,
      },
    },
    {
      isSecondary: false,
      title: '',
      information: [''],
      img: {
        alt: 'skincare_lipbalm',
        src: skincare2,
      },
    },
  ],
  galleryItemsTitle: 'View us on Instagram',
  galleryItems: [
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
  ],
};
