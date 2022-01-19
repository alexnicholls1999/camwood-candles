import { initMap } from "./functions/map.js";
import { Modal, toggleModal } from "./functions/modal.js";
import { currentPageObserver } from "./functions/navigation/navigation.activePage.js";
import { mobileMenu } from "./functions/navigation/navigation.mobile.js";
initMap()
mobileMenu()
// currentPageObserver()
Modal()
toggleModal()