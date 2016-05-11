var fs = require("fs");

var data = fs.readFileSync('India2011.json');

var myData=JSON.parse(data);//contains main array

var len=myData.length;//main array length

var k=1;
var count=0;
var maleCount=0;
var femaleCount=0;
var canReadM=0;
var cannotReadM=0;
var canReadF=0;
var cannotReadF=0;

for (var i = 0; i <len; i++) {

	for (var j = k; j <=35; j++) {
		var obj={};

	if ((myData[i]["State Code"]==(j))&&(myData[i]["Total/ Rural/ Urban"]=="Total")&&(myData[i]["Age-group"]=="All ages")) {
		maleCount+=(parseInt(myData[i]["Total Males"]));
		femaleCount+=(parseInt(myData[i]["Total Females"]));
		count+=(parseInt(myData[i]["Total Persons"]));

		canReadM+=(parseInt(myData[i]["Literate - Males"]));
		cannotReadM+=(parseInt(myData[i]["Illiterate - Males"]));
		canReadF+=(parseInt(myData[i]["Literate - Females"]));
		cannotReadF+=(parseInt(myData[i]["Illiterate - Females"]));
		++k;
		//console.log("Added "+myData[i]["Total Persons"]+" Time: "+j+" State name"+myData[i]["Area Name"]+" i:"+i+"k:"+k+" count "+count);
		};
	};
};
var jArray=[];
var obj={};
	obj["gender"]="Literate - Males";
	obj["count"]=canReadM;
 	jArray.push(obj);
	obj={};
	obj["gender"]="Illiterate - Males";
	obj["count"]=cannotReadM ;	
	jArray.push(obj);

	obj={};
	obj["gender"]="Literate Fmales";
	obj["count"]=canReadF;	
	jArray.push(obj);

	obj={};
	obj["gender"]="Illiterate Fmales";
	obj["count"]=cannotReadF;	
	jArray.push(obj);

	console.log(jArray);
//to create a json file use below code
fs.writeFile( "part1.json", JSON.stringify( jArray ), "utf8");
// console.log("Females:"+femaleCount);
// console.log("Male:"+maleCount);
// console.log(" Total is "+count);
// console.log("Male to female ratio is "+maleCount/femaleCount);
// console.log("Literate - Persons: "+canRead);
// console.log("Illiterate - Persons: "+cannotRead);
// console.log(" Total population of India(2011) is: "+count);

 