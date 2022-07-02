//https://discordturkiye.com/konular/eklenince-ve-atilinca-sunucu-sahibine-dm-mesaj-gonderme-v12-kod.335/
const client = require("../../index");
client.on("guildCreate", async (guild) => {
  guild.owner.send(
    "<@" +
      guild.owner.id +
      "> **BOTADI** Botu Eklemeniz Bizi Sevindirdi Altta Yazanlarla Botu Kullanabilir VEYA Sorularınızı Bize Sorabilirsiniz! \n- Botun prefixi(ön-ek) `!yardım` Ya da <@BOTID> \n- Bize Birşey Bildirmek İçin `!bildir` \n- Bağlantılar: https://discord.gg/invite"
  );
});
// EKLENİNCE MESAJ // Ufqzyn#0147
// ATILINCA MESAJ // Ufqzyn#0147
client.on("guildDelete", async (guild) => {
  guild.owner.send(
    "<@" +
      guild.owner.id +
      "> **BOTADI** Botu Atmanız Bizi Üzdü Alttaki Bağlantılardan Bize Ulaşarak Sıkıntını Sorabilirsin! \n- Bağlantılar: https://discord.gg/invite"
  );
});
