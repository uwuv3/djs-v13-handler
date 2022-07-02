//https://discordturkiye.com/konular/toplu-rol-verme.389/
const discord = require("discord.js");
module.exports = {
  name: "herkeserolver",
  aliases: ["herkese-rol-ver"],
  run: async (client, message, args) => {
    //Buda benden olsun
    if (!message.member.permissions.has("MANAGE_ROLES")) return;
    const reklam = new discord.MessageEmbed()
      .setTitle("Covid-19 | toplu rol")
      .setDescription("Herkese rol verildi")
      .setTimestamp();
    var rol =
      message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
    //buda benden
    if (!rol) return;
    message.guild.members.cache.forEach((y) => y.roles.add(rol.id));
    message.channel.send({ embeds: [reklam] });
  },
};
