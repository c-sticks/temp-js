const condition = Boolean(Number(Deno.args[0]));

const result = condition ? "it's TRUE" : "it's FALSE";
const result2 = "it's " + (condition ? "TRUE" : "FALSE");
const result3 = `it's ${condition ? "TRUE" : "FALSE"}`;
