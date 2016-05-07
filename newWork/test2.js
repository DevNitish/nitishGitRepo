var fs = require("fs");

var data = fs.readFileSync('test.csv');
var stringData=data.toString();

console.log(stringData);
var arrayOne= stringData.split('\r\n');

var header=arrayOne[0].split(',');
var noOfRow=arrayOne.length;
var noOfCol=header.length;

var jArray=[];

var i=0,j=0;
for (i = 1; i < noOfRow-1; i++) {
			
	for (j = 0; j< noOfCol; j++) {
		
		var myNewLine=arrayOne[i].split(',');
		jArray.push( '{'+header[j]+':'+myNewLine[j]+'}');

					
	};



};

console.log( jArray);
