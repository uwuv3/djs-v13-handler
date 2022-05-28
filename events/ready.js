const client = require("../index");
const { global } = require("../config");
const chalk = require("chalk");
client.on("ready", async () => {
  client.user.setActivity("Made by uwuv3");
  console.log(
    chalk.blue(chalk.gray("[") + "DISCORD.JS" + chalk.gray("]")) +
      chalk.red(
        " signed in with " + chalk.underline(chalk.cyan(client.user.username))
      )
  );
});
