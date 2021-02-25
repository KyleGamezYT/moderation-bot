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
        `>>> **Permissions Error**
         You need the following permissions: MANAGE_MESSAGES.`
      );
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        `>>> **Indexing Error**
        User Not found: `
      );
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send("You can not warn bots");
    }

    if (message.author.id === user.id) {
      return message.channel.send("You can not warn yourself");
    }

    if (user.id === message.guild.owner.id) {
      return message.channel.send(
        "You jerk, how you can warn server owner -_-"
      );
    }

    const reason = args.slice(1).join(" ");

    if (!reason) {
      return message.channel.send(
        "Please provide reason to warn - warn @mention <reason>"
      );
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(
        `You have been warned in **${message.guild.name}** for ${reason}`
      );
      await message.channel.send(
        `You warned **${
          message.mentions.users.first().username
        }** for ${reason}`
      );
    } else if(warnings !== null) {
      
      db.add(`warnings_${message.guild.id}_${user.id}`, 1);
      
      user.send(`You have been warned in **${message.guild.name}** for ${reason}`);
      
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`);
      
      message.delete
      
    }
  }
};
  }
}