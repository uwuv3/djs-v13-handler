//https://discordturkiye.com/konular/gelismis-yardim-komutu.314/
const Discord = require("discord.js");
const config = require("../../config").global;
var prefix = config.prefix;
module.exports = {
  name: "yardım",
  aliases: ["yardım", "help"],
  run: async (client, message, args) => {
    if (!args[0])
      return message.channel.send({
        embeds: [
          new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setThumbnail(
              `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png?size=2048`
            )
            .setAuthor({
              name: `BOTADI - Yardım`,
              iconURL: client.user.avatarURL(),
            })
            .setDescription(
              `Bize Birşey Bildirmek İsterseniz: \`${prefix}komutadı\`
Yardım Almak İsterseniz: \`${prefix}komutadı\`
Linkler: [Ekle](https://discord.com/oauth2/authorize?client_id=BOTID&scope=bot&permissions=8589934591) - [Destek](https://discord.gg/invite-code) - [Oyver](https://top.gg/bot/BOTID/vote)`
            )
            .addField("[1]KOMUTADI", `\`${prefix}yardım komutadı\``, true)
            .setImage(``)
            .setTimestamp(),
        ],
      });
    // KOMUTADI
    if (args[0] === "komutadı") {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor(`RANDOM`)
          .setThumbnail(
            `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png?size=2048`
          )
          .setAuthor({
            name: `BOTADI - YETKİLİ`,
            iconURL: client.user.avatarURL(),
          })
          .setDescription(
            `**${prefix}komutadı** = Komut Açıklaması.
**${prefix}komutadı** = Komut Açıklaması.
**${prefix}komutadı** = Komut Açıklaması.
**${prefix}komutadı** = Komut Açıklaması.
**${prefix}komutadı** = Komut Açıklaması.`
          )
          .setImage(``)
          .setTimestamp()
      );
    }
  },
};
