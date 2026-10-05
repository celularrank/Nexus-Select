const Database = require("better-sqlite3");
const path = require("path");

const databasePath = path.join(
    __dirname,
    "tickets.db"
);

const db = new Database(databasePath);

db.pragma("journal_mode = WAL");


// ========================================
// CRIAR TABELA
// ========================================

db.prepare(`
    CREATE TABLE IF NOT EXISTS tickets (

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        ticket_code TEXT UNIQUE NOT NULL,

        customer_name TEXT NOT NULL,

        discord_user TEXT NOT NULL,

        product TEXT NOT NULL,

        price REAL NOT NULL,

        message TEXT NOT NULL,

        discord_channel_id TEXT,

        status TEXT NOT NULL DEFAULT 'open',

        created_at TEXT NOT NULL,

        closed_at TEXT

    )
`).run();


// ========================================
// GERAR CÓDIGO
// ========================================

function generateTicketCode() {

    let code;

    let exists;

    do {

        const number =
            Math.floor(
                100000 +
                Math.random() * 900000
            );

        code =
            `NS-${number}`;

        exists =
            db.prepare(`
                SELECT id
                FROM tickets
                WHERE ticket_code = ?
            `).get(code);

    } while (exists);


    return code;
}


// ========================================
// CRIAR TICKET
// ========================================

function createTicket(data) {

    const ticketCode =
        generateTicketCode();

    const createdAt =
        new Date().toISOString();


    const result =
        db.prepare(`
            INSERT INTO tickets (

                ticket_code,

                customer_name,

                discord_user,

                product,

                price,

                message,

                status,

                created_at

            )

            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `).run(

            ticketCode,

            data.customerName,

            data.discordUser,

            data.product,

            data.price,

            data.message,

            "open",

            createdAt

        );


    return {

        id: result.lastInsertRowid,

        code: ticketCode,

        createdAt

    };

}


// ========================================
// BUSCAR TICKET
// ========================================

function getTicket(code) {

    return db.prepare(`
        SELECT *
        FROM tickets
        WHERE ticket_code = ?
    `).get(code);

}


// ========================================
// SALVAR CANAL DISCORD
// ========================================

function setDiscordChannel(
    code,
    channelId
) {

    db.prepare(`
        UPDATE tickets

        SET discord_channel_id = ?

        WHERE ticket_code = ?
    `).run(

        channelId,

        code

    );

}


// ========================================
// FECHAR TICKET
// ========================================

function closeTicket(code) {

    db.prepare(`
        UPDATE tickets

        SET

            status = 'closed',

            closed_at = ?

        WHERE ticket_code = ?
    `).run(

        new Date().toISOString(),

        code

    );

}


// ========================================
// EXPORTAR
// ========================================

module.exports = {

    db,

    createTicket,

    getTicket,

    setDiscordChannel,

    closeTicket

};
