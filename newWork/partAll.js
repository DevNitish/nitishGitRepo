var fs = require("fs");

var data = fs.readFileSync('India2011.json');

var myData=JSON.parse(data);//contains main array

var len=myData.length;//main array length

//Fuction calls
stateWise();//part 3
overAll(1);//part 1
sevenSisters(12);//part 2

function stateWise(){
	var k=1;
	var count=0;

	var displayMe=[];
	var canRead=0;
	var cannotRead=0;
	for (var i = 0; i <len; i++) {
		 var obj2={};
		for (var j = k; j <=35; j++) {
			var obj={};
			var header;
				
			if ((myData[i]["State Code"]==(j))&&(myData[i]["Total/ Rural/ Urban"]=="Total")&&(myData[i]["Age-group"]=="All ages")) {

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
	//to create a json file use below code
	//fs.writeFile( "displayMe.json", JSON.stringify( displayMe ), "utf8");

	console.log(displayMe);

	console.log("Literate - Persons: "+canRead);
	console.log("Illiterate - Persons: "+cannotRead);
	console.log(" Total is "+count);

}//end of stateWise function

//sevenSisters function starts here for oart2
function sevenSisters(k){
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

	//for json 
	var jArray=[];
	var obj={};
	obj["gender"]="Illiterate Male";
	obj["count"]=maleCountI;
 	jArray.push(obj);
	obj={};
	obj["gender"]="Literate Males";
	obj["count"]=maleCountL ;	
	jArray.push(obj);

	obj={};
	obj["gender"]="Illiterate Female";
	obj["count"]=femaleCountI;
 	jArray.push(obj);
	obj={};
	obj["gender"]="Literate Females";
	obj["count"]=femaleCountL ;	
	jArray.push(obj);

	obj={};
	obj["gender"]="Illiterate Male";
	obj["count"]=maleCountI;
 	jArray.push(obj);
	obj={};
	obj["gender"]="Illiterate Females";
	obj["count"]=femaleCountI ;	
	jArray.push(obj);

	obj={};
	obj["gender"]="Literate Male";
	obj["count"]=maleCountL;
 	jArray.push(obj);
	obj={};
	obj["gender"]="Literate Females";
	obj["count"]=femaleCountL ;	
	jArray.push(obj);

	console.log(jArray);
	//to create a json file use below code
	//fs.writeFile( "part2.json", JSON.stringify( jArray ), "utf8");
	console.log("*************part 2 ****************")

	console.log("Female to Male ratio for Illiterate for 7 sisters: "+femaleCountI/maleCountI);
	console.log("Male to female ratio for Lliterate  for 7 sisters: "+maleCountL/femaleCountL);

	console.log(" Total Illiterate  in 7 sisters: "+(maleCountI+femaleCountI));
	console.log(" Total Literate  in 7 sisters : "+(maleCountL+femaleCountL));

}//end sevenSisters


//Over all data for part 1 here

function overAll(k){

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

	console.log("*************part 1 ****************")
	console.log("Females:"+femaleCount);
	console.log("Male:"+maleCount);
	console.log(" Total is "+count);
	console.log("Male to female ratio is "+maleCount/femaleCount);
	console.log("Literate - Persons: "+canRead);
	console.log("Illiterate - Persons: "+cannotRead);
	console.log(" Total population of India(2011) is: "+count);


}
//Over all data for part 1 here ends



