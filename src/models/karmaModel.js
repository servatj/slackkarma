const path = require('path');
const moment = require('moment')

const saveKarma = (mysql, receivedKarma, userId, userName, channelId ) => {
  mysql.query(`select user_name, karma from karma.karma_ledger where user_id = '${userId}'`, (err, karma) => {
    if(err) throw err
    var currentKarma = 0
    console.log('karma', karma)
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
        console.log('karma added' + userKarma);
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
