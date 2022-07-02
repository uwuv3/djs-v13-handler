//https://discordturkiye.com/konular/tac-sahibi-gosteren-komut.391/
const Discord = require("discord.js");
module.exports = {
  name: "tac-kimde",
  run: async (client, message, args) => {
    const covid = new Discord.MessageEmbed()
    //message.guild.ownerID değil
      .setDescription(`Bu swnin sahibi <@${message.guild.ownerId}>`)
      .setColor("RANDOM")
      .setFooter({ text: `${message.guild.name}` });
    message.channel.send({ embeds: [covid] });
  },
};
