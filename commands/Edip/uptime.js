//https://discordturkiye.com/konular/calisma-suresi-uptime.331/

const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "uptime",
  run: async (client, message, args) => {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    const uptime = new MessageEmbed()
      .setTitle(`**Uptime**`)
      //.setColor(config.colors.yes) config belirtilmemiş
      .setTimestamp()
      .setFooter({
        text: client.user.username,
        iconURL: client.user.displayAvatarURL(),
      })
      .setDescription(
        `:clock1: \`${days}days\` \`${hours}hours\` \`${minutes}minutes\` \`${seconds}seconds\``
      );
    return message.channel.send({ embeds: [uptime] });
  },
};
