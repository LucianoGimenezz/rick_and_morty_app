const router = require('express').Router()
const getCharDetails = require('../controllers/getCharDetail')

router.get('/:detailId', (req, res) => {
  const { detailId } = req.params
  if (!detailId) {
    res.status(400).json({ error: 'Es necesario enviar un id' })
    return
  }
  getCharDetails(res, detailId)
})

module.exports = router
