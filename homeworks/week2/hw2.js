function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

console.log(capitalize('hello'));
console.log(capitalize('nick'));
console.log(capitalize('Nick'));
console.log(capitalize(',hello'));
