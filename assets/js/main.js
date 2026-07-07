const testimonials = document.querySelectorAll(".testimonial");

const dots = document.querySelectorAll(".dot");

let current = 0;

function showTestimonial(index) {
    testimonials.forEach((card) => {
        card.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    testimonials[index].classList.add("active");

    dots[index].classList.add("active");
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        current = index;

        showTestimonial(current);
    });
});

setInterval(() => {
    current++;

    if (current >= testimonials.length) {
        current = 0;
    }

    showTestimonial(current);
}, 5000);

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});