import { CacheType, Interaction } from "discord.js";
import executeAction from "../../handler/InteractionHandler";

export default async function callEvent(interaction: Interaction<CacheType>) {
    callSlashCommand(interaction); // don't edit this line
}

function callSlashCommand(interaction: Interaction<CacheType>) { // this function calls the slash command to the user
    if (!interaction.isChatInputCommand()) return;
    if (!interaction.channel) return;
    executeAction(interaction.commandName, interaction);
}