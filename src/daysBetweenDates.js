function daysBetweenDates(date1, date2) {
  //No need to check if the input is correct as the exercise confirms that the input will be in "YYYY-MM-DD" format

  const startDate = new Date(date1);
  const endDate = new Date(date2);

  const timeDifferenceInMs = endDate - startDate;

  const differenceInDays = msToDays(timeDifferenceInMs);

  return differenceInDays;
}

function msToDays(msTime) {
  return msTime / (1000 * 3600 * 24);
}

module.exports = daysBetweenDates;
