require("dotenv").config();

const {

    Client,

    GatewayIntentBits,

    ChannelType,

    PermissionFlagsBits,

    EmbedBuilder,

    ActionRowBuilder,

    ButtonBuilder,

    ButtonStyle

} = require("discord.js");


const {

    getTicket,

    setDiscordChannel,

    closeTicket

} = require("../database/database");


const client =
    new Client({

        intents: [

            GatewayIntentBits.Guilds

        ]

    });


// ========================================
// BOT ONLINE
// ========================================

client.once(
    "ready",
    () => {

        console.log(
            `🤖 Discord conectado como ${client.user.tag}`
        );

    }
);


// ========================================
// CRIAR CANAL
// ========================================

async function createDiscordTicket(
    ticketCode
) {

    const ticket =
        getTicket(
            ticketCode
        );


    if (!ticket) {

        throw new Error(
            "Ticket não encontrado."
        );

    }


    const guild =
        await client.guilds.fetch(
            process.env.DISCORD_GUILD_ID
        );


    if (!guild) {

        throw new Error(
            "Servidor Discord não encontrado."
        );

    }


    // ====================================
    // NOME DO CANAL
    // ====================================

    const channelName =
        `ticket-${ticketCode
            .replace("NS-", "")
            .toLowerCase()}`;


    // ====================================
    // PERMISSÕES
    // ====================================

    const permissions = [

        {

            id:
                guild.roles.everyone.id,

            deny: [

                PermissionFlagsBits.ViewChannel

            ]

        }

    ];


    // ------------------------------------
    // STAFF
    // ------------------------------------

    if (
        process.env.DISCORD_STAFF_ROLE_ID
    ) {

        permissions.push({

            id:
                process.env
                    .DISCORD_STAFF_ROLE_ID,

            allow: [

                PermissionFlagsBits.ViewChannel,

                PermissionFlagsBits.SendMessages,

                PermissionFlagsBits.ReadMessageHistory,

                PermissionFlagsBits.AttachFiles

            ]

        });

    }


    // ====================================
    // CRIAR CANAL
    // ====================================

    const channel =
        await guild.channels.create({

            name: channelName,

            type:
                ChannelType.GuildText,

            parent:
                process.env
                    .DISCORD_CATEGORY_ID,

            permissionOverwrites:
                permissions

        });


    // ====================================
    // SALVAR ID
    // ====================================

    setDiscordChannel(

        ticketCode,

        channel.id

    );


    // ====================================
    // FORMATAÇÃO PREÇO
    // ====================================

    const formattedPrice =
        Number(ticket.price)
            .toLocaleString(
                "pt-BR",
                {

                    style: "currency",

                    currency: "BRL"

                }
            );


    // ====================================
    // EMBED
    // ====================================

    const embed =
        new EmbedBuilder()

            .setTitle(
                "🎟️ NOVO PEDIDO"
            )

            .setDescription(
                `Ticket **${ticket.code}** criado pelo site Nexus Select.`
            )

            .addFields(

                {

                    name:
                        "👤 Cliente",

                    value:
                        ticket.customer_name,

                    inline: true

                },

                {

                    name:
                        "💬 Discord",

                    value:
                        ticket.discord_user,

                    inline: true

                },

                {

                    name:
                        "🛒 Produto",

                    value:
                        ticket.product,

                    inline: false

                },

                {

                    name:
                        "💰 Valor",

                    value:
                        formattedPrice,

                    inline: true

                },

                {

                    name:
                        "📝 Mensagem",

                    value:
                        ticket.message,

                    inline: false

                }

            )

            .setFooter({

                text:
                    "Nexus Select • Sistema de Tickets"

            })

            .setTimestamp();


    // ====================================
    // BOTÕES
    // ====================================

    const buttons =
        new ActionRowBuilder()
            .addComponents(

                new ButtonBuilder()

                    .setCustomId(
                        `assumir:${ticket.code}`
                    )

                    .setLabel(
                        "Assumir"
                    )

                    .setEmoji("👤")

                    .setStyle(
                        ButtonStyle.Primary
                    ),


                new ButtonBuilder()

                    .setCustomId(
                        `fechar:${ticket.code}`
                    )

                    .setLabel(
                        "Fechar Ticket"
                    )

                    .setEmoji("🔒")

                    .setStyle(
                        ButtonStyle.Danger
                    )

            );


    // ====================================
    // ENVIAR
    // ====================================

    const staffMention =
        process.env.DISCORD_STAFF_ROLE_ID
            ? `<@&${process.env.DISCORD_STAFF_ROLE_ID}>`
            : "Equipe Nexus Select";


    await channel.send({

        content:
            `${staffMention}\n\n` +
            "📩 **Novo atendimento recebido!**",

        embeds: [

            embed

        ],

        components: [

            buttons

        ]

    });


    return channel;

}


// ========================================
// INTERAÇÕES
// ========================================

client.on(
    "interactionCreate",
    async interaction => {

        if (
            !interaction.isButton()
        ) {

            return;

        }


        // ==================================
        // ASSUMIR
        // ==================================

        if (
            interaction.customId
                .startsWith(
                    "assumir:"
                )
        ) {

            const ticketCode =
                interaction.customId
                    .split(":")[1];


            const ticket =
                getTicket(
                    ticketCode
                );


            if (!ticket) {

                return interaction.reply({

                    content:
                        "❌ Ticket não encontrado.",

                    ephemeral: true

                });

            }


            await interaction.reply({

                content:
                    `👤 **${interaction.user.tag}** assumiu o atendimento deste ticket.`,

                ephemeral: false

            });


            return;

        }


        // ==================================
        // FECHAR
        // ==================================

        if (
            interaction.customId
                .startsWith(
                    "fechar:"
                )
        ) {

            const ticketCode =
                interaction.customId
                    .split(":")[1];


            const ticket =
                getTicket(
                    ticketCode
                );


            if (!ticket) {

                return interaction.reply({

                    content:
                        "❌ Ticket não encontrado.",

                    ephemeral: true

                });

            }


            closeTicket(
                ticketCode
            );


            await interaction.reply({

                content:
                    `🔒 Ticket **${ticketCode}** fechado por ${interaction.user}. Este canal será apagado em 5 segundos.`,

                ephemeral: false

            });


            setTimeout(
                async () => {

                    try {

                        await interaction.channel.delete();

                    } catch (error) {

                        console.error(
                            "Erro ao apagar canal:",
                            error
                        );

                    }

                },
                5000
            );

        }

    }
);


// ========================================
// DISPONIBILIZAR PARA SERVER
// ========================================

global.createDiscordTicket =
    createDiscordTicket;


// ========================================
// TOKEN
// ========================================

if (
    !process.env.DISCORD_TOKEN
) {

    console.error(
        "❌ DISCORD_TOKEN não configurado no .env"
    );

} else {

    client.login(
        process.env.DISCORD_TOKEN
    );

                      }
