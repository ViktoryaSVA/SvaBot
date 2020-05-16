let TelegramBot = require('node-telegram-bot-api');

let token = '703135398:AAE_5Nexklq7uACQlO__ABwfb97KmoMwAX0';

let bot = new TelegramBot(token, {polling: true});

const { pool } = require('./config.js');

const  answer = async (item) =>  {
    let promisePool = await pool.promise();
   // let [rows,fields] = await promisePool.query("SELECT * FROM bot WHERE answers LIKE '%" + item + "%'");
    let [rows,fields] = await promisePool.query("SELECT * FROM answer WHERE id = 11 ");
    //   await pool.close();
    return rows;
};






let bot_ansver = async (msg) =>{
    let answer_s = await answer(msg.text);

    let chatId = msg.chat.id;

    await answer_s.forEach(function (result) {
        bot.sendSticker(chatId, result.stik);
     //   bot.sendMessage(chatId, 'І тобі привіт ' + result.name);

    })
}







bot.on('message', (msg) => {
    bot_ansver(msg);

    // if(msg.text == msg.text) {
    //     pool.query('SELECT name FROM bot', function(error, result, fields){
    //
    //     });
    //
    //     bot.sendSticker(chatId, 'CAADAgADCwADAqQnC5FzuTJBvI9wAg');
    // }

});

