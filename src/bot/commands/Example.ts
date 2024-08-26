import { CacheType, CommandInteraction, SlashCommandBuilder } from "discord.js";
import Command from "./Command";
 
export default abstract class Example extends Command {
    
    public static command: SlashCommandBuilder = new SlashCommandBuilder()
        .setName("example")
        .setDescription("An example command so you can create your own.")
    
    public static async execute(interaction: CommandInteraction<CacheType>) {
        await interaction.deferReply({ ephemeral: true });
        await interaction.editReply({ content: "I'm soooo happy right now :)"});
    }
}