// --------------------------- Module requirements ----------------------------------------------------------------------

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const Token = require('./config.json');

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

    if (msg.author.tag == 'AWildEwok') {
        msg.channel.send("dan has retard");
    }

    //------------------------------- Moderation commands -------------------------------------------------------------

    if (msg.content.startsWith('!kick')) {
        const user = msg.mentions.users.first();
        if (user) {
            const member = msg.guild.member(user);
        }
        if (member) {
            member.kick('Reason').then(() => {
                msg.reply('Successfully kicked ${user.tag}');
            });
        }
    }

    if (msg.content.startsWith('!ban')) {
        const user = msg.mentions.users.first();
        if (user) {
            const member = msg.guild.member(user);
        }
        if (member) {
            member.ban("Reason").then(() => {
                msg.reply("successfully banned ${user.tag}");
            });
        }
    }
});

// --------------------------------------- Member adds / leaves --------------------------------------------------------

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name == 'welcome');
    if (!channel) return;
    channel.send('Eat shit and die, ${member}');
});

client.on('guildMemberRemove', async member => {
    const channel = member.guild.channels.find(ch => ch.name == 'welcome');
    if (!channel) return;
    channel.send('${member} just left, the dirty fucker');
});

client.login(Token.Token);