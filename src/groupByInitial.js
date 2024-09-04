function groupByInitial(namesList) {
  const groupedNames = {};

  namesList.forEach((name) => {
    //check if name is valid
    if (!isValidName(name)) return;

    // Normalizing names before any comparison as we should ignore the capitalization
    const normalizedName = name.toUpperCase();
    const initial = getFirstLetter(normalizedName);

    if (!groupedNames[initial]) {
      groupedNames[initial] = [];
    }
    groupedNames[initial].push(name);
  });

  return groupedNames;
}

function getFirstLetter(word) {
  return word[0];
}

function isValidName(name) {
  //Even if the exercise didn't require this, I wanted a maintainable way to check whether or not the names were valid that can be modified as needed

  if (name == undefined || name == null || name == "" || name[0] == " ") {
    return false;
  }
  return true;
}

module.exports = groupByInitial;
