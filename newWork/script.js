var fs = require("fs");

var data = fs.readFileSync('test.csv');

var stringData=data.toString();
var arrayOne= stringDatanj.split('/r/n');

var header=arrayOne[0].split(',');
var noOfLines=arrayOne.length;
var noOfCol=header.length+1;
var i=0,j=0;
for (i = 1; i < noOfLines; i++) {
	for (j = 0; j< noOfCol; j++) {
		
		var myNewLine=arrayOne[i].split(',');
		console.log(header[j]+':'+myNewLine[j]);

					
	};

};
