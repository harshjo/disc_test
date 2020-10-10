const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'Randi ke bacche' || message.content === 'test') {
        if(message.author.username === "lemón"){
            message.reply("reply")
        }
        else
            message.reply('blub blub');
    }
    if(message.content === "what is my avatar?"){
        message.reply(message.author.displayAvatarURL);
    }
    if(message.content === "who am i?"){
        console.log(message.author.username)
        //message.reply(message.author);
        if (message.author.username === "lemón"){
             message.reply("Harsh");
        }
        if (message.author.username === "AnkleHead"){
            message.reply("Rituraj");
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
