const port = 4000
const express = require('express')
const path = require('path')
const EventEmitter = require('events')
const randomNumberEmitter = new EventEmitter()
var app = express()
app.use(express.static(path.join(__dirname, 'static')))

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var config = {
  defaultEventRate: 100
}

const server = require('http').createServer(app)

server.listen(port, function () {
  app.post("/collector/report", function(req,res,next){
    console.log("data received: ", req.body.data)
    res.send("ok")
  })
  console.log('server listening on port', port)
})