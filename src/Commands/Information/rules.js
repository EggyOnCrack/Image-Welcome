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
        const rulesembed1 = new Discord.MessageEmbed()
        .setImage("https://cdn.discordapp.com/attachments/774922976428032020/791576508270510100/CHPRULES.png")
        .setColor("#af9c51")


        message.channel.send(rulesembed1)
        const rulesembed2 = new Discord.MessageEmbed()
        .setDescription('__**Rules**__ \n \n > • As a CHP trooper, you will show respect to members of the community, other troopers your High ranks. \n \n > • You will up hold the Code of Conduct no matter what, if you show you arnt up holding it you will be Suspended \n \n > • You MUST follow the Roblox and Discord TOS, if you dont follow these you will be let go from the CHP and kicked from the Discord \n \n > • Never disrespect Your Fellow troopers or show Dominance against them, if you are found doing this you will be Suspended. \n \n > • Follow all traffic laws and make sure people follow those laws \n \n > • No Profanity within CHP Communication channels, if found you will be Suspended \n \n > • No Ear-raping, racial slurs etc to be done in VC\s \n \n > • Always help troopers in need , never turn them away because you dont fell like helping them. \n \n > • Never talk behind Troopers/HR\'s backs, if you are found out you will be Terminated from the CHP and kicked from the Discord \n \n > • Show respect to other departments as you will work alongside them most of your Career. \n \n > • Never take Command of a Scene if a higher rank is there. \n \n > • Always wear the right uniforms while on duty. \n \n > • Always Follow these rules, On and Off Duty. \n \n *Please make sure you follow these, failure to do so will lead to consequences.* \n Here is the jurisdictions map, please follow this as well!')
        .setImage("https://cdn.discordapp.com/attachments/774922976428032020/791590137086738432/New_Map_5.png")
        .setColor("#af9c51")

        message.channel.send(rulesembed2)
    }}