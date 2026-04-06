// Configuración centralizada para Discord
export const DISCORD_CONFIG = {
    webhookURL:"https://discord.com/api/webhooks/1490163557063594184/l0EqPmVH7VVoZKBfAicO6t7GQw3PsQHzoBFLuN2FevjQJajkUq74ENmoKnxp0L2cmGuw"};

// Función helper para enviar mensajes a Discord
export async function sendToDiscord(payload) {
    try {
        const response = await fetch(DISCORD_CONFIG.webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        return response;
    } catch (error) {
        console.error("Error enviando a Discord:", error);
        throw error;
    }
}