const Client = require('../structres/client');
const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "slowmode",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {string[]} args
   */
  run: aysnc(client, message, args) => {
    if (member.hasPermission('MANAGE_CHANNELS')) {
      return message.channel.send(">>> ❗| It looks like you are missing some permissions required to use this command!")
      message.channel.send('>>> 👮‍♂️| Required Permission: `MANAGE_CHANNELS`')
}
 if (isNaN(amount))
        return message.channel.send(">>> ❌| It looks like the slowmode you want to set is not a valid Number.");
    if (args[0] === amount + "s") {
      message.channel.setRateLimitPerUser(amount);
      if (amount > 1) {
        message.channel.send(">>> 🐌 I setted the Slowmode to " + amount + " seconds.");
        return;
      } else {
        message.channel.send(">>> 🐌 I setted the Slowmode to" + amount + " second.");
        return;
      }
    }
    if (args[0] === amount + "min") {
      message.channel.setRateLimitPerUser(amount * 60);
      if (amount > 1) {
        message.channel.send(">>> 🐌 I setted the Slowmode to " + amount + " minutes.");
        return;
      } else {
        message.channel.send(">>> 🐌 I setted the Slowmode to " + amount + " minute");

        return;
      }
    }
    if (args[0] === amount + "h") {
      message.channel.setRateLimitPerUser(amount * 60 * 60);
      if (amount > 1) {
        message.channel.send(">>> 🐌 I setted the Slowmode to " + amount + " hours.");
        return;
      } else {
        message.channel.send(">>> 🐌 I setted the Slowmode to " + amount + " hour.");
        return;
      }
    } else {
      message.channel.send(
        ">>> ❌|You can only set seconds(s), minutes(min) and hours(h)"
      );
    }
  }