const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

function f({ a, b, c, z }) {
  // const { a, b, c, z } = obj;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(z);
}

f(obj1);
f({
  a: 10,
  b: "c",
});
