// ========================================
// NEXUS SELECT
// SISTEMA DE TICKET - FRONTEND
// ========================================

const ticketForm = document.getElementById("ticketForm");
const message = document.getElementById("message");
const successMessage = document.getElementById("successMessage");

ticketForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const text = message.value.trim();

    if (text.length < 3) {

        alert("⚠️ Digite uma mensagem antes de abrir o ticket.");

        return;
    }


    // Esconde o formulário
    ticketForm.style.display = "none";


    // Mostra mensagem de sucesso
    successMessage.style.display = "block";


    // Limpa o campo
    message.value = "";


    console.log("Solicitação de ticket:", text);

});
