
// db.query('SELECT * FROM edg_nb', function (error, results, fields) {
//     if (error) throw error;
//     // connected!
//     console.log('db test results: ', results)
// });
const db = require("./db")
let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {
    fs.readFile("./index.html", (err, data) => {
        res.end(data.toString())
    })
})

server.listen(3300, () => {
    console.log("http服务已启动");
})

var io = require('socket.io')(server);
// 连接
io.on('connection', function (socket) {
    // 监听
    socket.on('add', function (data, a2, a3) {
        const _data = {
            ...data,
            isCustomer: isCustomer(data.text)
        }
        socket.emit('add', _data);
        addRecord(_data, socket);
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
