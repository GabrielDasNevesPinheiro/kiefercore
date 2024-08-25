import { Client, PresenceStatusData } from "discord.js";
import { activities } from "../bot/configuration/activities";
import { join } from "path";
import { readdirSync } from "fs";

export function setupActivities(client: Client<true>) {
    if(activities.timeout) {
        setInterval(() => 
            setActivity(client, activities), 
            activities.timeout
        )
    } else {
        
    }
}

export function loadEvents(client: Client<boolean>) {
    const path = join("src", "bot", "events");
    const files = readdirSync(path)

    files.forEach((file) => {
        if (file.endsWith("js") || file.endsWith("ts")) {
            const name = file.replace(/.ts|.js/, "")
            const event = require(`../bot/events/${file}`).default;    
            client.on(name, (arg) => event(arg));
        }


    })

}

function setActivity(client: Client<true>, config: ActivityConfig) {
    const { activities } = config;

    client.user.setPresence({ activities, status: config.status as PresenceStatusData })
    const used = config.activities?.shift()
    
    if(used) config.activities?.push(used)
}