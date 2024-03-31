/**
 * {
 *   a: 1
 *   b: 2
 *   A: 9
 *   Z: 9
 * }
 *
 * 上記のような入力にたいし、objectの値が5以上のものからなる
 * 以下のようなobjectを返す関数を作成してください。
 *
 * {
 *   A: 9
 *   Z: 9
 * }
  // 1. 要素を1つ1つ取り出して、for文で回す
  // 1. その中で if を使って、5以上のものだけを取り出す
  // 1. それをまとめたものを返す
 */
function f(inputObject) {
  let result = {};

  const keys = Object.keys(inputObject);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = inputObject[key];
    if (value >= 5) {
      result[key] = value;
    }
  }

  return result;
}

console.log(f({ a: 1, b: 2, A: 9, Z: 9 }));
