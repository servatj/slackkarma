
const karmaModel = require('../models/karmaModel')

module.exports = () => {

    const getUserPostMessage = (message, userName, incDec, rtm, web, karma ) => {
     console.log("username ", userName)
     web.users.info({ user: userName.replace('@','') })
      .then((response) => {
      // Success!
        rtm.sendMessage(`@${response.user.profile.display_name}` + ` karma has ${incDec} to ` + karma, message.channel);
      })
      .catch((error) => {
      // Error :/
        console.log('Error: getting username ');
        console.log(error);
      });
    }

    const incKarma = (userName, message, rtm, web, mysql, karma) => {
            karmaModel.saveKarma(mysql, karma, userName, userName, message.channel, message, rtm, web)
           // getUserPostMessage(message, userName, 'increased', rtm, web, karma);
    }

    const decKarma = (userName, message, rtm, web, mysql, karma) => {
            karma = karma * -1
            karmaModel.saveKarma(mysql, karma, userName, userName, message.channel, message, rtm, web)
            // getUserPostMessage(message, userName, 'decreased', rtm, web, karma);
    }

   return {
     incKarma,
     decKarma
   }
}
