// ========================================
// NEXUS SELECT
// SISTEMA DE TICKETS - V1
// ========================================


const ticketForm =
    document.getElementById("ticketForm");

const customerName =
    document.getElementById("customerName");

const customerContact =
    document.getElementById("customerContact");

const message =
    document.getElementById("message");

const ticketSuccess =
    document.getElementById("ticketSuccess");

const ticketNumber =
    document.getElementById("ticketNumber");

const copyTicket =
    document.getElementById("copyTicket");

const newTicket =
    document.getElementById("newTicket");

const productName =
    document.getElementById("productName");

const productPrice =
    document.getElementById("productPrice");


// ========================================
// PRODUTO VINDO DA LOJA
// ========================================

const params =
    new URLSearchParams(window.location.search);

const product =
    params.get("produto");

const price =
    params.get("preco");


if (product) {

    productName.textContent =
        decodeURIComponent(product);

}


if (price) {

    const value =
        Number(price);

    if (!isNaN(value)) {

        productPrice.textContent =
            value.toLocaleString(
                "pt-BR",
                {
                    style: "currency",
                    currency: "BRL"
                }
            );

    }

}


// ========================================
// GERAR NÚMERO
// ========================================

function generateTicketNumber() {

    const random =
        Math.floor(
            100000 +
            Math.random() * 900000
        );

    return random;

}


// ========================================
// SALVAR TICKET
// ========================================

function saveTicket(ticket) {

    const savedTickets =
        JSON.parse(
            localStorage.getItem(
                "nexusSelectTickets"
            )
        ) || [];


    savedTickets.push(ticket);


    localStorage.setItem(
        "nexusSelectTickets",
        JSON.stringify(savedTickets)
    );

}


// ========================================
// ABRIR TICKET
// ========================================

ticketForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            customerName.value.trim();

        const contact =
            customerContact.value.trim();

        const text =
            message.value.trim();


        if (!name) {

            alert(
                "⚠️ Digite seu nome."
            );

            customerName.focus();

            return;
        }


        if (!contact) {

            alert(
                "⚠️ Digite seu Discord."
            );

            customerContact.focus();

            return;
        }


        if (text.length < 3) {

            alert(
                "⚠️ Escreva uma mensagem."
            );

            message.focus();

            return;
        }


        const number =
            generateTicketNumber();


        const ticket = {

            id: number,

            customer: name,

            discord: contact,

            product:
                product
                    ? decodeURIComponent(product)
                    : "Não informado",

            price:
                price
                    ? Number(price)
                    : 0,

            message: text,

            status: "aberto",

            createdAt:
                new Date().toISOString()

        };


        saveTicket(ticket);


        ticketNumber.textContent =
            "#" + number;


        ticketForm.style.display =
            "none";


        ticketSuccess.style.display =
            "block";


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


        console.log(
            "Novo ticket:",
            ticket
        );

    }
);


// ========================================
// COPIAR TICKET
// ========================================

copyTicket.addEventListener(
    "click",
    async function() {

        const number =
            ticketNumber.textContent;


        try {

            await navigator.clipboard.writeText(
                number
            );


            copyTicket.textContent =
                "✅ Copiado!";


            setTimeout(
                function() {

                    copyTicket.textContent =
                        "📋 Copiar número";

                },
                2000
            );


        } catch {

            alert(
                "Seu ticket é " + number
            );

        }

    }
);


// ========================================
// NOVO TICKET
// ========================================

newTicket.addEventListener(
    "click",
    function() {

        window.location.href =
            "ticket.html";

    }
);
