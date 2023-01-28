const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000
let fav = []

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))

app.get('/rickandmorty/character/:id', (req, res) => {
  const { id } = req.params

  if (!id) {
    res.status(400).json({ error: 'Es necesario enviar un id' })
    return
  }
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(data => {
      const { error } = data
      if (error) {
        res.status(400).json(error)
        return
      }
      const response = {
        id: data.id,
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species
      }
      res.status(200).json(response)
    })
    .catch(err => res.status(404).json(err))
})

app.get('/rickandmorty/detail/:detailId', (req, res) => {
  const { detailId } = req.params
  if (!detailId) {
    res.status(400).json({ error: 'Es necesario enviar un id' })
    return
  }
  fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
    .then(res => res.json())
    .then(data => {
      const { error } = data
      if (error) {
        res.status(400).json(error)
        return
      }
      const response = {
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species,
        status: data.status,
        origin: data.origin
      }
      res.status(200).json(response)
    })
    .catch(err => res.status(404).json(err))
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
  res.status(201).send()
})

app.delete('/rickandmorty/fav/:id', (req, res) => {
  const { id } = req.params

  if (!id) {
    res.status(400).json({ error: 'Es necesario un id' })
    return
  }
  const checkIfCharacterExist = fav.find((character) => character.id === parseInt(id))
  if (checkIfCharacterExist) {
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
