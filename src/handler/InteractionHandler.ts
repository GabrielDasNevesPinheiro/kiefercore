import { CacheType, CommandInteraction, Interaction } from "discord.js";
import Command from "../bot/commands/Command";
import path from "path";
import fs from "fs";


export const commands: { [key: string]: typeof Command } = parseSlashCommands();

export default function executeAction(cmdName: string, interaction: Interaction<CacheType>) {
    commands[cmdName].execute(interaction as CommandInteraction);
}

function parseSlashCommands (): { [key: string]: typeof Command } {
    const cmdlist: { [key: string]: typeof Command } = {};

    
    const commandsDir = path.join(__dirname, "../bot/commands");

    const files = fs.readdirSync(commandsDir);

    files.forEach((file) => {
        if ((file.endsWith(".js") || file.endsWith(".ts"))) {
            
            if(file.startsWith("Command")) return;

            const command = require(path.join(commandsDir, file)).default;

            if (command.command && typeof command.execute === "function") {
                cmdlist[command.command.name] = command;
            }
        }
    });

    return cmdlist;
}