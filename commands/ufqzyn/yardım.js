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
            .addField("[1]Çağatay", `\`${prefix}yardım çağatay\``, true)
            .addField("[2]Edip", `\`${prefix}yardım edip\``, true)
            .addField("[3]Eneskurt", `\`${prefix}yardım eneskurt\``, true)
            .addField("[4]Eyuq", `\`${prefix}yardım eyuq\``, true)
            .addField("[5]Inflames", `\`${prefix}yardım inflames\``, true)
            .addField("[6]Şaherman", `\`${prefix}yardım saherman\``, true)
            .addField("[7]Shayla", `\`${prefix}yardım shayla\``, true)
            .addField("[8]Ufqzyn", `\`${prefix}yardım ufqzyn\``, true)
            .setImage(``)
            .setTimestamp(),
        ],
      });
    // KOMUTADI
    if (args[0] === "ufqzyn") {
      return message.channel.send({
        embeds: [
          new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setThumbnail(
              `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png?size=2048`
            )
            .setDescription(
              `**${prefix}avatar2** = User avatar
              **${prefix}yardım** = Yardım komudu`
            )
            .setImage(``)
            .setTimestamp(),
        ],
      });
    }
    if (args[0] === "shayla") {
      return message.channel.send({
        embeds: [
          new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setThumbnail(
              `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png?size=2048`
            )
            .setDescription(
              `**${prefix}istatistik** = Bot istatistik`
            )
            .setImage(``)
            .setTimestamp(),
        ],
      });
    }
    if (args[0] === "saherman") {
      return message.channel.send({
        embeds: [
          new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setThumbnail(
              `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png?size=2048`
            )
            .setDescription(
              `**${prefix}avatar** = Dyno avatar`
            )
            .setImage(``)
            .setTimestamp(),
        ],
      });
    }
    if (args[0] === "inflames") {
      return message.channel.send({
        embeds: [
          new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setThumbnail(
              `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png?size=2048`
            )
            .setDescription(
              `**${prefix}tac-kimde** = Taç kimde
              **${prefix}herkeserolver** = Herkeze rol verir`
            )
            .setImage(``)
            .setTimestamp(),
        ],
      });
    }
    if (args[0] === "eyuq") {
      return message.channel.send({
        embeds: [
          new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setThumbnail(
              `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png?size=2048`
            )
            .setDescription(`**${prefix}afk** = Afk olursun`)
            .setImage(``)
            .setTimestamp(),
        ],
      });
    }
    if (args[0] === "eneskurt") {
      return message.channel.send({
        embeds: [
          new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setThumbnail(
              `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png?size=2048`
            )
            .setDescription(
              `**${prefix}balıktut** = Balık tutarsın
              **${prefix}hesapla** = Matematik`
            )
            .setImage(``)
            .setTimestamp(),
        ],
      });
    }
    if (args[0] === "edip") {
      return message.channel.send({
        embeds: [
          new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setThumbnail(
              `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png?size=2048`
            )
            .setDescription(`**${prefix}uptime** = Botun uptimesini söyler.`)
            .setImage(``)
            .setTimestamp(),
        ],
      });
    }
    if (args[0] === "çağatay") {
      return message.channel.send({
        embeds: [
          new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setThumbnail(
              `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png?size=2048`
            )
            .setDescription(`**${prefix}nsfw** = ANİME NSFW.`)
            .setImage(``)
            .setTimestamp(),
        ],
      });
    }
  },
};
