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
var jArray=[];

for (var i = 0; i <len; i++) {
	 
	for (var j = k; j <=18; j++) {
		var obj={};
	
	if ((myData[i]["State Code"]==(j))&&(myData[i]["Total/ Rural/ Urban"]=="Total")&&(myData[i]["Age-group"]=="All ages")) {
		
		obj["area"]=myData[i]["Area Name"];
		obj["IlliterateMale"]=parseInt(myData[i]["Illiterate - Males"]);
		obj["LiterateMale"]=parseInt(myData[i]["Literate - Males"]);
		obj["IlliterateFemale"]=parseInt(myData[i]["Illiterate - Females"]);
		obj["LiterateFemale"]=parseInt(myData[i]["Literate - Females"]);
		jArray.push(obj);

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


// var obj={};
// 	obj["gender"]="Illiterate Male";
// 	obj["count"]=maleCountI;
//  	jArray.push(obj);
// 	obj={};
// 	obj["gender"]="Literate Males";
// 	obj["count"]=maleCountL ;	
// 	jArray.push(obj);

// 	obj={};
// 	obj["gender"]="Illiterate Female";
// 	obj["count"]=femaleCountI;
//  	jArray.push(obj);
// 	obj={};
// 	obj["gender"]="Literate Females";
// 	obj["count"]=femaleCountL ;	
// 	jArray.push(obj);

// 	obj={};
// 	obj["gender"]="Illiterate Male";
// 	obj["count"]=maleCountI;
//  	jArray.push(obj);
// 	obj={};
// 	obj["gender"]="Illiterate Females";
// 	obj["count"]=femaleCountI ;	
// 	jArray.push(obj);

// 	obj={};
// 	obj["gender"]="Literate Male";
// 	obj["count"]=maleCountL;
//  	jArray.push(obj);
// 	obj={};
// 	obj["gender"]="Literate Females";
// 	obj["count"]=femaleCountL ;	
// 	jArray.push(obj);

	console.log(jArray);
	//to create a json file use below code
	//fs.writeFile( "part2.json", JSON.stringify( jArray ), "utf8");

// console.log("Female to Male ratio for Illiterate for 7 sisters: "+femaleCountI/maleCountI);
// console.log("Male to female ratio for Lliterate  for 7 sisters: "+maleCountL/femaleCountL);

// console.log(" Total Illiterate  in 7 sisters: "+(maleCountI+femaleCountI));
// console.log(" Total Literate  in 7 sisters : "+(maleCountL+femaleCountL));


//console.log(myData[0]["Age-group"]);	