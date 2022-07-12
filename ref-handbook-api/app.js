//import required modules
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))


// health check 
app.get("/", function(req, res) {
    return res.status(200).json({ping: "pong"})
})

module.exports = app