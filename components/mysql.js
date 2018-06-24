const mysql = require('mysql');
const util = require('util');

module.exports = () => {
  let mysqlSys;
  async function start(dependencies) {
      mysqlSys = mysql.createConnection({
           host     : 'localhost',
           user     : 'admin',
           password : 'password'
      });
      return mysqlSys;    
  }


  async function stop() {
    return mysqlSys.close();
  }

  return {
    start: start,
    stop: stop,
  }  
}