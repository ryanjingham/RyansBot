const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    let user = msg.guild.member(msg.mentions.user.first());
    if (!user) msg.channel.send("Error 404: User not Found");

    let kickReason = args.join(" ").slice(22);
    if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("No permissions, retard");
    if(user.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("That person can't be kicked, retard");
    
    user.kick(kickReason).then( () => {
        console.log(`${msg.guild.name}: user ${user.name} was kicked.`);
    });
}

module.exports.help = {
    name: "kick"
}