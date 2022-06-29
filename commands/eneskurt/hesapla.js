//https://discordturkiye.com/konular/hesapla-js-discord-v12-kod.23/
const Discord = require("discord.js");
const math = require("math-expression-evaluator");
const stripIndents = require("common-tags").stripIndents;
module.exports = {
  name: "hesapla",
  run: async (client, message, args) => {
    var soru = args.join(" ");

    if (!soru)
      return message.reply({
        content: "Bir işlem belirtin. **Doğru Kullanım**: -hesapla <işlem>",
      });
    else {
      let cevap;
      try {
        cevap = await math.eval(soru);
      } catch (err) {
        message.channel.send({ content: "Hatalı işlem: **" + err });
      }
      /* Embed field value hatası
      const embed = new Discord.MessageEmbed()
        .addField("Soru", soru)
        .addField("Cevap", cevap);

      message.channel.send({ embeds: [embed] });
      */
      message.reply({ content: `cevabın : ${cevap}` });
    }
  },
};
