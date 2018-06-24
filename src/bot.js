const config = require('config');
const { RTMClient } = require('@slack/client');
const WebClient  = require('@slack/client').WebClient;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;
const R = require('ramda');
// const db = require('');

//console.log(db);
//db.start();

const bot_token = config.get('slack').slackkarma.botToken;
const rtm = new RTMClient(bot_token);
const web = new WebClient(bot_token);
let usersKarma = [];

const removeUser = (user) => usersKarma.filter((row) => row.user != user)
const getKarma = (user) => {
   let karma = usersKarma.filter((row) => row.user === user) || [];
   if (karma.length >= 1) {
     return usersKarma.filter((row) => row.user === user)[0].karma
   }
   return 0
}

const getUserPostMessage = (message, userName, incDec) => {
  web.users.info({ user: userName.replace('@','') })
  .then((response) => {
  // Success!
    rtm.sendMessage(`@${response.user.profile.display_name}` + ` karma has ${incDec} to ` + getKarma(userName), message.channel);
  })
  .catch((error) => {
  // Error :/
    console.log('Error: getting username ');
    console.log(error);
  });
}

rtm.on('message', function handleRtmMessage(message) {
    var userList = message.text.match(/@\w+/g) || [];
    var signsArrPlus = message.text.match(/\+/g) || [];
    var signsArrMinus = message.text.match(/\-/g) || [];

    if (message.type === 'message' && message.text) {
        if (signsArrPlus.length >= 2 ){
           userList.map((userName) => {
                addKarma = { user: userName , karma: (getKarma(userName) || 0) + 1 };
                usersKarma = removeUser(userName);
                usersKarma.push(addKarma);
                getUserPostMessage(message, userName, 'increased');
            });
        }
    }

    if (message.type === 'message' && message.text) {
        if (signsArrMinus.length >= 2 ){
           userList.map((userName) => {
                addKarma = { user: userName , karma: (getKarma(userName) || 0) - 1 };
                usersKarma = removeUser(userName);
                usersKarma.push(addKarma);
                getUserPostMessage(message, userName, 'decreased');
            });
        }
    }

});

rtm.start();

// As a slack user I 've to eh
