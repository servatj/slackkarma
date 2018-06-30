const mysql = require('mysql');
const util = require('util');

module.exports = () => {
  let mysqlSys;
  async function start({ logger, config }) {
      mysqlSys = mysql.createConnection(config);
      console.log("Connection  created")
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