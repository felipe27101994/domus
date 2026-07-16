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

const interestButtons = document.querySelectorAll("[data-interest]");
const interestSelect = document.getElementById("interest");
const nameInput = document.getElementById("name");

interestButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const interest = this.dataset.interest;

        interestSelect.value = interest;

        setTimeout(() => {
            nameInput.focus();
        }, 500);
    });
});

const whatsappButton = document.getElementById("whatsappButton");

let firstOpen = true;

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        whatsappButton.classList.add("show");

        if (firstOpen) {
            firstOpen = false;

            whatsappButton.classList.add("expand");

            setTimeout(() => {
                whatsappButton.classList.remove("expand");
            }, 3000);
        }
    } else {
        whatsappButton.classList.remove("show");
        whatsappButton.classList.remove("expand");

        firstOpen = true;
    }
});

whatsappButton.addEventListener("mouseenter", () => {
    whatsappButton.classList.add("expand");
});

whatsappButton.addEventListener("mouseleave", () => {
    whatsappButton.classList.remove("expand");
});