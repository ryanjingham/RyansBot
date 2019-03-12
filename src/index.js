// --------------------------- Module requirements ----------------------------------------------------------------------

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const Token = require('./../config.json');

// ---------------------------- On ready event ---------------------------------------------------------------------------
client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}!`);
});

// ---------------------------- On message event memes -------------------------------------------------------------------

client.on('message', async msg => {
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

    // if (msg.content.startsWith('!')) {

    //     if (msg.content.search('kick') == true) {
    //         var member = 'yeet'
    //         let higherPowers = msg.guild.roles.find(role => role.name == "Higher Powers");
    //         let lowerPowers = msg.guild.roles.find(role => role.name == "Lower Powers");
    //         let roleTest = msg.guild.roles.find(role => role.name = "BotTestRole")
    //         if (msg.member.roles.some(r => [roleTest.id])) {
    //             const user = msg.mentions.users.first();
    //             if (user) {
    //                 member = msg.guild.member(user);
    //             }

    //             if (member) {
    //                 member.kick('Reason').then(() => {
    //                 msg.reply(`Successfully boinked ${user.tag}`);
    //                 });
    //             }
    //         }
    //         else {
    //             msg.reply("You do not have sufficient permissions to kick people. Retard.")
    //         }
            
    //     }
    
    //     if (msg.content.search('ban') == true) {
    //         let higherPowers = msg.guild.roles.find(role => role.name == 'Higher Powers');
    //         if (msg.member.roles.has(higherPowers.id)) {
    //             const user = msg.mentions.users.first();
    //             if (user) {
    //                 const member = msg.guild.member(user);
    //             }
    //             if (member) {
    //                 member.ban("Reason").then(() => {
    //                     msg.reply("successfully banned ${user.tag}");
    //                 });
    //             }
    //         }
            
    //     }
    }
    
});

// --------------------------------------- Member adds / leaves --------------------------------------------------------

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name == 'welcome');
    if (!channel) return;
    channel.send(`Eat shit and die, ${member}`);
});

client.on('guildMemberRemove', async member => {
    const channel = member.guild.channels.find(ch => ch.name == 'welcome');
    if (!channel) return;
    channel.send(`${member} just left, the dirty fucker`);
});

client.login(Token.Token);