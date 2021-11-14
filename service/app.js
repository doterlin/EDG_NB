const db = require("./db")
let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {
    res.end('Nothing!')
})

server.listen(3300, () => {
    console.log("http服务已启动");
})

var io = require('socket.io')(server);
// 连接
io.on('connection', function (socket) {
    getCount(res => {
        socket.emit('count', res)
    })
    // 监听
    socket.on('add', function (data, a2, a3) {
        const _data = {
            ...data,
            isCustomer: isCustomer(data.text)
        }
        socket.emit('add', _data);
        addRecord(_data, socket);

        getCount(res => {
            socket.emit('count', res)
        })
    });
});

function isCustomer(text){
    const TEXT_MAP = [
        'EDG牛逼！！！',
        '777777',
        '汗子哥好兄弟',
        'JieJie 666！',
        '我们是冠军！',
        'E往无前'
    ];
    return TEXT_MAP.includes(text)? 0: 1;
}


function addRecord({ text, aniType, isCustomer }, socket) {
    const sql = `INSERT INTO bullet 
 (text, ip, ani_type, is_custom, ctime) 
 VALUES 
 ("${text}", "${socket.handshake.address}", "${aniType}", ${isCustomer}, NOW());
`
    db.query(sql, function (error, results, fields) {
        if (error) throw error;
    });
}

function getCount(callback){
    const sql = `SELECT (SELECT COUNT(*) FROM bullet) AS C1, 
(SELECT COUNT(*) FROM bullet where is_custom=1)AS C2`;
    db.query(sql, function (error, results, fields) {
        if (error) throw error;
        callback(results[0])
    });
}
