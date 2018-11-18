const fs = require('fs');
const createStore = require('./mysqlStore');
const ddlKarmaLedger = fs.readFileSync(`${__dirname}/sql/karma-ledger-create.sql`).toString();

var prompt = require('prompt-sync')()

async function start(mysqlSys) {
  createStore().createDatabase(mysqlSys, 'karma')
  createStore().createTable(mysqlSys, ddlKarmaLedger, 'karma_ledger')
}

module.exports = {
  start
}
