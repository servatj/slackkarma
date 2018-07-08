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
        let usersKarma = R.match(/<@(\w+)>:?\s*(\+(\+)+)/g, message.text)
        if (usersKarma.length > 0) {
          usersKarma.map((user) => {
            let userId = user.match(/@\w+/g)
            let signsArrPlus  = user.split(/\+/g).length || [];
            let signsArrMinus = user.split(/\-/g).length || [];

            if (signsArrPlus >= 2 ) {
              checkKarma(signsArrPlus, 'increase')
              karma = signsArrPlus - 2
              controller.incKarma(userId, message, rtm, web, mysqlSys, karma)
            }
            if (signsArrMinus >= 2 && signsArrPlus == 1) {
              checkKarma(signsArrPlus, 'decrease')
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

  const postMessage = (message, rtm, channel) => {
    rtm.sendMessage(message, channel);
  }

  const checkKarma = (value, suffix) => {
    if (value > 6) postMessage(`The maximum level of karma change you can ${suffix} is 5 points`)
  }

  return {
    start: start
  }
}
