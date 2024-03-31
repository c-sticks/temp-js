function sum(array) {
  let res = 0;
  for (const e of array) {
    res += e;
  }
  return res;
}

function sum2(array) {
  return array.reduce((prev, current, index, array) => prev + current, 0);
}

function sum3(array) {
  return array.reduce(
    (prev, current) => (current < 3 ? prev : [...prev, current]),
    []
  );
}

const array = [1, 2, 3, 4, 5];
console.log(sum(array));
console.log(sum2(array));
console.log(sum3(array));
