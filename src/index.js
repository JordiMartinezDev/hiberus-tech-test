//Centralizing exports of all the functions to improve scalability and maintainablity

const groupByInitial = require("./groupByInitial");
const duplicateFilter = require("./duplicateFilter");
const daysBetweenDates = require("./daysBetweenDates");
const fetchAndSort = require("./fetchAndSort");

module.exports = {
  groupByInitial,
  duplicateFilter,
  daysBetweenDates,
  fetchAndSort,
};
