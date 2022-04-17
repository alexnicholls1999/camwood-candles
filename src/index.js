import { buttonToggle, contactMe, root } from './functions/button.js';
import { Components } from './functions/components/components.js';
import { sendContactForm } from './functions/contactForm.js';
import { initMap } from './functions/map.js';
import { Modal, toggleModal } from './functions/modal.js';
import { currentPageObserver } from './functions/navigation/navigation.activePage.js';
import { mobileMenu } from './functions/navigation/navigation.mobile.js';

initMap();
mobileMenu();
Modal();
toggleModal();
contactMe();
root();
buttonToggle();
sendContactForm();
currentPageObserver();
Components();
