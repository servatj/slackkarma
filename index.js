const rtmClient = require('./components/rtmClient');

const bootstrapBot = () => {
  console.log("Hola como estas");
  rtmClient.start();
}

module.exports = bootstrapBot();
