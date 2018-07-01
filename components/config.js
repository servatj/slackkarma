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
                    botToken: 'xoxb-84169475937-371979281190-rbQlzDb7030mbfg4pgBgW8Y5'
                }
            }
        }
    }

    return {
        start: start
    }
}