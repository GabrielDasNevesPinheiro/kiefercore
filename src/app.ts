import { Client } from "discord.js";
import { config } from "dotenv";
import postSlashCommands from "./api/Register";
import { checkIntegrity } from "./validators/filesystem";
import { intents } from "./bot/configuration/intents";
import { loadEvents } from "./utils/client";
config();

// checking application structure integrity
checkIntegrity();

const client = new Client({
    intents
});

loadEvents(client);
postSlashCommands();
client.login(process.env.TOKEN);