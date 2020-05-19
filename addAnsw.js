const { pool } = require('./config.js');

let ans = [
    'Смешно','Хорошо','Классно','Нет', 'Что?','Всм?','Нужно подумать','Да'
];
let stik = [
    'CAACAgQAAxkBAAKzR169HZTDG8CjAAHG73q7Vlvg43UNugACegEAAnQ4EhCFJKTRsFp-rhkE','CAACAgQAAxkBAAKzVV69HeR6PY2kRk7SSlzGflUQkpu8AAIYAAN0OBIQlihYGsqlvTYZBA', 'CAACAgQAAxkBAAKzWV69HfH_U7-GbrknjShZxtBmkCCFAAIQAQACdDgSEBNohE5YY5-zGQQ', 'CAACAgQAAxkBAAKzW169HfmoNWy_iLKcvJjfVThrs1hGAAIBAAN0OBIQ1m1UN1HE_9YZBA',
    'CAACAgQAAxkBAAKzX169Hgr2hupfZND-cw_wUplAmCh-AAICAAN0OBIQ3Trx4ebQOPQZBA', 'CAACAgQAAxkBAAKzYV69Hheu_uG7sLZQsopRZJx0Moy3AAIFAAN0OBIQNMDuoCteOsUZBA', 'CAACAgQAAxkBAAKzZV69HiHK1kofcNMuKihs1tE209NPAAIGAAN0OBIQcwIO4gNlUGoZBA',
    'CAACAgQAAxkBAAKzZ169HipDAgmQIjjYLv50qrfmzLaRAAIHAAN0OBIQFc8OA9yVAnsZBA','CAACAgQAAxkBAAIDHF7BiH9Ojzb7JU1LfroVX_hXQlRQAAILAAN0OBIQ4RL4Jwy-ycoZBA'
   ];

// const  stik_in = async (item) =>  {
//     let promisePool = await pool.promise();
//     let [rows,fields] = await promisePool.query("INSERT INTO answers SET stik = '" + item + "'");
//     return rows;
// };
//
//
// stik.forEach(function (item) {
//     console.log(item);
//     stik_in(item);
// })

const  answer_in = async (item2 ,item ) =>  {
    let promisePool = await pool.promise();
    let [rows,fields] = await promisePool.query("INSERT INTO answers SET ans = '" + item2 + "' , stik = '" + item + "'" );
    return rows;
};

ans.forEach(function (item2,index) {
    console.log(item2);
    answer_in(item2, stik[index]);
})

// const  answer_in = async (item, item2) =>  {
//     let promisePool = await pool.promise();
//     let [rows,fields] = await promisePool.query("INSERT INTO answer SET stik = '" + item + "', ans = '" + item2 + "'");
//     return rows;
// };
//
//
// stik.forEach(function (item) {
//     console.log(item);
//     answer_in(item);
//     return item;
// })
//
// ans.forEach(function (item2) {
//     answer_in(item2);
//     return item2;
// })




