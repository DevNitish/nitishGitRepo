var express = require('express');
var router = express.Router();
var myuser={};

router.post('/',function(req,res,next){
	// var display=req.body;
	// console.log(req.body);
	console.log("This is new "+req.body.author);
	myuser["author"]=req.body.author;
	myuser["title"]=req.body.title;

	//myuser={ "author":req.body.author,title:req.body.title};
	/* GET home page. */
  	res.render('user', { title: myuser });
	
});
/* GET users listing. */

router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

  var display=req;
	console.log("I am here : "+myuser.author);
	//res.send("Hello nitish")
	
	res.render('user',{title:myuser});
	

});

module.exports = router;
