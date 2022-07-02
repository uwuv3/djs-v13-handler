//https://discordturkiye.com/konular/kycode-kod-paylasimlari-serisi-kod1-afk-komutu.355/
const client = require("../../index");
const { QuickDB } = require("quick.db");
const db = new QuickDB({ filePath: "eyuq.db" });
client.on("messageCreate", async(message) => {
  if (!message.guild || message.author.bot) return;

  if (message.mentions.users.size >= 1) {
    message.mentions.users.forEach(async (user) => {
      if (
        message.content.includes("@here") ||
        message.content.includes("@everyone")
      )
        return;
      var messageEventARG0 = ``; //dil.commands.afk.messageEvent.arg0.replace("%user.tag%", user.tag).replace("%reason%", db.get(`afk_${message.guild.id}_${user.id}`))
 const sebep = await db.get(
    `afk_${message.guild.id}_${user.id}`
  )     
      if (db.has(`afk_${message.guild.id}_${user.id}`)) {
        message.channel.send(
          `Etiketlediğiniz **${user.tag}** adlı kullanıcı, \`${sebep}\` sebebiyle AFK.`
        );
      }
    });
  }
});
