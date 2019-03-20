// --------------------------- Module requirements ----------------------------------------------------------------------

const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const fs = require('fs');
const config = require('./config.json');
bot.commands = new Discord.Collection();
const imgurwrap = require('imgurwrap.js');

var prefix = config.Prefix

console.log("------------------------------");

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() == "js");
    if(jsfile.length <= 0) {
        console.log("Couldn't find commands.");
        return;
    }
    console.log("-------------------------------------");
    jsfile.forEach((f, i) => {
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

    if (msg.content == 'ping') {
        msg.reply('Pong!');
    }
    if(msg.content == 'you\'re mum gay') {
        msg.reply('no u');
    }
    if(msg.content == 'enhance avatar') {
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

// ---------------------------------------- Settings commands ----------------------------------------------------------

    if (cmd ==`${prefix}settings`) {
        if (messageArray[1].toLowerCase() == "help") {
            let settingsEmbed = new Discord.RichEmbed()
                .setTitle("~settings~")
                .setColor('#00FF00')
                .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJPDoS0TMZDLxOcZ7IuvODsMUkaIC1Ih0t_ar5a1DWMAm2HtbxA")
                .addField("1: Prefix", "Change the default prefix of the bot. Default is '?'")
                .addField("More settings coming soon", "fuck u");

            msg.channel.send(settingsEmbed);
        }   
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
    channel.send(`${member} just left, the dirty fucker`);

    console.log(`${member.guild.name}: user ${member.displayName} left the server.\n`)
});

// --------------------------------------- Initial setup when joining a server ------------------------------------------

bot.on('guildCreate', guild => {
    const welcomeChannel = guild.channels.find(ch=> ch.name == "welcome");
    if (!welcomeChannel) return;

    welcomeChannel.send("Good day. I am Autismobot. Please refer to me in my proper pronouns. Everyone is a big homo.");
});

bot.login(config.Token);