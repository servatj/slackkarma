const handler = require('../../handler')

describe('Handler', () => {
  it('should count the number of the users in a message', ( ) => {
    const event = {
      client_msg_id: '60f77d6a-061d-4af4-9c0b-c118517e3265',
      type: 'message',
      text: '<@U9SGW3MN3> +++++ <@U9SGW3MN3> ++++ <@U9SGW3MN3>',
      user: 'U9SGW3MN3',
      team: 'T9QRJ42P2',
      edited: { user: 'U9SGW3MN3', ts: '1568677923.000000' },
      ts: '1568677913.006900',
      user_team: 'T9QRJ42P2',
      source_team: 'T9QRJ42P2'
    }
    expect(handler.getCommand(event).numberOfUsers()).toBe(3)
  })

})
