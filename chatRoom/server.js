var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

	

	io.on('connection', function(socket){

	  	socket.on('username',function(uname){
	  		socket.uname=uname;
	  		console.log("Name of user is "+socket.uname);
	  	});

	  	socket.on('updateChat',function(msg,roomid){

		socket.join(roomid);//

		io.to(roomid).emit('updater',msg,socket.uname);

	  	//socket.emit('updater',"You have join room: "+roomid);

	  		//console.log("msg on server is: "+msg+" room id "+roomid);

	  	});
	
	});//main

	
http.listen(8080, function(){
  console.log('listening on *:8080');
});
