const mysql = require('mysql');

// 修改为你自己的数据库登录信息
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'linheqiang',
    database: 'edg_nb'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;