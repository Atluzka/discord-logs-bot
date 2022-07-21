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
var Channel_Create = true
var Channel_Deleted = true
var Guild_Ban = true
var Guild_Unban = true
var logschannel = '999552034787307580' // To get the id you have to enable developer mode in discord

client.on('ready', () => {
    console.log("The bot is online")
})

client.on('messageDelete', (message) => { // Emitted whenever a message gets deleted
    if(message.author.bot) return;
    if(!message.guild) return;
    if(Message_Deleted) {
        const author = message.author
        var currentdate = new Date(); 
        const createdAt = message.createdAt
        const embedLog = new MessageEmbed()
            .setColor('RED')
            .setTitle('Message Deleted')
            .setDescription(String(author) + " deleted a message")
            .addField("Content", "```" + String(message) + "```")
            .setFooter({
                text: String(createdAt)
            })
        client.channels.cache.get(logschannel).send({ embeds: [embedLog] });
    } else {
        return;
    }
})

client.on('messageUpdate', (oldMessage, newMessage) => { // Emitted whenever a message gets edited
    if(oldMessage.author.bot) return;
    if(!oldMessage.guild) return;
    if(Message_Edited) {
        const author = oldMessage.author
        var currentdate = new Date(); 
        const createdAt = oldMessage.createdAt
        const embedLog = new MessageEmbed()
            .setColor('ORANGE')
            .setTitle('Message Edited')
            .setDescription(String(author) + " edited a message")
            .addField("Old Message", "```" + String(oldMessage) + "```")
            .addField("New Message", "```" + String(newMessage) + "```")
            .setFooter({
                text: String(createdAt)
            })
        client.channels.cache.get(logschannel).send({ embeds: [embedLog] });
    } else {
        return;
    }
})

client.on('channelCreate', (channel) => { // Emitted whenever a channel has been created
    if(Channel_Create) {
        const channelCreatedAt = channel.createdAt
        const channelId = channel.id
        const categoryId = channel.parentId
        const embedLog = new MessageEmbed()
            .setColor('GREEN')
            .setTitle('Channel Created')
            .setDescription("<#" + String(channelId) + "> has been created")
            .setFields({
                name: 'Information',
                value: "```ChannelID: " + String(channelId) + "\nCategoryID: " + String(categoryId) + "```",
                inline: false,
            })
            .setFooter({
                text: String(channelCreatedAt)
            })
        client.channels.cache.get(logschannel).send({ embeds: [embedLog] });
    } else {
        return;
    }
})

client.on('channelDelete', (channel) => {
    if(Channel_Deleted) {
        const channelCreatedAt = channel.createdAt
        const channelId = channel.id
        const channelName = channel.name
        const categoryId = channel.parentId
        const embedLog = new MessageEmbed()
            .setColor('RED')
            .setTitle('Channel Deleted')
            .setDescription("#" + String(channelName) + " has been deleted")
            .setFields({
                name: 'Information',
                value: "```ChannelID: " + String(channelId) + "\nCategoryID: " + String(categoryId) + "```",
                inline: false,
            })
            .setFooter({
                text: String(channelCreatedAt)
            })
        client.channels.cache.get(logschannel).send({ embeds: [embedLog] });
    } else {
        return;
    }
})

client.on('guildBanAdd', (ban) => {
    if(Guild_Ban) {
        const bannedUser = ban.user
        const bannedReason = ban.reason
        const embedLog = new MessageEmbed()
            .setColor('RED')
            .setTitle('User Banned')
            .setDescription(String(bannedUser) + " has been banned")
        client.channels.cache.get(logschannel).send({ embeds: [embedLog] });
    } else {
        return;
    }
})

client.on('guildBanRemove', (ban) => {
    if(Guild_Unban) {
        const bannedUser = ban.user
        const bannedReason = ban.reason
        const embedLog = new MessageEmbed()
            .setColor('GREEN')
            .setTitle('User Unbanned')
            .setDescription(String(bannedUser) + " has been unbanned")
        client.channels.cache.get(logschannel).send({ embeds: [embedLog] });
    } else {
        return;
    }
})

client.login(process.env.TOKEN)
