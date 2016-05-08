// var http = require("http");

// http.createServer(function (request, response) {

//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body as "Hello World"
//    response.end('Hello World\n');
// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');


// var fs = require('fs');

// fs.readFile()
// fs.writeFile()

//done
// var fs = require('fs');
// fs.writeFile("test.txt", "Hey there!", function(err) {
//     if(err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
// }); 

var fss = require("fs");
var data = '';

// Create a readable stream
//var readerStream = fss.createReadStream('myJson.json');
var readerStream = fss.createReadStream('test.csv');


// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
	var 
   console.log(data);
   console.log("Program ends");
});

readerStream.on('error', function(err){
   console.log(err.stack);
      console.log("Program has error");

});

