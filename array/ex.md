└▶ chatgpt javascript の filter や map を使用した配列操作の練習問題を 考えて下さい

ChatGPT CLI: v1.7.2
Model: gpt-4-1106-preview
ChatName: default
Contexts: default
Enter or Ctrl+D to send message. Alt+Enter to newline. Ctrl+C to exit.
Need more help? Just ask bellow.

もちろんです。以下に、JavaScript の`filter`と`map`メソッドを使う配列操作の練習問題をいくつか挙げます。

### 練習問題 1: `filter`の基本

配列内の全ての偶数を抽出する、以下の `filterEvenNumbers` 関数 を実装してください

```javascript
function filterEvenNumbers(numbers) {
  // ここにコードを追加してください
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// 期待する結果 => [2, 4, 6, 8, 10]
```

### 練習問題 2: `map`の基本

配列内の全ての数値に 10 を加えた新しい配列を作成する `addTen` 関数を実装してください。

```javascript
function addTen(numbers) {
  // ここにコードを追加してください
}

console.log(addTen([5, 10, 15, 20, 25]));
// 期待する結果: [15, 20, 25, 30, 35]
```

### 練習問題 3: `filter`と`map`の組み合わせ

配列内の偶数のみを抽出し、それぞれの数値を 2 倍した新しい配列を作成する `filterEvenAndDouble` 関数を実装してください。

```javascript
function filterEvenAndDouble(numbers) {
  // ここにコードを追加してください
}

console.log(filterEvenAndDouble([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// 期待する結果: [4, 8, 12, 16, 20]
```

### 練習問題 4: 文字列を含む配列

配列内の文字列の中から、4 文字以上の単語だけを抽出し、全て大文字に変換した新しい配列を作成する `filterWords` 関数を実装してください。

```javascript
function filterWords(words) {
  // ここにコードを追加してください
}

console.log(filterWords(["dog", "wolf", "by", "family", "eaten", "camping"]));
// 期待する結果: ["WOLF", "FAMILY", "EATEN", "CAMPING"]
```

### 練習問題 5: オブジェクトを含む配列

以下のオブジェクトを含む配列から、`score`が 50 以上のオブジェクトのみを抽出し、それらの名前のみを要素とした新しい配列を作成する関数を実装してください。

```javascript
function filterStudents(students) {
  // ここにコードを追加してください
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
```

これらの問題を解くことで、`filter`と`map`に慣れ親しんでいくと良いでしょう。また、これらのメソッドの組み合わせを通じて、より高度な配列操作にもチャレンジしてみてください。
