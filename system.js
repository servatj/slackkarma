const Systemic = require('../..')
const Config = require('./components/config')
const Logger = require('./components/logger')
const bot = require('./src/bot')

module.exports = () => Systemic()
    .add('config', Config(), { scoped: true })
    .add('logger', Logger()).dependsOn('config')
