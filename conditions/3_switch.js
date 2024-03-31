const num = Number(Deno.args[0]);
console.log(num);

switch (num) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  case 3:
    console.log("3");
    break;
  case 4:
  case 5:
  case 6:
    console.log("hoge");
    break;
  default:
    console.log("default");
    break;
}

let switcher = {};