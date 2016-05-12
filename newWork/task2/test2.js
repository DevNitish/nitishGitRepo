const readline = require('readline');
const fs = require('fs');

const data = readline.createInterface({
  input: fs.createReadStream('../../../crimes.csv')
});


// var headLine = [];
// var JSON_One = [];

// var JSON_Two = [];
// var JSON_Three = [];
// var arr = [];
var firstLine=1;
var header=[];
var yi, //year index
    pi,  //primary index
    di; //description type
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
var len=jArray.length;
data.on('line', (line) => {
  var newLine=line.split(/,(?=(?:(?:[^"]*"){2})*[^*]*$)/);
  // console.log(lines.toString());
 // var newLine = CSVtoArray(line);
      if(firstLine==1){
        headers=newLine;
   // header=newLine.split(',');
    
    //yi=header.indexOf('Year');

    yi=17;
    pi = 5;
    di = 6;
    console.log(" loop 0 pi"+newLine[5]+" des"+ newLine[17]);
     firstLine=0;
  }else {

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

  }//main else ends
    

      // if(lines[17]==2010){
      //       console.log(lines+" OOOYear :"+lines[17]+" primary: "+lines[5]+" Dec: "+lines[6]);
  
      // }//console.log(jArray);

}).on('close',function(){                           //******start here
    fs.writeFile( "getJson.json", JSON.stringify( jArray ), "utf8");

    console.log(jArray);
});
