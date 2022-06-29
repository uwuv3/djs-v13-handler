//https://discordturkiye.com/konular/dyno-bot-avatar-komutu.294/
const Discord = require("discord.js");
module.exports = {
  name: "avatar",
  aliases: ["av"],
  run: async (client, message, args) => {
    let target = message.mentions.users.first() || message.author;

    message.channel.send({
      embeds: [
        new Discord.MessageEmbed()
          .setAuthor({
            name: target.tag,
            iconURL: target.displayAvatarURL({ dynamic: true }),
          })

          .setTitle("Avatar")
          .setImage(target.displayAvatarURL({ dynamic: true, size: 512 })),
      ],
    });
  },
};
