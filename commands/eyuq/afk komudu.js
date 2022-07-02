//https://discordturkiye.com/konular/kycode-kod-paylasimlari-serisi-kod1-afk-komutu.355/
const Discord = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB({ filePath: "eyuq.db" });
module.exports = {
  name: "afk",
  run: async (client, message, args) => {
    var reason = args.slice(0).join(" ") || "Belirtilmemiş"; //Sebep belirtilmemişse, sebep kısmında "Belirtilmemiş" yazacak.

    if (await db.has(`afk_${message.guild.id}_${message.author.id}`)) {
      //Eğer AFK ise

      db.delete(`afk_${message.guild.id}_${message.author.id}`); //AFK bilgisini sil
      message.channel.send(`Artık AFK değilsiniz.`);
    } else {
      //Aksi taktirde AFK değil ise

      db.set(`afk_${message.guild.id}_${message.author.id}`, reason); //AFK bilgisi ekle
      message.channel.send(`${reason} sebebiyle AFK moduna geçtiniz.`);
    }
  },
};
