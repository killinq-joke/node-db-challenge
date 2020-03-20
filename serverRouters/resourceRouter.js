const express = require("express")
const helpers = require("../data/helpers")

const resourceRouter = express.Router()

resourceRouter.get("/", (req, res) => {
    helpers.getResources()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

resourceRouter.post("/", (req, res) => {
    
})

module.exports = resourceRouter