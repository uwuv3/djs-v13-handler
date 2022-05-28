module.exports = async (client, chalk) => {
  process.on("unhandledRejection", (reason, p) => {
    console.log(
      chalk.red("[antiCrash]") +
        chalk.blackBright("::") +
        chalk.black("Unhandled Rejection/Catch")
    );
    console.log(reason, p);
  });
  process.on("uncaughtException", (err, origin) => {
    console.log(
      chalk.red("[antiCrash]") +
        chalk.blackBright("::") +
        chalk.black("Uncaught Exception/Catch")
    );
    console.log(err, origin);
  });
  process.on("uncaughtExceptionMonitor", (err, origin) => {
    console.log(
      chalk.red("[antiCrash]") +
        chalk.blackBright("::") +
        chalk.black("Uncaught Exception/Catch (MONITOR)")
    );
    console.log(err, origin);
  });
  process.on("multipleResolves", (type, promise, reason) => {
    console.log(
      chalk.red("[antiCrash]") +
        chalk.blackBright("::") +
        chalk.black("MultipleRelsoves")
    );
    console.log(type, promise, reason);
  });
  var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
  client.on("warn", e => {
    console.log(chalk.yellow(e.replace(regToken, "that was redacted")));
  });
  client.on("error", e => {
    console.log(chalk.red(e.replace(regToken, "that was redacted")));
  });
  client.on("shardError", error => {
    console.log(
      chalk.red("[antiCrash]") +
        chalk.blackBright("::") +
        chalk.black("ShardError")
    );
    console.log(error);
  });
};
