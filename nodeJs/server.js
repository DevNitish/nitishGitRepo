// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//    res.send('Hello World');
// })

// var server = app.listen(8081, function () {

//   var host = server.address().address
//   var port = server.address().port

//   console.log("Example app listening at http://%s:%s", host, port)

// })


//Json Server
// server.js
var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(8080, function () {
  console.log('JSON Server is running')
})
