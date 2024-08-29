# KieferCore

Uma forma simples de construir seu bot para o discord.

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/gabrieldasnevespinheiro/kiefercore/blob/main/README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/gabrieldasnevespinheiro/kiefercore/blob/main/README.pt-br.md)

## Funcionalidades simplificadas

- Slash Commands
- Presence
- Events
<p>Com a estrutura do projeto, você será capaz de construir seu bot sem se preocupar com a organização ou estrutura de arquivos, pois eu organizei isso para você 😇.</p>

## Variáveis de Ambiente

Em `.env.example` você verá as variáveis de ambiente necessárias para seu código funcionar apropriadamente. Você pode criar seu arquivo `.env` a partir dele.

`TOKEN` → token do seu bot.

`CLIENT_ID` → client id do seu bot.

# Aprenda sobre este projeto

* [Slash Commands](#slash-commands)
* [Eventos](#eventos)
* [Personalização](#personalização)


# Slash Commands
<span>Dentro do diretório `src/bot/commands` ficam os arquivos direcionados à seus Slash Commands.
Você pode ver dois arquivos já criados, o `Command.ts` e `Example.ts`</span>

#### `Command.ts` → É uma classe que deve ser herdada em todos os comandos que você criar.
#### `Example.ts` → É um exemplo de Slash Command, você poderá criar qualquer comando seguindo este modelo.

### Atributo command:
<span>Você pode customizar seu Slash Command diretamente pelo atributo `command`:</span>
```typescript 
public static command: SlashCommandBuilder = new SlashCommandBuilder()
        .setName("estoulivre")
        .setDescription("Eu sou liivreeeee")
```
<br>

### Função execute:
<span>Tudo o que fica dentro da função `execute` na classe do seu comando, é o que será executado quando algum usuário criar a interação.</span>
```typescript
public static async execute(interaction: CommandInteraction<CacheType>) {
    await interaction.reply({ content: "oizitos!" });
}
```
<span>Você deve imaginar o que acontece quando um usuário utiliza este comando.</span>

#### Sempre que você iniciar a aplicação, será enviado para a API do discord os comandos, então eles sempre estarão atualizados.

# Eventos
<span>Dentro do diretório `src/bot/events` você pode criar os eventos do `Client`.</span>

<span>Existem dois eventos pré-criados que são necessários para o funcionamento do projeto, eles também servem como exemplo para você. Para criar um evento do seu bot, você deve nomear o arquivo com o nome exato do evento e é preciso exportar uma função `default`, tudo o que fica dentro da função `default` exportada será executado quando aquele evento for chamado</span>

### Um breve exemplo: `interactionCreate.ts`
Esse script exporta uma função default que é executada sempre que o `Client` identifica o evento `interactionCreate`.

Visite a [Documentação do discord.js](https://discord.js.org/docs/packages/discord.js/14.14.1/Events:Enum) e veja os nomes exatos dos eventos para nomear os arquivos.

# Personalização