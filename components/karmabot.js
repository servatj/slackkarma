const { RTMClient } = require('@slack/client');
const WebClient  = require('@slack/client').WebClient;
const R = require('ramda');

module.exports = (controller) => {

  async function start({ logger, config, mysqlSys }) {
    //init bot events
    const bot_token = config.slackkarma.botToken;
    const rtm = new RTMClient(bot_token);
    const web = new WebClient(bot_token);


    rtm.on('message', function handleRtmMessage(message) {
      try {
        let usersKarmaIncrease = R.match(/@\w+\s(\+{2})+/g, message.text) || []
          usersKarmaIncrease.map((user) => {
            let userId = user.match(/@\w+/g)
            console.log(userId)
              karma = (user.match(/\+/g)).length - 1
              controller.incKarma(userId, message, rtm, web, mysqlSys, karma)
          })

        let usersKarmaDecrease = R.match(/@\w+\s(\-{2})+/g, message.text) || []
          usersKarmaDecrease.map((user) => {
            let userId = user.match(/@\w+/g)
              karma = (user.match(/\-/g)).length - 1
              controller.decKarma(userId, message, rtm, web, mysqlSys, karma)
          })
      } catch(err) {
        console.log("console", err);
         logger.info(err)
      }
    });

    rtm.start();
  }

  const postMessage = (message, rtm, channel) => {
    rtm.sendMessage(message, channel);
  }

  return {
    start: start
  }
}
