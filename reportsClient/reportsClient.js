const port = 3000
const express = require('express')
const path = require('path')
const EventEmitter = require('events')
const axios = require('axios')
var uuid = require('uuid');

const knownUsers = [
    uuid.v4(),uuid.v4(),uuid.v4()
]

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

  console.log('server listetning on port', port)

  const sendPostRequest = (user_key) => {
      let r = Math.random().toString(36).substring(7);
      let min = 0.02,
              max = 4.52,
              duration = Math.random() * (max - min) + min;

      const data = {
        data: {
            user_key: user_key || uuid.v4(),
            media_name: r + ".png",
            duration: duration.toFixed(2),
            displayed_at: new Date().getTime()
        }
      }
     axios.post('http://localhost:4000/collector/report', data)
          .then(function (response) {
            console.log('api successfully: ',response.data)
          })
          .catch(function (error) {
            console.log("api error: ", error && error.response && error.response.status);
          });
  }
  sendPostRequest()
  setInterval( () => {
    for (var i=0 ; i < 20 ; i++) {
        sendPostRequest(knownUsers[i])
    }
  }, 1000)

})