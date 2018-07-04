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
        console.log(message.text)
        let usersKarma = R.match(/<@(\w+)>:?\s*(-{2,6}|\+{2,6})/g, message.text)
        if (usersKarma.length > 0) {
          usersKarma.map((user) => {
            console.log(user.split(/\+/g).length)
            let userId = user.match(/@\w+/g)
            let signsArrPlus  = user.split(/\+/g).length || [];
            let signsArrMinus = user.split(/\-/g).length || [];
            if (signsArrPlus >= 2 ) {
              karma = signsArrPlus - 2
              controller.incKarma(userId, message, rtm, web, mysqlSys, karma)
            }
            if (signsArrMinus >= 2 && signsArrPlus.lengt == 0) {
              karma = signsArrMinus - 2
              controller.decKarma(userId, message, rtm, web, mysqlSys, karma)
            }
          })
        }
      } catch(err) {
        logger.log(err)
      }
    });

    rtm.start();
  }

  return {
    start: start
  }
}
