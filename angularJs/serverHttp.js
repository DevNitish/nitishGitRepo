console.log("Hello world");
var http=require('http');

var server=http.createServer(function (req,res,what,up){
	res.writeHead(200,{"Content-type":"text/plain"});
	res.end("Whatt up?");

});

server.listen(8080);
