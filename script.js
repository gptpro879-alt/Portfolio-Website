// Typing Animation

const text = "Computer Science & Engineering Student";
const typingElement = document.getElementById("typing");

let index = 0;

function typingEffect() {

    if (index < text.length) {

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect, 80);

    }

}

typingEffect();


// Scroll Animation

const cards = document.querySelectorAll(".card");

function revealCards() {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 100) {

            card.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealCards);

revealCards();


// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    contactForm.reset();

});


// Smooth Button Effect

const button = document.querySelector(".btn");

button.addEventListener("mouseenter", () => {

    button.style.transform = "translateY(-5px)";

});

button.addEventListener("mouseleave", () => {

    button.style.transform = "translateY(0)";

});


// Dynamic Footer Year

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML =
`© ${year} Rejoyan Ahmed Prince | All Rights Reserved`;
