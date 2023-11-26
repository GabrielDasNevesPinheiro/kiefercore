import { CacheType, CommandInteraction, SlashCommandBuilder } from "discord.js";
import Command from "./Command";


export default abstract class First extends Command {

    static command: SlashCommandBuilder = new SlashCommandBuilder()
        .setName("teste")
        .setDescription("Um comandinho de teste");

    static async execute(interaction: CommandInteraction<CacheType>) {

        await interaction.reply({ content: `O Comando foi testado.` });

    }

}