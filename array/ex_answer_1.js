function isEven(num) {
  return num % 2 === 0;
}

function filterEvenNumbers(numbers) {
  return numbers.filter(isEven);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filterEvenNumbers(array));
