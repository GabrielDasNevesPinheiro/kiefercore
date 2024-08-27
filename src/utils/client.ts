import { CacheType, Client, Interaction, PresenceStatusData } from "discord.js";
import { activities } from "../bot/configuration/activities";
import { join } from "path";
import { readdirSync } from "fs";
import { customProfile } from "../bot/configuration/profile";
import executeAction from "../handler/InteractionHandler";

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

            if(name == "ready") {
                client.on(name, (arg) => {
                    setupActivities(client as Client<true>);
                    loadCustomProfile(client as Client<true>);
                    console.log("Application is running.");
                    event(arg);
                })
            } else if (name == "interactionCreate") {
                
                client.on(name, (arg) => {
                    callSlashCommand(arg);
                    event(arg);
                });

            } else {
                client.on(name, (arg) => event(arg));
            }
        }


    })

}

export function loadCustomProfile(client: Client<true>) {
    const { imageUrl, username } = customProfile;
    if(imageUrl) client.user.setAvatar(imageUrl);
    if(username) client.user.setUsername(username);
}

function setActivity(client: Client<true>, config: ActivityConfig) {
    const { activities } = config;

    client.user.setPresence({ activities, status: config.status as PresenceStatusData })
    const used = config.activities?.shift()
    
    if(used) config.activities?.push(used)
}

function callSlashCommand(interaction: Interaction<CacheType>) { // this function calls the slash command to the user
    if (!interaction.isChatInputCommand()) return;
    if (!interaction.channel) return;
    executeAction(interaction.commandName, interaction);
}