const geocodeRouter = require('express').Router()

geocodeRouter.post('/:params', async (req, res, next) => {
  console.log('req:', req)
  const body = req.body
})
geocodeRouter.get('/', async (req, res) => {
  console.log('hello my homie')
  res.status(200).end()
})

module.exports = geocodeRouter
