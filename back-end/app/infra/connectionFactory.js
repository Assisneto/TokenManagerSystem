let mysql = require('mysql');
function createDBconnection(){
if(process.env.NODE.ENV == 'production')
    let urlDeConexao = process.env.CLEARDB_DATABASE_URL;
    let grupos = urlDeConexao.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?/);
    return mysql.createConnection({
            host : grupos[3],
            user : grupos[1],
            password : grupos[2],
            database : grupos[4]
        });
}

module.exports = ()=> createDBconnection

