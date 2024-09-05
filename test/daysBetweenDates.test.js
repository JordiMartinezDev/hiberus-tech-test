const { daysBetweenDates } = require("../src");

// ---- Test 1 - Positive result ----

test("calculates correct day difference ( positive )", () => {
  const date1 = "2024-01-14";
  const date2 = "2024-01-24";

  const daysExpected = 10;

  expect(daysBetweenDates(date1, date2)).toEqual(daysExpected);
});

// ---- Test 2 - Negative result ----

test("calculates correct day difference ( negative )", () => {
  const date1 = "2024-01-24";
  const date2 = "2024-01-14";

  const daysExpected = -10;

  expect(daysBetweenDates(date1, date2)).toEqual(daysExpected);
});

// ---- Test 3 - Same day ----

test("calculates correct day difference ( zero )", () => {
  const date1 = "2024-01-24";
  const date2 = "2024-01-24";

  const daysExpected = 0;

  expect(daysBetweenDates(date1, date2)).toEqual(daysExpected);
});
