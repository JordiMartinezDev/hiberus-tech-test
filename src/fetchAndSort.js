async function fetchAndSort() {
  const breeds = await fetchBreeds();
  const sortedBreeds = sortBreedsByPattern(breeds);
  return sortedBreeds;
}

async function fetchBreeds() {
  const response = await fetch("https://catfact.ninja/breeds");
  const data = await response.json();
  return data.data;
}

function sortBreedsByPattern(breeds) {
  // Working on code..
  return breeds;
}
module.exports = fetchAndSort;
