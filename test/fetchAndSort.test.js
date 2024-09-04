const { fetchAndSort } = require("../src");
const fetchMock = require("jest-fetch-mock");

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

test("fetches and sorts cat breeds correctly", async () => {
  // Mock data
  const mockData = {
    data: [
      { breed: "Arabian Mau", pattern: "" },
      { breed: "Bambino", pattern: "" },
      { breed: "American Curl", pattern: "All" },
      { breed: "Aegean", pattern: "All" },
    ],
  };

  // Set up the mock response
  fetchMock.mockResponseOnce(JSON.stringify(mockData));

  // Expected result
  const expectedResult = [
    { breed: "Arabian Mau", pattern: "" },
    { breed: "Bambino", pattern: "" },
    { breed: "American Curl", pattern: "All" },
    { breed: "Aegean", pattern: "All" },
  ];

  // Run the function and check the result
  const result = await fetchAndSort();
  expect(result).toEqual(expectedResult);
});
