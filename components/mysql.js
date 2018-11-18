const mysql = require('mysql');
const util = require('util');

module.exports = () => {
  let mysqlSys;
  async function start({ logger, config }) {
    mysqlSys = mysql.createConnection(config);
    mysqlSys.connect((err) => {
      if (err) {
        throw new Error('Error connecting ', err);
      }
      logger.debug('connected as id ' + mysqlSys.threadId);
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
