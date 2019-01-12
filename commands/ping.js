exports.run = async (client, message) => {
    message.channel.send(`Pong! ${Math.floor(client.ping)}ms`).catch(console.error);
};

exports.help = {
  title: 'Ping',
  description: 'Returns the bot\'s ping'
};