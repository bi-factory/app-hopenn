const cron = require('node-cron');
const moment = require('moment');

const { generateData } = require('./app');

cron.schedule('0 1 * * *', () => {
  console.log('Data generated: ' + moment().format());
  generateData();
});
