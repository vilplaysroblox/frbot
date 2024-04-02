const Discord = require("discord.js")
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  console.log("Bot is online!")
})

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content === "fr") {
    msg.reply("fr");
  }
  if (msg.content === "Fr") {
    msg.reply("Fr");
  }
  if (msg.content === "FR") {
    msg.reply("FR");
  }
  if (msg.content === "fR") {
    msg.reply("fR");
  }
})

client.login(${{ secrets.DSID }})
