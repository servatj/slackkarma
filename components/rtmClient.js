const { RTMClient } = require('@slack/rtm-api');
const token = process.env.SLACK_BOT_TOKEN;
const rtm = new RTMClient(token);
const handler = require('../handler')

// Attach listeners to events by type. See: https://api.slack.com/events/message
rtm.on('message', (event) => {
  handler.getCommand(event)
});

const start = async () => {
  await rtm.start();
};

module.exports = {
  start
}
