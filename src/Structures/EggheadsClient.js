const { Client, Collection, MessageEmbed } = require('discord.js');
const Util = require('./Util.js');
const colors = require('colors')

module.exports = class EggheadsClient extends Client {

	constructor(options = {}) {
		super({
			disableMentions: 'everyone'
		});
		this.validate(options);

		this.commands = new Collection();

		this.aliases = new Collection();

		this.utils = new Util(this);

		this.once('ready', () => {
			console.log(colors.green(`✔ | Logged In as ${this.user.username}`));
			this.user.setStatus('online')
        this.user.setActivity({
                name: 'Made By SnoopyisinRoblox',
                type: "WATCHING",
        });
		});

		this.on('message', async (message) => {
			const mentionRegex = RegExp(`^<@!${this.user.id}>$`);
			const mentionRegexPrefix = RegExp(`^<@!${this.user.id}> `);

			if (!message.guild || message.author.bot) return;

			if (message.content.match(mentionRegex)) {
				const myprefix = new MessageEmbed()
				.setAuthor("| California Highway Patrol", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Seal_of_the_California_Highway_Patrol.svg/1200px-Seal_of_the_California_Highway_Patrol.svg.png")
          .setDescription(`**My Prefix For ${message.guild.name} is: \`${this.prefix}\`**`)
		  .setColor("#af9c51")
		  
		  message.channel.send(myprefix)
			}

			const prefix = message.content.match(mentionRegexPrefix) ?
				message.content.match(mentionRegexPrefix)[0] : this.prefix;
			
			if(!message.content.startsWith(prefix)) return;


			// eslint-disable-next-line no-unused-vars
			const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);

			const command = this.commands.get(cmd.toLowerCase()) || this.commands.get(this.aliases.get(cmd.toLowerCase()));
			if (command) {
				command.run(message, args);
			}
		});
	}

	validate(options) {
		if (typeof options !== 'object') throw new TypeError(colors.red('Options should be a type of Object.'));

		if (!options.token) throw new Error(colors.red('You must pass the token for the client.'));
		this.token = options.token;

		if (!options.prefix) throw new Error(colors.red('You must pass a prefix for the client.'));
		if (typeof options.prefix !== 'string') throw new TypeError(colors.red('Prefix should be a type of String.'));
		this.prefix = options.prefix;
	}

	async start(token = this.token) {
		this.utils.loadCommands();
		super.login(token);
	}

};