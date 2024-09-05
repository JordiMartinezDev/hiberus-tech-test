async function fetchAndSort() {
  const breeds = await fetchBreeds();
  const sortedBreeds = sortBreedsByPattern(breeds);
  return sortedBreeds;
}

// Fetching logic outside the main function

async function fetchBreeds() {
  const response = await fetch("https://catfact.ninja/breeds");
  const data = await response.json();
  return data.data;
}

function sortBreedsByPattern(breeds) {
  //flag preset to start the loop, until no swaps are needed
  let hasSwapped = true;

  while (hasSwapped) {
    // Assuming no swaps will be made, checking later
    hasSwapped = false;

    //breeds.length - 1 to avoid breeds[ i + 1 ] being undefined
    for (let i = 0; i < breeds.length - 1; i++) {
      let currentBreed = breeds[i];
      let nextBreed = breeds[i + 1];

      // Determine if these breeds need to be swapped
      const shouldSwap = shouldSwapBreeds(currentBreed, nextBreed);

      if (shouldSwap) {
        breeds[i] = nextBreed;
        breeds[i + 1] = currentBreed;

        // Since a swap was made, we need to continue checking
        hasSwapped = true;
      }
    }
  }

  return breeds;
}

function shouldSwapBreeds(currentBreed, nextBreed) {
  const currentPattern = currentBreed.pattern;
  const nextPattern = nextBreed.pattern;

  // Alphabetical order ( ASCII codes )
  if (currentPattern > nextPattern) {
    return true;
  }

  return false; // No swap needed
}

module.exports = fetchAndSort;
