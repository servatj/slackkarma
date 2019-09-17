const handler = require('../../handler')

describe('Handler', () => {
  it('should return an array of commands', ( ) => {
    const event = {
      client_msg_id: '60f77d6a-061d-4af4-9c0b-c118517e3265',
      type: 'message',
      text: '<@U9SGW3MN3> +++++ <@U9SGW3MN3> ++++ <@U9SGW3MN3> ---',
      user: 'U9SGW3MN3',
      team: 'T9QRJ42P2',
      edited: { user: 'U9SGW3MN3', ts: '1568677923.000000' },
      ts: '1568677913.006900',
      user_team: 'T9QRJ42P2',
      source_team: 'T9QRJ42P2'
    }

    const expected = [{
      command: 'increase',
      user: 'U9SGW3MN3'
    },
    {
      command: 'increase',
      user: 'U9SGW3MN3'
    },
    {
      command: 'decrease',
      user: 'U9SGW3MN3'
    }]
    expect(handler.handleMessage(event)).toEqual(expected)
  })
})
