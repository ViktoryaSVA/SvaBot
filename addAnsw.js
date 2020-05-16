const { pool } = require('./config.js');
let ans = [
    'Смешно','Хорошо','Классно','Нет', 'Что?','Всм?','Нужно подумать','Да'
];
let stik = [
    'CAACAgQAAxkBAAKzR169HZTDG8CjAAHG73q7Vlvg43UNugACegEAAnQ4EhCFJKTRsFp-rhkE','CAACAgQAAxkBAAKzVV69HeR6PY2kRk7SSlzGflUQkpu8AAIYAAN0OBIQlihYGsqlvTYZBA', 'CAACAgQAAxkBAAKzWV69HfH_U7-GbrknjShZxtBmkCCFAAIQAQACdDgSEBNohE5YY5-zGQQ', 'CAACAgQAAxkBAAKzW169HfmoNWy_iLKcvJjfVThrs1hGAAIBAAN0OBIQ1m1UN1HE_9YZBA',
    'CAACAgQAAxkBAAKzX169Hgr2hupfZND-cw_wUplAmCh-AAICAAN0OBIQ3Trx4ebQOPQZBA', 'CAACAgQAAxkBAAKzYV69Hheu_uG7sLZQsopRZJx0Moy3AAIFAAN0OBIQNMDuoCteOsUZBA', 'CAACAgQAAxkBAAKzZV69HiHK1kofcNMuKihs1tE209NPAAIGAAN0OBIQcwIO4gNlUGoZBA', 'CAACAgQAAxkBAAKzZ169HipDAgmQIjjYLv50qrfmzLaRAAIHAAN0OBIQFc8OA9yVAnsZBA',
    'CAACAgQAAxkBAAKzaV69HjRxFYCoYx0XNRepRZK3MPzrAAIIAAN0OBIQTySS2IWe6FcZBA', 'CAACAgQAAxkBAAKza169Hj0n6GoGpMK_tnbbqGieVsN6AAIJAAN0OBIQRFTqYIp70SAZBA', 'CAACAgQAAxkBAAKzbV69HkRTg7lRQ2bwI5iDnLR8Zpp4AAIKAAN0OBIQhRqCVctaL-cZBA', 'CAACAgQAAxkBAAKzb169Hkx06gAB-76HRyCWSyRNnH3DLgACCwADdDgSEOES-CcMvsnKGQQ',
    'CAACAgQAAxkBAAKzc169HlSgODTvXZYpJ0rf8_krdpJxAAIMAAN0OBIQJDTGZa0ypCUZBA', 'CAACAgQAAxkBAAKzdV69HlsKfmrZHnMNthYqcI_j9gT3AAINAAN0OBIQx-QsWeZZ1psZBA', 'CAACAgQAAxkBAAKzeV69HmR5vkmfYssTT-PLOHKrtpCDAAIOAAN0OBIQCBMdb1xdAXwZBA', 'CAACAgQAAxkBAAKzfV69Hmss5Ds5X8LuPr1K1o5jStnoAAIPAAN0OBIQsMYd4x7uktkZBA',
    'CAACAgQAAxkBAAKzf169HnPnHRq-QJAa8uI0OWUBGhxCAAIQAAN0OBIQ8nF4CIJzQJ4ZBA', 'CAACAgQAAxkBAAKzhF69Hnq2rD3mpD32Pidp77mlIl8rAAIRAAN0OBIQFMCP1GwjG9EZBA', 'CAACAgQAAxkBAAKzh169HoN3R5kmJbzWUDoxN2DPBcm7AAISAAN0OBIQOisBJ-YXynsZBA', 'CAACAgQAAxkBAAKzi169HpWlqH7BoN6uCQJYJqxFBijDAAJwAQACdDgSEK3CorPtsXMLGQQ'
];
const  answer_in = async (item, item2) =>  {
    let promisePool = await pool.promise();
    let [rows,fields] = await promisePool.query("INSERT INTO answer SET stik = '" + item + "', ans = '" + item2 + "'");
    return rows;
};


stik.forEach(function (item) {
    console.log(item);
    answer_in(item);
})

ans.forEach(function (item2) {
    answer_in(item2);
})

// const  stik_in = async (item) =>  {
//     let promisePool = await pool.promise();
//     let [rows,fields] = await promisePool.query("INSERT INTO answer SET stik = '" + item + "'");
//     return rows;
// };
//
//
// stik.forEach(function (item) {
//     console.log(item);
//     stik_in(item);
// })
//
// const  answer_in = async (item2) =>  {
//     let promisePool = await pool.promise();
//     let [rows,fields] = await promisePool.query("INSERT INTO answer SET ans = '" + item2 + "'");
//     return rows;
// };
//
// ans.forEach(function (item2) {
//     answer_in(item2);
// })


