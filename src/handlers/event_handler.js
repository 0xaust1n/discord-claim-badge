const fs = require('fs');

module.exports = (client) => {
  const load_dir = (dirs) => {
    const eventFiles = fs.readdirSync(`./src/events/${dirs}`).filter((file) => file.endsWith('.js'));

    for (const file of eventFiles) {
      const event = require(`../events/client/${file}`);
      if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
      } else {
        client.on(event.name, (...args) => event.execute(...args, client));
      }
    }
  };

  ['client', 'guild'].forEach((e) => load_dir(e));
};
