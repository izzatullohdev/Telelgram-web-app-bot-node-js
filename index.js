const startBot = require("./bot/bot"); // ✅ To'g'ri nomlash
const startServer = require("./server/server"); // ✅ To'g'ri nomlash

startBot()
  .then(() => {
    console.log("Bot ishga tushdi");
  })
  .catch((err) => {
    console.log("Bot bilan bog'lanishda xatolik yuz berdi", err);
  });

startServer()
  .then(() => {
    console.log("Server ishga tushdi");
  })
  .catch((err) => {
    console.log("Server bilan bog'lanishda xatolik yuz berdi", err);
  });
