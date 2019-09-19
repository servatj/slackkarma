const userStore = require('../models/user')

const run = (commands) => {
  commands.forEach(({user, amount, command }) => {
    const currentAmount = userStore.getStore()[user] ? userStore.getStore()[user] : 0
    const newAmount = command === 'increase' ? currentAmount + amount : currentAmount - amount
    userStore.updateUser({[user]: newAmount });
  })
}

module.exports = {
  run
}
