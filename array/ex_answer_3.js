function filterEvenAndDouble(numbers) {
  const evens = numbers.filter((num) => num % 2 === 0);
  const doubles = evens.map((num) => num * 2);
  return doubles;
}

function filterEvenAndDouble(numbers) {
  return numbers.filter((num) => num % 2 === 0).map((num) => num * 2);
}

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  => [2, 4, 6, 8, 10]
//  => [4, 8, 12, 16, 20]

console.log(filterEvenAndDouble([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
