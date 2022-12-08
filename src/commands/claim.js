const { EmbedBuilder } = require('@discordjs/builders');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder().setName('claim').setDescription('Claim the badge'),
  async execute(interaction) {
    const user = interaction.user;
    const resultEmbed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setAuthor({ name: user.username, iconURL: user.displayAvatarURL({ dynamic: true }) })
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .addFields(
        { name: 'Claim Sucessful!', value: `You will get your badge after 24h, Enjoy:)` },
        { name: 'Claim Badge', value: `[Claim Website](https://discord.com/developers/active-developer)` }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [resultEmbed] });
  },
};
