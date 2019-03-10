const Discord = require('discord.js')
const client = new Discord.Client();
const fs = require('fs');
const Token = require('./config.json');

client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content == 'ping') {
        msg.reply('Pong!');
    }
    else if(msg.content == 'you\'re mum gay') {
        msg.reply('no u');
    }
    else if(msg.content == 'what is my avatar') {
        msg.reply(msg.author.avatarURL);
    }
});

client.login(Token.Token);