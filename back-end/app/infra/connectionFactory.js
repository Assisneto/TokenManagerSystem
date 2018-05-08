let mysql = require('mysql');
function createDBconnection(){
    return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '',
            database : "TMS"
        });
}

module.exports = ()=> createDBconnection

