// ================================
// ALFIYA.DEV — INTERACTIONS
// ================================


// Reveal elements while scrolling
const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .cert-card, .education-card, .about-content, .about-card"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// Smooth navbar shadow when scrolling
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


// Project card subtle movement
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -2;
        const rotateY = ((x - centerX) / centerX) * 2;

        card.style.transform =
            `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0) translateY(0)";

    });

});


// Current year automatically
const year = document.querySelector(".footer-bottom span");

if (year) {
    year.textContent =
        `© ${new Date().getFullYear()} Alfiya Nasir Sayyad`;
}