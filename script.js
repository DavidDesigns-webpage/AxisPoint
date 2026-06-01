/* ========================================
   LOADER
======================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader")
            .style.display = "none";

    }, 2200);

});

/* ========================================
   TESTIMONIAL SLIDER
======================================== */

const testimonials =
document.querySelectorAll(".testimonial");

let current = 0;

setInterval(() => {

    testimonials[current]
    .classList.remove("active");

    current++;

    if(current >= testimonials.length){
        current = 0;
    }

    testimonials[current]
    .classList.add("active");

}, 5000);

/* ========================================
   MOBILE MENU PLACEHOLDER
======================================== */
/* ========================================
   MOBILE NAVIGATION
======================================== */

const hamburger =
document.getElementById("hamburger");

const navLinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
document
.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});
// Add mobile menu logic here

/* ========================================
   SCROLL ANIMATIONS
======================================== */

// Add IntersectionObserver animations here