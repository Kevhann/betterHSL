const geocodeRouter = require("express").Router()
const baseUrl = "http://api.digitransit.fi/geocoding/v1/search"

geocodeRouter.post("/:params", async (req, res, next) => {
  console.log("req:", req)
  const body = req.body
})
geocodeRouter.get("/", async (req, res) => {
  console.log("hello my homie")
  res.status(200).end()
})

module.exports = geocodeRouter
