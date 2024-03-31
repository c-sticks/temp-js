function filter1(array) {
  let evens = [];
  for (const num of array) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}

function filter2(array) {
  return array
    .filter((num) => num % 2 === 0)
    .filter((num) => num > 20);
}

console.log(filter1([6, 81, 22, 38, 49]));
console.log(filter2([6, 81, 22, 38, 49]));
