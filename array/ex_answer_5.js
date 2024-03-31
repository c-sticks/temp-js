function filterStudents(students) {
  return students.filter((s) => s.score >= 50).map((s) => s.name);
}

const students = [
  { name: "Alice", score: 52 },
  { name: "Bob", score: 34 },
  { name: "Charlie", score: 88 },
  { name: "Daisy", score: 73 },
  { name: "Ella", score: 65 },
  { name: "Fred", score: 40 },
];

console.log(filterStudents(students));
// 期待する結果: ["Alice", "Charlie", "Daisy", "Ella"]
