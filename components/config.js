module.exports = function(options) {

    async function start(dependencies) {
        return {
            logger: {
                level: 'warn'
            },
            mysqlSys: {
                host     : 'localhost',
                user     : 'admin',
                password : 'password'
            },
            slack: {

            }
        }
    }

    return {
        start: start
    }
}