const express = require('express');

const app = express();

app.use(express.static(__dirname + '/../client'));

app.listen(8080, function() {
  console.log('Express server listening on port: 8080');
});
