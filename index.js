const { Telegraf } = require('telegraf');
const { envirionments } = require('./environments');
const { analyzeImageService } = require('./analyze-image.service');

const bot = new Telegraf(envirionments.botToken ?? '');

bot.on('photo', analyzeImageService)

bot.launch(() => {
    console.log('Bot started')
})