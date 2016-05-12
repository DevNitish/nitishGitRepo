var fs=require("fs"), readline=require('readline'),stream=require('stream');
var headers=[];
var columns =[];
var cases=[];
var firstOne = true;
var output = {};
var year_index;
var primary_index;
var description_Type;
var primary;
var outstream=fs.WriteStream('rr.json');
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('crimes.csv')
});

lineReader.on('line', function (line) {
  
  console.log(lines);
  //console.log(lines[6]);
  
      // var arr={};
      // output.push(arr);
      // console.log(lines[17]);
      // console.log(primary);
  
    // console.log(description);
    console.log(obj);
});
lineReader.on('close', function () {
  var output2 = {};
  var keys = Object.keys(output);

  //require('fs').writeFile("rr.json",JSON.stringify(output2));
});
