const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(1000, 'year').subtract(999, 'year').add(7, 'month');
// console.log(date.format('MMM Do, YYYY'));
// console.log(date.format('h:mm a'));


// 10:35 am
var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));


