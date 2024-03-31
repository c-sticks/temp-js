const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj2 = {
  x: -1,
  y: -2,
  z: -3,
  a: -111,
};

const res = {
  ...obj2,
  ...obj1,
  z: 999,
};
console.log(res);

// const obj2 = {
//   x: -1,
//   y: -2,
//   z: -3,
// };
