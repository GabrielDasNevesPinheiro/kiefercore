import { Client } from "discord.js";
import { config } from "dotenv";
import executeAction from "./handler/InteractionHandler";
import postSlashCommands from "./api/Register";
import { checkIntegrity } from "./validators/filesystem";
import { intents } from "./configuration/intents";
config();

// checking application structure integrity
checkIntegrity();

const client = new Client({
    intents
});

client.on("ready", () => {
    console.log("Done my rooster...");
});

client.on("interactionCreate", async (interaction) => {

    if (!interaction.isChatInputCommand()) return;
    if (!interaction.channel) return;

    executeAction(interaction.commandName, interaction);

});

postSlashCommands();
client.login(process.env.TOKEN);