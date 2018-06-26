const mysql = require('mysql');
const util = require('util');

module.exports = (options) => {
  let mysqlSys;
  async function start({ logger, config }) {
     console.log('config', config);
      mysqlSys = mysql.createConnection({
           host     : 'localhost',
           user     : 'admin',
           password : 'password'
      });
      return mysqlSys;    
  }


  async function stop() {
    return mysqlSys.end();
  }

  return {
    start: start,
    stop: stop,
  }  
}