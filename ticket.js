// ========================================
// NEXUS SELECT
// TICKETS V2
// ========================================


// ========================================
// CONFIGURAÇÃO
// ========================================

// TESTE LOCAL:

const API_URL =
    "http://localhost:3000";


// DEPOIS DO BACKEND HOSPEDADO:
//
// const API_URL =
//     "https://SEU-BACKEND.onrender.com";


// ========================================
// ELEMENTOS
// ========================================

const ticketForm =
    document.getElementById(
        "ticketForm"
    );


const customerName =
    document.getElementById(
        "customerName"
    );


const customerContact =
    document.getElementById(
        "customerContact"
    );


const message =
    document.getElementById(
        "message"
    );


const ticketSuccess =
    document.getElementById(
        "ticketSuccess"
    );


const ticketNumber =
    document.getElementById(
        "ticketNumber"
    );


const copyTicket =
    document.getElementById(
        "copyTicket"
    );


const newTicket =
    document.getElementById(
        "newTicket"
    );


const productName =
    document.getElementById(
        "productName"
    );


const productPrice =
    document.getElementById(
        "productPrice"
    );


// ========================================
// PEGAR PRODUTO DA URL
// ========================================

const params =
    new URLSearchParams(
        window.location.search
    );


const product =
    params.get(
        "produto"
    );


const price =
    params.get(
        "preco"
    );


// ========================================
// MOSTRAR PRODUTO
// ========================================

if (product) {

    productName.textContent =
        decodeURIComponent(
            product
        );

}


// ========================================
// MOSTRAR PREÇO
// ========================================

if (price) {

    const value =
        Number(price);


    if (
        Number.isFinite(value)
    ) {

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
// ENVIAR TICKET
// ========================================

ticketForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        const name =
            customerName.value.trim();


        const discord =
            customerContact.value.trim();


        const text =
            message.value.trim();


        // ------------------------------
        // VALIDAR
        // ------------------------------

        if (
            name.length < 2
        ) {

            alert(
                "⚠️ Digite seu nome."
            );

            customerName.focus();

            return;

        }


        if (
            discord.length < 2
        ) {

            alert(
                "⚠️ Digite seu Discord."
            );

            customerContact.focus();

            return;

        }


        if (
            text.length < 3
        ) {

            alert(
                "⚠️ Escreva uma mensagem."
            );

            message.focus();

            return;

        }


        // ------------------------------
        // BOTÃO
        // ------------------------------

        const button =
            ticketForm.querySelector(
                "button[type='submit']"
            );


        button.disabled =
            true;


        button.textContent =
            "⏳ Criando ticket...";


        try {

            // --------------------------
            // ENVIAR PARA API
            // --------------------------

            const response =
                await fetch(
                    `${API_URL}/api/tickets`,
                    {

                        method:
                            "POST",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },

                        body:
                            JSON.stringify({

                                customerName:
                                    name,

                                discordUser:
                                    discord,

                                product:
                                    product
                                        ? decodeURIComponent(product)
                                        : "Não informado",

                                price:
                                    price
                                        ? Number(price)
                                        : 0,

                                message:
                                    text

                            })

                    }
                );


            const data =
                await response.json();


            // --------------------------
            // ERRO
            // --------------------------

            if (
                !response.ok
            ) {

                throw new Error(
                    data.message ||
                    "Não foi possível criar o ticket."
                );

            }


            // --------------------------
            // SUCESSO
            // --------------------------

            ticketNumber.textContent =
                data.ticket.code;


            ticketForm.style.display =
                "none";


            ticketSuccess.style.display =
                "block";


            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });


        } catch (error) {

            console.error(
                error
            );


            alert(
                "❌ Erro ao abrir o ticket.\n\n" +
                error.message
            );


            button.disabled =
                false;


            button.textContent =
                "📩 Abrir Ticket";

        }

    }
);


// ========================================
// COPIAR NÚMERO
// ========================================

copyTicket.addEventListener(
    "click",
    async function() {

        const code =
            ticketNumber.textContent;


        try {

            await navigator.clipboard.writeText(
                code
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
                "Número do ticket: " +
                code
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
