//https://discordturkiye.com/konular/banlanana-dm-mesaj-gelismis-v12.311/
const Discord = require("discord.js");
module.exports = {
  name: "ban",
  aliases: ["yasakla"],
  run: async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return (
        message.channel.send(
          `Bu Komutu Kullanmak İçin **BAN_MEMBERS** Yetkisine Sahip Olmalısın! - Bay İlbeycik`
        ) && message.react("❌")
      );

    let kişi = message.mentions.users.first();
    if (!kişi)
      return (
        message.channel.send("Banlamam için birini etiketle!") &&
        message.react("❌")
      );

    let sebep = args.slice(1).join(" ");
    if (!sebep)
      return message.channel.send("Bir Sebep Gir!") && message.react("❌");

    kişi.send(
      new Discord.MessageEmbed()
        .setTitle(` BANLANDIN <a:banned:793750939835301898> `)
        .setDescription(
          `**${message.guild.name}** Adlı Sunucudan **${sebep}** Sebebiyle Banlandınız!`
        )
        .setColor("#ff0000")
        .setImage(
          "https://media1.tenor.com/images/d856e0e0055af0d726ed9e472a3e9737/tenor.gif?itemid=8540509"
        )
        .setFooter({ text: `Banlandın - ArFa PROHIBITED` })
        .setTimestamp()
    );

    const bayilbeycik = new Discord.MessageEmbed()
      .setTitle("Başarılı")
      .setDescription(
        `${kişi} Adlı kişi **${sebep}** sebebiyle başarıyla
banlandı.`
      )
      .setColor("#00bf00")
      .setFooter({ text: `Kullanıcı Banlandı - ArFa PROHIBITED` });
    message.channel.send({ embeds: [bayilbeycik] });
    message.guild.members.ban(kişi);
  },
};
