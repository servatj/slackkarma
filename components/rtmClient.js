const { RTMClient } = require('@slack/rtm-api');
const token = process.env.SLACK_BOT_TOKEN;
const rtm = new RTMClient(token);
const handler = require('../handler')
const {run} = require('../components/runner')

// Attach listeners to events by type. See: https://api.slack.com/events/message
rtm.on('message', (event) => {
  const ev = event.message || event
  const commands = handler.handleMessage(ev, event.channel)
  run(commands, sendMessage)
});

const sendMessage = async (message, channel) => {
  try {
    const reply = await rtm.sendMessage(`${message}`, channel)
    console.log('Message sent successfully', reply.ts);
  } catch (error) {
    console.log(error)
    if (error.code === ErrorCode.SendMessagePlatformError) {
      console.log(error.data);
    } else {
      console.log('Well, that was unexpected.');
    }
  }
}

const start = async () => {
  await rtm.start();
};

module.exports = {
  start,
  sendMessage
}
