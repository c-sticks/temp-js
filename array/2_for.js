const nums = [1, 1, 2, 3, 5];
const strings = ["a", "b", "c", "d", "e"];

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  console.log(num);
}

console.log("-".repeat(10));

for (const num of nums) {
  console.log(num);
}

console.log("-".repeat(10));

for (const index in nums) {
  console.log(index);
}

console.log("-".repeat(10));

nums.forEach((num, index, array) => {
  console.log(num, index, array);
});
