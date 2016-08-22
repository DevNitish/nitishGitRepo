const redis=require('redis');
const publisher=redis.createClient(6379,'172.23.238.253');
const subscriber=redis.createClient(6379,'172.23.238.253');

function generateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random()*16)%16 | 0;
    d = Math.floor(d/16);
    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
};
var topic;
var randomTopic=generateUUID();
var message={
'content':randomTopic,
'command':'generateUUID'
}
var message1={
'content':'1234',
'command':"retrieveHistory"
}

subscriber.subscribe('1234');
publisher.publish('uuidgenerator',JSON.stringify(message));

subscriber.on('message',function(channel,message){
message1=JSON.parse(message);
  console.log('channel'+":"+channel);
console.log('message :',message1);
console.log(message);
})
