function findUniq(arr) {
  return arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item));
}

console.log(findUniq([1, 0, 0]));
