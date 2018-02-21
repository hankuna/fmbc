var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'fmbc'
});

module.exports = (sql,callback) => {
    connection.connect();
 
    connection.query(sql,callback)

    connection.end()
}

