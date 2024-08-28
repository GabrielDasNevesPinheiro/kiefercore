# KieferCore

A simple way to build your bot for discord.

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/gabrieldasnevespinheiro/kiefercore/blob/main/README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/gabrieldasnevespinheiro/kiefercore/blob/main/README.pt-br.md)

## Simplified features

- Slash commands
- Presence
- Events
<p>With the project structure, you will be able to build your bot without worrying about organization or file structure as I organized it for you 😇.</p>

## Environment Variables

In `.env.example` you'll see the environment variables necessary for your code to work properly. You can create your `.env` file from it.

`TOKEN` → your bot's token.

`CLIENT_ID` → your bot's client id.

# Learn about this project

* [Slash Commands](#slash-commands)
* [Events](#events)
* [Customization](#customization)


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

# Customization