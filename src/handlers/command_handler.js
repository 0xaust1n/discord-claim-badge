const fs = require('fs');

module.exports = (client) => {
  const commandFiles = fs.readdirSync('./src/commands').filter((file) => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    if ('data' in command && 'execute' in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(`[WARNING] The command at ./src/slash_commands is missing a required "data" or "execute" property.`);
    }
  }
};
