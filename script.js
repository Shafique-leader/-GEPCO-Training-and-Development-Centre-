/* =========================================================
   1. MOBILE NAVIGATION
========================================================= */

const menuBtn = document.querySelector("#menuBtn");

const navMenu = document.querySelector(".nav-menu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});



/* =========================================================
   2. CLOSE MOBILE MENU AFTER CLICKING A LINK
========================================================= */

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});



/* =========================================================
   3. CONTACT FORM
========================================================= */

const contactForm = document.querySelector("#contactForm");

const formMessage = document.querySelector("#formMessage");


contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // Get user's name
    const userName =
        document.querySelector("#name").value;


    // Display message
    formMessage.textContent =
        "Thank you, " + userName +
        "! Your message has been received.";


    // Clear the form
    contactForm.reset();

});



/* =========================================================
   4. CURRENT YEAR IN FOOTER
========================================================= */

const currentYear = new Date().getFullYear();

const footerText =
    document.querySelector(".footer-bottom p");


footerText.textContent =
    "© " + currentYear +
    " Technical Training Institute. All Rights Reserved.";