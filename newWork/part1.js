var fs = require("fs");

var data = fs.readFileSync('India2011.json');

var myData=JSON.parse(data);//contains main array

var len=myData.length;//main array length

var k=1;
var count=0;
var maleCount=0;
var femaleCount=0;
var canRead=0;
var cannotRead=0;
for (var i = 0; i <len; i++) {

	for (var j = k; j <=35; j++) {


	if ((myData[i]["State Code"]==(j))&&(myData[i]["Total/ Rural/ Urban"]=="Total")&&(myData[i]["Age-group"]=="All ages")) {
		maleCount+=(parseInt(myData[i]["Total Males"]));
		femaleCount+=(parseInt(myData[i]["Total Females"]));
		count+=(parseInt(myData[i]["Total Persons"]));
		canRead+=(parseInt(myData[i]["Literate - Persons"]));
		cannotRead+=(parseInt(myData[i]["Illiterate - Persons"]));
		++k;
		//console.log("Added "+myData[i]["Total Persons"]+" Time: "+j+" State name"+myData[i]["Area Name"]+" i:"+i+"k:"+k+" count "+count);
		};
	};
};
var jArray=[];
var obj={};
	obj["gender"]="Male";
	obj["count"]=maleCount
 	jArray.push(obj);
	obj={};
	obj["gender"]="Female";
	obj["count"]=femaleCount ;	
	jArray.push(obj);

	console.log(jArray);
//to create a json file use below code
//fs.writeFile( "part1.json", JSON.stringify( jArray ), "utf8");
console.log("Females:"+femaleCount);
console.log("Male:"+maleCount);
console.log(" Total is "+count);
console.log("Male to female ratio is "+maleCount/femaleCount);
console.log("Literate - Persons: "+canRead);
console.log("Illiterate - Persons: "+cannotRead);
console.log(" Total population of India(2011) is: "+count);

 