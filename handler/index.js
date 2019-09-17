const { extractUserIncreaser, extractUserDecreaser } = require('../helpers/users')

const getUsersCommands = (message) => {
  const increasers = message.match(/(<@\w+>)\s*\+(\+)+/g)
  const decreasers = message.match(/(<@\w+>)\s*\-(\-)+/g)
  const usersIncrease = increasers.map(extractUserIncreaser)
    .map( user => ({ command: "increase", user }))
  const usersDecrease = decreasers.map(extractUserDecreaser)
    .map( user => ({ command: "decrease", user }))
  return [...usersIncrease, ...usersDecrease]
}

const handleMessage = ({ text, user }) => {
  const usersCommands = getUsersCommands(text)
  return usersCommands
}

module.exports = {
    handleMessage 
}
