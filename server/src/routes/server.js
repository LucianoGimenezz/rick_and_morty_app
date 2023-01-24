const http = require('http')
const data = require('../utils/data')

http.createServer(function (req, res) {
  if (req.url.includes('rickandmorty/character')) {
    const id = req.url.split('/')[2]
    const character = data.filter((item) => item.id === id).pop()
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(character))
  }
  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('Route not found')
})
  .listen(3001, 'localhost')
