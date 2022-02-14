import { Modal, toggleModal } from "./functions/modal.js";
import { mobileMenu } from "./functions/navigation/navigation.mobile.js";

function PageNotFound() {
  function buttonActions() {
    function root() {
      const rootButton = document.querySelector("[data-404btn]");

      rootButton.addEventListener("click", () => {
        window.location = "/";
      });
    }

    function contactMe() {
      const contactBtn = document.querySelector("[data-oncontactclick]");

      contactBtn.addEventListener("click", () => {
        window.location = "/#contact-me";
      });
    }

    contactMe();
    root();
  }

  buttonActions();
  mobileMenu();
  Modal();
  toggleModal();
}

PageNotFound();
