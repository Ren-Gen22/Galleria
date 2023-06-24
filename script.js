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

var ALERT_TITLE = "Alert";
var ALERT_BUTTON_TEXT = "Ok";

if (document.getElementById) {
  window.alert = function (txt) {
    createCustomAlert(txt);
  };
}

function createCustomAlert(txt) {
  d = document;

  if (d.getElementById("modalContainer")) return;

  mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
  mObj.id = "modalContainer";
  mObj.style.height = d.documentElement.scrollHeight + "px";

  alertObj = mObj.appendChild(d.createElement("div"));
  alertObj.id = "alertBox";
  if (d.all && !window.opera)
    alertObj.style.top = document.documentElement.scrollTop + "px";
  alertObj.style.left =
    (d.documentElement.scrollWidth - alertObj.offsetWidth) / 2 + "px";
  alertObj.style.visiblity = "visible";

  h1 = alertObj.appendChild(d.createElement("h1"));
  h1.appendChild(d.createTextNode(ALERT_TITLE));

  msg = alertObj.appendChild(d.createElement("p"));
  msg.innerHTML = txt;

  btn = alertObj.appendChild(d.createElement("a"));
  btn.id = "closeBtn";
  btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
  btn.focus();
  btn.onclick = function () {
    removeCustomAlert();
    return false;
  };

  alertObj.style.display = "block";
}

function removeCustomAlert() {
  document
    .getElementsByTagName("body")[0]
    .removeChild(document.getElementById("modalContainer"));
}
function ful() {
  alert("Alert this pages");
}

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
  ALERT_TITLE = "Success";
  alert("Form submitted successfully!");
  ALERT_TITLE = "Alert";
  contactForm.submit();
});

function copy() {
  let copyText = "https://ren-gen22.github.io/Galleria/";
  navigator.clipboard.writeText(copyText);
  alert("!!Copied the link!!");
}
