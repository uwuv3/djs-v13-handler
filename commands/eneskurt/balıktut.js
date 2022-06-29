//https://discordturkiye.com/konular/baliktut-js-discord-v12-kod.33/
module.exports = {
  name: "balıktut",
  run: async (client, message, args) => {
    message.channel
      .send({ content: "Balık Tuttun Balığı Çekiyorsun.." })
      .then((message) => {
        var espriler = [
          "Sazan Tuttun! :fish:",
          "Köpek Balığı Tuttun İyi Para Eder Sat Sat :D",
          "Uskumru Tuttun! :fish:",
          "Mezgit Tuttun! Havyarıda Var hee ;) :fish:",
          "Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?",
          "Hamsi Tuttun! :fish:",
          "Levrek Tuttun! :fish:",
          "Hiçbirşey Tutamadın Maalesef! :wastebasket:",
          "Alabalık Tuttun! :fish:",
          "Maalesef Balık Oltadan Kaçtı! :wastebasket:",
          "İstavrit Tuttun! :fish:",
          "Gümüş Balığı Tuttun! :wastebasket:",
          "Çukra Tuttun!:fish:",
          "Balon Balığı Tuttun, İğneye Dikkat!",
          "Yılan Balığı Tuttun, Çarpıldık!",
        ];
        var espri = espriler[Math.floor(Math.random() * espriler.length)];
        message.edit({ content: `${espri}` });
      });
  },
};
