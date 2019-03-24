const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    if (messageArray[1].toLowerCase() == "help") {
        let settingsEmbed = new Discord.RichEmbed()
            .setTitle("~settings~")
            .setColor('#00FF00')
            .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJPDoS0TMZDLxOcZ7IuvODsMUkaIC1Ih0t_ar5a1DWMAm2HtbxA")
            .addField("1: Prefix", "Change the default prefix of the bot. Default is '?'")
            .addField("More settings coming soon", "fuck u");

            msg.channel.send(settingsEmbed);

    }
}

module.exports.help = {
    name: 'settings'
}