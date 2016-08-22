//to read the above and other services from different servers use
var seneca =  require('seneca');

var clientMicroservice = seneca();

clientMicroservice.client({type:'tcp',pin: 'role:math,cmd:sum',host:'172.23.238.177',port:8080}); //if vagrant is not istalled in system
clientMicroservice.client({type:'tcp',pin: 'role:math,cmd:product',host:'172.23.238.183'});
clientMicroservice.client({type:'tcp',pin: 'role:math,cmd:difference',host:'172.23.238.163'});

clientMicroservice.act('role:math,cmd:sum,left:2,right:3',console.log);
clientMicroservice.act('role:math,cmd:product,left:2,right:3',console.log);
clientMicroservice.act('role:math,cmd:difference,left:2,right:3',console.log);




//var should=require('should');
// describe('My very first test ppage ',function (){
// 	it('Test case 1',function(done){
// 		setImmediate(function(){
// 				var truthy=true;
// 			truthy.should.be.exactly(false);
// 			//done();
// 		});
// 	});
// })