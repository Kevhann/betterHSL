const express = require("express")
const bodyParser = require("body-parser")
const geocode = express()
const geocodeRouter = require("./controllers/geocodeRouter")

const baseUrl = "http://api.digitransit.fi/geocoding/v1/search"
const shitUrl = "http://localhost:3003/"

geocode.use(express.static("build"))
geocode.use(bodyParser.json())
geocode.use("/api", geocodeRouter)

module.exports = geocode
