const mysql = require('mysql');
const util = require('util');

module.exports = () => {
  let mysqlSys;
  async function start({ logger, config }) {
      mysqlSys = mysql.createConnection(config);
      mysqlSys.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
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
