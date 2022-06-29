//https://discordturkiye.com/konular/sunucu-iconu-ve-banner-gosteren-komut.276/
//Hatalımı bilinmiyor
const Discord = require("discord.js");
module.exports = {
  name: "sunucu",
  aliases: ["sunucu", "snc", "server", "sw"],
  run: async (client, message, args) => {
    if (!args[0])
      return message.channel.send(
        `Bir Karakter Seç: \`icon\`, \`banner\`\n**Örnek:** !sunucu \`icon\``
      );

    if (args[0] === "icon") {
      return message.channel.send({
        emebds: [
          new Discord.MessageEmbed()
            .setColor(`#fdcf5c`)
            .setDescription(
              `**[[PNG](${message.guild.iconURL({
                format: "png",
                size: 2048,
                dynamic: true,
              })})]** - **[[JPG](${message.guild.iconURL({
                format: "jpg",
                size: 2048,
                dynamic: true,
              })})]** - **[[GİF](${message.guild.iconURL({
                format: "gif",
                size: 2048,
                dynamic: true,
              })})]** - **[[WEBP](${message.guild.iconURL({
                format: "webp",
                size: 2048,
                dynamic: true,
              })})]**`
            )
            .setImage(
              `${message.guild.iconURL({
                format: "png",
                size: 2048,
                dynamic: true,
              })}`
            ),
        ],
      });
    }
    if (args[0] === "banner") {
      return message.channel.send({
        embeds: [
          new Discord.MessageEmbed()
            .setColor(`#fdcf5c`)
            .setDescription(
              `**[[PNG](${message.guild.bannerURL({
                format: "png",
                size: 2048,
                dynamic: true,
              })})]** - **[[JPG](${message.guild.bannerURL({
                format: "jpg",
                size: 2048,
                dynamic: true,
              })})]** - **~~[[GİF]()]~~** - **[[WEBP](${message.guild.bannerURL(
                {
                  format: "webp",
                  size: 2048,
                  dynamic: true,
                }
              )})]**`
            )
            .setImage(
              `${message.guild.bannerURL({
                format: "png",
                size: 2048,
                dynamic: true,
              })}`
            ),
        ],
      });
    }
  },
};
