function f() {}

const ff = f;
const f2 = () => {};

const response = ((a) => {
  return a + 1;
})(100);

console.log(response);
