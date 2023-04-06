process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

const config = environment.toWebpackConfig()
// config.devtool = 'none'
config.devtool = 'nosources-source-map'
module.exports = config
// module.exports = environment.toWebpackConfig()
