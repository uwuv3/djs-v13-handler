const { readdirSync } = require("fs");
const ascii = require("ascii-table");
const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);
const { global, handler } = require("../config");
let table = new ascii("SlashCmd and Cmd");
table.setHeading("File", "Location", "Status");

module.exports = async client => {
  try {
    //Command
    let cmddnum = 0;
    readdirSync("./commands/").forEach(dir => {
      const commands = readdirSync(`./commands/${dir}/`).filter(file =>
        file.endsWith(".js")
      );

      for (let file of commands) {
        let pull = require(`../commands/${dir}/${file}`);
        if (pull.name) {
          ++cmddnum;
          client.commands.set(pull.name, pull);
          table.addRow(file, "Command", "✅");
        } else {
          table.addRow(file, "Command", "❌");
          continue;
        }
        if (pull.aliases && Array.isArray(pull.aliases))
          pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
      }
    });

    //slash cmd
    const { REST } = require("@discordjs/rest");
    const { Routes } = require("discord-api-types/v10");
    const rest = new REST({ version: "10" }).setToken(process.env.token);

    const commands = [];
    let cmdnum = 0;

    const commandFiles = readdirSync("./sCommands")
      .map(folder =>
        readdirSync(`./sCommands/${folder}`)
          .filter(file => file.endsWith(".js"))
          .map(file => `../sCommands/${folder}/${file}`)
      )
      .flat();

    if (!commandFiles == "") {
      for (const file of commandFiles) {
        const command = require(`${file}`);
        if (Object.keys(command).length === 0) continue;
        commands.push(command.data.toJSON());

        client.slashCommands.set(command.data.name, command);
        if (command.global === false) {
          await rest.put(
            Routes.applicationGuildCommands(handler.ClientID, handler.ServerID),
            {
              body: commands,
            }
          );
        } else {
          await rest.put(Routes.applicationCommands(handler.ClientID));
        }
        if (command.data.name) {
          ++cmdnum;
          table.addRow(command.data.name, "SCMD", "✅");
        } else {
          table.addRow(file, `SCMD`, `❌`);
        }
      }
    }
    if (commandFiles == "") {
      tablee.addRow("...", `SCMD`, `❌`);
    }

    if (!commandFiles == "") {
      let msg2 =
        "\n「 SlashCommands 」|「 " +
        cmdnum +
        "/" +
        client.slashCommands.size +
        " 」";
      let msg3 =
        "\n「 Commands 」|「 " + cmddnum + "/" + client.commands.size + " 」";
      console.log(table.toString() + msg2 + msg3);
    }
  } catch (error) {
    console.error(error.message);
  }
  //events
  readdirSync("./events/").forEach(file => {
    const events = readdirSync("./events/").filter(file =>
      file.endsWith(".js")
    );

    for (let file of events) {
      let pull = require(`../events/${file}`);

      if (pull.name) {
        client.events.set(pull.name, pull);
      } else {
        continue;
      }
    }
  });
};
