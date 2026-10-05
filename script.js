
// ==============================
// LEARN MORE BUTTON
// ==============================

function LearnMore() {
    window.location.href = "About.html";
}


// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav ul li a");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
});


// ==============================
// CLOSE MENU AFTER CLICK
// ==============================

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("active");
    });
});


// ==============================
// LOGIN BUTTON
// ==============================

const loginBtn = document.querySelector(".login");

loginBtn.addEventListener("click", function () {
    alert("Welcome to Beschool!");

    // Agar Login page bana hua hai to is line ko use kar sakti hain:
    // window.location.href = "Login.html";
});
