module.exports = function(options) {

    async function start(dependencies) {
        return {
            logger: {
                level: 'warn'
            },
            mysqlSys: {
                host     : 'localhost',
                user     : 'admin',
                password : 'password',
                database : 'event_aggregates'
            },
            slack: {

            }
        }
    }

    return {
        start: start
    }
}