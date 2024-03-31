function flattenManual(array) {
  let finalRes = [];
  let res = [];
  for (const e of array) {
    if (Array.isArray(e)) {
      for (const ee of e) {
        res.push(ee);
      }
    } else {
      res.push(e);
    }
  }

  return res;
}

function flattenManual2(array) {
  let res = [];
  for (const e of array) {
    res.push(...(Array.isArray(e) ? flattenManual2(e) : [e]));
  }
  return res;
}

function flattenManual3(array) {
  return array.flat(Infinity);
}

function flatten1(array) {
  let res = [];
  for (const e of array) {
    if (Array.isArray(e)) {
      for (const ee of e) {
        res.push(ee);
      }
    } else {
      res.push(e);
    }
  }

  return res;
}

const array = [[6, 81], [[22]], [38, 49, [1]], 1];
console.log(flattenManual2(array));
console.log(flattenManual3(array));
