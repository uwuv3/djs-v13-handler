//https://discordturkiye.com/konular/butonlu-sayfaya-yonlendirme-discord-js-v12-kod.113/
module.exports = {
  name: "kuatyw",
  run: async (client, message, args) => {
    const fetch = require("node-fetch");
    let JsonBody = {
      content: "Siteye gitmek için tıkla",
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              label: "Tıkla",
              style: 5,
              url: "https://fibercode.xyz/",
            },
          ],
        },
      ],
    };
    fetch(
      `https://discord.com/api/v10/channels/${message.channel.id}/messages`,
      {
        method: "POST",
        body: JSON.stringify(JsonBody),
        headers: {
          Authorization: `Bot ${client.token}`,
          "content-type": "application/json",
        },
      }
    );
  },
};
