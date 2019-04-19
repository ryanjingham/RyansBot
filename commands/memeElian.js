const Discord = require('discord.js');
const Jimp = require('jimp');
var loadedImage;

module.exports.run = async (bot, msg, args) => {
    Jimp.read('elian.jpg')
        .then(function (image) {
            loadedImage = image;
            console.log("image loaded");
            return Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
        })
        .then(function (font) {
            loadedImage.print(font, 10, 10, args[0])
                .write('elian1.jpg');
            msg.channel.send('lmao gay', {
                files: ["./elian1.jpg"]
            });
        })
        .catch(function (err) {
            console.error(err);
        });
}

module.exports.help = {
    name: "memeElian"
}