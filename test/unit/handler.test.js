const handler = require('../../handler')

describe('Handler', () => {
  it('should return an empty array if not karma pattern found', ( ) => {
    const event = {
      client_msg_id: '60f77d6a-061d-4af4-9c0b-c118517e3265',
      type: 'message',
      text: '<@U9SGW3MN3> <@U9SGW3MN3> <@U9SGW3MN3> ',
      user: 'U9SGW3MN3',
      team: 'T9QRJ42P2',
      edited: { user: 'U9SGW3MN3', ts: '1568677923.000000' },
      ts: '1568677913.006900',
      user_team: 'T9QRJ42P2',
      source_team: 'T9QRJ42P2',
    }
    const channel = '100'


    const expected = []
    expect(handler.handleMessage(event, channel)).toEqual(expected)
    expect(handler.handleMessage(event, channel).length).toEqual(0)
  })

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
    const channel = 100;

    const expected = [{
      command: 'increase',
      user: 'U9SGW3MN3',
      amount: 4,
      channel: 100
    },
    {
      command: 'increase',
      user: 'U9SGW3MN3',
      amount: 3,
      channel: 100
    },
    {
      command: 'decrease',
      user: 'U9SGW3MN3',
      amount: 2,
      channel: 100
    }]
    expect(handler.handleMessage(event, channel)).toEqual(expected)
    expect(handler.handleMessage(event, channel).length).toEqual(3)
  })
})
