let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
  searchIcon.classList.remove("fa-times");
  searchForm.classList.remove("active");
};

let searchIcon = document.querySelector("#search-icon");
let searchForm = document.querySelector(".search-form");

searchIcon.onclick = () => {
  searchIcon.classList.toggle("fa-times");
  searchForm.classList.toggle("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  searchIcon.classList.remove("fa-times");
  searchForm.classList.remove("active");
};
/*
//form validation
const contactForm = document.querySelector(".contact form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector('.contact input[type="text"]').value;
  const email = document.querySelector('.contact input[type="email"]').value;
  const number = document.querySelector('.contact input[type="number"]').value;
  const subject = document.querySelector(
    '.contact input[type="text"]:nth-of-type(2)'
  ).value;
  const message = document.querySelector(".contact textarea").value;

  if (!name || !email || !number || !subject || !message) {
    alert("Please fill in all the fields!");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
    return;
  }

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(number)) {
    alert("Please enter a 10-digit phone number!");
    return;
  }

  alert("Form submitted successfully!");
  contactForm.submit();
});*/

const contactForm = document.querySelector(".contact form");

function showPopupMessage(message) {
  // Create the popup element
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `<p>${message}</p>`;

  // Append the popup to the contact section
  const contactSection = document.querySelector(".contact");
  contactSection.appendChild(popup);

  // Hide the popup after 3 seconds
  setTimeout(function () {
    contactSection.removeChild(popup);
  }, 3000);
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector('.contact input[type="text"]').value;
  const email = document.querySelector('.contact input[type="email"]').value;
  const number = document.querySelector('.contact input[type="number"]').value;
  const subject = document.querySelector(
    '.contact input[type="text"]:nth-of-type(2)'
  ).value;
  const message = document.querySelector(".contact textarea").value;

  if (!name || !email || !number || !subject || !message) {
    showPopupMessage("Please fill in all the fields!");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showPopupMessage("Please enter a valid email address!");
    return;
  }

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(number)) {
    showPopupMessage("Please enter a 10-digit phone number!");
    return;
  }

  showPopupMessage("Form submitted successfully!");
  contactForm.submit();
});
