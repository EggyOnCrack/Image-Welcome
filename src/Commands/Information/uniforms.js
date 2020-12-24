const Command = require('../../Structures/Command');
const rbx = require('noblox.js')
const Discord = require('discord.js')

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['']
		});
	}

	async run(message) {
        const uniformembed1 = new Discord.MessageEmbed()
        .setImage("https://cdn.discordapp.com/attachments/791109745922146346/791587251871940628/CHPOUTFITS.png")
        .setColor("#af9c51")


        message.channel.send(uniformembed1)
        const uniformembed2 = new Discord.MessageEmbed()
        .setDescription('__**Standard Uniform**__ \n \n > • **[Shirt](https://www.roblox.com/catalog/5670673492/CHP-top)** \n \n > • **[Pants](https://www.roblox.com/catalog/5670730463/CHP-Pants)** \n \n > • **[Vest](https://www.roblox.com/catalog/5973139017/CHP-Class-A-Uniform-W-Vest)** \n \n > • **[Trousers](https://www.roblox.com/catalog/5973031978/CHP-Uniform-Trousers)**')
        .setColor("#af9c51")

        message.channel.send(uniformembed2)

        const uniformembed3 = new Discord.MessageEmbed()
        .setDescription('__**Supervisor Uniform**__ \n \n > • **[Shirt](https://www.roblox.com/catalog/5624816469/CHP-Supervisor)** \n \n > • **[Pants](https://www.roblox.com/catalog/5624915014/CHP-Supervisor-Pants)**')
        .setColor("#af9c51")

        message.channel.send(uniformembed3)

        const uniformembed4 = new Discord.MessageEmbed()
        .setDescription('__**Assistant Commissioner Uniform**__ \n \n > • **[Shirt](https://www.roblox.com/catalog/5977504125/CHP-Assistant-Commissioner-W-Vest)** \n \n > • **[Pants](https://www.roblox.com/catalog/5973031978/CHP-Uniform-Trousers)**')
        .setColor("#af9c51")

        message.channel.send(uniformembed4)

        const uniformembed5 = new Discord.MessageEmbed()
        .setDescription('__**Deputy Commissioner Uniform**__ \n \n > • **[Shirt](https://www.roblox.com/catalog/5842399674/CHP-DC)** \n \n > • **[Pants](https://www.roblox.com/catalog/4755482748/Admin)**')
        .setColor("#af9c51")

        message.channel.send(uniformembed5)

        
        const uniformembed6 = new Discord.MessageEmbed()
        .setDescription('__**Miscellaneous**__ \n \n > • **[Hats](https://www.roblox.com/catalog/5805186567/Tan-State-Trooper-Scala)**')
        .setColor("#af9c51")

        message.channel.send(uniformembed6)
    }}