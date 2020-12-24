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

        let Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if (!Member) {
            const nomember = new Discord.MessageEmbed()
            .setAuthor("| California Highway Patrol", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Seal_of_the_California_Highway_Patrol.svg/1200px-Seal_of_the_California_Highway_Patrol.svg.png")
            .setDescription(`❌ **| You need to provide a member next time, try again!**`)
            .setColor("#af9c51")

            return message.channel.send(nomember)
        }

        if (Member.user.id === "791575094555181076") {
            const warnme = new Discord.MessageEmbed()

            .setAuthor("| California Highway Patrol", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Seal_of_the_California_Highway_Patrol.svg/1200px-Seal_of_the_California_Highway_Patrol.svg.png")
            .setDescription(`❌ **| I don't have warnings dumbass!**`)
            .setColor("#af9c51")

            return message.channel.send(warnme)
        }

        let Warns = await db.fetch(`Warnings_${message.guild.id}_${Member.user.id}`);
        if (Warns === null) Warns = "0";

        let Embed = new Discord.MessageEmbed()
            .setColor("#af9c51")
            .setDescription(`✅ **| <@${Member.user.id}> Has ${Warns} Warning${Warns.length > 1 ? "s!" : "!"}**`)

        return message.channel.send(Embed);

    }}