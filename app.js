//Define npm modules
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const http = require('http');
const express = require('express');

//Define variubles
const client = new Discord.Client();
const config = require('./config');
const app = express();
client.config = config;

//Define command handler
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();
client.help = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`).help;
    let commandName = file.split(".")[0];
    client.help.set(commandName, props);
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Loading ${commandName} command`);
    client.commands.set(commandName, props);
  });
});

//Logs into discord
client.login(process.env.BOT_TOKEN);

//Keeps the bot alive
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//HTTP routing
app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/res.json');
});

//Starts the HTTP server
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});