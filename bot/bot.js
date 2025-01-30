require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });
module.exports = async function startBot() {
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId,
      "Assalomu alaykum Web Appga kirsh uchun buttonni bosing",
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Web App",
                web_app: {
                  url: "https://68b0-90-156-198-10.ngrok-free.app/",
                },
              },
            ],
          ],
        },
      }
    );
  });
};
