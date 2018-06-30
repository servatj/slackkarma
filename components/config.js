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
                    botToken: 'xoxb-330868138784-369391388770-EQVjLvAi09G6xv2ecVUBUK6g'
                }
            }
        }
    }

    return {
        start: start
    }
}