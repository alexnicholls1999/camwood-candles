export function sendContactForm() {
  const form = document.querySelector(".contact-form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const serverMessage = document.getElementById("serverError");

  class FormData {
    constructor(name, email, message) {
      this.name = name;
      this.email = email;
      this.message = message;
    }
  }

  const handleFormData = (httpRequest) => {
    if (httpRequest.responseText === "success") {
      serverMessage.innerText = "200 OK: Email sent";
      serverMessage.classList.add("success");
      serverMessage.classList.remove("error");

      name.value = "";
      email.value = "";
      message.value = "";
    } else {
      serverMessage.innerText = httpRequest.responseText;
      serverMessage.classList.add("error");
      serverMessage.classList.remove("success");
    }
  };

  const sendForm = (e) => {
    e.preventDefault();

    const formData = new FormData(name.value, email.value, message.value);

    const httpRequest = new XMLHttpRequest();

    httpRequest.open("POST", "/");
    httpRequest.setRequestHeader("content-type", "application/json");
    httpRequest.onload = function () {
      if (httpRequest.responseText === "success") {
        serverMessage.innerText = "200 OK: Email sent";
        serverMessage.classList.add("success");
        serverMessage.classList.remove("error");

        name.value = "";
        email.value = "";
        message.value = "";
      } else {
        serverMessage.innerText = httpRequest.responseText;
        serverMessage.classList.add("error");
        serverMessage.classList.remove("success");
      }
    };
    httpRequest.send(JSON.stringify(formData));
  };

  form.addEventListener("submit", sendForm);
}
