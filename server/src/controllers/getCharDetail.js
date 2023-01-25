module.exports = function (res, id) {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      const characterDetails = {
        name: data.name,
        image: data.image,
        gender: data.gender,
        status: data.status,
        origin: data.origin,
        species: data.species
      }
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(characterDetails))
    })
    .catch(err => {
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(err.message)
    })
}
