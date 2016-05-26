var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nitish' });
});

// router.post('/nitish', function(req, res, next) {
//   res.render('index', { title: 'Nitish Kumar' });
// });


module.exports = router;
