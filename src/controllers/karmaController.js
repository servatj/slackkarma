
const karmaModel = require('../models/karmaModel')

module.exports = () => {

    let usersKarma = [];
    const removeUser = (user) => usersKarma.filter((row) => row.user != user)
    
    const getKarma = (user) => {
       let karma = usersKarma.filter((row) => row.user === user) || [];
       if (karma.length >= 1) {
         return usersKarma.filter((row) => row.user === user)[0].karma
       }
       return 0
    }
    
    const getUserPostMessage = (message, userName, incDec, rtm, web ) => {
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
    
    const incKarma = (userList, message, rtm, web, mysql) => {
        console.log(userList)
        userList.map((userName) => {
            var addKarma = { user: userName , karma: (getKarma(userName) || 0) + 1 };
            usersKarma = removeUser(userName);
            usersKarma.push(addKarma);
            karmaModel.saveKarma(mysql, 1, userName, userName, message.channel)
            getUserPostMessage(message, userName, 'increased', rtm, web);
        });
    }
    
    const decKarma = (userList, message, rtm, web, mysql) => {
        userList.map((userName) => {
            var addKarma = { user: userName , karma: (getKarma(userName) || 0) - 1 };
            usersKarma = removeUser(userName);
            usersKarma.push(addKarma);
            karmaModel.saveKarma(mysql, -1, userName, userName, message.channel)
            getUserPostMessage(message, userName, 'decreased', rtm, web);
        });
    }

   return {
     incKarma,
     decKarma
   }
}