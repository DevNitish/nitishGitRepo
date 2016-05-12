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
  if(firstOne == true){
    headers=line.split(',');
    year_index = headers.length +1 -  headers.indexOf('Year');
    primary_index = headers.indexOf('Primary Type');
    description_Type = headers.indexOf('Description');
    firstOne = false;

  }
  var lines = line.match(/("[^']+"|[^,]+)/g);
  // console.log(lines.toString());
  year = lines[17] ;//
  primary = lines[primary_index];
  description = lines[description_Type];
  var obj=[];
  var count=0;
  var lineCounter= true;
  console.log(lines);
  console.log(lines[6]);
  if(parseInt(lines[17])>=2001 && parseInt(lines[17])<=2016)
  {
    // for(var i=)// console.log(description);

    if(lines[5] == 'THEFT' && lines[6] == 'OVER $500')
    {
      for (var i = 0; i < year_index.length; i++) {
        if(year_index[i] == obj[year_index[i]])
        obj[year_index[i]] = count++;


      }
      console.log("hellooo");

      // console.log(primary);
      // console.log(lines[17]);

    }
      // var arr={};
      // output.push(arr);
      // console.log(lines[17]);
      // console.log(primary);
  }
    // console.log(description);
    console.log(obj);
});
lineReader.on('close', function () {
  var output2 = {};
  var keys = Object.keys(output);
  for( var i = 0; i < keys.length; i++ ) {
      var arr = [];
      var key = keys[ i ];
      var innerdata = output[key];
      var innerkeys = Object.keys(innerdata);
      for( var j = 0 ; j < innerkeys.length; j++ ) {
            var data = {};
            var innerkey = innerkeys[ j ];
            if(innerkey != ""){
              data["year"] = innerkey;
              data["cases"] = innerdata[innerkey];
              arr.push(data);
            }
        }
        output2[key] = arr;
  }
  require('fs').writeFile("rr.json",JSON.stringify(output2));
});
