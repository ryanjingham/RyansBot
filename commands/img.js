const Discord = require('discord.js');
const imgurwrap = require('imgurwrap');
const config = require('./../config.json');

module.exports.run = async (bot, msg, args) => {
    let clientID = config.imgurClientID;
    imgurwrap.setUserAgent('n/a');
    imgurwrap.setClientID(clientID);
}

module.exports.help = {
    name = 'img'
}