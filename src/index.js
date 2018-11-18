const System = require('../system')
const setup = require('./lib/setup')


const events = { SIGTERM: 0, SIGINT: 0, unhandledRejection: 1, error: 1 }

async function start() {

  const exitMessage = () => {
    console.log("BOT_TOKEN var set please specify one BOT_TOKEN = '' node src")
    process.exit(1)
  }

  (process.env.BOT_TOKEN)
    ? console.log('Bot Token - ok ')
    : exitMessage()

  const system = System()
  const { config, logger, mysqlSys, karmabot } = await system.start()

  setup.start(mysqlSys)

  console.log('System has started. Press CTRL+C to stop')

  Object.keys(events).forEach(name => {
    process.on(name, async () => {
      await system.stop()
      logger.log('System has stopped')
      process.exit(events[name])
    })
  })
}

start()

setInterval(() => Number.MAX_INT_VALUE)
