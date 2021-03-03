const Client = rewuire('../structres/client');
const { Message } = require('discord.js');
module.exports = {
  name: "ban",
  /**
   * @param { Client } client
   * @param { Message } message 
   * @param {string[]} args
    */
    run: aysnc(client, message, args) => {
    if (member.hasPermission('BAN_MEMBERS')) {
	  return message.channel.send('❌| It looks like you are missing permissions.')
    message.channel.send("👮‍♂️| Missing permissions: BAN_MEMBERS")
}
  let Member = message.mentions.user.first();
  if(!Member) {
    message.channel.send(` >>> 🔬I didnt Found a user called ${args[0]}.`);
  }
    }