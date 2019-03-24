const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
   let user = msg.guild.members.get(args[0]);

   console.log(args[0])
   console.log(user);
}

module.exports.help = {
    name: "firsttest"
}