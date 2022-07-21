require('dotenv').config();
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

const intents = new Discord.Intents(32767);
const client = new Discord.Client({
    intents
});

// ?Config?
var Message_Deleted = true
var Message_Edited = true
var logschannel = 'PUT YOUR LOG CHANNEL ID HERE' // To get the id you have to enable developer mode in discord.

client.on('ready', () => {
    console.log("The bot is online")
})

client.on('messageDelete', (message) => {
    if(message.author.bot) return;
    if(!message.guild) return;
    if(Message_Deleted) {
        const author = message.author
        var currentdate = new Date(); 
        var datetime = currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear() + " @ "  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds();
        const embedLog = new MessageEmbed()
            .setColor('#786599')
            .setTitle('Message Deleted')
            .setDescription(String(author) + " deleted a message")
            .addField("Content", "```" + String(message) + "```")
            .setFooter({
                text: datetime
            })
        client.channels.cache.get(logschannel).send({ embeds: [embedLog] });
    } else {
        return;
    }
})

client.on('messageUpdate', (oldMessage, newMessage) => {
    if(oldMessage.author.bot) return;
    if(!oldMessage.guild) return;
    if(Message_Edited) {
        const author = oldMessage.author
        var currentdate = new Date(); 
        var datetime = currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear() + " @ "  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds();
        const embedLog = new MessageEmbed()
            .setColor('#55476C')
            .setTitle('Message Edited')
            .setDescription(String(author) + " edited a message")
            .addField("Old Message", "```" + String(oldMessage) + "```")
            .addField("New Message", "```" + String(newMessage) + "```")
            .setFooter({
                text: datetime
            })
        client.channels.cache.get(logschannel).send({ embeds: [embedLog] });
    } else {
        return;
    }
})

client.login(process.env.TOKEN)