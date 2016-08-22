var CronJob = require('cron').CronJob;
var job = new CronJob('0 */2 * * * *', function() {
  console.log('Works fine!!!');
  }, function () {
    /* This function is executed when the job stops */
console.log('Final!!!');
  },
  true /* Start the job right now */
);
