let TelegramBot = require('node-telegram-bot-api');

// let token = '703135398:AAE_5Nexklq7uACQlO__ABwfb97KmoMwAX0';
let token = '1159838739:AAFBUhxfr6KJFmsQfXznPHnWebOHQJKG8Fs';
// let token = '719954118:AAEQi_IzAs3oGpikkeOgArr-P2erT8t5KKY';

let bot = new TelegramBot(token, {polling: true});

const { pool } = require('./config.js');

const  answer = async (item) =>  {
    let promisePool = await pool.promise();
    let [rows,fields] = await promisePool.query("SELECT * FROM answers WHERE ans LIKE '%" + item + "%'");
    return rows;
};

const  bWord = async (item2) =>  {
    let promisePool = await pool.promise();
    let [rows,fields] = await promisePool.query("SELECT * FROM `badwords` WHERE `word` LIKE '%" + item2 + "%'");
    return rows;
};

let bot_ansver = async (msg) =>{
    console.log(msg)
    let answer_s = await answer(msg.text);
    console.log(answer_s.length);
    let chatId = msg.chat.id;

    if (answer_s.length > 0) {
    bot.sendSticker(chatId, answer_s[0].stik);

}
};

let bot_reply = async (msg) =>{
    let reply = msg.message_id;
    console.log(msg)
    let word_s = await bWord(msg.text);
    console.log(word_s.length);
    let chatId = msg.chat.id;

    if (word_s.length > 0) {
        bot.deleteMessage(chatId,reply);
        bot.sendSticker(chatId, word_s[0].stiker);

    }

};





bot.on('message', (msg) => {
    bot_ansver(msg);
    bot_reply(msg);
 });

