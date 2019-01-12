exports.run = async (client, message) => {
  const http = require('http');
  
  if(message.author.id == client.config.owner || !message.author.id == client.config.coowner) {
    http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
      resp.on('data', function(ip) {
        message.author.send('Cytrus public IP: ' + ip);
      });
    });
  }
};

exports.help = {
  title: 'IP',
  description: 'Returns the IP the bot is being hosted on.'
};