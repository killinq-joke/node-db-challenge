const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const projectRouter = require("./serverRouters/projectRouter")
const resourceRouter = require("./serverRouters/resourceRouter")
const taskRouter = require("./serverRouters/taskRouter")

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())
server.use("/api/projects", projectRouter)
server.use("/api/resources", resourceRouter)
server.use("/api/tasks", taskRouter)

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})