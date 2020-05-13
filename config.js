const mysql = require("mysql2");


const  token = '';

const pool = mysql.createPool(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'bot'
    }
);


const dbConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'bot'
    });
}

const options = {
    mysqlUrl: '192.168.10.10',
    mysqlUser: 'telegram_co_usr',
    mysqlPassword: '3UWcC6jtJUqnu02Y',
    mysqlDb: 'telegram_covid'
}



module.exports =
    {
        dbConnection:dbConnection,
        pool:pool,
        token:token,
        options:options,
    }