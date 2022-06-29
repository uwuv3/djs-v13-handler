//https://discordturkiye.com/konular/18-nsfw-anime-komutu-d-js-v12.299/
//Denemeyecem
const akaneko = require("akaneko");
const Discord = require("discord.js");
module.exports = {
  name: "nsfw",
  run: async (client, message, args) => {
    const answer = args.join(" ");

    if (!answer) {
      const blank = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Errrrk!")
        .setDescription("Lütfen bir tür giriniz.")
        .addField(
          "Türler:",
          "ass\nbdsm\nblowjob\ncum\ndoujin\nfeet\nfemdom\nfoxgirl\ngifs\nglasses\nhentai\nnetorare\nmaid\nmasturbation\norgy\npanties\npussy\nschool\nsuccubus\ntentacles\nthighs\nuglyBastard\nuniform\nyuri\nzettaiRyouiki",
          true
        )
        .setTimestamp()
        .setFooter({ text: "Nsfw command." });

      message.channel.send({ embeds: [blank] });
    } else if (!message.channel.nsfw) {
      message.channel.send(
        ":x: Bu kanalda NSFW seçeneği açık değil. Lütfen açık olan kanalda deneyin."
      );
    } else if (answer == "ass") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.ass()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "bdsm") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.bdsm()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "blowjob") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.blowjob()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "cum") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.cum()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "blowjob") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.blowjob()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "doujin") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.doujin()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "feet") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.feet()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "femdom") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.femdom()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "foxgirl") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.foxgirl()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "gifs") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.gifs()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "glasses") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.glasses()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "hentai") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.hentai()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "netorare") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.netorare()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "maid") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.maid()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "masturbation") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.masturbation()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "orgy") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.orgy()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "panties") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.panties()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "pussy") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.pussy()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "school") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.school()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "succubus") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.succubus()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "tentacles") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.tentacles()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "thighs") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.thighs()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "uglyBastard") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.uglyBastard()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "uniform") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.uniform()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "yuri") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.yuri()
      );
      message.channel.send({ embeds: [embed] });
    } else if (answer == "zettaiRyouiki") {
      const embed = new Discord.MessageEmbed().setImage(
        await akaneko.nsfw.zettaiRyouiki()
      );
      message.channel.send({ embeds: [embed] });
    } else {
      const wrongarr = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Errrrk!")
        .setDescription("Yanlış tür.")
        .setTimestamp()
        .setFooter({ text: "Nsfw command." });

      message.channel.send({ embeds: [wrongarr] });
    }
  },
};
