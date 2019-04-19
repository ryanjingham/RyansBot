// --------------------------- Module requirements ----------------------------------------------------------------------

const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const fs = require('fs');
const config = require('./config.json');
const Jimp = require('jimp');
bot.commands = new Discord.Collection();

var prefix = config.Prefix

console.log("------------------------------");

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);

    let commFile = files.filter(f => f.split(".").pop() == "js");
    if(commFile.length <= 0) {
        console.log("Couldn't find commands.");
        return;
    }
    console.log("-------------------------------------");
    commFile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded`);
        bot.commands.set(props.help.name, props);
    });
    console.log("-------------------------------------");
});

// ---------------------------- On ready event ---------------------------------------------------------------------------
bot.on('ready', () => {
    console.log(`logged in as ${bot.user.tag}!`);
});


// ---------------------------- On message event memes -------------------------------------------------------------------

bot.on('message', async msg => {
    let messageArray = msg.content.split(" ")
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    if (msg.author.bot) return;

    let commandFile = bot.commands.get(cmd.slice(prefix.length));
    if(commandFile) commandFile.run(bot, msg, args);

    if (msg.author.id === '238203655449346058') {
        msg.channel.send("nigger");
    }

    if (msg.author.id === '252135691071389712') {
        msg.channel.send('snitch');
    }

    if (messageArray[0] === "?memeElian") {
        let loadedImage;
        let caption = "";
        args.forEach(word => {
            caption = caption + word + " ";
        });

        Jimp.read('elian.jpg')
            .then(function (image) {
            loadedImage = image;
            console.log("image loaded");
            return Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            })
            .then(function (font) {
                loadedImage.print(font, (1504 / 2) - (caption.length * 35), (2016 / 2 + 250), caption)
                .write('elian1.jpg');
                msg.channel.send('lmao gay', {
                    files: ["./elian1.jpg"]
                });
            })
            .catch(function (err) {
                console.error(err);
            });
    }

    if (messageArray[0] === "?memeBen") {
        let loadedImage;
        let caption = "";
        args.forEach(word => {
            caption = caption + word + " ";
        });

        Jimp.read('ben.png')
            .then(function (image) {
            loadedImage = image;
            console.log("image loaded");
            return Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            })
            .then(function (font) {
                loadedImage.print(font, (864 / 2) - (caption.length * 15), (1536 / 2 + 250), caption)
                .write('ben1.jpg');
                msg.channel.send('lmao gay', {
                    files: ["./ben1.jpg"]
                });
            })
            .catch(function (err) {
                console.error(err);
            });
    }

});

// --------------------------------------- Member adds / leaves --------------------------------------------------------

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name == 'welcome');
    if (!channel) return;
    channel.send(`Eat shit and die, ${member}`);

    console.log(`${member.guild.name}: user ${member.displayName} joined the server.\n`)
});

bot.on('guildMemberRemove', async member => {
    const channel = member.guild.channels.find(ch => ch.name == 'welcome');
    if (!channel) return;
    channel.senkd(`${member} just left, the dirty fucker`);

    console.log(`${member.guild.name}: user ${member.displayName} left the server.\n`)
});

// --------------------------------------- Initial setup when joining a server ------------------------------------------

bot.on('guildCreate', guild => {
    const welcomeChannel = guild.channels.find(ch=> ch.name == "welcome");
    if (!welcomeChannel) return;

    welcomeChannel.send("Good day. I am Autismobot. Please refer to me in my proper pronouns. Everyone is a big homo.");
});

bot.login(config.Token);