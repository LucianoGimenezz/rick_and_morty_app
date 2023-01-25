const getCharbyId = (res, id) => {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(data => {
      const character = {
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species,
        id: data.id
      }
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify((character)))
    }
    )
    .catch(err => {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end(err.message)
    })
}

module.exports = getCharbyId
