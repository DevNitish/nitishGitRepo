function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
  console.log(' elements is 2'+arrayOfStrings[1]);
}

var tempestString = 'Oh brave new.';
var monthString = 'Jan,Feb,Mar';

var space = ' ';
var comma = ',';

// splitString(tempestString, space);
// splitString(tempestString);
splitString(monthString, comma);