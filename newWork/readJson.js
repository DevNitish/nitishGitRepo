var fs = require("fs");

var data = fs.readFileSync('India2011.json');

var myData=JSON.parse(data);//contains main array

var len=myData.length;//main array length

var k=1;
var sortData=[];
var count=0;
for (var i = 0; i <len; i++) {
	 
	for (var j = k; j < 35; j++) {
		
	
	if ((myData[i]["State Code"]==(j))&&(myData[i]["Total/ Rural/ Urban"]=="Total")&&(myData[i]["Age-group"]=="All ages")) {
		
		count+=(parseInt(myData[i]["Total Persons"]));
		++k;
		//console.log("Added "+myData[i]["Total Persons"]+" Time: "+j+" State name"+myData[i]["Area Name"]+" i:"+i+"k:"+k+" count "+count);
		};
	};
};
//console.log(myData[33]["Total/ Rural/ Urban"]);
console.log(len);
console.log(" Count is "+count);

//console.log(myData[0]["Age-group"]);	