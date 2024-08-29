const array2 = [
  2,
  4,
  [22, "test"],
  false,
  null,
  { a: 2 },
  [22, "test"],
  "null",
];
function hasDuplicates(array) {
  const checked = new Set();
  for (const element of array) {
    const currentElement =
      typeof element === "object" ? JSON.stringify(element) : String(element);
    if (checked.has(currentElement)) {
      return true;
    }
    checked.add(currentElement);
  }
  return false;
}
hasDuplicates(array2)
  ? console.log("Array has duplicates")
  : console.log("Array does not have duplicates");
