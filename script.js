// ========================================
// NEXUS SELECT
// SCRIPT DA PÁGINA INICIAL
// ========================================


// MENU MOBILE

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });


    // Fecha o menu ao clicar em um link

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

        });

    });

}


// EFEITO NO HEADER AO ROLAR

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 30) {

        header.style.background =
            "rgba(3, 8, 22, 0.98)";

    } else {

        header.style.background =
            "rgba(3, 8, 22, 0.95)";

    }

});


// ANIMAÇÃO DOS CARDS

const cards = document.querySelectorAll(
    ".product-card, .discord-box"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(25px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});
