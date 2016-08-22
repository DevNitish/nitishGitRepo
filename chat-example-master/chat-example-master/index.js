var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat', function(msg){
    io.emit('chat', sendmsg);
  });
});

http.listen(, function(){
  console.log('listening on *:8080');
});
