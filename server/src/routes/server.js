const http = require('http')
const data = require('../utils/data')
const getCharbyId = require('../controllers/getCharById')
const getCharDetails = require('../controllers/getCharDetail')

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.url.includes('onsearch')) {
    getCharbyId(res, parseInt(req.url.split('/')[req.url.split('/').length - 1]))
    return
  }

  if (req.url.includes('detail')) {
    const id = req.url.split('/')[req.url.split('/').length - 1]
    getCharDetails(res, parseInt(id))
    return
  }

  if (req.url.includes('rickandmorty/character')) {
    const header = {
      'Content-Type': 'application/json'
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
