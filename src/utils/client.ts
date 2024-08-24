import { Client, PresenceData, PresenceStatusData } from "discord.js";
import { activities } from "../configuration/activities";

export function setupActivities(client: Client<true>) {
    if(activities.timeout) {
        setInterval(() => 
            setActivity(client, activities), 
            activities.timeout
        )
    } else {
        
    }
}

function setActivity(client: Client<true>, config: ActivityConfig) {
    const { activities } = config;

    client.user.setPresence({ activities, status: config.status as PresenceStatusData })
    const used = config.activities?.shift()
    
    if(used) config.activities?.push(used)
}