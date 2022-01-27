function sendContactForm() {
    const form = document.querySelector(".contact-form");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const serverMessage = document.getElementById("serverMessage");

    class FormData {
        constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
        }
    }

    const sendForm = () => {
        e.preventDefault();

        const formData = new FormData(
            name.value,
            email.value,
            message.value
        );

        const httpRequest = new XMLHttpRequest();

        const handleFormDataCheck = () => {
            if (httpRequest.responseText === "success") {
            serverMessage.innerText = "Email Sent";
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

        httpRequest.open("POST", "/");
        httpRequest.setRequestHeader("content-type", "application/json");
        httpRequest.onload = handleFormDataCheck();
        httpRequest.send(JSON.stringify(formData));
    }

    form.addEventListener("submit", sendForm)  
}
