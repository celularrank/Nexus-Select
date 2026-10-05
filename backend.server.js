require("dotenv").config();

const express = require("express");
const cors = require("cors");

const {

    createTicket,

    getTicket,

    closeTicket

} = require("./database/database");


const app =
    express();


// ========================================
// CONFIGURAÇÃO
// ========================================

app.use(
    cors()
);

app.use(
    express.json({
        limit: "50kb"
    })
);


// ========================================
// TESTE DA API
// ========================================

app.get(
    "/",
    (req, res) => {

        res.json({

            online: true,

            name: "Nexus Select API",

            version: "2.0.0",

            status: "online"

        });

    }
);


// ========================================
// HEALTH CHECK
// ========================================

app.get(
    "/health",
    (req, res) => {

        res.json({

            status: "ok"

        });

    }
);


// ========================================
// CRIAR TICKET
// ========================================

app.post(
    "/api/tickets",
    async (req, res) => {

        try {

            const {

                customerName,

                discordUser,

                product,

                price,

                message

            } = req.body;


            // ------------------------------
            // VALIDAR NOME
            // ------------------------------

            if (
                typeof customerName !== "string" ||
                customerName.trim().length < 2
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Nome inválido."

                });

            }


            // ------------------------------
            // VALIDAR DISCORD
            // ------------------------------

            if (
                typeof discordUser !== "string" ||
                discordUser.trim().length < 2
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Usuário do Discord inválido."

                });

            }


            // ------------------------------
            // VALIDAR PRODUTO
            // ------------------------------

            if (
                typeof product !== "string" ||
                product.trim().length < 1
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Produto inválido."

                });

            }


            // ------------------------------
            // VALIDAR PREÇO
            // ------------------------------

            const numericPrice =
                Number(price);


            if (
                !Number.isFinite(numericPrice) ||
                numericPrice < 0
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Preço inválido."

                });

            }


            // ------------------------------
            // VALIDAR MENSAGEM
            // ------------------------------

            if (
                typeof message !== "string" ||
                message.trim().length < 3
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Mensagem muito curta."

                });

            }


            // ------------------------------
            // CRIAR TICKET
            // ------------------------------

            const ticket =
                createTicket({

                    customerName:
                        customerName
                            .trim()
                            .slice(0, 50),

                    discordUser:
                        discordUser
                            .trim()
                            .slice(0, 50),

                    product:
                        product
                            .trim()
                            .slice(0, 100),

                    price:
                        numericPrice,

                    message:
                        message
                            .trim()
                            .slice(0, 1000)

                });


            // ------------------------------
            // CRIAR CANAL NO DISCORD
            // ------------------------------

            let discordCreated =
                false;


            if (
                typeof global.createDiscordTicket ===
                "function"
            ) {

                try {

                    await global.createDiscordTicket(
                        ticket.code
                    );

                    discordCreated =
                        true;

                } catch (error) {

                    console.error(
                        "Erro ao criar ticket no Discord:",
                        error
                    );

                }

            }


            // ------------------------------
            // RESPOSTA
            // ------------------------------

            res.status(201).json({

                success: true,

                discordCreated,

                ticket: {

                    code:
                        ticket.code,

                    message:
                        "Ticket criado com sucesso."

                }

            });


        } catch (error) {

            console.error(
                "Erro na API:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Erro interno do servidor."

            });

        }

    }
);


// ========================================
// CONSULTAR TICKET
// ========================================

app.get(
    "/api/tickets/:code",
    (req, res) => {

        try {

            const ticket =
                getTicket(
                    req.params.code
                );


            if (!ticket) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Ticket não encontrado."

                });

            }


            res.json({

                success: true,

                ticket

            });


        } catch (error) {

            console.error(error);


            res.status(500).json({

                success: false,

                message:
                    "Erro interno."

            });

        }

    }
);


// ========================================
// FECHAR TICKET PELA API
// ========================================

app.post(
    "/api/tickets/:code/close",
    (req, res) => {

        try {

            const ticket =
                getTicket(
                    req.params.code
                );


            if (!ticket) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Ticket não encontrado."

                });

            }


            closeTicket(
                req.params.code
            );


            res.json({

                success: true,

                message:
                    "Ticket fechado."

            });


        } catch (error) {

            console.error(error);


            res.status(500).json({

                success: false,

                message:
                    "Erro interno."

            });

        }

    }
);


// ========================================
// ERRO 404
// ========================================

app.use(
    (req, res) => {

        res.status(404).json({

            success: false,

            message:
                "Rota não encontrada."

        });

    }
);


// ========================================
// SERVIDOR
// ========================================

const PORT =
    process.env.PORT || 3000;


app.listen(
    PORT,
    "0.0.0.0",
    () => {

        console.log("");
        console.log(
            "================================"
        );

        console.log(
            "      NEXUS SELECT API"
        );

        console.log(
            "================================"
        );

        console.log(
            `🌐 Porta: ${PORT}`
        );

        console.log(
            "🟢 API online"
        );

        console.log(
            "================================"
        );

    }
);


// ========================================
// BOT DISCORD
// ========================================

require(
    "./discord/bot"
);
