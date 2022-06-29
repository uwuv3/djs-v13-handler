//https://discordturkiye.com/konular/rastgele-iltifat-kodu-v12.316/
const client = require("../../index");
const { zwetra } = require("../../config");
let sözSayı = 0;
let sözler = [
  "örnek mesaj 1",
  "örnek mesaj 2",
  // Böyle böyle çoğaltabilirsiniz
];
//HAta yapmaması için kaptıyorum...
/*
client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  let iltifat = sözler[Math.floor(Math.random() * sözler.length)];
  //Hata 1: message.member.id olmaz
  if (message.author.id === zwetra.iltifat.id)
    //kişi id
    sözSayı++;
  if (sözSayı >= 50) {
    sözSayı = 0;
    message.reply(iltifat);
  }
});
*/