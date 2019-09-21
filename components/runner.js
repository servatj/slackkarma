const axios = require('axios')
const userStore = require('../models/user')

const SLACK_USER_INFO_URL = 'https://slack.com/api/users.info';

const getUserName = async (userParam) => {
  try {
    const resp = await axios.get(`${SLACK_USER_INFO_URL}?token=${process.env.SLACK_BOT_TOKEN}&user=${userParam}`)
    return resp.data.user.name
  } catch(err) {
    console.log('err', console.log(err))
  }
}

const run = (commands, sendMessage) => {
  commands.forEach( async ({user, amount, command, channel }) => {
    try {
      const currentAmount = userStore.getStore()[user] ? userStore.getStore()[user] : 0
      const newAmount = command === 'increase' ? currentAmount + amount : currentAmount - amount
      userStore.updateUser({[user]: newAmount });
      const userName = await getUserName(user);
      sendMessage(`${userName}'s karma has ${command === 'increase' ? 'increased' : 'decreased'} to ${newAmount}`, channel)
    } catch(err) {
      console.log('Error getting ', err)
    }
  })
}

module.exports = {
  run
}
