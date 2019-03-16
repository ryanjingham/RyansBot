const Discord = require('discord.js');

module.exports.run = async (client, msg, args) => {
    // let user = msg.mentions.users.first();
    //         if (!user) {
    //             msg.channel.send("Error 404: User not Found");
    //         }
    //         let kickReason = args.join(" ").slice(22);
    //         if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("No permissions, retard");
    //         if(user.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("That person can't be kicked, retard");

    //         let kickEmbed = new Discord.RichEmbed()
    //             .setDescription("~Kick~")
    //             .setColor("#e56b00")
    //             .addField("Kicked User", `${user} with ID ${user.id}`)
    //             .addField("Kicked by" , `<@${msg.author.id}> with ID ${message.author.id}`)
    //             .addField("Kicked in", `${msg.channel}`)
    //             .addField("Time", `${msg.createdAt}`)
    //             .addField("Reason", `${kickReason}`);
            
    //         let kickChannel = msg.guild.channels.find(`name`, "logs");
    //         if (!kickChannel) return msg.channel.send("Can't find logs channel.");

    //         msg.guild.member(user).kick(kickReason);
    //         kickChannel.send(kickEmbed);
    //         msg.channel.send(kickEmbed);

    //         console.log(`${msg.guild.name}: user ${user.name} was kicked.`);
    console.log("works");
    msg.channel.send("works");
}

module.exports.help = {
    name: "kick"
}