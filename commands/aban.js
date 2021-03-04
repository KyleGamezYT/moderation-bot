const Client = require('../structres/client');
const { Message, MessageEmbed } = require('discord.js');
module.exports = {
  name: "aban",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {string[]} args
   */
  run:aysnc(client, message, args) => {
if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        `>>> ❌| It looks like you dont have permissions to Use this command.
        👮‍♂️| Required Permissions: BAN_MEMBERS`
      );

    let Member = message.mentions.users.first();

    if (!Member)
      return message.channel.send(
        `>>> 🔎| I didnt find a user called "${args[0]}".`
      );

    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send(`>>> 🔎| I didnt find a user called "${args[0]}".`);

    if (Member.id === message.author.id)
      return message.channel.send(`>>> ❓| Why do you want to ban yourself?!?!`);

    if (Member.id === client.user.id)
      return message.channel.send(`>>> 😢| After all of my work i did, You treaten to ban me?`);

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send(`>>> 👑| Why do you want to ban the owner of ${message.guild.name}? You cant do that!`);

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);

    if (!User.bannable) return message.channel.send(`>>> ❌| User Isnt Banable.`);

    try {
      console.log(`Member Is Going To Get Ban!`);
      setTimeout(function() {
        User.ban({ reason: `${Reason || "No Reason Provided."}` });
      }, 2000);
      
      if (User && Member.bot === false)
        Member.send(
          `>>> 🔨**Ban recieved**
          📜Reason:${Reason || "No Reason Provided."}.
          💂‍♂️Moderator: Unknown.
           `
        );
      message.channel.send(`💡 **Ban Given**
      📜 Reason: ${Reason}
     💂‍♂️  Moderator: Unknown`);
      console.log(
        `User: ${Member.tag} (${Member.id}) Just Got Banned From ${
          message.guild.name
        } For ${Reason || "No Reason Provided!"}`
      );
    } catch (error) {
      return message.channel
        .send(
          `>>> ❌| An Error Occured. ${error}.`
        )
        .then(() => console.log(error));
    }

    //End
  }
} 
  }
}