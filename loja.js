/* =====================================================
   NEXUS SELECT — LOJA
   PRODUTOS
   ===================================================== */


/* =====================================================
   PRODUTOS DA LOJA
   ===================================================== */

const products = [

    /* =================================================
       👤 CONTAS
       ================================================= */

    {
        id: 1,
        name: "Conta LVL MAX",
        category: "contas",
        categoryName: "Contas",
        price: 7.30,
        icon: "👑",
        description: "Conta LVL MAX disponível para compra.",
        badge: "🔥 OFERTA"
    },

    {
        id: 2,
        name: "Conta 3º SEA",
        category: "contas",
        categoryName: "Contas",
        price: 6.00,
        icon: "🌊",
        description: "Conta no 3º SEA disponível para compra.",
        badge: "🔥 OFERTA"
    },

    {
        id: 3,
        name: "Conta 2º SEA",
        category: "contas",
        categoryName: "Contas",
        price: 3.40,
        icon: "🌊",
        description: "Conta no 2º SEA disponível para compra.",
        badge: "POPULAR"
    },

    {
        id: 4,
        name: "Conta Aleatória",
        category: "contas",
        categoryName: "Contas",
        price: 5.00,
        icon: "🎲",
        description: "Receba uma conta aleatória disponível no estoque.",
        badge: "🎲 ALEATÓRIA"
    },


    /* =================================================
       ⚔️ ESTILOS DE LUTA
       ================================================= */

    {
        id: 5,
        name: "SuperHuman",
        category: "luta",
        categoryName: "Estilos de luta",
        price: 8.00,
        icon: "🥊",
        description: "Serviço de farm para conseguir o SuperHuman."
    },

    {
        id: 6,
        name: "Death Step",
        category: "luta",
        categoryName: "Estilos de luta",
        price: 5.00,
        icon: "🔥",
        description: "Serviço de farm para conseguir o Death Step."
    },

    {
        id: 7,
        name: "Sharkman Karate",
        category: "luta",
        categoryName: "Estilos de luta",
        price: 5.00,
        icon: "🦈",
        description: "Serviço de farm para conseguir o Sharkman Karate."
    },

    {
        id: 8,
        name: "Electric Claw",
        category: "luta",
        categoryName: "Estilos de luta",
        price: 5.00,
        icon: "⚡",
        description: "Serviço de farm para conseguir o Electric Claw."
    },

    {
        id: 9,
        name: "Dragon Talon",
        category: "luta",
        categoryName: "Estilos de luta",
        price: 10.00,
        icon: "🐉",
        description: "Serviço de farm para conseguir o Dragon Talon."
    },

    {
        id: 10,
        name: "God Human",
        category: "luta",
        categoryName: "Estilos de luta",
        price: 20.00,
        icon: "👊",
        description: "Serviço de farm para conseguir o God Human."
    },

    {
        id: 11,
        name: "Sanguine Art",
        category: "luta",
        categoryName: "Estilos de luta",
        price: 30.00,
        icon: "🩸",
        description: "Sanguine Art com coração + material."
    },

    {
        id: 12,
        name: "Material Sanguine",
        category: "luta",
        categoryName: "Estilos de luta",
        price: 10.00,
        icon: "🩸",
        description: "Somente o material necessário para Sanguine."
    },


    /* =================================================
       🗡️ ESPADAS
       ================================================= */

    {
        id: 13,
        name: "CDK",
        category: "espadas",
        categoryName: "Espadas",
        price: 25.00,
        icon: "⚔️",
        description: "CDK. Necessário ter Yama e Tushita."
    },

    {
        id: 14,
        name: "Tushita",
        category: "espadas",
        categoryName: "Espadas",
        price: 15.00,
        icon: "🗡️",
        description: "Serviço de farm da Tushita."
    },

    {
        id: 15,
        name: "Yama",
        category: "espadas",
        categoryName: "Espadas",
        price: 10.00,
        icon: "🗡️",
        description: "Serviço de farm da Yama."
    },

    {
        id: 16,
        name: "TTK",
        category: "espadas",
        categoryName: "Espadas",
        price: 30.00,
        icon: "⚔️",
        description: "Serviço de farm da TTK."
    },

    {
        id: 17,
        name: "TTK — 2x Maestria",
        category: "espadas",
        categoryName: "Espadas",
        price: 10.00,
        icon: "⚔️",
        description: "TTK com opção de 2x Maestria."
    },

    {
        id: 18,
        name: "Cada Espada TTK",
        category: "espadas",
        categoryName: "Espadas",
        price: 9.00,
        icon: "🗡️",
        description: "Farm de cada espada necessária para TTK."
    },

    {
        id: 19,
        name: "Mini Yoru",
        category: "espadas",
        categoryName: "Espadas",
        price: 50.00,
        icon: "⚔️",
        description: "Mini Yoru. Obrigatório ter Haki."
    },

    {
        id: 20,
        name: "Mini Yoru — 2x Drop",
        category: "espadas",
        categoryName: "Espadas",
        price: 40.00,
        icon: "⚔️",
        description: "Mini Yoru com 2x Drop."
    },

    {
        id: 21,
        name: "Foice Sagrada",
        category: "espadas",
        categoryName: "Espadas",
        price: 10.00,
        icon: "🌙",
        description: "Serviço de farm da Foice Sagrada."
    },

    {
        id: 22,
        name: "Spikey Trident",
        category: "espadas",
        categoryName: "Espadas",
        price: 8.00,
        icon: "🔱",
        description: "Serviço de farm da Spikey Trident."
    },

    {
        id: 23,
        name: "Pole V1 e V2",
        category: "espadas",
        categoryName: "Espadas",
        price: 10.00,
        icon: "🗡️",
        description: "Farm do Pole V1 e V2."
    },

    {
        id: 24,
        name: "Shark Anchor",
        category: "espadas",
        categoryName: "Espadas",
        price: 20.00,
        icon: "⚓",
        description: "Serviço de farm do Shark Anchor."
    },

    {
        id: 25,
        name: "Fox Lamp",
        category: "espadas",
        categoryName: "Espadas",
        price: 30.00,
        icon: "🦊",
        description: "Serviço de farm da Fox Lamp."
    },

    {
        id: 26,
        name: "Dragon Heart",
        category: "espadas",
        categoryName: "Espadas",
        price: 20.00,
        icon: "🐉",
        description: "Obrigatório ter Draco."
    },

    {
        id: 27,
        name: "Yoru V2",
        category: "espadas",
        categoryName: "Espadas",
        price: 15.00,
        icon: "⚔️",
        description: "Serviço de farm da Yoru V2."
    },

    {
        id: 28,
        name: "Yoru V3",
        category: "espadas",
        categoryName: "Espadas",
        price: 50.00,
        icon: "⚔️",
        description: "Serviço de farm da Yoru V3."
    },


    /* =================================================
       📈 UP
       ================================================= */

    {
        id: 29,
        name: "Fragmentos",
        category: "up",
        categoryName: "UP",
        price: 1.00,
        icon: "💎",
        description: "Farm de fragmentos. R$ 1,00 a cada 1K."
    },


    /* =================================================
       🎸 SOUL GUITAR
       ================================================= */

    {
        id: 30,
        name: "Soul Guitar",
        category: "soul",
        categoryName: "Soul Guitar",
        price: 20.00,
        icon: "🎸",
        description: "Serviço de farm da Soul Guitar."
    }

];


