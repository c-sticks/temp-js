function filterWords(words) {
  return words
    .filter((word) => word.length >= 4)
    .map((word) => word.toUpperCase());
}

console.log(filterWords(["dog", "wolf", "by", "family", "eaten", "camping"]));
