const readline = require('readline');
const fs = require('fs');

const data = readline.createInterface({
  input: fs.createReadStream('../../../crimes.csv')
});


var firstLine=1;
var header=[];
var yi, //year index
    pi,  //primary index
    di,
    ai,
    fi; //description type
var count = 0;
var countO=0;
var countU=0;
var jArray=[];
for (var i = 2001; i <=2016; i++) {
  var obj={};
  obj["Year"]=i;
  obj["Under500"]=0;
   obj["Over500"]=0;
  jArray.push(obj);
};
var jArray2=[];
for (var i = 2001; i <=2016; i++) {
  var obj={};
  obj["Year"]=i;
  obj["Arrested"]=0;
   obj["NotArrested"]=0;
  jArray2.push(obj);
};
var jArray3=[];
var len=jArray.length;
var obj2={};
obj2["CrimeType"]="NonIndexCrimes";
obj2["count"]=0;
jArray3.push(obj2);
var obj3={};
obj3["CrimeType"]="IndexCrimes";
obj3["count"]=0;
jArray3.push(obj3);




data.on('line', (line) => {
  var newLine=line.split(/,(?=(?:(?:[^"]*"){2})*[^*]*$)/);
 if(firstLine==1){
    headers=newLine;
    yi=headers.indexOf("Year");
    console.log(yi);
    pi = headers.indexOf("Primary Type");
    di =headers.indexOf("Description");
    ai =headers.indexOf("Arrest");
    fi =headers.indexOf("FBI Code");
    console.log(jArray3);
    //console.log(" loop 0 pi"+newLine[5]+" des"+ newLine[17]);
     firstLine=0;
  }else {
     // firstJson(newLine);
     // secondJson(newLine)
     thridJson(newLine);

  }//main else ends

}).on('close',function(){    
    //******to write json file
    //fs.writeFile( "getJson.json", JSON.stringify( jArray ), "utf8");
    //fs.writeFile( "getJson2.json", JSON.stringify( jArray2 ), "utf8");
    fs.writeFile( "getJson3.json", JSON.stringify( jArray3 ), "utf8");


    //to display in log
    console.log(jArray3);
});

//Function to make json one
function firstJson(newLine){

     if((newLine[pi] =="THEFT") && (newLine[di] == "OVER $500")){
      
      for (var i = 0; i < len; i++) {
       if(jArray[i].Year==newLine[yi]){
        jArray[i].Over500+=1;
          break;            
          }
      }
     }else{

      if((newLine[pi] == "THEFT") && (newLine[di] == "$500 AND UNDER")){
      for (var i = 0; i < len; i++) {
       if(jArray[i].Year==newLine[yi]){
        jArray[i].Under500+=1;
          break;
          }
      }
     }
   }//sub else
}//end fist json



//Function to make json two
function secondJson(newLine){
    
     if((newLine[pi] =="ASSAULT") && (newLine[ai] == "true")){
      
      for (var i = 0; i < len; i++) {
       if(jArray2[i].Year==newLine[yi]){
        jArray2[i].Arrested+=1;
          break;            
          }
      }
     }else{

      if((newLine[pi] == "ASSAULT") && (newLine[ai] =="false")){
      for (var i = 0; i < len; i++) {
       if(jArray2[i].Year==newLine[yi]){
        jArray2[i].NotArrested+=1;
          break;
          }
      }
     }
   }//sub else
}//end second json

//Function to make json three

function thridJson(newLine){
    
    if (newLine[yi]=="2015") { 
      if(newLine[fi] ==("01B"||"08A"||"08B"||"10"||"11"||"12"||"13"||"14"||"15"||"16"||"17"||"18"||"19"||"20"||"22"||"24"||"26") ){
                  jArray3[0].count+=1;
     }else {
      if(newLine[fi] ==("01A"||"02"||"03"||"04A"||"04B"||"05"||"06"||"07"||"09")) {
     
        jArray3[1].count+=1;
     

          }
     }//else end
   }
     // if(newLine[yi]=="2015"){
     //  jArray4.push(newLine);
     
     // }
}//end thrid json