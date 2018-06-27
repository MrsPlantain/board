let mysql = require("mysql");

const connection = mysql.createConnection({
    host : '10.10.10.251',
    user : 'root',
    password : 'Aa123456',
    database : 'zzb'
});
console.log('connection initialized successfully!');
module.exports = connection;