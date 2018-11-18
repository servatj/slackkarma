const appRoot = require('app-root-path');

module.exports = (options) => {
  async function start(dependencies) {
    return {
      logger: {
        level: 'warn'
      },
      mysqlSys: {
        host: 'localhost',
        user: 'admin',
        password: 'password'
      },
      karmabot: {
        fileUploadUrl: 'https://slack.com/api/files.upload',
        slackkarma: {
          fileUploadChannel: '#Slack',
          botToken: `${process.env.BOT_TOKEN}`
        }
      },
      logger: {
        file: {
          level: 'info',
          filename: `./logs/app.log`,
          handleExceptions: true,
          json: true,
          maxsize: 5242880, // 5MB
          maxFiles: 5,
          colorize: false,
        },
        console: {
          level: 'debug',
          handleExceptions: true,
          json: false,
          colorize: true,
        },
      },
    }
  }

  return {
    start: start
  }
}
