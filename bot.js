const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'Randi ke bacche') {

       message.reply('Tu randi ka baccha');

    }
    else if (message.content === "madarchod") {

        message.reply('Tu Madarchod');
    }
    else{
        message.reply('Whatever bro!');
    }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret