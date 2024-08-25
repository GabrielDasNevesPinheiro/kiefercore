import { Client } from "discord.js";
import { setupActivities } from "../../utils/client";

export default function callEvent(client: Client<boolean>) {
    setupActivities(client as Client<true>);
    console.log("Application is running.");
}