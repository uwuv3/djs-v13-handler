//https://discordturkiye.com/konular/emojili-gelismis-istatistik.312/
const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
module.exports = {
  name: "istatistik",
  aliases: ["i"],
  run: async (client, message, args) => {
    const seksizaman = moment
      .duration(client.uptime)
      .format(" D [gün], H [saat], m [dakika], s [saniye]");
    const istatistikler = new Discord.MessageEmbed()
      .setColor("#00bf00")
      .setTimestamp()
      .addField(
        "<a:kralarfa:881980117595881502> **Sahibim**",
        "<@836536393329016874>"
      )
      .addField(
        "<a:arfayukleniyor:881987689077956618> **Gecikme Süresi**",
        "Ping: {ping2} ms".replace("{ping2}", client.ws.ping),
        true
      )
      .addField(
        "<:islemci:846732785943445544> **Bellek Kullanımı**",
        (process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",
        true
      )
      .addField(
        "<:slowmode:836682109380460554> **Çalışma Süresi**",
        seksizaman,
        true
      )
      .addField(
        "<:arfakullanc:881991918488285234> **Kullanıcılar**",
        client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString(),
        true
      )
      .addField(
        "<:arfasunucular:882010093510594561> **Sunucular**",
        client.guilds.cache.size.toLocaleString(),
        true
      )
      .addField(
        "<:haberler:881840744720105553> **Kanallar**",
        client.channels.cache.size.toLocaleString(),
        true
      );
    return message.channel.send({ embeds: [istatistikler] });
  },
};
