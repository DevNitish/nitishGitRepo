var mya=[];
var obj={};
obj["nkey1"]=11;
obj["nkey2"]=22;
mya.push(obj);

console.log(mya);
// obj["nkey1"]=33;
// obj["nkey2"]=44;
mya.push({ nkey1: 33, nkey2: 44 });
console.log(mya);

for (var i = 0; i < mya.length; i++) {
	if(mya[i].nkey1===33){
	mya[i].nkey1=77;
	//mya.push(obj);
	}
}
console.log(mya);
console.log("*******************");

var jArray=[];
for (var i = 2008; i <=2016; i++) {
  var obj={};
  obj["Year"]=i;
  obj["Under500"]=0;
   obj["Over500"]=0;
  jArray.push(obj);
};
console.log(jArray);