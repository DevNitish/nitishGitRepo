var fs = require("fs");

var data = fs.readFileSync('India2011.json');

var myData=JSON.parse(data);//contains main array

var len=myData.length;//main array length

var k=12;
var count=0;
var maleCountI=0;
var femaleCountI=0;
var maleCountL=0;
var femaleCountL=0;

for (var i = 0; i <len; i++) {
	 
	for (var j = k; j <=18; j++) {
		
	
	if ((myData[i]["State Code"]==(j))&&(myData[i]["Total/ Rural/ Urban"]=="Total")&&(myData[i]["Age-group"]=="All ages")) {
		maleCountI+=(parseInt(myData[i]["Illiterate - Males"]));
		femaleCountI+=(parseInt(myData[i]["Illiterate - Females"]));
		maleCountL+=(parseInt(myData[i]["Literate - Males"]));
		femaleCountL+=(parseInt(myData[i]["Literate - Females"]));
		count+=(parseInt(myData[i]["Total Persons"]));
		++k;
		//console.log("Added "+myData[i]["Total Persons"]+" Time: "+j+" State name"+myData[i]["Area Name"]+" i:"+i+"k:"+k+" count "+count);
		};
	};
};

console.log("Female to Male ratio for Illiterate for 7 sisters: "+femaleCountI/maleCountI);
console.log("Male to female ratio for Lliterate  for 7 sisters: "+maleCountL/femaleCountL);

console.log(" Total Illiterate  in 7 sisters: "+(maleCountI+femaleCountI));
console.log(" Total Literate  in 7 sisters : "+(maleCountL+femaleCountL));


//console.log(myData[0]["Age-group"]);	