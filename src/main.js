const moment = require("moment");

const { generateData } = require("./app");

console.log("Data generated: " + moment().format());
generateData();
