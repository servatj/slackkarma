const { RTMClient } = require('@slack/client');
const WebClient  = require('@slack/client').WebClient;

module.exports = (controller) => {

  async function start({ logger, config }) {
    //init bot events
    const bot_token = config.slackkarma.botToken;
    const rtm = new RTMClient(bot_token);
    const web = new WebClient(bot_token);

    rtm.on('message', function handleRtmMessage(message) {
      try {
        let userList = message.text.match(/@\w+/g) || [];
        let signsArrPlus = message.text.match(/\+/g) || [];
        let signsArrMinus = message.text.match(/\-/g) || [];
        console.log(message.text)
        if (message.type === 'message' && message.text) {
            if (signsArrPlus.length >= 2 ) controller.incKarma(userList, message, rtm, web)
            if (signsArrMinus.length >= 2 ) controller.decKarma(userList, message, rtm, web)
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