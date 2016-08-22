var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/newdb');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'omg! connection error:'));
db.once('open',function(){
console.log('I am connectd');
});

var nitSchema=mongoose.Schema({
	name:String
});
var Nit=mongoose.model('nit',nitSchema);
var silence= new Nit({name:'Silence'});
console.log(silence.name);