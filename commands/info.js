const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    const embed = new Discord.RichEmbed()
    .setColor('#eeeeee')
    .setTitle('Cytrus Github')
    .setFooter('Made by CelestialCrafter#6830 and EnderGirlGamer#5370')
    .setDescription(`Github: [Production Github](https://github.com/CelestialCrafter/cytrus)
Website: [Website](https://cytrus.ga)
API: [API](https://api.cytrus.ga/api)
Support Server: [Server](https://discord.gg/a7vxMM5)
Issues: [Github](https://github.com/CelestialCrafter/cytrus/issues)`);

    message.channel.send(embed);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['i'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'info',
  category: 'General',
  description: 'Returns info about Cytrus',
  usage: 'info'
};
