const http = require('http')
const data = require('../utils/data')

http.createServer(function (req, res) {
  if (req.url.includes('rickandmorty/character')) {
    const header = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    const id = req.url.split('/')[req.url.split('/').length - 1]
    const character = data.find((item) => item.id === parseInt(id))
    res.writeHead(200, header)
    res.end(JSON.stringify(character))
    return
  }
  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('Route not found')
})
  .listen(3001, 'localhost')
