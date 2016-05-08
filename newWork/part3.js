var fs = require("fs");

var data = fs.readFileSync('India2011.json');

var myData=JSON.parse(data);//contains main array

var len=myData.length;//main array length

var k=1;
var count=0;

var display=[];
var canRead=0;
var cannotRead=0;
for (var i = 0; i <len; i++) {
	 
	for (var j = k; j <=35; j++) {
		var obj={};
	
	if ((myData[i]["State Code"]==(j))&&(myData[i]["Total/ Rural/ Urban"]=="Total")&&(myData[i]["Age-group"]=="All ages")) {

		obj["Literate - Persons"]=parseInt(myData[i]["Literate - Persons"]);
		obj["Illiterate - Persons"]=parseInt(myData[i]["Illiterate - Persons"]);
		obj["Total - Persons"]=parseInt(myData[i]["Total Persons"]);
		//sort.push(obj);
		display[myData[i]["Area Name"]]=(obj);
		count+=(parseInt(myData[i]["Total Persons"]));
		canRead+=(parseInt(myData[i]["Literate - Persons"]));
		cannotRead+=(parseInt(myData[i]["Illiterate - Persons"]));
		++k;
		console.log("Addesd "+myData[i]["Total Persons"]+" Time j: "+k+" State name"+myData[i]["Area Name"]+" i:"+i+"k:"+k+" count "+count);
		};
	};
};
console.log(display);

console.log("Literate - Persons: "+canRead);
console.log("Illiterate - Persons: "+cannotRead);
console.log(" Total is "+count);

//console.log(myData[0]["Age-group"]);	