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

  Object.keys(inputObject).forEach(() => {
    
  });

  return result;
}

console.log(f({ a: 1, b: 2, A: 9, Z: 9 }));
