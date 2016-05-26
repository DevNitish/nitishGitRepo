console.log("Hello world");
var http=require('http');

var server=http.createServer(function (req,res,what,up){
	res.writeHead(200,{"Content-type":"text/plain"});
	res.end("Whatt up?");

});

server.listen(8080);

// var movies=require('./movies');
// movies.printA();
	

// // setInterval(function(){
	
// // 	console.log("What up");

// // },2000);

// console.log("Dir is"+__dirname);
// console.log("File name"+__filename);