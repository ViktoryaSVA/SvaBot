const { pool } = require('./config.js');

let word = [
    'Cука','бля','ебать','ебнулся','сосе', 'заебок','отпиздить','пиздить','нахуй','пидор','пидорас'
];

let stiker = [
    'CAACAgQAAxkBAAIDg17EJZGVIOwgKhY9lT7yblxYtBfgAAILAAN0OBIQ4RL4Jwy-ycoZBA','CAACAgQAAxkBAAIDhV7EJbHAoW06zGxFHddaosG0jAhoAAIPAAN0OBIQsMYd4x7uktkZBA',
    'CAACAgQAAxkBAAIDjl7EJrV_heEAAZkorpiMDi4hUevJDgACJQEAAnQ4EhD1L9ktPmBefRkE','CAACAgQAAxkBAAIDj17EJsV2BoMQ6zbuF9Hpz0t0xcdaAAJVAAN0OBIQy4G0Qlp-j-MZBA',
    'CAACAgQAAxkBAAIDk17EJvRKNi-2LvJBoxZL1cXTRML-AAIKAAN0OBIQhRqCVctaL-cZBA','CAACAgQAAxkBAAIDlF7EJxHDjiZQ3BJLkmqNbGXq4uB9AAILAAN0OBIQ4RL4Jwy-ycoZBA',
    'CAACAgQAAxkBAAIDlV7EJyQojaFCr_f9jb9c6fpCq4ifAAIWAAN0OBIQJYvT68XpqsUZBA','CAACAgQAAxkBAAIDmF7EJz4AAa5U5Q-ikCn2S1opcenLAANXAAN0OBIQ8rPlIjYUZjUZBA',
    'CAACAgQAAxkBAAIDnV7EJ1w5AAGTFuEOJJHPL3kK0LWc7gACFgMAAnQ4EhAJ2bsN_Dg8JRkE','CAACAgIAAxkBAAIDnl7EJ3Zjq0UiRUIDa8KySLXILBWgAAI8NwAC4KOCB26dC3SCbKFvGQQ',
    'CAACAgIAAxkBAAIDn17EJ4oI7z28Wo2hOj17ERRxj3vkAAJhGgAC4KOCB49taUmTZ_ivGQQ'
];

const  word_in = async (item1, item2) =>  {
    let promisePool = await pool.promise();
    let [rows,fields] = await promisePool.query("INSERT INTO badwords SET word = '" + item1 + "' , stiker = '" + item2 + "'" );
    return rows;
};

word.forEach(function (item1,index) {
    console.log(item1);
    word_in(item1, stiker[index]);
})
