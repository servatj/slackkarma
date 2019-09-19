const {
  extractUser,
  getKarmaAmount
} = require('../../../helpers/users')

describe('Users Helper', () => {
  it('extractUserIncreaser should get the client ID', () => {
    const userString = '<@U9SGW3MN3> +++++'
    expect(extractUser(userString)).toEqual('U9SGW3MN3 +++++')
  })

  it('extractUserDecreaser should get the client ID', () => {
    const userString = '<@U9SGW3MN3> -----'
    expect(extractUser(userString)).toEqual('U9SGW3MN3 -----')
  })

  it('should count 4 karma if <@U9SGW3MN3> +++++ passed', () => {
    const user = '<@U9SGW3MN3> +++++';
    expect(getKarmaAmount(user)).toEqual(4);
  })

})
