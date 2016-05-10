var fs = require("fs");

var data = fs.readFileSync('India2011.json');

var myData=JSON.parse(data);//contains main array

var len=myData.length;//main array length

var k=1;
var count=0;

var displayMe=[];
var canRead=0;
var cannotRead=0;
var jArray=[];
for (var i = 0; i <len; i++) {
	 var obj2={};
	for (var j = k; j <=35; j++) {
		var obj={};
		var header;
		var myobj={};//this obj for jArray used for .json file creation
	
	if ((myData[i]["State Code"]==(j))&&(myData[i]["Total/ Rural/ Urban"]=="Total")&&(myData[i]["Age-group"]=="All ages")) {
		myobj["area"]=myData[i]["Area Name"];
		myobj["Illiterate"]=parseInt(myData[i]["Illiterate - Persons"]);
		myobj["Literate"]=parseInt(myData[i]["Literate - Persons"]);
		jArray.push(myobj);//for json file
		

		obj["Literate - Persons"]=parseInt(myData[i]["Literate - Persons"]);
		obj["Illiterate - Persons"]=parseInt(myData[i]["Illiterate - Persons"]);
		obj["Total - Persons"]=parseInt(myData[i]["Total Persons"]);
		
		header= myData[i]["Area Name"];
		obj2[header]=obj;
		
		displayMe.push(obj2);
		count+=(parseInt(myData[i]["Total Persons"]));
		canRead+=(parseInt(myData[i]["Literate - Persons"]));
		cannotRead+=(parseInt(myData[i]["Illiterate - Persons"]));
		++k;
		//console.log("Addesd "+myData[i]["Total Persons"]+" Time j: "+k+" State name"+myData[i]["Area Name"]+" i:"+i+"k:"+k+" count "+count);
		};
	};
};

console.log(jArray);
//to create a json file use below code
fs.writeFile( "part3.json", JSON.stringify( jArray ), "utf8");

// console.log(displayMe);

// console.log("Literate - Persons: "+canRead);
// console.log("Illiterate - Persons: "+cannotRead);
// console.log(" Total is "+count);

	