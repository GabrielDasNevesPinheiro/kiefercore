import { join } from "path";
import { existsSync } from "fs";


// This script checks the filesystem integrity
const commandsPath = join("src", "commands")
const isCommandOk = existsSync(commandsPath)
const commandClassPath = join("src", "commands", "Command.ts")
const isCommandClassOk = existsSync(commandClassPath)


export function checkIntegrity() {
    if (!isCommandOk) throw new Error(`Missing commands folder at: ${commandsPath}`)
    if (!isCommandClassOk) throw new Error(`Missing command class at: ${commandClassPath}`)
}