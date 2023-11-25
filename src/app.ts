import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
import executeAction from "./handler/InteractionHandler";

config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
});

client.on("ready", () => {
    console.log("Done my rooster...");
});

client.on("interactionCreate", async (interaction) => {

    if (!interaction.isChatInputCommand()) return;
    if (!interaction.channel) return;

    executeAction(interaction.commandName, interaction);

});


client.login(process.env.TOKEN);