const router = require('express').Router()
const getCharbyId = require('../controllers/getCharById')

router.get('/:id', (req, res) => {
  const { id } = req.params
  if (!id) {
    res.status(400).json({ error: 'Es necesario enviar un id' })
    return
  }
  getCharbyId(res, id)
})

module.exports = router
