const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
const keys = Object.keys(obj1);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(key);
  console.log(obj1[key] * 10);
}
