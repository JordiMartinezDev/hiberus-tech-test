const { fetchAndSort } = require("../src");
const fetchMock = require("jest-fetch-mock");

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

// ---- Test 1 - No need to be sorted ----

test("fetches correctly, no sorting needed", async () => {
  // Same data provided in the exercise, already sorted
  const mockData = {
    data: [
      { breed: "Arabian Mau", pattern: "" },
      { breed: "Bambino", pattern: "" },
      { breed: "American Curl", pattern: "All" },
      { breed: "Aegean", pattern: "All" },
    ],
  };

  fetchMock.mockResponseOnce(JSON.stringify(mockData));

  const expectedResult = [
    { breed: "Arabian Mau", pattern: "" },
    { breed: "Bambino", pattern: "" },
    { breed: "American Curl", pattern: "All" },
    { breed: "Aegean", pattern: "All" },
  ];

  const result = await fetchAndSort();
  expect(result).toEqual(expectedResult);
});

// ---- Test 2 - Sorting Pattern, alphabetically ----

test("sorting alphabetically, no empty pattern", async () => {
  // modified patterns to test sorting

  const mockData = {
    data: [
      { breed: "Arabian Mau", pattern: "Solid" },
      { breed: "Bambino", pattern: "Colorpoint" },
      { breed: "American Curl", pattern: "All" },
      { breed: "Aegean", pattern: "All" },
    ],
  };

  fetchMock.mockResponseOnce(JSON.stringify(mockData));

  const expectedResult = [
    { breed: "American Curl", pattern: "All" },
    { breed: "Aegean", pattern: "All" },
    { breed: "Bambino", pattern: "Colorpoint" },
    { breed: "Arabian Mau", pattern: "Solid" },
  ];

  const result = await fetchAndSort();
  expect(result).toEqual(expectedResult);
});

// ---- Test 3 - Sorting Pattern alphabetically + empty ----

test("sorting alphabetically and empty pattern", async () => {
  // testing sorting empty patterns

  const mockData = {
    data: [
      { breed: "Arabian Mau", pattern: "" },
      { breed: "Aegean", pattern: "All" },
      { breed: "American Curl", pattern: "All" },
      { breed: "Bambino", pattern: "" },
    ],
  };

  fetchMock.mockResponseOnce(JSON.stringify(mockData));

  const expectedResult = [
    { breed: "Arabian Mau", pattern: "" },
    { breed: "Bambino", pattern: "" },
    { breed: "Aegean", pattern: "All" },
    { breed: "American Curl", pattern: "All" },
    ,
  ];

  const result = await fetchAndSort();
  expect(result).toEqual(expectedResult);
});
