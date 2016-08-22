const redis=require('redis');
const subscriber=redis.createClient(6379,'172.23.238.253');
const publisher=redis.createClient(6379,'172.23.238.253');

subscriber.on('subscribe',function(channel){
console.log('subscribed to ',channel);
// publisher.publish('chat','hello');

})


subscriber.on('message',function(channel,message){
console.log(channel+':'+message);
});
subscriber.subscribe('chat');
