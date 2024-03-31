// # 定義方法
function f(...args) {
  console.dir(args);
  return "Hello, world! " + args.join(', ');
}

// 呼び出し
f(1, 11, 1111, 22222, 22222);
f(1, 11, 1111, 22222, 22222, 1111, 1111);
