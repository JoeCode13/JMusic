const i18n = require("../util/i18n");

module.exports = {
  name: "invite",
  description: i18n.__("invite.description"),
  execute(message) {
    return message.member
      .send(
        `https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=70282305&scope=bot\n`+
        "**Gracias por utilizar mi bot ❤️**\n"+
        "Si tienes alguna sugerencia puedes contactar con el desarrollador **(JoeCode_V2#4750)**"
      )
      .catch(console.error);
  }
};
