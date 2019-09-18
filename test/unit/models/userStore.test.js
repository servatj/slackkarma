const userStore = require('../../../models/user')


describe('user model store', () => {

  beforeEach(() => {
    userStore.nukeStore()
  })

  it('Should print an empty store if no user was added', () => {
     expect(userStore.getStore()).toEqual({})
  })

  it('Should contain one key { josep : 0 } when new user is added ', () => {
     const user = "josep";
     userStore.addNewUser(user)
     const currentStore = userStore.getStore()
     expect(currentStore).toEqual({ josep: 0 })
     expect(Object.keys(currentStore).length).toBe(1)
  })

  it('Should contain one key { josep : 0 } when new user is added ', () => {
    const user = "josep";
    userStore.addNewUser(user)
    const currentStore = userStore.getStore()
    expect(currentStore).toEqual({ josep: 0 })
    expect(Object.keys(currentStore).length).toBe(1)
  })

  it('should nuke the store before each test', () => {
    const user = "josep2";
    userStore.addNewUser(user)
    const currentStore = userStore.getStore()
    expect(currentStore).toEqual({ josep2: 0 })
    expect(Object.keys(currentStore).length).toBe(1)
  })

  it('should delete a user from store', () => {
    ["josep", "josep2"].map(userStore.addNewUser)
    userStore.deleteUser("josep")
    expect(userStore.getStore()).toEqual({josep2: 0})
  })

  it('should delete a user from store', () => {
    ["josep", "josep2"].map(userStore.addNewUser)
    userStore.updateUser({josep: 10})
    expect(userStore.getStore()).toEqual({josep: 10, josep2: 0})
  })

})
