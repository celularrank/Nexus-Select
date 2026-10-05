document.addEventListener("DOMContentLoaded", () => {

    /*
     * ==========================================
     * NEXUS SELECT
     * JavaScript da página inicial
     * ==========================================
     */


    /* ==========================================
       MENU MOBILE
    ========================================== */

    const menuButton =
        document.getElementById("menuButton");

    const menu =
        document.getElementById("menu");


    if (menuButton && menu) {

        menuButton.addEventListener(
            "click",
            () => {

                const isOpen =
                    menu.classList.toggle("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

                menuButton.textContent =
                    isOpen ? "✕" : "☰";

            }
        );


        const menuLinks =
            menu.querySelectorAll("a");


        menuLinks.forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    menu.classList.remove("open");

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuButton.textContent =
                        "☰";

                }
            );

        });

    }


    /* ==========================================
       HEADER AO ROLAR
    ========================================== */

    const header =
        document.getElementById("header");


    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 30) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    updateHeader();


    /* ==========================================
       CONTADOR DE JOGADORES
    ========================================== */

    const counters =
        document.querySelectorAll(
            "[data-counter]"
        );


    function animateCounter(element) {

        const target =
            Number(
                element.dataset.counter
            );


        if (
            !Number.isFinite(target)
        ) {
            return;
        }


        let current = 0;

        const duration = 1200;

        const start =
            performance.now();


        function update(time) {

            const progress =
                Math.min(
                    (time - start) /
                    duration,
                    1
                );


            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            current =
                Math.floor(
                    target * eased
                );


            element.textContent =
                current.toLocaleString(
                    "pt-BR"
                );


            if (progress < 1) {

                requestAnimationFrame(
                    update
                );

            } else {

                element.textContent =
                    target.toLocaleString(
                        "pt-BR"
                    );

            }

        }


        requestAnimationFrame(
            update
        );

    }


    /*
     * O número abaixo é apenas um valor
     * demonstrativo.
     *
     * Quando tivermos uma API do servidor,
     * poderemos substituir automaticamente
     * pelo número real de jogadores online.
     */

    const counterObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        animateCounter(
                            entry.target
                        );

                        counterObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.5
            }
        );


    counters.forEach(counter => {

        counterObserver.observe(
            counter
        );

    });


    /* ==========================================
       ANIMAÇÃO DOS ELEMENTOS
    ========================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(
            element
        );

    });


    /* ==========================================
       ATUALIZAR ANO AUTOMATICAMENTE
    ========================================== */

    const year =
        document.getElementById("year");


    if (year) {

        year.textContent =
            new Date()
                .getFullYear();

    }


    /* ==========================================
       LINKS INTERNOS
    ========================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


    /* ==========================================
       MENU ATIVO CONFORME A SEÇÃO
    ========================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navigationLinks =
        document.querySelectorAll(
            '.menu a[href^="#"]'
        );


    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    const id =
                        entry.target.id;


                    navigationLinks.forEach(
                        link => {

                            link.classList.remove(
                                "active"
                            );


                            if (
                                link.getAttribute(
                                    "href"
                                ) === `#${id}`
                            ) {

                                link.classList.add(
                                    "active"
                                );

                            }

                        }
                    );

                });

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    sections.forEach(section => {

        sectionObserver.observe(
            section
        );

    });


    /* ==========================================
       FECHAR MENU AO CLICAR FORA
    ========================================== */

    document.addEventListener(
        "click",
        event => {

            if (!menu || !menuButton) {
                return;
            }


            const clickedInsideMenu =
                menu.contains(
                    event.target
                );


            const clickedButton =
                menuButton.contains(
                    event.target
                );


            if (
                !clickedInsideMenu &&
                !clickedButton &&
                menu.classList.contains("open")
            ) {

                menu.classList.remove(
                    "open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.textContent =
                    "☰";

            }

        }
    );


    /* ==========================================
       TECLA ESC
    ========================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                menu &&
                menu.classList.contains("open")
            ) {

                menu.classList.remove(
                    "open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.textContent =
                    "☰";

            }

        }
    );


    console.log(
        "🌊 Nexus Select — página inicial carregada."
    );

});