/* =====================================================
   ELEMENTOS
   ===================================================== */

const productsGrid =
    document.getElementById("productsGrid");

const noProducts =
    document.getElementById("noProducts");

const categoryButtons =
    document.querySelectorAll(".category-btn");

const modal =
    document.getElementById("ticketModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const closeModal =
    document.getElementById("closeModal");

const selectedProduct =
    document.getElementById("selectedProduct");

const selectedPrice =
    document.getElementById("selectedPrice");

const ticketForm =
    document.getElementById("ticketForm");

const ticketCreated =
    document.getElementById("ticketCreated");

const ticketNumber =
    document.getElementById("ticketNumber");

const copyTicket =
    document.getElementById("copyTicket");

const finishTicket =
    document.getElementById("finishTicket");

const customerName =
    document.getElementById("customerName");

const customerContact =
    document.getElementById("customerContact");

const customerMessage =
    document.getElementById("customerMessage");


let selectedProductData = null;


/* =====================================================
   FORMATAÇÃO DE PREÇO
   ===================================================== */

function formatPrice(price) {

    return price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}


/* =====================================================
   MOSTRAR PRODUTOS
   ===================================================== */

function renderProducts(category = "todos") {

    productsGrid.innerHTML = "";

    const filteredProducts =
        category === "todos"
            ? products
            : products.filter(
                product => product.category === category
            );


    if (filteredProducts.length === 0) {

        noProducts.style.display = "block";

        return;
    }


    noProducts.style.display = "none";


    filteredProducts.forEach(product => {

        const card =
            document.createElement("article");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                <span>
                    ${product.icon}
                </span>

                ${
                    product.badge
                        ? `
                            <div class="product-badge">
                                ${product.badge}
                            </div>
                        `
                        : ""
                }

            </div>


            <div class="product-content">

                <span class="product-category">
                    ${product.categoryName}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p class="product-description">
                    ${product.description}
                </p>


                <div class="product-bottom">

                    <div class="product-price">
                        ${formatPrice(product.price)}
                    </div>

                    <button
                        class="buy-button"
                        data-id="${product.id}"
                    >
                        🛍️ COMPRAR
                    </button>

                </div>

            </div>

        `;


        productsGrid.appendChild(card);

    });


    document
        .querySelectorAll(".buy-button")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id =
                    Number(button.dataset.id);

                openTicket(id);

            });

        });

}


/* =====================================================
   ABRIR TICKET
   ===================================================== */
function openTicket(productId) {

    const product =
        products.find(
            item =>
                item.id === productId
        );


    if (!product) {

        return;

    }


    const productName =
        encodeURIComponent(
            product.name
        );


    const productPrice =
        encodeURIComponent(
            product.price
        );


    window.location.href =
        `ticket/ticket.html?produto=${productName}&preco=${productPrice}`;

}


    ticketForm.reset();

    ticketForm.style.display = "flex";

    ticketCreated.classList.remove("show");

    modal.classList.add("open");

    document.body.style.overflow = "hidden";


    setTimeout(() => {
        customerName.focus();
    }, 200);

}


/* =====================================================
   FECHAR TICKET
   ===================================================== */

function closeTicket() {

    modal.classList.remove("open");

    document.body.style.overflow = "";

}


closeModal.addEventListener(
    "click",
    closeTicket
);


modalOverlay.addEventListener(
    "click",
    closeTicket
);


finishTicket.addEventListener(
    "click",
    closeTicket
);


/* =====================================================
   CATEGORIAS
   ===================================================== */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        button.classList.add("active");


        const category =
            button.dataset.category;


        renderProducts(category);

    });

});


/* =====================================================
   CRIAR TICKET
   ===================================================== */

ticketForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        if (!selectedProductData) {
            return;
        }


        const name =
            customerName.value.trim();

        const contact =
            customerContact.value.trim();

        const message =
            customerMessage.value.trim();


        if (!name || !contact) {

            alert(
                "Preencha seu nome e seu Discord/contato."
            );

            return;
        }


        const ticketId =
            Math.floor(
                100000 +
                Math.random() * 900000
            );


        const ticket = {

            id: ticketId,

            product:
                selectedProductData.name,

            price:
                selectedProductData.price,

            customer:
                name,

            contact:
                contact,

            message:
                message,

            createdAt:
                new Date().toISOString()

        };


        const existingTickets =
            JSON.parse(
                localStorage.getItem(
                    "nexusSelectTickets"
                )
            ) || [];


        existingTickets.push(ticket);


        localStorage.setItem(
            "nexusSelectTickets",
            JSON.stringify(existingTickets)
        );


        ticketNumber.textContent =
            ticketId;


        ticketForm.style.display =
            "none";


        ticketCreated.classList.add(
            "show"
        );

    }
);


/* =====================================================
   COPIAR TICKET
   ===================================================== */

copyTicket.addEventListener(
    "click",
    async () => {

        const number =
            ticketNumber.textContent;


        try {

            await navigator.clipboard.writeText(
                `Ticket #${number}`
            );


            copyTicket.textContent =
                "✓ Copiado!";


            setTimeout(() => {

                copyTicket.textContent =
                    "📋 Copiar número";

            }, 2000);


        } catch {

            alert(
                `Seu ticket é #${number}`
            );

        }

    }
);


/* =====================================================
   ESC FECHA O MODAL
   ===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("open")
        ) {

            closeTicket();

        }

    }
);


/* =====================================================
   MENU MOBILE
   ===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");


if (menuToggle && nav) {

    menuToggle.addEventListener(
        "click",
        () => {

            nav.classList.toggle("open");

            menuToggle.textContent =
                nav.classList.contains("open")
                    ? "✕"
                    : "☰";

        }
    );


    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove("open");

                menuToggle.textContent = "☰";

            }
        );

    });

}


/* =====================================================
   HEADER
   ===================================================== */

const header =
    document.getElementById("header");


if (header) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 30) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        }
    );

}


/* =====================================================
   ANO
   ===================================================== */

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =====================================================
   INICIAR LOJA
   ===================================================== */

renderProducts("todos");
