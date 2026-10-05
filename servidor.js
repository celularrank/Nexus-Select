/* =====================================================
   NEXUS SELECT — SERVIDOR
   ===================================================== */


/* =====================================================
   MENU MOBILE
   ===================================================== */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("open");

        const aberto = nav.classList.contains("open");

        menuToggle.textContent = aberto ? "✕" : "☰";

    });


    // Fecha o menu quando clicar em um link

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menuToggle.textContent = "☰";

        });

    });

}


/* =====================================================
   HEADER AO ROLAR
   ===================================================== */

const header = document.getElementById("header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =====================================================
   ANIMAÇÃO DOS ELEMENTOS
   ===================================================== */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const position = element.getBoundingClientRect().top;

        if (position < windowHeight - 80) {
            element.classList.add("visible");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =====================================================
   CONTADOR DE JOGADORES
   ===================================================== */

const playerCount = document.getElementById("playerCount");

function animatePlayerCount() {

    if (!playerCount) return;

    const target = 127;
    const duration = 1200;

    let start = 0;
    const startTime = performance.now();

    function update(currentTime) {

        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration, 1);

        const ease = 1 - Math.pow(1 - progress, 3);

        const value = Math.floor(start + (target - start) * ease);

        playerCount.textContent = value;

        if (progress < 1) {
            requestAnimationFrame(update);
        }

    }

    requestAnimationFrame(update);

}

animatePlayerCount();


/* =====================================================
   ANO AUTOMÁTICO NO FOOTER
   ===================================================== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =====================================================
   FECHAR MENU AO CLICAR FORA
   ===================================================== */

document.addEventListener("click", (event) => {

    if (!nav || !menuToggle) return;

    const clicouNoMenu = nav.contains(event.target);
    const clicouNoBotao = menuToggle.contains(event.target);

    if (
        nav.classList.contains("open") &&
        !clicouNoMenu &&
        !clicouNoBotao
    ) {

        nav.classList.remove("open");

        menuToggle.textContent = "☰";

    }

});


/* =====================================================
   TECLA ESC FECHA MENU
   ===================================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (nav && nav.classList.contains("open")) {

            nav.classList.remove("open");

            if (menuToggle) {
                menuToggle.textContent = "☰";
            }

        }

    }

});


/* =====================================================
   OBSERVAÇÃO
   =====================================================

   O número "127" é apenas demonstrativo.

   Para mostrar jogadores online reais,
   será necessário conectar o site a uma API
   ou backend do servidor.

   ===================================================== */
