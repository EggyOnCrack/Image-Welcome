const Command = require('../../Structures/Command');
const rbx = require('noblox.js')
const Discord = require('discord.js')
const db = require('quick.db')

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['']
		});
	}

    async run(message, args) {

        
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            const noperm = new Discord.MessageEmbed()
            .setAuthor("| California Highway Patrol", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Seal_of_the_California_Highway_Patrol.svg/1200px-Seal_of_the_California_Highway_Patrol.svg.png")
            .setDescription(`❌ **| You need \`ADMINISTRATOR\` to continue...**`)
            .setColor("#af9c51")

            return message.channel.send(noperm)
        }

        let channel = message.mentions.channels.first();

        if(!channel) {
            const error1 = new Discord.MessageEmbed()
            .setAuthor("| California Highway Patrol", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Seal_of_the_California_Highway_Patrol.svg/1200px-Seal_of_the_California_Highway_Patrol.svg.png")
            .setDescription(`❌ **| Please provide a channel!**`)
            .setColor("#af9c51")
    
            return message.channel.send(error1)
        }
        let announcement = args.slice(1).join(" ");

        if(!announcement) {
            const error2 = new Discord.MessageEmbed()
            .setAuthor("| California Highway Patrol", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Seal_of_the_California_Highway_Patrol.svg/1200px-Seal_of_the_California_Highway_Patrol.svg.png")
            .setDescription(`❌ **| Please provide some text to announce!!**`)
            .setColor("#af9c51")
    
            return message.channel.send(error2)
        }

        message.delete()

        const announcementembed1 = new Discord.MessageEmbed()
        .setDescription(`**Announcement sent to ${channel}**`)
        .setColor("#af9c51")

        message.channel.send(announcementembed1)

        channel.send('<@&789965671504281603>')

        const announcementembed3 = new Discord.MessageEmbed()
        .setImage("https://media.discordapp.net/attachments/784283344762175498/791602033710727218/ANNOUNCEMENT.png?width=1440&height=394")
        .setColor("#af9c51")

        channel.send(announcementembed3)
    
        const announcementembed2 = new Discord.MessageEmbed()
        .setTitle("📢 Announcement")
        .setDescription(`**From ${message.author}**, ${announcement}`)
        .setColor("#af9c51")

        channel.send(announcementembed2)
    }}