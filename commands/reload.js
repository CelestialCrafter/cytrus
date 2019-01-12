exports.run = async (client, message, args) => {
	if (message.author.id !== client.config.owner) message.channel.send('You do not have the permissions to do this.');
  
  if (message.author.id == client.config.owner || message.author.id == client.config.coowner || message.author.id == client.config.hazel) {
    if(!args || args.length <= 0) return message.reply("Must provide a command name to reload.");
    const commandName = args[0];

    // Check if the command exists and is valid
    if(!client.commands.has(commandName)) {
      return message.reply("That command does not exist");
    }

    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${commandName}.js`)];

    // We also need to delete and reload the command from the client.commands Enmap
    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`The command ${commandName} has been reloaded`);
  }
};

exports.help = {
  title: 'Reload',
  description: 'Reloads a command.'
};