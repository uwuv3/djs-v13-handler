//https://discordturkiye.com/konular/yasakli-tag-kodu-v12.116/
const { Umut } = require("../../config");
const client = require("../../index");
client.on("guildMemberAdd", (member) => {
  if (Umut.yasaklıtag.aktif) {
    if (member.user.username.includes(Umut.yasaklıtag.tag)) {
      member.roles.add(Umut.yasaklıtag.ceza);
      member.roles.remove(Umut.yasaklıtag.kayıtsız);
      member.send("Sunucumuzun Yasaklı Tagında Bulunuyorsunuz!");
    }
  }
});
