const path = require('path')
const moment = require('moment')

const getUserPostMessage = (message, userName, incDec, rtm, web, karma ) => {
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

const saveKarma = (mysql, receivedKarma, userId, userName, channelId, message, rtm, web ) => {
  mysql.query(`select user_name, karma from karma.karma_ledger where user_id = '${userId}'`, (err, karma) => {
    if(err) throw err
    var currentKarma = 0
    if (karma.length > 0) currentKarma = karma[0].karma
    mysql.query(`delete from karma.karma_ledger where user_id = '${userId}'`, (err, data) => {
      if(err) throw err
      let userKarma =  {
        user_id: userId,
        user_name: userName,
        karma: currentKarma + receivedKarma,
        channel_id: channelId
      }
      mysql.query(`INSERT INTO karma.karma_ledger SET ?`, userKarma, (err, content) => {
        if (err) console.log('error in model karma ' + err)
        getUserPostMessage(message, userName, 'increased', rtm, web, userKarma.karma)
      })
    })
  })
};

const rmKarma = (mysql, userId) => {
  mysql.query(`delete from karma.karma_ledger where user_id = '${userId}'`)
  console.log('Karma add for..')
};

const listTop = (mysql, rtm) => {
  mysql.query('select user_name, karma from karma.karma_ledger order by karma desc limit 20', (err, content) => {
      console.log('content top' + content);
  })
}

const getUserKarma = (mysql, user) => {
  mysql.query(`select user_name, karma from karma.karma_ledger where karma = '${user}'`, (err, content) => {
      console.log('content top' + content);
  })
}

module.exports = {
  saveKarma,
  rmKarma,
  listTop,
  getUserKarma
}
