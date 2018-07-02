module.exports = function(options) {

    async function start(dependencies) {
        return {
            logger: {
                level: 'warn'
            },
            mysqlSys: {
                host     : 'localhost',
                user     : 'admin',
                password : 'admin'
            },
            karmabot: {
                fileUploadUrl: 'https://slack.com/api/files.upload',
                slackkarma: {
                    fileUploadChannel: '#Slack',
                    botToken: 'empty'
                }
            }
        }
    }

    return {
        start: start
    }
}