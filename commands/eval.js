exports.run = async (client, message, args) => {
  const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
  }
  
  if(message.author.id == client.config.owner || message.author.id == client.config.coowner || message.author.id == client.config.hazel) {
    try {
      const code = args.join(' ');
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
    } catch (err) {
      message.author.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  } else {
    message.channel.send('You dont have the perm\'s to do this!');
  }
};

exports.help = {
  title: 'Eval',
  description: 'Runs the JavaScript code given'
};