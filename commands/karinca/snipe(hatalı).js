//https://discordturkiye.com/konular/snipe-js-discord-v12-kod.45/
//Hatalı
const discord = require("discord.js");
module.exports = {
  name: "snipe",
  aliases: ["sonmesaj"],
  run: async (client, message, args) => {
    const snipeembed = new discord.MessageEmbed()
      .setColor("BLURPLE")
      .setTimestamp()
      .setDescription(
        `https://discord.com/channels/${message.guild.id}/${message.author.lastMessageChannelID}/${message.author.lastMessageID}`
      );
    message.channel.send({ embeds: [snipeembed] });
  },
};
