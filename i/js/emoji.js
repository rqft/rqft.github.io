var s = {
  "!!": "bangbang",
  "!?": "interrobang",
  "!": "exclamation",
  "?": "question",
  "#": "hash",
  "*": "asterisk",
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  "+": "heavy_plus_sign",
  "-": "heavy_minus_sign",
  "/": "heavy_division_sign",
  "÷": "heavy_division_sign",
  $: "heavy_dollar_sign",
  ".": "stop_button",
  " ": "black_large_square",
  ">": "arrow_forward",
  "<": "arrow_backward",
  "^": "arrow_up_small",
  cl: "cl",
  ok: "ok",
  done: "done",
  wc: "wc",
  abcd: "abcd",
  abc: "abc",
  up: "up",
  cool: "cool",
  new: "new",
};
function emojify(o) {
  o = o.toLowerCase().replace(/[a-z]/g, (o) => `:regional_indicator_${o}:`);
  for (const [e, a] of Object.entries(s)) o = o.split(e).join(`:${a}:`);
  return o;
}
console.log(emojify("{args}"));
