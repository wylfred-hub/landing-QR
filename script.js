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

// la partie pour le carousel pour bg de l'acceuil
const images = [
    "./téléchargement (4).jpg",
    "./téléchargement (6).jpg",
    "./téléchargement.jpg"
]

let carouselImage = document.getElementById('carousel-image')
let leftButtun = document.getElementById('left')
let rightButtun = document.getElementById('right')

let indexImage = 0

function displayImage(){
    carouselImage.src = images[indexImage]
}

leftButtun.addEventListener('click',()=>{
    indexImage = (indexImage - 1 + images.length) % images.length
    displayImage()
})

rightButtun.addEventListener('click',()=>{
    indexImage = (indexImage + 1) % images.length
    displayImage()
})

setInterval(() => {
    carouselImage.style.opacity = 0

    setTimeout(() => {
        indexImage = (indexImage + 1) % images.length
        displayImage()
        carouselImage.style.opacity = 1
    }, 500) // doit correspondre à la durée CSS
}, 8000)

displayImage()


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

async function getPlats() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    
    const plats = data.slice(0, 10) // prendre seulement 10 éléments
    return plats
}

async function main() {
    const plats = await getPlats()
    console.log(plats)
}

const plats = main()

const gallery = document.getElementById("gallery")

galleryData.forEach(item => {
    gallery.innerHTML += `
        <div class="relative group overflow-hidden rounded-2xl shadow-lg">
            <img src="${plats.body}" 
                 class="w-full h-64 object-cover group-hover:scale-110 transition duration-500">

            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p class="text-white font-semibold">${plats.title}</p>
            </div>
        </div>
    `
})


gallery.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {

        const modal = document.createElement("div")
        modal.className = "fixed inset-0 bg-black/80 flex items-center justify-center z-50"

        modal.innerHTML = `
            <div class="relative">
                <img src="${e.target.src}" 
                     class="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg animate-fadeIn">

                <button class="absolute top-2 right-2 text-white text-2xl">&times;</button>
            </div>
        `

        // fermer si on clique sur fond
        modal.addEventListener("click", (event) => {
            if (event.target === modal) modal.remove()
        })

        // bouton fermer
        modal.querySelector("button").onclick = () => modal.remove()

        document.body.appendChild(modal)
    }
})

// onglet menu -: afficharge au scroll


