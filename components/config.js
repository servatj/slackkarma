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
            karmabot: {
                fileUploadUrl: 'https://slack.com/api/files.upload',
                slackkarma: {
                    fileUploadChannel: '#Slack',
                    botToken: 'xoxb-84169475937-390488591344-wUkBzInOqjGGWGa0TiIBL4F0'
                }
            }
        }
    }

    return {
        start: start
    }
}