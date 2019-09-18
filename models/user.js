let store = {};

const addNewUser = (user) => {
  store = Object.assign({}, store, { [user]: 0 })
}

const deleteUser = (user) => {
  delete store[user]
}

const updateUser = (userRow) => {
  store = Object.assign({}, store, userRow)
}

const getStore = () => {
  const storeCopy = Object.assign({}, store)
  return storeCopy
}

const nukeStore = () => {
  store = {}
}

module.exports = {
  addNewUser,
  deleteUser,
  getStore,
  updateUser,
  nukeStore
}
