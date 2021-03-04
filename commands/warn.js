const Client = require('../structres/client');
const db = require('quick.db');
const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "warn",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {string[]} args
   */
  run: aysnc(client, message, args) => {
     if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(
        `>>> ❌| Oops, It looks like you do not have the Right permissions to use this command.
        👮‍♂️| Required Permissions:  MANAGE_MESSAGES.`
      );
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        `>>> 🔎| I didnt find a user called ${args[0]} `
      );
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send(`🤖 ${args[0]} Is a bot.`);
    }

    if (message.author.id === user.id) {
      return message.channel.send("❓| Why do you want to warn yourself?!?!");
    }

    if (user.id === message.guild.owner.id) {
      return message.channel.send("👑| Why do you want to warn the owner?! You cant do that!");
    }

    const reason = args.slice(1).join(" ");

    if (!reason) {
      return message.channel.send(
        `📰| You must porvide a reason for ${args[0]}'s warn. `
      );
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(
        `📜| Warned - ${message.guild.name} 
        💡|Reason: ${reason}
         👮‍♂️ | Moderator: ${message.author}`
      );
      await message.channel.send(
        `💡|**Warn Given**
        🤵| User: **${
          message.mentions.users.first().username
        }**
        📜|Reason: **${reason}**
        👮‍♂️| Moderator: ${message.author}`
      );
    } else if(warnings !== null) {
      
      db.add(`warnings_${message.guild.id}_${user.id}`, 1);
      
      user.send(`📜| Warned - ${message.guild.name} 
        💡|Reason: ${reason}
         👮‍♂️ | Moderator: ${message.author}`);
      
      await message.channel.send(`💡|**Warn Given**
        🤵| User: **${
          message.mentions.users.first().username
        }**
        📜|Reason: **${reason}**
        👮‍♂️| Moderator: ${message.author}`);
      
      message.delete()
      
    }
  }
