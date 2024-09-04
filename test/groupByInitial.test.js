// Using index.js as central export
const { groupByInitial } = require("../src");

// ---- Test 1 - Basic ----

test("groups names by initial correctly", () => {
  const basicNameList = [
    "Ana",
    "Alberto",
    "Beatriz",
    "Bruno",
    "Carlos",
    "Clara",
  ];

  const expectedBasicNameList = {
    A: ["Ana", "Alberto"],
    B: ["Beatriz", "Bruno"],
    C: ["Carlos", "Clara"],
  };

  expect(groupByInitial(basicNameList)).toEqual(expectedBasicNameList);
});

// ---- Test 2 - Capitalization ----

test("handles nbames with multiple capitalization", () => {
  const multipleCapitalization = ["Mario", "Miguel", "marta", "Monica"];

  const expectedMultipleCapitalization = {
    M: ["Mario", "Miguel", "marta", "Monica"],
  };

  expect(groupByInitial(multipleCapitalization)).toEqual(
    expectedMultipleCapitalization
  );
});

// ---- Test 3 - Duplicates ----

test("handles duplicated names correctly", () => {
  const duplicatedNames = ["Ana", "Alberto", "Ana", "Bruno", "Ana", "Clara"];

  const expectedDuplicatedNames = {
    A: ["Ana", "Alberto", "Ana", "Ana"],
    B: ["Bruno"],
    C: ["Clara"],
  };
  expect(groupByInitial(duplicatedNames)).toEqual(expectedDuplicatedNames);
});

// ---- Test 4 - Empty "" input ----

test("avoids empty input", () => {
  const emptyNames = ["Ana", "Jordi", ""];

  const expectedEmptyNames = {
    A: ["Ana"],
    J: ["Jordi"],
  };

  expect(groupByInitial(emptyNames)).toEqual(expectedEmptyNames);
});

// ---- Test 5 - Space " " input ----

test("avoids spaces and names starting with space", () => {
  const spaceNames = ["Ana", " ", "Jordi", " Bob"];

  const expectedSpaceNames = {
    A: ["Ana"],
    J: ["Jordi"],
  };
  expect(groupByInitial(spaceNames)).toEqual(expectedSpaceNames);
});
