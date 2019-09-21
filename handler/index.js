const { extractUser, getKarmaAmount } = require('../helpers/users')

const getUsersCommands = (message, channel) => {
  const increasers = message.match(/(<@\w+>)\s*\+(\+)+/g) || []
  const decreasers = message.match(/(<@\w+>)\s*\-(\-)+/g) || []
  const usersIncrease = increasers.map(extractUser)
    .map( user => ({ command: "increase", user: user.replace(/\+|\s/g, ''), amount: getKarmaAmount(user), channel}))
  const usersDecrease = decreasers.map(extractUser)
    .map( user => ({ command: "decrease", user: user.replace(/-|\s/g, ''), amount: getKarmaAmount(user), channel}))
  return [...usersIncrease, ...usersDecrease]
}

const handleMessage = ({ text, user }, channel) => {
  const usersCommands = getUsersCommands(text, channel)
  return usersCommands
}

module.exports = {
  handleMessage 
}
