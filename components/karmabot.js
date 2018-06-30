
const { RTMClient } = require('@slack/client');
const WebClient  = require('@slack/client').WebClient;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;
const controller = require('./')
const R = require('ramda');

module.exports = () => {

  async function start({ logger, config }) {
     //init bot events
    const bot_token = options.slackkarma.botToken;
    const rtm = new RTMClient(bot_token);
    const web = new WebClient(bot_token);
    
    rtm.on('message', function handleRtmMessage(message) {
        let userList = message.text.match(/@\w+/g) || [];
        let signsArrPlus = message.text.match(/\+/g) || [];
        let signsArrMinus = message.text.match(/\-/g) || [];
    
        if (message.type === 'message' && message.text) {
            if (signsArrPlus.length >= 2 ) controller.incKarma()
            if (signsArrMinus.length >= 2 ) controller.decKarma()
        }
    });
    
    rtm.start();
  }

  return {
    start: start,
    stop: stop,
  }  
}