const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
    let user = msg.guild.member(msg.mentions.user.first());
    if (!user) {
        msg.channel.send(msg.author.avatarURL);
        return;
    }
    msg.channel.send(`${user.name}'s avatar is \n${user.avatarURL}`);
}


module.exports.help = {
    name: "avatar"
}