import { join } from "path";
import { existsSync } from "fs";
import { exit } from "process";


// This script checks the filesystem integrity

const paths = [
    join("src", "commands", "Command.ts"),
    join("src", "configuration", "intents.ts")
]

const checks = paths.map((path) => existsSync(path))

export function checkIntegrity() {
    const canProceed = checks.find((element) => element == false) as boolean
    
    if(!canProceed) {
        throw new Error(`Missing necessary file: ${paths[checks.indexOf(canProceed)]}`)
    }
}