const mysql = require('mysql');
const util = require('util');

module.exports = (options) => {
  let mysqlSys;
  async function start({ logger, config }) {
      mysqlSys = mysql.createConnection(config);
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