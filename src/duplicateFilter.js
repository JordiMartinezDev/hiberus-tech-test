function duplicateFilter(sentence) {
  const wordsInSentence = sentence.split(" ");
  const noDuplicates = new Set();
  const result = [];

  wordsInSentence.forEach((word) => {
    const normalizedWord = word.toUpperCase();

    if (!noDuplicates.has(normalizedWord)) {
      //First time this word is found in the sentence
      noDuplicates.add(normalizedWord);
      result.push(word);
    }
  });

  return result.join(" ");
}

module.exports = duplicateFilter;
