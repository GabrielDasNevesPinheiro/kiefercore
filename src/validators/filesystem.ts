import { join } from "path";
import { existsSync } from "fs";

// This script checks the filesystem integrity

const paths = [
    join("src", "bot", "commands", "Command.ts"),
    join("src", "bot", "configuration", "intents.ts"),
    join("src", "bot", "configuration", "activities.ts"),
    join("src", "bot", "events"),
]

const checks = paths.map((path) => existsSync(path))

export function checkIntegrity() {
    const canProceed = checks.find((element) => element == false) as boolean;
    
    if(canProceed == false) {
        throw new Error(`Missing necessary file: ${paths[checks.indexOf(canProceed)]}`)
    }
}