var arr=[{ 'name':'navjot',
			'age':21,
			'occupation':'programmer'
			},
			
			
			{
			'name':'Prasanna',
			'age':21,
			'occupation':'programmer'
				
			},
			
			{
			'name':'Sachin',
			'age':34,
			'occupation':'tester'
				
			},
			{
			'name':'Nitish',
			'age':18,
			'occupation':'tester'
				
			},
		];


//var out=[];
//1st
/*
for(var i=0;i<len;i++){
	if(arr[i].occupation=="tester"){
	
		out.push(arr[i]);
	}
}
*/
//Question 2
// var len=arr.length;
// var noOcc=[];
// var count=[];
// function updateOcc(occupation) {
// 	var i=0;
// 	var len2=noOcc.length;
// 	var flag=0;
// 	if(flag==1){
// 		noOcc.push(occupation);
// 	}
// 	do{
		
		
// 		if(noOcc[i]!=occupation)
// 		{	
// 			//count[occupation]= (count[occupation]||0)+1;
// 			if(count[occupation]===undefined){
// 				count[occupation]=0;
// 			}
			
// 			count[occupation]=count[occupation]+1;
// 			flag=1;
// 		}else{
// 			flag=0;
// 		}
// 		i++;
// 	}while(i<noOcc.length);
	

	
// }

// for(var i=0;i<len;i++){
// 	updateOcc(arr[i].occupation);
// }
// // console.log(noOcc);
// console.log(count);

//question 3
// var len=arr.length;
// var ageOut=[];
// var newcount=0;


// for(var i=0;i<len;i++){
// 	if((arr[i].age<20)&&(arr[i].occupation==="Student")){
// 		console.log(arr[i]);
// 	}
// }


//question 4
var len=arr.length;
var noOcc=[];
var final=[];
//to find the types of occupation
for(var i=0;i<len;i++){
	updateOcc(arr[i].occupation);
}
for(var i=0;i<noOcc.length;i++){
	
	final[noOcc[i]]=(sort(noOcc[i],arr));

}

console.log(final);
function updateOcc(occupation) {
	var len2=noOcc.length;
	var flag=0;
	if(len2===0){
		flag=1;
		
	}else{
		for (var i=0;i<len2;i++){
		if(occupation===noOcc[i]){
			
			flag=0;
			break;
		}else{
			flag=1;
			
			}
		}//for loop ends				
		}		
	if(flag===1){
		noOcc.push(occupation);
		flag=0;
	}

}



function sort(occ,array)
{	var subFinal=[];
	
	for(var i=0;i<len;i++){
		var obj={};
		if(occ===array[i].occupation){
			obj['Name']=arr[i].name;
			obj ['Age']=arr[i].age;
			subFinal.push(obj);
		}
	}
	return subFinal;
}