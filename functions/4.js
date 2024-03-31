// # 定義方法
function humanPrint(human) {
  console.log("f received:", human.name);
  console.log("f received:", human.age);
  console.log("f received:", human.sex);
}

function humanPrint2(name, age, sex) {
  console.log("f received:", name);
  console.log("f received:", age);
  console.log("f received:", sex);
}

humanPrint({ name: "Alice", age: 10, sex: "woman" });

