const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    let user = msg.mentions.user.first();
        if (!user) msg.channel.send("Error 404: User not found");
        
        let banReason = args.join(" ").slice(22);
        if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send("No permissions, retard");
        if(user.hasPermission("ADMINISTRATOR")) return msg.channel.send("That person can't be kicked, retard");

        let banEmbed = new Discord.RichEmbed()
            .setDescription("~Ban~")
            .setColor('#e56b00')
            .addField("Banned User", `${user} with ID ${user.id}`)
            .addField("Banned by" , `<@${msg.author.id}> with ID ${message.author.id}`)
            .addField("Banned in", `${msg.channel}`)
            .addField("Time", `${msg.createdAt}`)
            .addField("Reason", `${banReason}`);
        
        let logs = msg.guild.channels.find('name', "logs");
        if (!banChannel) return msg.channel.send("Can't find logs channel");

        msg.guild.member(user).ban(banReason);
        logs.send(banEmbed);
        msg.channel.send(banEmbed);

        console.log(`${msg.guild.name}: user ${user.name} was banned.`);
}

module.exports.help = {
    name: "ban"
}