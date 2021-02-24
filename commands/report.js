const Client = require('../structres/client');
const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "report",
      /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async(client, message, args) => {
    let user = message.mentions.members.first()
    if (!user) {
      return message.channel.send(
        `>>> 🔬| I didnt found a user called ${args[0]}.`

      );
     if (message.mentions.users.first().bot) {
      return message.channel.send(`>>> 🤖| I cant report ${args[0]} Due to being a Bot.`);
    }

      if (message.author.id === user.id) {
      return message.channel.send("You can not warn yourself");
    }
   if (message.mentions.users.first() === message.guild.owner.id) {

   }
    }
 }
}