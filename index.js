const Discord = require('discord.js')
const client = new Discord.Client();
const fs = require('fs');

fs.readFile('token.txt', 'utf8', function(err, data) {
    if (err) throw err;
    const token = data;
});


client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content == 'ping') {
        msg.reply('Pong!');
    }
});

client.login(token)