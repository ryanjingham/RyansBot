// --------------------------- Module requirements ----------------------------------------------------------------------

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./../config.json');

// ---------------------------- On ready event ---------------------------------------------------------------------------
client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}!`);
});

// ---------------------------- On message event memes -------------------------------------------------------------------

client.on('message', async msg => {
    let prefix = config.Prefix;
    let messageArray = msg.content.split(" ")
    let args = messageArray.slice(1);
    if (msg.author.bot) return;

    if (msg.content == 'ping') {
        msg.reply('Pong!');
    }
    if(msg.content == 'you\'re mum gay') {
        msg.reply('no u');
    }
    if(msg.content == 'what is my avatar') {
        msg.reply(msg.author.avatarURL);
    }

    if (msg.content == 'embed this shit') {
        const embed = new Discord.RichEmbed()
            .setTitle('an embed my n-words')
            .setColor(0xFF0000)
            .setDescription('I\'m gonna say the bad word');
        msg.channel.send(embed);
    }

    if (msg.content == 'the n word') {
        msg.channel.send("MRS OBAMA GET DOWN");
    }

//if (msg.author.username == 'AWildEwok') {
        //msg.channel.send("dan has retard");
    //}

    if (msg.content == 'spam me daddy') {
        var x = 0
        do {
            x++;
            msg.channel.send("REEEEEEEEEE");
        }
        while (x < 5);

    }
    if (msg.content.toUpperCase() == "WHAT DOES RYAN HAVE") {
        msg.channel.send("a magnum dong")
    }

    if (msg.content == 'role test') {
        let Role = msg.guild.roles.find(role => role.name == "Higher Powers");
        msg.reply(msg.member.roles.has(Role.id))
    }

    //------------------------------- Moderation commands -------------------------------------------------------------

    if (msg.content.startsWith(prefix)) {

        if (messageArray[0] == `${prefix}kick`) {
            let user = msg.mentions.users.first();
            if (!user) {
                msg.channel.send("Error 404: User not Found");
            }
            let kickReason = args.join(" ").slice(22);
            if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("No permissions, retard");
            if(user.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("That person can't be kicked, retard");

            let kickEmbed = new Discord.RichEmbed()
                .setDescription("~Kick~")
                .setColor("#e56b00")
                .addField("Kicked User", `${user} with ID ${user.id}`)
                .addField("Kicked by" , `<@${msg.author.id}> with ID ${message.author.id}`)
                .addField("Kicked in", `${msg.channel}`)
                .addField("Time", `${msg.createdAt}`)
                .addField("Reason", `${kickReason}`);
            
            let kickChannel = msg.guild.channels.find(`name`, "logs");
            if (!kickChannel) return msg.channel.send("Can't find incidents channel.");

            msg.guild.member(user).kick(kickReason);
            kickChannel.send(kickEmbed);
            msg.channel.send(kickEmbed);
            
        }

        if (messageArray[0] == `${prefix}ban`) {
            let user = msg.mentions.user.first();
            if (!user) msg.channel.send("Error 404: User not found");
            
            let banReason = args.join(" ").slice(22);
            if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send("No permissions, retard");
            if(user.hasPermission("ADMINISTRATOR")) return msg.channel.send("That person can't be kicked, retard");
            
        }
    }
    
});

// --------------------------------------- Member adds / leaves --------------------------------------------------------

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name == 'welcome');
    if (!channel) return;
    channel.send(`Eat shit and die, ${member}`);

    console.log(`${member.guild.name}: user ${member.displayName} joined the server.\n`)
});

client.on('guildMemberRemove', async member => {
    const channel = member.guild.channels.find(ch => ch.name == 'welcome');
    if (!channel) return;
    channel.send(`${member} just left, the dirty fucker`);

    console.log(`${member.guild.name}: user ${member.displayName} left the server.\n`)
});

client.login(config.Token);