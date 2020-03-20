const db = require("./db-configs")

module.exports = {
    get
}

function get() {
    return db("projects")
}