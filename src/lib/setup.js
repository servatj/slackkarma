// request token 
// request db password 
// check database if exist
// check database if not exist 
// check if table exists 
// create ledger table 

const createStore = require('./lib/mysqlStore')

var prompt = require('prompt-sync')();

async const setup = () => {
    // perform setup tasks
    let token = prompt('please paste the token for your bot')
    let password = prompt('please enter the db password')

    createStore().createDatabase(mysqlSys, 'karma')  
}

module.exports = {
    setup
}