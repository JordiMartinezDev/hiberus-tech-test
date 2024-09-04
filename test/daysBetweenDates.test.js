const { daysBetweenDates } = require("../src");

test("calculates correct day difference ( positive )", () => {
  const date1 = "2024-01-14";
  const date2 = "2024-01-24";

  const daysExpected = 10;

  expect(daysBetweenDates(date1, date2)).toEqual(daysExpected);
});
