const path = require('path')
const fastify = require('fastify')

// plugins
const graphqlPlugin = require('./graphql.js')

// handlers
const appShellHandler = require('./handlers/app-shell')

module.exports = () => {
  const app = fastify({
    logger: true
  })

  app.register(require('fastify-static'), {
    root: path.join(process.cwd(), 'build/public')
  })

  app.register(graphqlPlugin)

  app.get('/', appShellHandler)
  app.get('/listUsers', appShellHandler)
  app.get('/paginatin', appShellHandler)

  app.listen(3000)
}
