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
  let hasSwapped = true;

  while (hasSwapped) {
    hasSwapped = false; // Assume no swaps will be made

    for (let i = 0; i < breeds.length - 1; i++) {
      let currentBreed = breeds[i];
      let nextBreed = breeds[i + 1];

      // Determine if these breeds need to be swapped
      const shouldSwap = shouldSwapBreeds(currentBreed, nextBreed);

      if (shouldSwap) {
        // Swap the breeds
        breeds[i] = nextBreed;
        breeds[i + 1] = currentBreed;
        hasSwapped = true; // Since a swap was made, we need to check again
      }
    }
  }

  return breeds;
}

// Helper function to determine if two breeds should be swapped
function shouldSwapBreeds(currentBreed, nextBreed) {
  const currentPattern = currentBreed.pattern;
  const nextPattern = nextBreed.pattern;

  // Alphabetical order for non-empty patterns
  if (currentPattern > nextPattern) {
    return true;
  }

  return false; // No swap needed
}

module.exports = fetchAndSort;
