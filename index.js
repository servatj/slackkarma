const rtmClient = require('./components/rtmClient');

const bootstrapBot = () => {
  console.log("Karma Bot Started");
  rtmClient.start();
}

module.exports = bootstrapBot();
