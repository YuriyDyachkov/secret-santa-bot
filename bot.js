const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx) => {
  ctx.reply(`Привет, ${ctx.from.first_name}!`);
});

bot.launch();
