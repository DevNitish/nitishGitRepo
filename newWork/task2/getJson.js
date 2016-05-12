const readline = require('readline');
const fs = require('fs');

const data = readline.createInterface({
  input: fs.createReadStream('../../../crimes.csv')
});


var headLine = [];
var JSON_One = [];

var JSON_Two = [];
var JSON_Three = [];
var arr = [];
var count = 0;
data.on('line', (line) => {

//printing content of line
 console.log('Line from file:', line);

// // header line
// if(headLine.length===0)
// {
//   headLine = line.toString().split(",");
  
// }

//reading currentLine
//var currentLine = [];
//currentLine = line.toString().split(",");
// console.log(currentLine);

//create JSON_One
//createJsonOne(currentLine);

//create JSON_Two
//createJsonTwo(currentLine);

//create JSON_Three
//createJsonThree(currentLine);

}).on('close',function(){                           //******start here

  // JSON_One = JSON.stringify(JSON_One);
  //fs.writeFile('indiaV1.json',JSON.stringify(JSON_One));
  // fs.writeFile('india-urban-rural-population.json',JSON.stringify(JSON_One));
  // console.log(JSON_One);

  // JSON_Two = JSON.stringify(JSON_Two);
  //fs.writeFile('india2.json',JSON.stringify(JSON_Two));
  // console.log(JSON_Two);

  // JSON_Three

});

//Create JSON_One with required filters and then calling createObjOne to create Object and
// the return item is pushed into the JSON_One array in desired format
// function createJsonOne(currentLine)
// {
//   if(currentLine[0]=="India")
//   { var obj={};
//       obj["Year"]=currentLine[4];
//     if(currentLine[2]=="Rural population (% of total population)")
//     {
//       // console.log(currentLine);
//        obj = {
//         "Area":"Rural population (% of total population)",

//         "Value": currentLine[5]
//       };

//         // console.log(typeof(createObjOne(currentLine)));
//           }
//     else if(currentLine[2]=="Urban population (% of total)")
//     {
//       obj = {
//         "Area":"Urban population (% of total)",

//         "Value": currentLine[5]
//       };

//     //  JSON_One[1]["value"].push(createObjOne(currentLine));
//     }
//       JSON_One.push(obj);
//   }
// }

//create object as per JSON_One requirements

// //create JSON_Two
// function createJsonTwo(currentLine)
// {
//   if(currentLine[0]==="India")
//   {
//     if(currentLine[2]==="Urban population growth (annual %)")
//     {
//       JSON_Two.push(createObjOne(currentLine)); //called createObjOne because the object here also requires same attributes
//     }
//   }
// }
//
// function createJsonThree(currentLine)
// {
//
// }
