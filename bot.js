const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'Randi ke bacche') {

       message.reply('Tu randi ka baccha');

    }
    if(message.content === "what is my avatar?"){
        message.reply(message.author.displayAvatarURL);
    }
    if(message.content === "who am i?"){
        //message.reply(message.author);
        if (message.author == "lemón"){
            message.reply("Harsh");
        }
    }
});

// client.on("message", message=>{
//     if(message.content === "what is my avatar?"){
//         message.reply(message.author.displayAvatarURL);
//     }
// });
// client.on("message", message=>{
//     if(message.content === "who am i?"){
//         message.reply(message.author);
//     }
// });

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret