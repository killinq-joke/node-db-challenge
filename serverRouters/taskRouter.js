const express = require("express")
const helpers = require("../data/helpers")

const taskRouter = express.Router()

taskRouter.get("/", (req, res) => {
    helpers.getTasks()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

taskRouter.post("/", (req, res) => {
    const task = req.body
    helpers.postTask(task)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = taskRouter