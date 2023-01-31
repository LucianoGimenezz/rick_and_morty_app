const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = 3000
const getCharbyId = require('./controllers/getCharById.js')
const getCharDetails = require('./controllers/getCharDetail')
let fav = []

const corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))

app.get('/rickandmorty/character/:id', (req, res) => {
  const { id } = req.params
  if (!id) {
    res.status(400).json({ error: 'Es necesario enviar un id' })
    return
  }
  getCharbyId(res, id)
})

app.get('/rickandmorty/detail/:detailId', (req, res) => {
  const { detailId } = req.params
  if (!detailId) {
    res.status(400).json({ error: 'Es necesario enviar un id' })
    return
  }
  getCharDetails(res, detailId)
})

app.get('/rickandmorty/fav', (req, res) => {
  res.json(fav)
})

app.post('/rickandmorty/fav', (req, res) => {
  const { character } = req.body
  if (!character) {
    res.status(400).json({ error: 'Es necesario enviar un personaje' })
    return
  }

  fav.push(character)
  res.status(201).send('Created')
})

app.delete('/rickandmorty/fav/:id', (req, res) => {
  const { id } = req.params

  if (!id) {
    res.status(400).json({ error: 'Es necesario un id' })
    return
  }
  if (fav.some(fav => fav.id === parseInt(id))) {
    const updatedFavs = fav.filter(fav => fav.id !== parseInt(id))
    fav = updatedFavs
    res.status(200).send()
  } else {
    res.status(404).json({ error: 'Character not found' })
  }
})

module.exports = {
  app,
  PORT
}
