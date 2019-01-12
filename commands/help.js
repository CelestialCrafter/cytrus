exports.run = async (client, message) => {
  client.help.forEach(function(command) {
    message.author.send('**' + command.title + '**');
    message.author.send(command.description);
  });
  
  message.channel.send('The help is in your DM\'s!');
};

exports.help = {
  title: 'Help',
  description: 'Returns the help message'
};