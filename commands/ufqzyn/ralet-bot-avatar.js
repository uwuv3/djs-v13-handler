//https://discordturkiye.com/konular/ralex-bot-benzeri-avatar-komutu.298/
const Discord = require("discord.js");
module.exports = {
  name: "avatar2",
  aliases: [
    "Avatar",
    "AVATAR",
    "pp",
    "Pp",
    "PP",
    "İCON",
    "icon",
    "İcon",
    "aVATAR",
    "avatra",
    "Avatra",
    "AVATRA",
    "avtra",
    "AVTRA",
    "Avtra",
  ],
  run: async (client, message, args) => {
    //let us = message.guild.members.cache.find(u => args.slice(0).join(' ').includes(u.username))
    let muser = message.mentions.users.first();
    let userid;
    if (isNaN(args[0])) {
      if (!muser) {
        userid = message.author.id;
      } else {
        userid = muser.id;
      }
    } else {
      userid = args[0];
    }
    try {
      let user = await client.users.fetch(userid);
      let avatar = user.displayAvatarURL({ dynamic: true, size: 2048 });
      if (avatar.endsWith(".gif?size=2048")) {
        let embed = new Discord.MessageEmbed()
          .setAuthor({
            name: user.tag,
            iconURL: user.displayAvatarURL({ dynamic: true }),
          })
          .setDescription(
            `**[[PNG]](${user.displayAvatarURL({
              format: "png",
              size: 2048,
            })})** - **[[JPEG]](${user.displayAvatarURL({
              format: "jpeg",
              size: 2048,
            })})** - **[[GIF]](${user.displayAvatarURL({
              format: "gif",
              size: 2048,
            })})** - **[[WEBP]](${user.displayAvatarURL({
              format: "webp",
              size: 2048,
            })})**`
          )
          .setImage(user.displayAvatarURL({ dynamic: true, size: 2048 }))
          .setColor("#fdcf5c");
        message.channel.send({ embeds: [embed] });
      } else {
        let embed = new Discord.MessageEmbed()
          .setAuthor({
            name: user.tag,
            iconURL: user.displayAvatarURL({ dynamic: true }),
          })
          .setDescription(
            `**[[PNG]](${user.displayAvatarURL({
              format: "png",
              size: 2048,
            })})** - **[[JPEG]](${user.displayAvatarURL({
              format: "jpeg",
              size: 2048,
            })})** - **~~[GIF]~~** - **[[WEBP]](${user.displayAvatarURL({
              format: "webp",
              size: 2048,
            })})**`
          )
          .setImage(user.displayAvatarURL({ dynamic: true, size: 2048 }))
          .setColor("#fdcf5c");
        message.channel.send({ embeds: [embed] });
      }
    } catch {
      message.channel.send({
        embeds: [
          new Discord.MessageEmbed()
            .setColor("#fdcf5c")
            .setDescription("Kullanıcıyı Bulamadım!"),
        ],
      });
      return;
    }
  },
};
