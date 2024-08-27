import { Client } from "discord.js";
import { loadCustomProfile, setupActivities } from "../../utils/client";

export default function callEvent(client: Client<boolean>) {
    setupActivities(client as Client<true>);
    loadCustomProfile(client as Client<true>);
    console.log("Application is running.");
}