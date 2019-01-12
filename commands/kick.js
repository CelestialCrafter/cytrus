exports.run = async (client, message, args) => {
  const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      member.kick(args.join(' ')).then(() => {
        message.reply(`Successfully kicked ${user.tag}`);
      }).catch(err => {
        message.reply('I was unable to kick the member');
      });
    } else {
      message.reply('That user isn\'t in this guild!');
    }
  } else {
    message.reply('You didn\'t mention the user to kick!');
  }
};

exports.help = {
  title: 'Kick',
  description: 'Kicks a member from the server.'
};