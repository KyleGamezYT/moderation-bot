const Client = require('../structres/client');
const { MessageEmbed } = require('discord.js')
const color = require('../color.json');
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
        `>>> 🔬| I didnt find a user called ${args[0]}.`

      );
     if (message.mentions.users.first().bot) {
      return message.channel.send(`>>> 🤖| I cant report ${args[0]} Due to being a Bot.`);
    }

      if (message.author.id === user.id) {
      return message.channel.send("You can not warn yourself");
    }
   if (message.mentions.users.first() === message.guild.owner.id) {
   return message.channel.send(`👑| ${args[0]} Is the owner of ${message.guild.name}.`);
   }
   let reportReason = args(1).join(" ");
   if (!reportReason) {
     message.channel.send(`📜| You must porvide a reason for ${args[0]}'s report.`)
   }
   const reportSucess = new MessageEmbed()
   .setTitle(`${args[0]}'s Report Has been sent.`)
   .setDescripton(`We have recived your report for ${message.guild.name}. Moderators are on their way.`)
   .addField(`Reason:`, `${reason}`)
   .addField("Target User", `${args[0]}`)
   .setFooter("Make sure to send Evidence!")
   .setColor("LIGHTBLUE")
   message.reply(reportSucess)
    }
 }
}