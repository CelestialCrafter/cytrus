const Discord = require('discord.js');
const { YTSearcher } = require('ytsearcher');

const searcher = new YTSearcher(process.env.YOUTUBE_API_KEY);

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!args[0]) return message.reply('You need to input somthing to search!');
    
    let msg = await message.channel.send('Searching YouTube...');
    
    searcher.search(args.join(' ')).then(info => {
      if (!info.first) return message.reply('I couldn\'t find anything on youtube with your search term!');
      
      let embed = new Discord.RichEmbed()
      .setTitle(info.first.title)
      .setDescription(info.first.url)
      .setColor('#eeeeee');
      
      msg.edit(embed);
    });

  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['yt', 'ytsearch'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'youtube',
  category: 'General',
  description: 'Returns info about a youtube video',
  usage: 'youtube <video name>'
};
