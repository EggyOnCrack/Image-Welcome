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
        let Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!message.member.hasPermission("ADMINISTRATOR")) {
            const noperm = new Discord.MessageEmbed()
            .setAuthor("| California Highway Patrol", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Seal_of_the_California_Highway_Patrol.svg/1200px-Seal_of_the_California_Highway_Patrol.svg.png")
            .setDescription(`❌ **| You need \`ADMINISTRATOR\` to continue...**`)
            .setColor("#af9c51")

            return message.channel.send(noperm)
        }

        if (!Member) {
            const nomember = new Discord.MessageEmbed()
            .setAuthor("| California Highway Patrol", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Seal_of_the_California_Highway_Patrol.svg/1200px-Seal_of_the_California_Highway_Patrol.svg.png")
            .setDescription(`❌ **| You need to provide a member next time, try again!**`)
            .setColor("#af9c51")

            return message.channel.send(nomember)
        }

        if (Member.user.id === message.author.id) {
            const warnyourself = new Discord.MessageEmbed()
            .setAuthor("| California Highway Patrol", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Seal_of_the_California_Highway_Patrol.svg/1200px-Seal_of_the_California_Highway_Patrol.svg.png")
            .setDescription(`❌ **| You can't warn yourself, try again!**`)
            .setColor("#af9c51")

            return message.channel.send(warnyourself)
        }

        if (Member.user.id === "791575094555181076") {
            const warnme = new Discord.MessageEmbed()

            .setAuthor("| California Highway Patrol", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Seal_of_the_California_Highway_Patrol.svg/1200px-Seal_of_the_California_Highway_Patrol.svg.png")
            .setDescription(`❌ **| You can't warn me dumbass!**`)
            .setColor("#af9c51")

            return message.channel.send(warnme)
        }

        if(Member.hasPermission("ADMINISTRATOR")) {
            const noperm1 = new Discord.MessageEmbed()
            .setAuthor("| California Highway Patrol", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Seal_of_the_California_Highway_Patrol.svg/1200px-Seal_of_the_California_Highway_Patrol.svg.png")
            .setDescription(`❌ **| This user has \`ADMINISTRATOR\`. I cannot warn them...**`)
            .setColor("#af9c51")

            return message.channel.send(noperm1)
        }

        let Reason = args.slice(1).join(" ");

        let Embed = new Discord.MessageEmbed()
              .setAuthor("| California Highway Patrol", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Seal_of_the_California_Highway_Patrol.svg/1200px-Seal_of_the_California_Highway_Patrol.svg.png")
              .setColor("#af9c51")
              .setDescription(`**${message.author}, you have successfully warned ${Member.user} for \`${Reason || "Nothing!"}\`**`)

        if (!Member.user.bot) {
            const youwerewarned = new Discord.MessageEmbed()

            .setAuthor("| California Highway Patrol", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Seal_of_the_California_Highway_Patrol.svg/1200px-Seal_of_the_California_Highway_Patrol.svg.png")
              .setColor("#af9c51")
              .setDescription(`**${Member.user}, you were warned in ${message.guild.name} for \`${Reason || "Nothing!"}\`**`)

            Member.user.send(youwerewarned)
        }

        await db.add(`Warnings_${message.guild.id}_${Member.user.id}`, 1);

        return message.channel.send(Embed);
    
}}