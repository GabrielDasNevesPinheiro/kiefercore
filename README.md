![KieferCore](https://i.imgur.com/4jGNrCa.jpeg)
### A simple way to build your bot for discord.

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/gabrieldasnevespinheiro/kiefercore/blob/main/README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/gabrieldasnevespinheiro/kiefercore/blob/main/README.pt-br.md)

## Simplified features

* [Slash Commands](#slash-commands)
* [Events](#events)
* [Customization](#customization)

<p>With the project structure, you will be able to build your bot without worrying about organization or file structure as I organized it for you 😇.</p>

## Launch the Project
### NPM
```
npm run dev
```

### Yarn
```
yarn dev
```

## Environment Variables

In `.env.example` you'll see the environment variables necessary for your code to work properly. You can create your `.env` file from it.

`TOKEN` → your bot's token.

`CLIENT_ID` → your bot's client id.

# Slash Commands
<span>Inside the `src/bot/commands` directory are the files directed to your Slash Commands.
You can see two files already created, `Command.ts` and `Example.ts`</span>

#### `Command.ts` → A class that you must extend in your command classes.
#### `Example.ts` → An example of Slash Command, you can create any command following this model.

### Command attribute:
<span>You can customize your Slash Command directly through the `command` attribute:</span>
```typescript 
public static command: SlashCommandBuilder = new SlashCommandBuilder()
        .setName("imfree")
        .setDescription("I am freeeeeeeee")
```
<br>

### Execute function:
<span>Everything inside the `execute` function of your command class will be executed when a user creates the interaction.</span>
```typescript
public static async execute(interaction: CommandInteraction<CacheType>) {
    await interaction.reply({ content: "oizitos!" });
}
```
<span>You can imagine what happens when a user calls this command.</span>

#### Whenever you start the application, the commands will be sent to the Discord API, so they will always be up to date.

# Events
<span>Inside the `src/bot/events` directory you can create the `Client` events.</span>

<span>There are two pre-created events that are necessary for the project to work, they also serve as an example for you. To create an event for your bot, you must name the file with the exact name of the event and you must export a `default` function, everything that is inside the exported `default` function will be executed when that event is called</span>

### A brief example: `interactionCreate.ts`
This script exports a default function that is executed whenever the `Client` identifies the `interactionCreate` event.

Visit the [Discord.js Documentation](https://discord.js.org/docs/packages/discord.js/14.14.1/Events:Enum) and see the exact names of the events to name the files.

# Customization
Now, in the file located at `src/bot/configuration/profile.ts` you can customize your bot's `username` and an attribute called `imageUrl` that modifies its profile image. These settings only happen if you define a value in these attributes.