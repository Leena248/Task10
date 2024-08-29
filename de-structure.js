const array = [
  8,
  "55",
  [2, "Hello World", { a: 2, b: 5 }, false],
  {
    arr: [true, 1, NaN, new Array(2, 33)],
    test: null,
    obj: { d: "Moha", last: [2, false, undefined] },
  },
];
const [
  ,
  ,
  ,
  {
    arr: [, , , [, extract33]],
    obj: { d: extractMoha },
  },
] = array;

console.log(extract33, extractMoha);
