const express = require("express")
const helpers = require("../data/helpers")

const projectRouter = express.Router()

projectRouter.get("/", (req, res) => {
    helpers.getProjects()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json("error")
    })
})

projectRouter.post("/", (req, res) => {
    const project = req.body
    helpers.postProject(project)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = projectRouter