const { duplicateFilter } = require("../src");

// ---- Test 1 - Basic ----

test("removes exact duplicates", () => {
  const duplicates = "Este es un ejemplo ejemplo de prueba prueba";

  const expectedDuplicates = "Este es un ejemplo de prueba";

  expect(duplicateFilter(duplicates)).toEqual(expectedDuplicates);
});

// ---- Test 2 - Capitalization ----

test("removes duplicates ignoring different capitalizations", () => {
  const duplicatesCapitalized = "Hola hola mundo mundo Mundo";

  const expectedDuplicatesCapitalized = "Hola mundo";

  expect(duplicateFilter(duplicatesCapitalized)).toEqual(
    expectedDuplicatesCapitalized
  );
});

// ---- Test 3 - Order ----

test("preserves the order of the sentence", () => {
  const duplicatesRandomOrder =
    "Test of a duplicated TEST word as it should just preserve the tESt first Test word written";
  const expectedDuplicatesRandomOrder =
    "Test of a duplicated word as it should just preserve the first written";
  expect(duplicateFilter(duplicatesRandomOrder)).toEqual(
    expectedDuplicatesRandomOrder
  );
});
