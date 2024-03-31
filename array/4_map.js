function double1(array) {
  let res = [];
  for (const num of array) {
    res.push(num * 2);
  }
  return res;
}

function double2(array) {
  return array.map((e) => e * 2);
}

const array = [6, 81, 22, 38, 49];
console.log(double1(array)); // => [ 12, 162, 44, 76, 98 ]
console.log(double2(array)); // => [ 12, 162, 44, 76, 98 ]
