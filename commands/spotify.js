const Enmap = require('enmap');
exports.run = async (client, message, [playlist]) => {
  const registry = new Enmap();
  const registryType = ['rap', 'games', 'memes', 'dubstep', 'catchy', 'nightcore'];
  
  registry.set("rap", "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd");
  registry.set("games", "https://open.spotify.com/playlist/5bzUd5ygYq9iiGvSUfxmDN");
  registry.set("memes", "https://open.spotify.com/playlist/6dexJqtAIi8A2Mi35g6GfT");
  registry.set("dubstep", "https://open.spotify.com/playlist/1A7pY65wgTarJ85of9M981");
  registry.set("catchy", "https://open.spotify.com/playlist/0u82M1UonGIU8QuCOXDJYu");
  registry.set("nightcore", "https://open.spotify.com/playlist/37i9dQZF1DZ06evO4d9PxK");
  
  if (!playlist) {
    registryType.forEach(function(type) {
      message.author.send(type);
    });
    
    message.channel.send('All music types In your DM\'s!');
  }
  
  switch(playlist) {
    case 'rap':
      message.author.send(`\nRap: ${registry.get('rap')}`);
      message.channel.send('Rap music In your DM\'s!');
      break;
    case 'games':
      message.author.send(`\nGames: ${registry.get('games')}`);
      message.channel.send('Game musicIn your DM\'s!');
      break;
    case 'memes':
      message.author.send(`\nMemes: ${registry.get('memes')}`);
      message.channel.send('Meme music In your DM\'s!');
      break;
    case 'dubstep':
      message.author.send(`\nDubStep: ${registry.get('dubstep')}`);
      message.channel.send('DubStep music In your DM\'s!');
      break;
    case 'all':
      registryType.forEach(function(type) {
        message.author.send(type);
      });

      message.channel.send('All music types In your DM\'s!');
      break;
    case 'heavymetal':
      message.author.send(`HeavyMetal: ${registry.get('heavymetal')}`);
      message.channel.send('Heavy metal musicIn your DM\'s!');
      break;
    case 'catchy':
      message.author.send(`Catchy: ${registry.get('catchy')}`);
      message.channel.send('Catchy music In your DM\'s!');
      break;
    case 'nightcore':
      message.author.send(`Nightcore: ${registry.get('nightcore')}`);
      message.channel.send('Nightcore music In your DM\'s!');
  }
}

exports.help = {
  title: 'Spotify',
  description: 'Gives you a playlist of the type of music you choose.'
};