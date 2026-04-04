const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
    btn.setAttribute("aria-label", expanded ? "Ouvrir le menu" : "Fermer le menu");
    menu.classList.toggle("hidden");
});

// ⭐ Générer les étoiles
const allStars = document.querySelectorAll(".stars");

allStars.forEach(container => {
    for (let i = 0; i < 5; i++) {
        const img = document.createElement("img");
        img.src = "./icons8-étoile-48.png";
        img.alt = "";
        img.className = "w-4 h-4";
        container.appendChild(img);
    }
});

// ✨ Animation au scroll
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
}); 