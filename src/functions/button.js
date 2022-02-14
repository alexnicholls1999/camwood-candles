export function contactMe() {
  const contactBtn = document.querySelector("[data-oncontactclick]");
  const purchaseBtn = document.querySelector("[data-purchasebtn]");

  purchaseBtn.addEventListener("click", function () {
    window.location = "#contact-me";
  });

  contactBtn.addEventListener("click", function () {
    window.location = "#contact-me";
  });
}

export function root() {
  const topBtn = document.querySelector("[data-ontopclick]");

  topBtn.addEventListener("click", () => {
    window.location = "/";
  });
}

export function buttonToggle() {
  const contactBtn = document.querySelector("[data-oncontactclick]");
  const dimensionsBtn = document.querySelector("[data-ondimensionsclick]");
  const sendBtn = document.querySelector("[data-onsendclick]");

  contactBtn.addEventListener("mouseover", function () {
    contactBtn.classList.remove("btn-primary");
    contactBtn.classList.add("btn-secondary");
  });

  contactBtn.addEventListener("mouseleave", function () {
    contactBtn.classList.remove("btn-secondary");
    contactBtn.classList.add("btn-primary");
  });

  dimensionsBtn.addEventListener("mouseover", function () {
    dimensionsBtn.classList.remove("btn-primary");
    dimensionsBtn.classList.add("btn-secondary");
  });

  dimensionsBtn.addEventListener("mouseleave", function () {
    dimensionsBtn.classList.remove("btn-secondary");
    dimensionsBtn.classList.add("btn-primary");
  });

  sendBtn.addEventListener("mouseover", function () {
    sendBtn.classList.remove("btn-secondary");
    sendBtn.classList.add("btn-primary");
  });

  sendBtn.addEventListener("mouseleave", function () {
    sendBtn.classList.remove("btn-primary");
    sendBtn.classList.add("btn-secondary");
  });
}
