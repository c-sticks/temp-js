function falsy() {
  console.log("zero called");
  return 0;
}

console.log(true || falsy());
console.log(falsy() || true);

let n = 999;
const condition = true;
console.log(condition && n)
