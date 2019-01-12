module.exports = (client) => {
  client.user.setActivity('with linux!');
  
 	const statusStartup = 'Memory Usage: ' + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MB\nUsers: ' + client.users.size.toLocaleString() + '\nServers: ' + client.guilds.size.toLocaleString();
  console.log("Logged into discord!\n\nName: " + client.user.tag + "\n" + statusStartup + '\nUptime: ' + client.uptime + 'ms\nPrefix: ' + client.config.prefix + '\n\n');
};