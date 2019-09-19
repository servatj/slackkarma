const {
  extractUserIncreaser,
  extractUserDecreaser
} = require('../../../helpers/users')

describe('Users Helper', () => {
  it('extractUserIncreaser should get the client ID', () => {
    const userString = '<@U9SGW3MN3> +++++'
    expect(extractUserIncreaser(userString)).toEqual('U9SGW3MN3')

  })

  it('extractUserDecreaser should get the client ID', () => {
    const userString = '<@U9SGW3MN3> -----'
    expect(extractUserDecreaser(userString)).toEqual('U9SGW3MN3')

  })
})
