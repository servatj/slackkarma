const fs = require('fs') 
const createStore = require('./mysqlStore')
const ddlKarmaLedger = fs.readFileSync(`${__dirname}/sql/karma-ledger-create.sql`).toString()

var prompt = require('prompt-sync')()

async function start(mysqlSys) {
    // perform setup tasks
    // let token = prompt('please paste the token for your bot')
    // let password = prompt('please enter the db password')

    createStore().createDatabase(mysqlSys, 'karma')  
    createStore().createTable(mysqlSys, ddlKarmaLedger, 'karma_ledger')
}

module.exports = {
    start
}