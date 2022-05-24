import { Contacts } from './functions/Components/Contacts.js';
import { Gallery } from './functions/Components/Gallery.js';
import { links, NavLinks } from './functions/Components/Navlinks.js';
import { Points } from './functions/Components/Points.js';
import { Section } from './functions/Components/Section.js';
import { Sliders } from './functions/Components/Slider.js';
import { SocialMedia } from './functions/Components/SocialMedia.js';
import {
  meltsnburners,
  pillarsndinning,
  votives,
  waxproducts
} from './functions/content.js';
import { Map } from './functions/Components/map.js';

function Components() {
  NavLinks(links);
  SocialMedia();
  Sliders(pillarsndinning, meltsnburners);
  Gallery();
  Map();
  Points();
  Contacts();
  Section('.votives', votives);
  Section('.waxproducts', waxproducts);
}

function Functions() {}

Functions();
Components();
