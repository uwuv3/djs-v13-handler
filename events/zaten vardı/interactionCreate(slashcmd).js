const client = require("../../index");
client.on("interactionCreate", async interaction => {
  if (!interaction.isCommand()) return;
  if (!interaction.client.slashCommands.has(interaction.commandName)) return;

  const { commandName } = interaction;
  if (!interaction.client.slashCommands.has(commandName)) return;
  await interaction.client.slashCommands
    .get(commandName)
    .execute(client, interaction);
});
