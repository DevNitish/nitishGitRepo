var should=require('should');
var seneca=require('seneca');
describe('My very first test ppage ',function (){
	it('Test case 1',function(done){
		var microservice=seneca();
		microservice.add({role:'math',cmd:'sum'},function(msg,response){
				return response(null,{answer:msg.left+msg.right});	
			
		});
		microservice.add({role:"math",cmd:'sum',left:2,right:3}, function(err,response	){
			if(err){return done(err);}

			response.should.have.property('answer');
			response.answer.should.be.exactly(5);
			done();
		});

	});
})




// var should=require('should');
// describe('My very first test ppage ',function (){
// 	it('Test case 1',function(done){
// 		setImmediate(function(){
// 				var truthy=true;
// 			truthy.should.be.exactly(false);
// 			//done();
// 		});
// 	});
// })