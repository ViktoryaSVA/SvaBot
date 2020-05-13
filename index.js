let TelegramBot = require('node-telegram-bot-api');

let token = '703135398:AAE_5Nexklq7uACQlO__ABwfb97KmoMwAX0';

let bot = new TelegramBot(token, {polling: true});

const { pool } = require('./config.js');
// const  cov_districts = async (item) =>  {
//     let promisePool = await pool.promise();
//     let [rows,fields] = await promisePool.query("SELECT name, answers FROM bot " + item + "%'");
//     //   await pool.close();
//     return rows;
// };
//

let allStikers = require('./stik.js');

bot.on('message', (msg) => {

    let chatId = msg.chat.id;
    if(msg.text == 'привіт') {
        pool.query('SELECT name FROM bot', function(error, result, fields){
            bot.sendMessage(chatId, 'І тобі привіт' + result);
        });

        bot.sendSticker(chatId, 'CAADAgADCwADAqQnC5FzuTJBvI9wAg');
    }

});




