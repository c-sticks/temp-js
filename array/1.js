const nums = [1, 2, 3, 4];
const strings = ["a", "b", "c", "d", "e"];
const bools = [true, false, false, true];
const objs = [{ a: "hoge" }, { a: "aaa" }, {}];
const mix = [1, "a", "c", { a: "a" }, [1, 2], false, true];

console.log(nums[0]); // => 1
console.log(nums[1000]); // => UNDEFINED
nums[0] = 111;
console.log(nums[0]); // => 111
nums[1000] = 111;
console.log(nums);
