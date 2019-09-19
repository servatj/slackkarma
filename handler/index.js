const { extractUser, getKarmaAmount } = require('../helpers/users')

const getUsersCommands = (message) => {
  const increasers = message.match(/(<@\w+>)\s*\+(\+)+/g) || []
  const decreasers = message.match(/(<@\w+>)\s*\-(\-)+/g) || []
  const usersIncrease = increasers.map(extractUser)
    .map( user => ({ command: "increase", user: user.replace(/\+|\s/g, ''), amount: getKarmaAmount(user)}))
  const usersDecrease = decreasers.map(extractUser)
    .map( user => ({ command: "decrease", user: user.replace(/-|\s/g, ''), amount: getKarmaAmount(user)}))
  return [...usersIncrease, ...usersDecrease]
}

const handleMessage = ({ text, user }) => {
  const usersCommands = getUsersCommands(text)
  console.log(usersCommands)
  return usersCommands
}

module.exports = {
  handleMessage 
}
